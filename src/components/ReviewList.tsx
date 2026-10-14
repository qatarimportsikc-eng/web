"use client";

import { useMemo, useState } from "react";
import { TESTIMONIALS, type ReviewerType } from "@/data/testimonials";
import { Stars } from "./Testimonials";

type Filter = "All" | ReviewerType;

const TYPES: Filter[] = [
  "All",
  "Importer",
  "Restaurant",
  "Hotel",
  "Distributor",
  "Wholesale Buyer",
  "Corporate Buyer",
];

/** Filterable grid of testimonials (all clearly labelled as samples). */
export function ReviewList() {
  const [filter, setFilter] = useState<Filter>("All");

  const reviews = useMemo(
    () => (filter === "All" ? TESTIMONIALS : TESTIMONIALS.filter((t) => t.type === filter)),
    [filter]
  );

  return (
    <div>
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="group"
        aria-label="Filter reviews by buyer type"
      >
        {TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setFilter(type)}
            aria-pressed={filter === type}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              filter === type
                ? "bg-gold-gradient text-brand-950 shadow-glow"
                : "border border-slate-200 text-slate-600 hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {reviews.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.id}
              className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-gold-400/60 dark:border-white/10 dark:bg-brand-900/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <Stars rating={review.rating} />
                <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-widest text-gold-700 dark:text-gold-300">
                  Sample review
                </span>
              </div>
              <blockquote className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4 dark:border-white/10">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-brand-950">
                  {review.name
                    .split(" ")
                    .slice(-2)
                    .map((w) => w[0])
                    .join("")}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-brand-900 dark:text-white">
                    {review.name}
                  </span>
                  <span className="block text-xs text-slate-500 dark:text-slate-400">
                    {review.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-slate-300 px-6 py-12 text-center text-sm text-slate-500 dark:border-white/15 dark:text-slate-400">
          No sample reviews for this category yet — real customer reviews will be published here.
        </p>
      )}
    </div>
  );
}
