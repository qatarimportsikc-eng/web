import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Info, Layers, ThermometerSnowflake } from "lucide-react";
import { Icon } from "@/components/Icon";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import {
  COLD_CHAIN_HIGHLIGHTS,
  PACKAGING_SPECS,
  PACKAGING_STYLES,
} from "@/data/packaging";

export const metadata: Metadata = {
  title: "Packaging — Vacuum Packed, Carton & Bulk Export Packaging",
  description:
    "Packaging options from Imran Khan & Co.: vacuum packed meat, food grade plastic, carton boxes, custom weight packaging, bulk export packaging, frozen and fresh chilled packaging, plus container loading and cold chain logistics.",
  alternates: { canonical: "/packaging" },
};

export default function PackagingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Packed for Export"
        title="Packaging Solutions"
        description="Food grade vacuum packaging, export cartons and container loading — engineered to keep halal beef fresh across the entire cold chain."
      />

      {/* Packaging styles */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Packaging Styles"
            title="Eight ways to pack your order"
            description="Each style protects freshness, hygiene and presentation — combined as required by product state and destination."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGING_STYLES.map((style, i) => (
              <Reveal key={style.slug} delay={(i % 4) * 0.07} className="h-full">
                <article
                  id={style.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40"
                >
                  <div className="relative">
                    <SmartImage
                      alt={`${style.name} packaging`}
                      label={`${style.name} — illustration placeholder`}
                      icon={style.icon}
                      aspect="aspect-[16/10]"
                    />
                    <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl bg-gold-gradient text-brand-950">
                      <Icon name={style.icon} className="h-4 w-4" />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-display text-lg font-bold">{style.name}</h3>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                      {style.description}
                    </p>
                    <ul className="mt-auto space-y-1.5 border-t border-slate-100 pt-4 dark:border-white/10">
                      {style.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300"
                        >
                          <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-brand-500 dark:text-gold-400" aria-hidden="true" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Spec matrix */}
      <section className="bg-slate-50 py-16 dark:bg-brand-900/30 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Specifications"
            title="Packaging specification matrix"
            description="The figures below are indicative. Final values are confirmed per order and destination."
          />

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-brand-900/40">
            <div className="flex items-start gap-3 border-b border-slate-200 bg-gold-500/10 p-5 dark:border-white/10">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
              <p className="text-sm text-slate-700 dark:text-slate-200">
                <strong className="font-semibold">Placeholder specifications:</strong> values marked
                “to be confirmed” will be completed with Imran Khan &amp; Co. — no specification has
                been invented for this site.
              </p>
            </div>
            <table className="w-full text-left text-sm">
              <caption className="sr-only">Packaging specification matrix</caption>
              <thead>
                <tr className="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-400 dark:border-white/10">
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Specification
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold">
                    Detail
                  </th>
                </tr>
              </thead>
              <tbody>
                {PACKAGING_SPECS.map((row) => (
                  <tr
                    key={row.spec}
                    className="border-b border-slate-100 last:border-0 dark:border-white/5"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-semibold text-brand-900 dark:text-white"
                    >
                      {row.spec}
                    </th>
                    <td className="px-5 py-4 text-slate-600 dark:text-slate-300">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cold chain highlights */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Cold Chain Logistics"
            title="Vacuum packaging + unbroken cold chain"
            description="Highlighted from our company profile: vacuum packaging and temperature-controlled logistics are core to every export order."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COLD_CHAIN_HIGHLIGHTS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-gold-400/60 dark:border-white/10 dark:bg-brand-900/40">
                  <span className="inline-flex rounded-2xl bg-gold-gradient p-3.5 text-brand-950">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid gap-6 rounded-3xl border border-slate-200 bg-brand-gradient p-8 sm:grid-cols-3 dark:border-white/10">
            <div className="flex items-center gap-3">
              <Layers className="h-7 w-7 shrink-0 text-gold-300" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-white">Sealed for freshness</p>
                <p className="text-xs text-white/60">Food grade vacuum pouches</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ThermometerSnowflake className="h-7 w-7 shrink-0 text-gold-300" aria-hidden="true" />
              <div>
                <p className="text-sm font-bold text-white">Held at temperature</p>
                <p className="text-xs text-white/60">Chilled &amp; frozen cold rooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="Container" className="h-7 w-7 shrink-0 text-gold-300" />
              <div>
                <p className="text-sm font-bold text-white">Loaded for export</p>
                <p className="text-xs text-white/60">Reefer container verified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-brand-900/30">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl font-bold sm:text-3xl">
            Tell us your packing requirements
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Request packaging quotation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/export-process" className="btn-brand">
              See the export process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
