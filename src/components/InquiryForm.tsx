"use client";

import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";

interface InquiryFormProps {
  /** "modal" = compact quotation popup, "page" = full contact page form. */
  variant?: "modal" | "page";
  defaultProduct?: string;
  className?: string;
}

interface FormValues {
  company: string;
  name: string;
  country: string;
  phone: string;
  email: string;
  product: string;
  quantity: string;
  message: string;
  website: string; // honeypot
}

const EMPTY: FormValues = {
  company: "",
  name: "",
  country: "",
  phone: "",
  email: "",
  product: "",
  quantity: "",
  message: "",
  website: "",
};

const COUNTRIES = [
  "Qatar",
  "Saudi Arabia",
  "United Arab Emirates",
  "Oman",
  "Kuwait",
  "Bahrain",
  "Pakistan",
  "Other",
];

type Errors = Partial<Record<keyof FormValues, string>>;

function validate(values: FormValues): Errors {
  const errors: Errors = {};
  if (!values.company.trim()) errors.company = "Company is required";
  if (!values.name.trim()) errors.name = "Name is required";
  if (!values.country.trim()) errors.country = "Country is required";
  if (!values.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Enter a valid email address";
  if (!values.phone.trim()) errors.phone = "Phone is required";
  else if (!/^[+\d][\d\s()-]{6,20}$/.test(values.phone.trim()))
    errors.phone = "Enter a valid phone number";
  if (!values.product.trim()) errors.product = "Please select a product";
  if (!values.quantity.trim()) errors.quantity = "Quantity is required";
  if (!values.message.trim()) errors.message = "Please describe your inquiry";
  return errors;
}

export function InquiryForm({ variant = "page", defaultProduct, className = "" }: InquiryFormProps) {
  const [values, setValues] = useState<FormValues>({
    ...EMPTY,
    product: defaultProduct ?? "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const set = (key: keyof FormValues) => (value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (values.website) return; // honeypot — bots silently ignored
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      const first = document.querySelector<HTMLElement>("[data-invalid='true']");
      first?.focus();
      return;
    }

    setStatus("submitting");
    setServerError("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong. Please try again or email us directly.");
      }
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setServerError(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className={`flex flex-col items-center gap-4 rounded-2xl border border-brand-200 bg-brand-50 px-6 py-12 text-center dark:border-brand-700/50 dark:bg-brand-900/50 ${className}`}
        role="status"
      >
        <CheckCircle2 className="h-12 w-12 text-brand-600 dark:text-gold-400" aria-hidden="true" />
        <h3 className="font-display text-2xl font-bold">Inquiry received</h3>
        <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
          Thank you, {values.name.split(" ")[0] || "there"} — our team will review your request and
          respond by email at <strong>{values.email}</strong>.
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          Need it faster? Call{" "}
          <a href={`tel:+${SITE.whatsappNumber}`} className="font-semibold text-gold-600 underline">
            {SITE.whatsappDisplay}
          </a>{" "}
          or message us on WhatsApp.
        </p>
        <button
          type="button"
          className="btn-outline"
          onClick={() => {
            setValues({ ...EMPTY, product: defaultProduct ?? "" });
            setStatus("idle");
          }}
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  const grid = "grid-cols-1 sm:grid-cols-2";

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 ${className}`}>
      <div className={`grid gap-4 ${grid}`}>
        <div>
          <label className="label" htmlFor={`${variant}-company`}>
            Company <span className="text-gold-600">*</span>
          </label>
          <input
            id={`${variant}-company`}
            name="company"
            className="input"
            value={values.company}
            onChange={(e) => set("company")(e.target.value)}
            data-invalid={Boolean(errors.company)}
            aria-invalid={Boolean(errors.company)}
            autoComplete="organization"
          />
          {errors.company ? <FieldError text={errors.company} /> : null}
        </div>
        <div>
          <label className="label" htmlFor={`${variant}-name`}>
            Name <span className="text-gold-600">*</span>
          </label>
          <input
            id={`${variant}-name`}
            name="name"
            className="input"
            value={values.name}
            onChange={(e) => set("name")(e.target.value)}
            data-invalid={Boolean(errors.name)}
            aria-invalid={Boolean(errors.name)}
            autoComplete="name"
          />
          {errors.name ? <FieldError text={errors.name} /> : null}
        </div>
        <div>
          <label className="label" htmlFor={`${variant}-country`}>
            Country <span className="text-gold-600">*</span>
          </label>
          <input
            id={`${variant}-country`}
            name="country"
            className="input"
            list={`${variant}-countries`}
            placeholder="Select or type your country"
            value={values.country}
            onChange={(e) => set("country")(e.target.value)}
            data-invalid={Boolean(errors.country)}
            aria-invalid={Boolean(errors.country)}
            autoComplete="country-name"
          />
          <datalist id={`${variant}-countries`}>
            {COUNTRIES.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
          {errors.country ? <FieldError text={errors.country} /> : null}
        </div>
        <div>
          <label className="label" htmlFor={`${variant}-phone`}>
            Phone <span className="text-gold-600">*</span>
          </label>
          <input
            id={`${variant}-phone`}
            name="phone"
            className="input"
            placeholder="+974 ..."
            value={values.phone}
            onChange={(e) => set("phone")(e.target.value)}
            data-invalid={Boolean(errors.phone)}
            aria-invalid={Boolean(errors.phone)}
            autoComplete="tel"
          />
          {errors.phone ? <FieldError text={errors.phone} /> : null}
        </div>
        <div>
          <label className="label" htmlFor={`${variant}-email`}>
            Email <span className="text-gold-600">*</span>
          </label>
          <input
            id={`${variant}-email`}
            name="email"
            type="email"
            className="input"
            value={values.email}
            onChange={(e) => set("email")(e.target.value)}
            data-invalid={Boolean(errors.email)}
            aria-invalid={Boolean(errors.email)}
            autoComplete="email"
          />
          {errors.email ? <FieldError text={errors.email} /> : null}
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label" htmlFor={`${variant}-product`}>
              Product <span className="text-gold-600">*</span>
            </label>
            <select
              id={`${variant}-product`}
              name="product"
              className="input"
              value={values.product}
              onChange={(e) => set("product")(e.target.value)}
              data-invalid={Boolean(errors.product)}
              aria-invalid={Boolean(errors.product)}
            >
              <option value="">Select…</option>
              {PRODUCTS.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
              <option value="Other / Not sure">Other / Not sure</option>
            </select>
            {errors.product ? <FieldError text={errors.product} /> : null}
          </div>
          <div>
            <label className="label" htmlFor={`${variant}-quantity`}>
              Quantity <span className="text-gold-600">*</span>
            </label>
            <input
              id={`${variant}-quantity`}
              name="quantity"
              className="input"
              placeholder="e.g. 1 × 40ft"
              value={values.quantity}
              onChange={(e) => set("quantity")(e.target.value)}
              data-invalid={Boolean(errors.quantity)}
              aria-invalid={Boolean(errors.quantity)}
            />
            {errors.quantity ? <FieldError text={errors.quantity} /> : null}
          </div>
        </div>
      </div>

      <div>
        <label className="label" htmlFor={`${variant}-message`}>
          Message <span className="text-gold-600">*</span>
        </label>
        <textarea
          id={`${variant}-message`}
          name="message"
          rows={variant === "modal" ? 3 : 5}
          className="input resize-y"
          placeholder="Tell us about your required cuts, packing, destination port and timeline…"
          value={values.message}
          onChange={(e) => set("message")(e.target.value)}
          data-invalid={Boolean(errors.message)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message ? <FieldError text={errors.message} /> : null}
      </div>

      {/* Honeypot field — humans never see or fill this */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor={`${variant}-website`}>Website</label>
        <input
          id={`${variant}-website`}
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(e) => set("website")(e.target.value)}
        />
      </div>

      {status === "error" ? (
        <p
          className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
          role="alert"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {serverError}
        </p>
      ) : null}

      <button type="submit" className="btn-gold w-full" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            {variant === "modal" ? "Request Quotation" : "Send Inquiry"}
          </>
        )}
      </button>
      <p className="text-center text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
        Your details are used only to respond to this inquiry. Fields marked * are required.
      </p>
    </form>
  );
}

function FieldError({ text }: { text: string }) {
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600 dark:text-red-400">
      <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
      {text}
    </p>
  );
}
