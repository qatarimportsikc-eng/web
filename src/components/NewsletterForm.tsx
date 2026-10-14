"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getDictionary } from "@/i18n";

const t = getDictionary();

/** Newsletter signup with validation (stored server-side, see /api/newsletter). */
export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Enter a valid email address");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? "Subscription failed");
      }
      setStatus("done");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Subscription failed");
    }
  }

  if (status === "done") {
    return (
      <p className="flex items-center gap-2 rounded-xl border border-gold-500/30 bg-gold-500/10 px-4 py-3 text-sm text-gold-300">
        <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
        You’re subscribed. Thank you!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="flex overflow-hidden rounded-full border border-white/15 bg-white/5 focus-within:border-gold-400">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.footer.newsletterPlaceholder}
          className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none"
          aria-invalid={Boolean(error)}
        />
        <button
          type="submit"
          className="flex items-center gap-1.5 bg-gold-gradient px-4 text-sm font-semibold text-brand-950 transition hover:brightness-110 disabled:opacity-60"
          disabled={status === "loading"}
          aria-label="Subscribe to newsletter"
        >
          {status === "loading" ? "…" : <ArrowRight className="h-4 w-4" aria-hidden="true" />}
        </button>
      </div>
      {error ? (
        <p className="mt-2 text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
