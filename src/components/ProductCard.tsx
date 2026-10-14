import { Check, Clock, Package, Scissors, Snowflake } from "lucide-react";
import type { Product } from "@/data/products";
import { Icon } from "./Icon";
import { QuoteButton } from "./Quote";
import { Reveal } from "./Reveal";
import { SmartImage } from "./SmartImage";

const stateIcon = (state: Product["state"]) =>
  state === "Frozen" ? "Snowflake" : state === "Fresh Chilled" ? "Thermometer" : "Package";

/**
 * Product card. `compact` is used on the home page; full mode renders the
 * complete specification block used on the products page.
 */
export function ProductCard({
  product,
  compact = false,
  index = 0,
}: {
  product: Product;
  compact?: boolean;
  index?: number;
}) {
  return (
    <Reveal delay={(index % 4) * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40">
        <div className="relative">
          <SmartImage
            alt={product.name}
            label={`${product.name} — photo placeholder`}
            icon={product.icon}
            aspect="aspect-[16/10]"
          />
          <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-brand-950/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-300 backdrop-blur">
            {product.category}
          </span>
          <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-brand-800 backdrop-blur dark:bg-brand-950/80 dark:text-gold-300">
            <Icon name={stateIcon(product.state)} className="h-3.5 w-3.5" />
            {product.state}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="font-display text-xl font-bold">{product.name}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{product.tagline}</p>
          </div>

          {!compact ? (
            <>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {product.description}
              </p>

              <dl className="space-y-3 border-t border-slate-100 pt-4 text-sm dark:border-white/10">
                <div>
                  <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    <Scissors className="h-3.5 w-3.5" aria-hidden="true" /> Available cuts
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {product.cuts.map((c) => (
                      <Chip key={c}>{c}</Chip>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-400">
                    <Package className="h-3.5 w-3.5" aria-hidden="true" /> Packaging
                  </dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {product.packaging.map((p) => (
                      <Chip key={p}>{p}</Chip>
                    ))}
                  </dd>
                </div>
                <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
                  <div className="rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/5">
                    <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      MOQ
                    </dt>
                    <dd className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {product.moq}
                    </dd>
                  </div>
                  <div className="rounded-xl bg-slate-50 px-3 py-2 dark:bg-white/5">
                    <dt className="flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                      <Clock className="h-3 w-3" aria-hidden="true" /> Availability
                    </dt>
                    <dd className="text-xs font-medium text-slate-600 dark:text-slate-300">
                      {product.availability}
                    </dd>
                  </div>
                </div>
              </dl>
            </>
          ) : (
            <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
              {product.cuts.slice(0, 2).map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-brand-600 dark:text-gold-400" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
            <QuoteButton product={product.name} className="btn-brand flex-1 !py-2.5 text-xs">
              Send Inquiry
            </QuoteButton>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
      {children}
    </span>
  );
}


