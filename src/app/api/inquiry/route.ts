import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

/**
 * Inquiry endpoint.
 *
 * Delivery behaviour:
 *  - If RESEND_API_KEY + INQUIRY_TO_EMAIL are set, the inquiry is emailed via
 *    the Resend HTTP API (optionally from INQUIRY_FROM_EMAIL).
 *  - Otherwise the inquiry is appended to data/inquiries.jsonl so no message
 *    is lost during development/preview.
 */

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 8;
const hits = new Map<string, { count: number; reset: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_MAX;
}

interface InquiryPayload {
  company?: unknown;
  name?: unknown;
  country?: unknown;
  phone?: unknown;
  email?: unknown;
  product?: unknown;
  quantity?: unknown;
  message?: unknown;
  website?: unknown;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+\d][\d\s()-]{6,20}$/;

function str(value: unknown, maxLength: number): string {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests — please wait a moment and try again." },
      { status: 429 }
    );
  }

  let body: InquiryPayload;
  try {
    body = (await request.json()) as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill the hidden "website" field — pretend success.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const inquiry = {
    company: str(body.company, 120),
    name: str(body.name, 120),
    country: str(body.country, 80),
    phone: str(body.phone, 40),
    email: str(body.email, 160),
    product: str(body.product, 120),
    quantity: str(body.quantity, 80),
    message: str(body.message, 5000),
  };

  const errors: Record<string, string> = {};
  if (!inquiry.company) errors.company = "Company is required";
  if (!inquiry.name) errors.name = "Name is required";
  if (!inquiry.country) errors.country = "Country is required";
  if (!inquiry.email) errors.email = "Email is required";
  else if (!EMAIL_RE.test(inquiry.email)) errors.email = "Invalid email address";
  if (!inquiry.phone) errors.phone = "Phone is required";
  else if (!PHONE_RE.test(inquiry.phone)) errors.phone = "Invalid phone number";
  if (!inquiry.product) errors.product = "Product is required";
  if (!inquiry.quantity) errors.quantity = "Quantity is required";
  if (!inquiry.message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { error: "Please correct the highlighted fields.", errors },
      { status: 400 }
    );
  }

  const record = {
    receivedAt: new Date().toISOString(),
    ip,
    ...inquiry,
  };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.INQUIRY_TO_EMAIL;

  if (apiKey && toEmail) {
    try {
      const fromEmail = process.env.INQUIRY_FROM_EMAIL ?? "onboarding@resend.dev";
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `Imran Khan & Co. Website <${fromEmail}>`,
          to: [toEmail],
          reply_to: inquiry.email,
          subject: `New inquiry — ${inquiry.product} (${inquiry.country})`,
          text: [
            `Company: ${inquiry.company}`,
            `Name: ${inquiry.name}`,
            `Country: ${inquiry.country}`,
            `Phone: ${inquiry.phone}`,
            `Email: ${inquiry.email}`,
            `Product: ${inquiry.product}`,
            `Quantity: ${inquiry.quantity}`,
            "",
            inquiry.message,
          ].join("\n"),
        }),
      });
      if (!res.ok) {
        const detail = await res.text();
        console.error("[inquiry] email delivery failed:", res.status, detail);
        return NextResponse.json(
          { error: "Could not deliver your inquiry — please email us directly." },
          { status: 502 }
        );
      }
      return NextResponse.json({ ok: true, delivered: "email" });
    } catch (error) {
      console.error("[inquiry] email error:", error);
      return NextResponse.json(
        { error: "Could not deliver your inquiry — please email us directly." },
        { status: 502 }
      );
    }
  }

  // Fallback: persist locally so no inquiry is lost.
  try {
    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(
      path.join(dataDir, "inquiries.jsonl"),
      `${JSON.stringify(record)}\n`,
      "utf8"
    );
  } catch (error) {
    console.error("[inquiry] storage error:", error);
    return NextResponse.json(
      { error: "Could not save your inquiry — please email us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, delivered: "file" });
}
