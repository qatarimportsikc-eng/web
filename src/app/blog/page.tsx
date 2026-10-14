import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";
import { NewsletterForm } from "@/components/NewsletterForm";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { BLOG_CATEGORIES, POSTS } from "@/data/blog";
import { getDictionary } from "@/i18n";

const t = getDictionary();

export const metadata: Metadata = {
  title: "Blog — Halal Export Insights & Company News",
  description:
    "News and insights from Imran Khan & Co.: halal export practice, cold chain logistics, GCC market updates and company announcements. Blog structure is ready — first posts coming soon.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Insights"
        title="Blog"
        description="Halal export practice, cold chain know-how and company news from Imran Khan & Co. — the publishing structure is ready, first posts coming soon."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site">
          {POSTS.length > 0 ? (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {POSTS.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.08} className="h-full">
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40">
                    <SmartImage
                      src={post.image}
                      alt={post.title}
                      label={`${post.title} — cover placeholder`}
                      icon="Image"
                      aspect="aspect-[16/9]"
                    />
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <p className="text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                        {post.category} · {post.date}
                      </p>
                      <h2 className="font-display text-lg font-bold">{post.title}</h2>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{post.excerpt}</p>
                      <span className="mt-auto pt-2 text-xs font-semibold text-gold-600 dark:text-gold-400">
                        {t.common.readMore} →
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            /* Empty state — CMS-ready structure, no posts yet */
            <div className="mx-auto max-w-3xl rounded-[2rem] border border-dashed border-slate-300 p-10 text-center dark:border-white/15">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-gradient text-brand-950 shadow-glow">
                <PenLine className="h-7 w-7" aria-hidden="true" />
              </span>
              <h2 className="mt-6 font-display text-2xl font-bold">The blog is ready — posts coming soon</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                The content structure (typed posts, categories, authors, cover images) is already
                wired up, so the first articles can be published without any structural work —
                either from a CMS or by adding entries to <code className="rounded bg-slate-100 px-1.5 py-0.5 text-xs dark:bg-white/10">src/data/blog.ts</code>.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {BLOG_CATEGORIES.map((cat) => (
                  <span
                    key={cat}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <div className="mx-auto mt-8 max-w-sm text-left">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                  {t.footer.newsletterTitle}
                </p>
                <NewsletterForm />
                <p className="mt-2 text-[11px] text-slate-400">{t.footer.newsletterText}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 dark:border-white/10 dark:bg-brand-900/30">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <SectionHeading
            eyebrow="Meanwhile"
            title="Explore our products"
            description="While the first articles are being prepared, browse the full halal beef catalog and export capabilities."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-gold">
              View products <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <QuoteButton className="btn-brand">Request Quotation</QuoteButton>
          </div>
        </div>
      </section>
    </>
  );
}
