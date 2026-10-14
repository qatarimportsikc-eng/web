"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Globe, Mail, Menu, Moon, Phone, Sun, X } from "lucide-react";
import { NAV, NAV_MORE, NAV_PRIMARY, SITE } from "@/data/site";
import { getDictionary, plannedLocales } from "@/i18n";
import { QuoteButton } from "./Quote";

const t = getDictionary();

/** Monogram + wordmark logo. */
export function Logo({ dark }: { dark: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${SITE.name} — home`}>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-gradient font-display text-sm font-bold tracking-tight text-brand-950 shadow-glow">
        {SITE.monogram}
      </span>
      <span className="leading-tight">
        <span
          className={`block font-display text-lg font-bold transition ${
            dark ? "text-brand-950 dark:text-white" : "text-white"
          }`}
        >
          Imran Khan <span className="text-gold-500">&amp;</span> Co.
        </span>
        <span
          className={`block text-[10px] font-semibold uppercase tracking-[0.2em] transition ${
            dark ? "text-slate-500 dark:text-slate-400" : "text-white/60"
          }`}
        >
          Halal Beef Exporter
        </span>
      </span>
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Sync theme + scroll state with the document
  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus on navigation
  useEffect(() => {
    setMobileOpen(false);
    setMoreOpen(false);
    setLangOpen(false);
  }, [pathname]);

  // Close dropdowns on outside click / Escape
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMoreOpen(false);
        setLangOpen(false);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Lock scroll when the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
    setDark(isDark);
  }

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));
  const linkCls = (href: string) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive(href)
        ? scrolled
          ? "text-gold-600 dark:text-gold-400"
          : "text-gold-300"
        : scrolled
          ? "text-slate-700 hover:text-gold-600 dark:text-slate-200 dark:hover:text-gold-300"
          : "text-white/80 hover:text-white"
    }`;

  const moreIsActive = NAV_MORE.some((n) => isActive(n.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Utility bar */}
      <div
        className={`hidden transition-all duration-300 lg:block ${
          scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"
        } bg-brand-950/90 backdrop-blur-sm`}
      >
        <div className="container-site flex h-10 items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-1.5 transition hover:text-gold-300"
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" /> {SITE.email}
            </a>
            {SITE.contacts.map((c) => (
              <a
                key={c.phone}
                href={`tel:+${c.wa}`}
                className="flex items-center gap-1.5 transition hover:text-gold-300"
              >
                <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {c.name}: {c.phone}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-5">
            <span className="uppercase tracking-[0.18em] text-gold-400/90">
              Exporting from Pakistan to Qatar &amp; the GCC
            </span>
            {/* Language switcher — English live, Arabic prepared */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                className="flex items-center gap-1.5 transition hover:text-gold-300"
                onClick={() => setLangOpen((o) => !o)}
                aria-haspopup="menu"
                aria-expanded={langOpen}
                aria-label={t.nav.language}
              >
                <Globe className="h-3.5 w-3.5" aria-hidden="true" /> EN
                <ChevronDown className="h-3 w-3" aria-hidden="true" />
              </button>
              <AnimatePresence>
                {langOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute right-0 top-7 w-44 overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-soft dark:border-white/10 dark:bg-brand-900"
                    role="menu"
                  >
                    <span className="flex items-center justify-between px-4 py-2 text-sm font-medium text-brand-800 dark:text-white">
                      English <span className="text-gold-500">✓</span>
                    </span>
                    {plannedLocales.map((l) => (
                      <span
                        key={l.code}
                        className="flex items-center justify-between px-4 py-2 text-sm text-slate-400 dark:text-slate-500"
                        aria-disabled="true"
                      >
                        {l.nativeLabel}
                        <span className="text-[10px] uppercase tracking-wide">Soon</span>
                      </span>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/85 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-brand-950/85"
            : "border-b border-white/10 bg-brand-950/20 backdrop-blur-sm"
        }`}
      >
        <div className="container-site flex h-20 items-center justify-between gap-4">
          <Logo dark={scrolled} />

          <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
            {NAV_PRIMARY.map((item) => (
              <Link key={item.href} href={item.href} className={linkCls(item.href)}>
                {item.label}
                {isActive(item.href) ? (
                  <span
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold-gradient"
                    aria-hidden="true"
                  />
                ) : null}
              </Link>
            ))}

            {/* More dropdown */}
            <div className="relative" ref={moreRef}>
              <button
                type="button"
                onClick={() => setMoreOpen((o) => !o)}
                className={`flex items-center gap-1 text-sm font-medium transition ${
                  moreIsActive
                    ? scrolled
                      ? "text-gold-600 dark:text-gold-400"
                      : "text-gold-300"
                    : scrolled
                      ? "text-slate-700 hover:text-gold-600 dark:text-slate-200 dark:hover:text-gold-300"
                      : "text-white/80 hover:text-white"
                }`}
                aria-haspopup="menu"
                aria-expanded={moreOpen}
              >
                {t.nav.more}
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${moreOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
              <AnimatePresence>
                {moreOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-9 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-soft dark:border-white/10 dark:bg-brand-900"
                    role="menu"
                  >
                    {NAV_MORE.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                          isActive(item.href)
                            ? "bg-brand-50 text-brand-800 dark:bg-brand-800/60 dark:text-white"
                            : "text-slate-600 hover:bg-gold-50 hover:text-gold-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-gold-300"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={t.nav.theme}
              className={`rounded-full border p-2.5 transition ${
                scrolled
                  ? "border-slate-200 text-slate-600 hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
                  : "border-white/25 text-white hover:border-gold-400 hover:text-gold-300"
              }`}
            >
              {dark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>

            <QuoteButton className="btn-gold hidden sm:inline-flex">
              {t.nav.requestQuotation}
            </QuoteButton>

            <button
              type="button"
              className={`rounded-full border p-2.5 xl:hidden ${
                scrolled
                  ? "border-slate-200 text-slate-700 dark:border-white/10 dark:text-white"
                  : "border-white/25 text-white"
              }`}
              onClick={() => setMobileOpen(true)}
              aria-label={t.nav.menu}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col bg-white dark:bg-brand-950 xl:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex h-20 items-center justify-between border-b border-slate-200 px-4 dark:border-white/10 sm:px-6">
              <Logo dark />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label={t.nav.close}
                className="rounded-full border border-slate-200 p-2.5 text-slate-600 dark:border-white/10 dark:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <nav
              className="flex-1 overflow-y-auto px-4 py-6 sm:px-6"
              aria-label="Mobile"
            >
              <ul className="space-y-1">
                {NAV.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                        isActive(item.href)
                          ? "bg-brand-50 text-brand-800 dark:bg-brand-900 dark:text-gold-300"
                          : "text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                      <span className="text-gold-500" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-6 space-y-3 border-t border-slate-200 pt-6 dark:border-white/10">
                <QuoteButton className="btn-gold w-full">{t.nav.requestQuotation}</QuoteButton>
                <a href={`mailto:${SITE.email}`} className="btn-outline w-full">
                  <Mail className="h-4 w-4" aria-hidden="true" /> {SITE.email}
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
