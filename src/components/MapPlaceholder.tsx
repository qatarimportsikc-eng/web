import { MapPin, Navigation } from "lucide-react";

/**
 * Google Map placeholder — the company profile does not include an address
 * yet, so the embed slot is clearly marked until one is provided.
 */
export function MapPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative flex min-h-[280px] flex-col items-center justify-center gap-4 overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 p-8 text-center dark:border-white/10 dark:bg-brand-900/60 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-60 dark:opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(39,104,79,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(39,104,79,0.12) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
      <span className="relative rounded-full bg-gold-gradient p-4 text-brand-950 shadow-glow">
        <MapPin className="h-7 w-7" aria-hidden="true" />
      </span>
      <div className="relative">
        <p className="font-display text-lg font-bold text-brand-900 dark:text-white">
          Google Map embed placeholder
        </p>
        <p className="mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
          The office and plant location will be embedded here once the full address is confirmed by
          Imran Khan &amp; Co.
        </p>
      </div>
      <a
        href="https://maps.google.com/?q=Pakistan"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline relative !py-2.5 text-xs"
      >
        <Navigation className="h-4 w-4" aria-hidden="true" /> Open in Google Maps
      </a>
    </div>
  );
}
