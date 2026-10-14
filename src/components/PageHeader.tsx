import Link from "next/link";
import type { ReactNode } from "react";

/** Hero header used on every inner page. */
export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-brand-gradient pt-32 pb-16 sm:pt-36 sm:pb-20">
      <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-brand-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-site relative">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60">
            <li>
              <Link href="/" className="transition hover:text-gold-300">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">
              /
            </li>
            <li className="font-medium text-gold-300">{title}</li>
          </ol>
        </nav>
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

/** Section heading with eyebrow, title and optional description. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`mb-12 flex flex-col gap-3 ${alignment}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-white" : ""
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`max-w-2xl text-base leading-relaxed sm:text-lg ${light ? "text-white/70" : "text-slate-500 dark:text-slate-400"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
