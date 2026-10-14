import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { LightboxGallery } from "@/components/LightboxGallery";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { GALLERY } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Gallery — Factory, Processing, Packaging & Export",
  description:
    "Photo gallery of Imran Khan & Co.'s operations: factory, livestock, processing, packaging, cold storage, containers, loading, meat cuts, warehouse and export process.",
  alternates: { canonical: "/gallery" },
};

const totalPhotos = GALLERY.reduce((sum, cat) => sum + cat.items.length, 0);

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Inside Our Operations"
        title="Gallery"
        description="A look across our operations — every slot below is ready for real photography of the factory, livestock, processing, packaging and export activity."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="mb-10 flex flex-col items-center gap-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gold-700 dark:text-gold-300">
              <Camera className="h-4 w-4" aria-hidden="true" />
              {GALLERY.length} categories · {totalPhotos} photo slots
            </span>
            <p className="max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              Select a category, then click any image to open the lightbox — navigate with arrow
              keys or the on-screen controls.
            </p>
          </div>

          <LightboxGallery />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-brand-900/30">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="See It In Person"
            title="Want a facility walkthrough?"
            description="Arrange a video call or visit — we will walk you through the processing line, cold storage and loading process."
            align="center"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Schedule a walkthrough <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/about" className="btn-brand">
              About our facility
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
