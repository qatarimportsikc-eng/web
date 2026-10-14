"use client";

import { useMemo, useState } from "react";
import { PackageOpen, Search, X } from "lucide-react";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  PRODUCT_STATES,
  type ProductCategory,
  type StorageState,
} from "@/data/products";
import { ProductCard } from "./ProductCard";

type CategoryFilter = "All" | ProductCategory;
type StateFilter = "All" | StorageState;

/** Searchable, filterable product catalog. */
export function ProductGrid() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("All");
  const [state, setState] = useState<StateFilter>("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.cuts.some((c) => c.toLowerCase().includes(q));
      const matchesCategory = category === "All" || p.category === category;
      const matchesState = state === "All" || p.state === state;
      return matchesQuery && matchesCategory && matchesState;
    });
  }, [query, category, state]);

  const hasFilters = query.trim() !== "" || category !== "All" || state !== "All";

  return (
    <div>
      {/* Controls */}
      <div className="mb-8 space-y-5">
        <div className="relative mx-auto max-w-xl">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden="true"
          />
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, cuts or services…"
            className="input !rounded-full !py-3.5 !pl-11"
          />
        </div>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter by category">
            {(["All", ...PRODUCT_CATEGORIES] as CategoryFilter[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  category === c
                    ? "bg-gold-gradient text-brand-950 shadow-glow"
                    : "border border-slate-200 text-slate-600 hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="state-filter" className="text-xs font-semibold uppercase tracking-wide text-slate-400">
              Storage
            </label>
            <select
              id="state-filter"
              value={state}
              onChange={(e) => setState(e.target.value as StateFilter)}
              className="input !w-auto !rounded-full !px-4 !py-2 text-xs font-semibold"
            >
              <option value="All">All states</option>
              {PRODUCT_STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            {hasFilters ? (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setCategory("All");
                  setState("All");
                }}
                className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-500 transition hover:border-gold-400 hover:text-gold-600 dark:border-white/10 dark:text-slate-300"
              >
                <X className="h-3.5 w-3.5" aria-hidden="true" /> Clear
              </button>
            ) : null}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400" role="status">
          Showing {filtered.length} of {PRODUCTS.length} offerings
        </p>
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-slate-300 px-6 py-16 text-center dark:border-white/15">
          <PackageOpen className="h-10 w-10 text-slate-300 dark:text-slate-600" aria-hidden="true" />
          <p className="font-display text-lg font-bold">No matching products</p>
          <p className="max-w-sm text-sm text-slate-500 dark:text-slate-400">
            Try a different keyword or clear the filters — or tell us what you need and we will
            prepare it as a customized order.
          </p>
        </div>
      )}
    </div>
  );
}
