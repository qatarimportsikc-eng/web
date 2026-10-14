import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { ProductGrid } from "@/components/ProductGrid";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { PRODUCTS } from "@/data/products";
import { SITE_URL } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Products — Fresh Chilled, Frozen & Boneless Halal Beef",
  description:
    "Browse Imran Khan & Co.'s halal beef catalog: fresh chilled beef, frozen beef, premium buffalo meat, boneless beef, customized cuts, vacuum packed meat, bulk export orders, cold chain logistics and export documentation.",
  alternates: { canonical: "/products" },
};

const productsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Halal beef products and export services",
  itemListElement: PRODUCTS.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.description,
      brand: { "@type": "Brand", name: "Imran Khan & Co." },
      category: p.category,
      url: `${SITE_URL}/products#${p.slug}`,
    },
  })),
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Product Catalog"
        title="Our Products"
        description="Premium export-quality halal beef — fresh, chilled and frozen — plus customized cuts, vacuum packaging, bulk export orders and full export services."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="mb-10 flex items-start gap-3 rounded-2xl border border-gold-500/30 bg-gold-500/10 p-5">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" aria-hidden="true" />
            <p className="text-sm text-slate-700 dark:text-slate-200">
              <strong className="font-semibold">Placeholder notice:</strong> detailed specifications
              (MOQ, exact weights, shelf life and availability) are marked “to be confirmed” and will
              be completed with Imran Khan &amp; Co. — they are not invented here.
            </p>
          </div>

          <ProductGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-brand-900/30">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl font-bold sm:text-3xl">
            Can’t find exactly what you need?
          </h2>
          <p className="max-w-xl text-sm text-slate-500 dark:text-slate-400">
            Customized meat cuts and custom weight packaging are part of our offering — share your
            specification and we will prepare the order accordingly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Request a custom quotation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/meat-cuts" className="btn-outline">
              Browse meat cuts
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
    </>
  );
}
