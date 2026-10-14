"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { QC_TIMELINE } from "@/data/operations";
import { Icon } from "./Icon";

/** Interactive quality-control journey from farm to delivery. */
export function QCTimeline() {
  const [active, setActive] = useState(0);
  const current = QC_TIMELINE[active];

  return (
    <div>
      {/* Stage selector */}
      <ol
        className="flex snap-x gap-3 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Quality control stages"
      >
        {QC_TIMELINE.map((stage, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <li key={stage.stage} className="snap-start">
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={isActive}
                className={`flex w-36 shrink-0 flex-col items-start gap-3 rounded-2xl border p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "border-gold-400 bg-gold-500/10 shadow-glow"
                    : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-gold-400/50 dark:border-white/10 dark:bg-brand-900/40"
                }`}
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl transition ${
                    isActive
                      ? "bg-gold-gradient text-brand-950"
                      : isDone
                        ? "bg-brand-100 text-brand-700 dark:bg-brand-800 dark:text-gold-300"
                        : "bg-slate-100 text-slate-500 dark:bg-white/5 dark:text-slate-400"
                  }`}
                >
                  <Icon name={stage.icon} className="h-4 w-4" />
                </span>
                <span className="text-left">
                  <span className="block text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    Stage {i + 1}
                  </span>
                  <span
                    className={`block text-sm font-semibold leading-tight ${
                      isActive ? "text-brand-900 dark:text-white" : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {stage.stage}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      {/* Active stage detail */}
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white dark:border-white/10 dark:bg-brand-900/40">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.stage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-5 p-7 sm:flex-row sm:items-center sm:p-8"
          >
            <span className="inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gold-gradient text-brand-950 shadow-glow">
              <Icon name={current.icon} className="h-8 w-8" />
            </span>
            <div>
              <p className="eyebrow">
                Stage {active + 1} of {QC_TIMELINE.length}
              </p>
              <h3 className="mt-1 font-display text-2xl font-bold">{current.stage}</h3>
              <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
                {current.description}
              </p>
            </div>
            <div className="flex gap-2 sm:ml-auto">
              <button
                type="button"
                onClick={() => setActive((i) => Math.max(0, i - 1))}
                disabled={active === 0}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-gold-400 hover:text-gold-600 disabled:opacity-40 dark:border-white/10 dark:text-slate-300"
                aria-label="Previous stage"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setActive((i) => Math.min(QC_TIMELINE.length - 1, i + 1))}
                disabled={active === QC_TIMELINE.length - 1}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-gold-400 hover:text-gold-600 disabled:opacity-40 dark:border-white/10 dark:text-slate-300"
                aria-label="Next stage"
              >
                →
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
        <CheckCircle2 className="h-4 w-4 text-brand-500" aria-hidden="true" />
        Every shipment is produced under strict quality control procedures from farm to delivery.
      </p>
    </div>
  );
}
