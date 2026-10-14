"use client";

import { useState } from "react";
import { Icon } from "./Icon";

interface SmartImageProps {
  /** Real image path/URL. When missing or failing, a designed placeholder renders. */
  src?: string;
  alt: string;
  /** Caption shown on the placeholder, e.g. "Ribeye — photo placeholder". */
  label?: string;
  icon?: string;
  className?: string;
  imgClassName?: string;
  /** Aspect utility applied to the frame, e.g. "aspect-[4/3]". */
  aspect?: string;
  priority?: boolean;
}

/**
 * Image frame with lazy loading and a branded placeholder fallback, so the
 * design stays premium before real photography is supplied.
 */
export function SmartImage({
  src,
  alt,
  label,
  icon = "Camera",
  className = "",
  imgClassName = "",
  aspect = "aspect-[4/3]",
  priority = false,
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="photo-placeholder pattern-dots flex h-full w-full flex-col items-center justify-center gap-3 text-center"
        >
          <span className="rounded-full border border-gold-400/40 bg-white/10 p-3 backdrop-blur-sm">
            <Icon name={icon} className="h-6 w-6 text-gold-300" />
          </span>
          <span className="px-4 text-[11px] font-medium uppercase tracking-[0.18em] text-white/70">
            {label ?? "Photo placeholder"}
          </span>
        </div>
      )}
    </div>
  );
}
