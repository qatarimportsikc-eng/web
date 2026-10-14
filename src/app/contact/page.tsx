import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { InquiryForm } from "@/components/InquiryForm";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact — Request a Quotation",
  description:
    "Contact Imran Khan & Co. for halal beef export inquiries: email qatar.imports.ikc@gmail.com, phone +974 3015 7663 (Murtaza Ali) or +974 3015 6536 (Ahad Ali), WhatsApp and inquiry form.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Tell us the product, quantity and destination — we will respond with a tailored quotation. Fields marked * are required."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <Reveal direction="left" className="lg:col-span-3">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-card dark:border-white/10 dark:bg-brand-900/40 sm:p-9">
              <p className="eyebrow">Inquiry Form</p>
              <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Request a quotation
              </h2>
              <p className="mb-7 mt-2 text-sm text-slate-500 dark:text-slate-400">
                Secure form with validation — your details are used only to respond to this
                inquiry.
              </p>
              <InquiryForm variant="page" />
            </div>
          </Reveal>

          {/* Info */}
          <div className="space-y-6 lg:col-span-2">
            <Reveal direction="right">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 dark:border-white/10 dark:bg-brand-900/40">
                <h2 className="font-display text-xl font-bold">Direct contact</h2>

                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-gold-400 dark:border-white/10"
                >
                  <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-400">
                      Email
                    </span>
                    <span className="block break-all text-sm font-semibold text-brand-900 dark:text-white">
                      {SITE.email}
                    </span>
                  </span>
                </a>

                <div className="mt-4 space-y-3">
                  {SITE.contacts.map((c) => (
                    <a
                      key={c.phone}
                      href={`tel:+${c.wa}`}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-gold-400 dark:border-white/10"
                    >
                      <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-slate-400">
                          {c.name} — {c.role}
                        </span>
                        <span className="block text-sm font-semibold text-brand-900 dark:text-white">
                          {c.phone}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-dashed border-slate-300 p-4 dark:border-white/15">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-400">
                      Address
                    </span>
                    <span className="block text-sm font-semibold text-brand-900 dark:text-white">
                      {SITE.address.line}
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                      Placeholder — to be confirmed
                    </span>
                  </span>
                </div>

                <div className="mt-4 flex items-start gap-3 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-slate-400">
                      Response hours
                    </span>
                    <span className="block text-sm font-semibold text-brand-900 dark:text-white">
                      Business days — hours to be confirmed
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                      Placeholder — to be confirmed
                    </span>
                  </span>
                </div>

                <div className="mt-6 grid gap-3">
                  <a
                    href={`https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
                      "Hello Imran Khan & Co. — I would like to request a quotation for halal beef exports."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn bg-[#25D366] text-white hover:brightness-110"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp (
                    {SITE.whatsappDisplay})
                  </a>
                  <a href={`mailto:${SITE.email}`} className="btn-outline">
                    <Mail className="h-4 w-4" aria-hidden="true" /> Send an email
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.1}>
              <MapPlaceholder />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Response note */}
      <section className="border-t border-slate-200 bg-slate-50 py-14 dark:border-white/10 dark:bg-brand-900/30">
        <div className="container-site">
          <SectionHeading
            eyebrow="What Happens Next"
            title="From your inquiry to your quotation"
            description="We review your requirements, confirm specifications and respond with pricing, packing and lead time — usually within one business day (response time to be confirmed)."
          />
          <ol className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { step: "1", title: "You send an inquiry", text: "Product, quantity, country and message." },
              { step: "2", title: "We confirm details", text: "Specifications, packing and delivery window." },
              { step: "3", title: "You receive a quotation", text: "Pricing, lead time and terms for your order." },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-white/10 dark:bg-brand-900/50"
              >
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gold-gradient text-sm font-bold text-brand-950">
                  {item.step}
                </span>
                <h3 className="mt-3 font-display text-base font-bold">{item.title}</h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
