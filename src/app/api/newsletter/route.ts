import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 10;
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

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  let body: { email?: unknown };
  try {
    body = (await request.json());
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_RE.test(email) || email.length > 160) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(
      path.join(dataDir, "newsletter.jsonl"),
      `${JSON.stringify({ subscribedAt: new Date().toISOString(), email })}\n`,
      "utf8"
    );
  } catch (error) {
    console.error("[newsletter] storage error:", error);
    return NextResponse.json(
      { error: "Could not save your subscription — please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
