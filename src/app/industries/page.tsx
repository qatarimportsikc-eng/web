import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { Icon } from "@/components/Icon";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { INDUSTRIES } from "@/data/operations";

export const metadata: Metadata = {
  title: "Industries We Serve — Hotels, Supermarkets, Importers & More",
  description:
    "Imran Khan & Co. supplies halal beef to hotels, restaurants, supermarkets, hypermarkets, food distributors, wholesalers, military camps, government suppliers, cloud kitchens, catering companies, importers and institutional buyers.",
  alternates: { canonical: "/industries" },
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who We Supply"
        title="Industries We Serve"
        description="From hotel kitchens to large institutional buyers — dependable halal beef supply for every food business across Qatar and the GCC."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Customers"
            title="Twelve segments, one standard of quality"
            description="We proudly serve importers, supermarkets, hotels, restaurants, catering companies, wholesalers, food distributors, and institutional buyers with fresh, chilled, and frozen halal beef."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRIES.map((industry, i) => (
              <Reveal key={industry.name} delay={(i % 4) * 0.07} className="h-full">
                <article className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40">
                  <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-700 transition-colors group-hover:bg-gold-gradient group-hover:text-brand-950 dark:bg-white/5 dark:text-gold-300">
                    <Icon name={industry.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="font-display text-lg font-bold">{industry.name}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {industry.description}
                  </p>
                  <QuoteButton
                    product={`Supply for ${industry.name}`}
                    className="mt-auto pt-5 text-left text-xs font-semibold text-gold-600 transition hover:text-gold-700 dark:text-gold-400"
                  >
                    Inquire for this segment →
                  </QuoteButton>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Segment note */}
      <section className="bg-slate-50 py-16 dark:bg-brand-900/30 sm:py-20">
        <div className="container-site">
          <div className="mx-auto flex max-w-3xl items-start gap-4 rounded-3xl border border-gold-500/30 bg-gold-500/10 p-7">
            <Info className="mt-1 h-6 w-6 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl font-bold">Supplying institutions at scale</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Military camps, government food suppliers and large institutional buyers require
                consistent volumes, strict hygiene standards and dependable scheduling — all three
                are core to how we operate. Contract details and tender documentation are handled
                case by case.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Become a supply partner <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/products" className="btn-brand">
              View products
            </Link>
            <Link href="/export-process" className="btn-outline">
              How exporting works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
