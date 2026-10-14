"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { GALLERY, type GalleryCategory } from "@/data/gallery";
import { Icon } from "./Icon";
import { SmartImage } from "./SmartImage";

/** Category-filtered gallery with keyboard-accessible lightbox. */
export function LightboxGallery() {
  const [activeSlug, setActiveSlug] = useState<string>(GALLERY[0].slug);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const active: GalleryCategory =
    GALLERY.find((c) => c.slug === activeSlug) ?? GALLERY[0];

  const close = useCallback(() => setLightboxIndex(null), []);
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? i : (i + 1) % active.items.length)),
    [active.items.length]
  );
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? i : (i - 1 + active.items.length) % active.items.length
      ),
    [active.items.length]
  );

  // Keyboard + scroll lock while lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex, close, next, prev]);

  const lightboxItem = lightboxIndex !== null ? active.items[lightboxIndex] : null;

  return (
    <div>
      {/* Category tabs */}
      <div
        className="mb-8 flex flex-wrap justify-center gap-2"
        role="tablist"
        aria-label="Gallery categories"
      >
        {GALLERY.map((cat) => {
          const isActive = cat.slug === activeSlug;
          return (
            <button
              key={cat.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveSlug(cat.slug);
              }}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
                isActive
                  ? "bg-gold-gradient text-brand-950 shadow-glow"
                  : "border border-slate-200 text-slate-600 hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
              }`}
            >
              <Icon name={cat.icon} className="h-3.5 w-3.5" />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {active.items.map((item, i) => (
          <motion.button
            key={item.id}
            type="button"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.05 }}
            onClick={() => setLightboxIndex(i)}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 text-left transition hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10"
            aria-label={`Open ${item.caption} in lightbox`}
          >
            <SmartImage
              alt={item.caption}
              label={item.caption}
              icon={active.icon}
              aspect="aspect-[4/3]"
            />
            <span className="absolute inset-0 flex items-end justify-between gap-3 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              <span className="text-sm font-semibold text-white">{item.caption}</span>
              <span className="rounded-full bg-gold-gradient p-2 text-brand-950">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <p className="mt-6 text-center text-xs text-slate-400 dark:text-slate-500">
        All gallery images are placeholders awaiting real factory, livestock and export photography.
      </p>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem ? (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-950/95 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxItem.caption}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close lightbox"
              className="absolute right-4 top-4 rounded-full border border-white/20 p-2.5 text-white transition hover:border-gold-400 hover:text-gold-300"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:border-gold-400 hover:text-gold-300 sm:left-6"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            <motion.figure
              key={lightboxItem.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="max-h-full w-full max-w-4xl"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10">
                <SmartImage
                  alt={lightboxItem.caption}
                  label={lightboxItem.caption}
                  icon={active.icon}
                  aspect="aspect-[16/10]"
                />
              </div>
              <figcaption className="mt-4 flex items-center justify-between gap-4 text-white">
                <span className="text-sm font-semibold">{lightboxItem.caption}</span>
                <span className="text-xs text-white/50">
                  {(lightboxIndex ?? 0) + 1} / {active.items.length} · {active.name}
                </span>
              </figcaption>
            </motion.figure>

            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 z-10 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition hover:border-gold-400 hover:text-gold-300 sm:right-6"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
