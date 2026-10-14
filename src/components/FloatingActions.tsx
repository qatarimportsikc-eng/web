"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { SITE } from "@/data/site";

const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  "Hello Imran Khan & Co. — I would like to request a quotation for halal beef exports."
)}`;

/** Floating WhatsApp button + back-to-top control. */
export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <AnimatePresence>
        {showTop ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-brand-800 shadow-soft backdrop-blur transition hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:bg-brand-900/90 dark:text-white"
          >
            <ArrowUp className="h-5 w-5" aria-hidden="true" />
          </motion.button>
        ) : null}
      </AnimatePresence>

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with ${SITE.name} on WhatsApp (${SITE.whatsappDisplay})`}
        className="group relative flex items-center gap-0 overflow-hidden rounded-full bg-[#25D366] p-3.5 text-white shadow-soft transition-all duration-300 hover:gap-2 hover:pr-5 sm:p-4"
      >
        <span
          className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40"
          aria-hidden="true"
        />
        <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-[10rem]">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
