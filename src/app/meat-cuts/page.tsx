import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/Icon";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { CUTS, CUT_GROUPS } from "@/data/cuts";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Premium Meat Cuts — Tenderloin, Ribeye, Brisket & More",
  description:
    "Explore Imran Khan & Co.'s premium halal beef cuts: tenderloin, striploin, cube roll, ribeye, brisket, chuck, shank, knuckle, topside, silverside, flank, round, short ribs, neck, sirloin and brisket point.",
  alternates: { canonical: "/meat-cuts" },
};

const cutsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Premium halal beef cuts",
  itemListElement: CUTS.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: c.name,
      description: c.description,
      category: c.group,
      url: `${SITE_URL}/meat-cuts#${c.slug}`,
    },
  })),
};

export default function MeatCutsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cutting Specification"
        title="Premium Meat Cuts"
        description="Sixteen premium halal beef cuts — portioned hygienically, vacuum packed and export ready. Select a cut to request current stock and pricing."
      />

      {/* Group legend */}
      <section className="border-b border-slate-200 bg-white py-6 dark:border-white/10 dark:bg-brand-950">
        <div className="container-site flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Cut groups:
          </span>
          {CUT_GROUPS.map((g) => (
            <span
              key={g}
              className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
            >
              {g}
            </span>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {CUTS.map((cut, i) => (
              <Reveal key={cut.slug} delay={(i % 4) * 0.06} className="h-full">
                <article
                  id={cut.slug}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40"
                >
                  <div className="relative">
                    <SmartImage
                      alt={`${cut.name} cut`}
                      label={`${cut.name} — photo placeholder`}
                      icon="Beef"
                      aspect="aspect-[16/10]"
                    />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-brand-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-300 backdrop-blur">
                      {cut.group}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                    <h2 className="font-display text-xl font-bold">{cut.name}</h2>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {cut.description}
                    </p>

                    <dl className="mt-auto space-y-3 border-t border-slate-100 pt-4 text-sm dark:border-white/10">
                      <div>
                        <dt className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          <Icon name="ChefHat" className="h-3.5 w-3.5" /> Recommended use
                        </dt>
                        <dd className="text-slate-600 dark:text-slate-300">{cut.recommendedUse}</dd>
                      </div>
                      <div>
                        <dt className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          <Icon name="Container" className="h-3.5 w-3.5" /> Export availability
                        </dt>
                        <dd className="text-slate-600 dark:text-slate-300">
                          {cut.exportAvailability}
                        </dd>
                      </div>
                      <div>
                        <dt className="mb-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                          <Icon name="Package" className="h-3.5 w-3.5" /> Packaging
                        </dt>
                        <dd className="text-slate-600 dark:text-slate-300">{cut.packaging}</dd>
                      </div>
                    </dl>

                    <QuoteButton product={`${cut.name} (meat cut)`} className="btn-brand !py-2.5 text-xs">
                      Inquire about this cut
                    </QuoteButton>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-brand-gradient py-16 sm:py-20">
        <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-site relative flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Customized Cuts"
            title="Need a cut that isn’t listed?"
            description="Share your spec sheet — we portion to your market's requirements before packing and loading."
            light
          />
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Request cut specification quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/packaging" className="btn-outline !text-white">
              View packaging options
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cutsJsonLd) }}
      />
    </>
  );
}
