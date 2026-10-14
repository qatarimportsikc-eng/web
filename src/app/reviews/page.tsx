import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { ReviewList } from "@/components/ReviewList";
import { Stars, TestimonialSlider } from "@/components/Testimonials";
import { RATING_BREAKDOWN, REVIEW_RATING } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Reviews — What Our Customers Say",
  description:
    "Customer testimonials for Imran Khan & Co. from importers, restaurants, hotels, distributors, wholesale and corporate buyers. Sample reviews are clearly labelled until real feedback is published.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Customer Testimonials"
        title="Reviews"
        description="Rated 5.0 by our partners — sample reviews are shown as clearly labelled placeholders until real customer feedback is collected."
      />

      {/* Rating summary */}
      <section className="py-16 sm:py-20">
        <div className="container-site">
          <div className="mx-auto grid max-w-4xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-brand-900/40 sm:grid-cols-[auto_1fr] sm:items-center sm:p-10">
            <div className="text-center sm:border-r sm:border-slate-200 sm:pr-8 dark:sm:border-white/10">
              <p className="font-display text-6xl font-bold text-gold-gradient">
                {REVIEW_RATING.toFixed(1)}
              </p>
              <div className="mt-2">
                <Stars rating={5} className="justify-center" />
              </div>
              <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">
                Overall rating
              </p>
            </div>

            <div className="space-y-2">
              {RATING_BREAKDOWN.map((row) => (
                <div key={row.stars} className="flex items-center gap-3 text-xs">
                  <span className="flex w-14 shrink-0 items-center gap-1 text-slate-500 dark:text-slate-400">
                    {row.stars}
                    <Star className="h-3 w-3 fill-gold-400 text-gold-400" aria-hidden="true" />
                  </span>
                  <span className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                    <span
                      className="block h-full rounded-full bg-gold-gradient"
                      style={{ width: `${row.percent}%` }}
                    />
                  </span>
                  <span className="w-10 text-right text-slate-400">{row.percent}%</span>
                </div>
              ))}
              <p className="pt-2 text-[11px] text-slate-400">
                Placeholder rating distribution — to be replaced with verified customer reviews.
              </p>
            </div>
          </div>

          <div className="mt-14">
            <SectionHeading
              eyebrow="Featured Testimonials"
              title="What partners highlight"
              description="An animated slider of sample reviews from each buyer category."
            />
            <div className="mx-auto max-w-3xl">
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>

      {/* All reviews */}
      <section className="bg-slate-50 py-16 dark:bg-brand-900/30 sm:py-20">
        <div className="container-site">
          <SectionHeading
            eyebrow="All Reviews"
            title="By buyer type"
            description="Filter sample reviews by the type of business — importers, restaurants, hotels, distributors, wholesale and corporate buyers."
          />
          <ReviewList />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 py-16 dark:border-white/10">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl font-bold sm:text-3xl">
            Become our next satisfied partner
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">
              Request a quotation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </QuoteButton>
            <Link href="/contact" className="btn-outline">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
