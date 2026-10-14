import Link from "next/link";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";
import { FOOTER_LINKS, SITE } from "@/data/site";
import { getDictionary } from "@/i18n";
import { NewsletterForm } from "./NewsletterForm";
import { Logo } from "./Header";

const t = getDictionary();

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-slate-300">
      <div className="pattern-dots absolute inset-0 opacity-20" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-px bg-gold-gradient" aria-hidden="true" />

      <div className="container-site relative grid gap-12 py-16 lg:grid-cols-12">
        {/* Brand */}
        <div className="lg:col-span-4">
          <Logo dark={false} />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            {t.footer.tagline}
          </p>
          <p className="mt-4 font-display text-lg italic text-gold-300">
            “{SITE.alternateTagline}”
          </p>

          <div className="mt-6 flex items-center gap-3">
            <Share2 className="h-4 w-4 text-gold-500" aria-hidden="true" />
            {["f", "in", "ig", "yt"].map((glyph) => (
              <span
                key={glyph}
                aria-label={`Social profile "${glyph}" — link to be added`}
                title="Social profile link to be added"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-bold uppercase text-slate-400 transition hover:border-gold-400 hover:text-gold-300"
              >
                {glyph}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-5">
          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Offerings" links={FOOTER_LINKS.offerings} />
          <FooterColumn title="Export" links={FOOTER_LINKS.export} />
        </div>

        {/* Contact + newsletter */}
        <div className="space-y-8 lg:col-span-3">
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-2.5 transition hover:text-gold-300"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              {SITE.contacts.map((c) => (
                <li key={c.phone}>
                  <a
                    href={`tel:+${c.wa}`}
                    className="flex items-start gap-2.5 transition hover:text-gold-300"
                  >
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                    <span>
                      {c.name}
                      <br />
                      {c.phone}
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" aria-hidden="true" />
                <span>
                  {SITE.address.line}
                  <span className="mt-1 block text-[10px] uppercase tracking-wider text-gold-500/80">
                    Placeholder
                  </span>
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
              {t.footer.newsletterTitle}
            </h3>
            <p className="mb-3 text-xs text-slate-400">{t.footer.newsletterText}</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Markets strip */}
      <div className="relative border-t border-white/10">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-6 gap-y-2 py-5 text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-[0.2em] text-gold-400">
            {t.footer.markets}:
          </span>
          {SITE.markets.map((m) => (
            <span key={m} className="flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-gold-500" aria-hidden="true" />
              {m}
            </span>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {year} {SITE.name}. {t.footer.rights}
          </p>
          <p className="text-center sm:text-right">
            Website demo — content marked “placeholder” awaits confirmation by {SITE.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={title}>
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
        {title}
      </h3>
      <ul className="space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="transition hover:text-gold-300">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
