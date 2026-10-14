import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { FaqAccordion } from "@/components/FaqAccordion";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { FAQS } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ — MOQ, Delivery, Halal Certification, Packaging & Shipping",
  description:
    "Frequently asked questions about ordering halal beef from Imran Khan & Co.: minimum order quantity, delivery time, halal certification, packaging, shipping, frozen vs fresh beef, export documents, payment terms and custom orders.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="Answers"
        title="Frequently Asked Questions"
        description="Everything importers usually ask before their first order — with placeholder answers clearly marked where details still need confirming."
      />

      <section className="py-16 sm:py-20">
        <div className="container-site max-w-4xl">
          <FaqAccordion />

          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center dark:border-white/10 dark:bg-brand-900/40">
            <h2 className="font-display text-2xl font-bold">Still have a question?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-400">
              Ask us directly — we respond with specifics for your product, quantity and destination
              rather than generic answers.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <QuoteButton className="btn-gold">
                Ask in an inquiry <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </QuoteButton>
              <a
                href="https://wa.me/97430157663"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brand"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp us
              </a>
              <Link href="/contact" className="btn-outline">
                Contact page
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 py-16 dark:border-white/10">
        <div className="container-site">
          <SectionHeading
            eyebrow="Related Pages"
            title="Dig deeper"
            description="Detailed product, packaging and process pages cover everything beyond these quick answers."
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-outline">
              Products
            </Link>
            <Link href="/packaging" className="btn-outline">
              Packaging
            </Link>
            <Link href="/quality" className="btn-outline">
              Quality Assurance
            </Link>
            <Link href="/export-process" className="btn-outline">
              Export Process
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
