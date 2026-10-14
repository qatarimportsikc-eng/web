"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FileText, X } from "lucide-react";
import { InquiryForm } from "./InquiryForm";

interface QuoteContextValue {
  isOpen: boolean;
  open: (product?: string) => void;
  close: () => void;
}

const QuoteContext = createContext<QuoteContextValue>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function useQuote() {
  return useContext(QuoteContext);
}

/** Provides the global "Request Quotation" popup. Mount once in the root layout. */
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<string | undefined>(undefined);

  const open = useCallback((p?: string) => {
    setProduct(p);
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);

  // Lock page scroll while the modal is open
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen]);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <QuoteContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-start justify-center overflow-y-auto p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="quote-modal-title"
          >
            <div
              className="fixed inset-0 bg-brand-950/70 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              className="relative my-8 w-full max-w-2xl rounded-3xl border border-white/10 bg-white p-6 shadow-soft dark:bg-brand-900 sm:p-8"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close quotation request"
                className="absolute right-4 top-4 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="mb-6 flex items-start gap-3 pr-10">
                <span className="rounded-2xl bg-gold-gradient p-3 text-brand-950 shadow-glow">
                  <FileText className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow">Request a Quotation</p>
                  <h2 id="quote-modal-title" className="font-display text-2xl font-bold">
                    Tell us what you need
                  </h2>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Share your specification and we will respond with a tailored quotation.
                  </p>
                </div>
              </div>

              <InquiryForm variant="modal" defaultProduct={product} />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </QuoteContext.Provider>
  );
}

/** Button that opens the global quotation popup (optionally pre-filled). */
export function QuoteButton({
  children,
  product,
  className = "btn-gold",
}: {
  children: ReactNode;
  product?: string;
  className?: string;
}) {
  const { open } = useQuote();
  return (
    <button type="button" className={className} onClick={() => open(product)}>
      {children}
    </button>
  );
}
