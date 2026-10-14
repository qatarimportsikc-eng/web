import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Icon } from "@/components/Icon";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { EXPORT_STEPS } from "@/data/operations";

export const metadata: Metadata = {
  title: "Export Process — Inquiry to Delivery in 12 Steps",
  description:
    "How exporting with Imran Khan & Co. works: customer inquiry, quotation, meeting, purchase order, payment, production, quality inspection, packaging, cold storage, container loading, shipping and delivery.",
  alternates: { canonical: "/export-process" },
};

export default function ExportProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="How We Work"
        title="Export Process"
        description="A clear, repeatable twelve-step workflow that takes your order from first inquiry to delivery at the destination port."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="mb-12 flex max-w-3xl items-start gap-3 rounded-2xl border border-gold-500/30 bg-gold-500/10 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            <p className="text-sm text-slate-700 dark:text-slate-200">
              <strong className="font-semibold">Placeholder notice:</strong> payment terms, lead
              times and incoterms are confirmed per quotation — details marked “to be confirmed” are
              not invented for this site.
            </p>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-6">
            <span
              className="absolute bottom-4 left-6 top-4 w-px bg-gradient-to-b from-gold-400 via-slate-200 to-transparent sm:left-1/2 sm:-translate-x-1/2"
              aria-hidden="true"
            />
            {EXPORT_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <li key={step.step} className="relative">
                  <div
                    className={`flex flex-col gap-4 sm:flex-row sm:items-center ${
                      isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${isLeft ? "sm:text-right" : "sm:text-left"}`}>
                      <Reveal direction={isLeft ? "left" : "right"}>
                        <div
                          className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40 ${
                            isLeft ? "sm:mr-8" : "sm:ml-8"
                          }`}
                        >
                          <div
                            className={`flex items-center gap-3 ${isLeft ? "sm:flex-row-reverse sm:justify-start" : ""}`}
                          >
                            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                              <Icon name={step.icon} className="h-5 w-5" />
                            </span>
                            <span className="font-display text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                              Step {step.step} of {EXPORT_STEPS.length}
                            </span>
                          </div>
                          <h2 className="mt-3 font-display text-xl font-bold">{step.title}</h2>
                          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                            {step.description}
                          </p>
                        </div>
                      </Reveal>
                    </div>

                    {/* Node on the center line */}
                    <div className="absolute left-6 top-6 z-10 -translate-x-1/2 -translate-y-0 sm:left-1/2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-gold-400 bg-gold-gradient font-display text-xs font-bold text-brand-950 shadow-glow">
                        {step.step}
                      </span>
                    </div>

                    <div className="hidden flex-1 sm:block" aria-hidden="true" />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-16 sm:py-20">
        <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-site relative flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Start Step 1"
            title="Ready to send your inquiry?"
            description="One message starts the process — tell us the product, quantity and destination, and we will take it from there."
            light
          />
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Start with a quotation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/contact" className="btn-outline !text-white">
              Contact our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
