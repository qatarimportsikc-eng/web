import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Icon } from "@/components/Icon";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QCTimeline } from "@/components/QCTimeline";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { QUALITY_STANDARDS } from "@/data/operations";
import { QUALITY_PROMISE } from "@/data/about";

export const metadata: Metadata = {
  title: "Quality Assurance — Halal Standards, Inspection & Cold Chain",
  description:
    "Imran Khan & Co.'s quality assurance: 100% halal slaughter, veterinary inspection, hygienic processing, food grade packaging, cold chain management, export quality inspection and temperature monitoring.",
  alternates: { canonical: "/quality" },
};

export default function QualityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Farm to Delivery"
        title="Quality Assurance"
        description="Every shipment is produced under strict quality control procedures to ensure freshness, safety and consistency — with an interactive look at each control stage."
      />

      {/* Standards grid */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Quality Standards"
            title="Eight standards applied to every order"
            description="From livestock selection to the customer satisfaction guarantee — quality controls that never switch off."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUALITY_STANDARDS.map((qs, i) => (
              <Reveal key={qs.title} delay={(i % 4) * 0.07} className="h-full">
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40">
                  <span className="mb-5 inline-flex rounded-2xl bg-brand-50 p-3.5 text-brand-700 transition-colors group-hover:bg-gold-gradient group-hover:text-brand-950 dark:bg-white/5 dark:text-gold-300">
                    <Icon name={qs.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{qs.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {qs.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive timeline */}
      <section className="bg-slate-50 py-16 dark:bg-brand-900/30 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Quality Control Timeline"
            title="Click through the journey: farm → delivery"
            description="An interactive timeline showing how quality is controlled at every stage between the farm and your destination."
          />
          <QCTimeline />
        </div>
      </section>

      {/* Temperature monitoring + inspection */}
      <section className="py-16 sm:py-20">
        <div className="container-site grid gap-6 lg:grid-cols-3">
          <Reveal className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-brand-900/40">
              <p className="eyebrow">Temperature Monitoring</p>
              <h2 className="mt-3 font-display text-2xl font-bold sm:text-3xl">
                Cold chain, watched start to finish
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
                Fresh chilled and frozen storage, refrigerated transportation and container loading
                keep the product inside its required temperature band. Exact temperature bands and
                monitoring records are documented per shipment — indicative values appear on our{" "}
                <Link href="/packaging" className="font-semibold text-gold-600 underline dark:text-gold-400">
                  packaging specifications
                </Link>
                .
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  { label: "Chilled holding", value: "0–4 °C", note: "indicative" },
                  { label: "Frozen holding", value: "−18 °C", note: "indicative" },
                  { label: "Monitoring", value: "Per shipment", note: "records on request" },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="rounded-2xl border border-slate-100 bg-slate-50 p-4 text-center dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="font-display text-2xl font-bold text-gold-gradient">{m.value}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                      {m.label}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-widest text-slate-400">
                      {m.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="h-full">
            <div className="flex h-full flex-col items-center justify-center gap-5 rounded-3xl bg-brand-gradient p-8 text-center">
              <ShieldCheck className="h-12 w-12 text-gold-300" aria-hidden="true" />
              <blockquote className="font-display text-xl font-bold leading-snug text-white">
                “{QUALITY_PROMISE}”
              </blockquote>
              <span className="rounded-full border border-gold-400/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-gold-300">
                Quality standards
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-brand-900/30">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl font-bold sm:text-3xl">
            Request our quality documentation
          </h2>
          <p className="max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Certificate copies and inspection records are shared with serious inquiries — the exact
            set depends on your destination requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Request documentation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/faq" className="btn-brand">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
