"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { REVIEW_RATING, TESTIMONIALS, type Testimonial } from "@/data/testimonials";

/** Five gold stars (accessible label included). */
export function Stars({ rating = 5, className = "" }: { rating?: number; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-gold-400 text-gold-400" : "text-slate-300 dark:text-slate-600"}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

export function TestimonialSlider({
  testimonials = TESTIMONIALS,
  autoPlayMs = 6000,
}: {
  testimonials?: Testimonial[];
  autoPlayMs?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setIndex((i) => (i + 1) % testimonials.length),
    [testimonials.length]
  );
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length),
    [testimonials.length]
  );

  useEffect(() => {
    if (paused || testimonials.length < 2) return;
    const id = setInterval(next, autoPlayMs);
    return () => clearInterval(id);
  }, [next, paused, autoPlayMs, testimonials.length]);

  const active = testimonials[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="card relative overflow-hidden px-6 py-10 sm:px-12 sm:py-14">
        <span
          className="absolute right-6 top-6 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400"
          title="Sample review — placeholder until real customer reviews are available"
        >
          Sample review
        </span>
        <Quote
          className="absolute -left-2 -top-4 h-24 w-24 text-gold-500/10 dark:text-gold-400/10"
          aria-hidden="true"
        />

        <AnimatePresence mode="wait">
          <motion.figure
            key={active.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Stars rating={active.rating} className="mb-5" />
            <blockquote className="font-display text-xl leading-relaxed text-brand-900 sm:text-2xl dark:text-white">
              “{active.quote}”
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-display text-sm font-bold text-brand-950">
                {active.name
                  .split(" ")
                  .slice(-2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <span>
                <span className="block text-sm font-semibold text-brand-900 dark:text-white">
                  {active.name}
                </span>
                <span className="block text-xs text-slate-500 dark:text-slate-400">
                  {active.role} · {active.type}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Review slides">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Go to review ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-8 bg-gold-gradient" : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="rounded-full border border-slate-200 p-2.5 text-slate-500 transition hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-slate-400 dark:text-slate-500">
        Overall rating{" "}
        <span className="font-semibold text-gold-600 dark:text-gold-400">
          {REVIEW_RATING.toFixed(1)} / 5
        </span>{" "}
        · Placeholder ratings pending real customer reviews.
      </p>
    </div>
  );
}
