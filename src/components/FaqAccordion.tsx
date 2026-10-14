"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Info } from "lucide-react";
import { FAQS } from "@/data/faq";

/** Accessible accordion for FAQ entries (one panel open at a time). */
export function FaqAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <div className="space-y-4">
      {FAQS.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div
            key={faq.id}
            id={faq.id}
            className={`overflow-hidden rounded-2xl border transition-colors ${
              isOpen
                ? "border-gold-400/60 bg-white shadow-soft dark:bg-brand-900/60"
                : "border-slate-200 bg-white dark:border-white/10 dark:bg-brand-900/40"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                aria-expanded={isOpen}
                aria-controls={`${faq.id}-panel`}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-display text-base font-bold sm:text-lg">{faq.question}</span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 border-gold-400 bg-gold-gradient text-brand-950"
                      : "border-slate-200 text-slate-500 dark:border-white/10 dark:text-slate-300"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={`${faq.id}-panel`}
                  role="region"
                  aria-labelledby={faq.id}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="px-6 pb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    <p>{faq.answer}</p>
                    {faq.isPlaceholder ? (
                      <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-700 dark:text-gold-300">
                        <Info className="h-3.5 w-3.5" aria-hidden="true" /> Placeholder answer — to
                        be confirmed
                      </p>
                    ) : null}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
