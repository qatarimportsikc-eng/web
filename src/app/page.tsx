import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  FileCheck2,
  Mail,
  Phone,
  Snowflake,
  Truck,
} from "lucide-react";
import { Icon } from "@/components/Icon";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { NewsletterForm } from "@/components/NewsletterForm";
import { ProductCard } from "@/components/ProductCard";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/PageHeader";
import { SmartImage } from "@/components/SmartImage";
import { TestimonialSlider } from "@/components/Testimonials";
import { GOALS } from "@/data/about";
import { INDUSTRIES } from "@/data/operations";
import { PACKAGING_STYLES } from "@/data/packaging";
import { PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";
import { getDictionary } from "@/i18n";

const t = getDictionary();

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  description:
    "Imran Khan & Co. — premium Pakistani halal beef exporter serving Qatar and the GCC. Fresh chilled, frozen and boneless beef with vacuum packaging, cold chain logistics and complete export documentation.",
};

const STATS = [
  { value: "100%", label: "Halal slaughter standard" },
  { value: "8", label: "Facility capabilities" },
  { value: "9", label: "Products & services" },
  { value: "10", label: "Industries served" },
];

const WHY_US = [
  {
    icon: "Beef",
    title: "Veterinary-Inspected Livestock",
    text: "Healthy, veterinary-inspected animals selected before processing — the starting point of every shipment.",
  },
  {
    icon: "BadgeCheck",
    title: "100% Halal Processing",
    text: "Modern halal processing facility with hygienic cutting rooms and strict quality control.",
  },
  {
    icon: "ThermometerSnowflake",
    title: "Unbroken Cold Chain",
    text: "Temperature-controlled cold storage, refrigerated transport and container loading.",
  },
  {
    icon: "FileCheck2",
    title: "Export Documentation",
    text: "Complete export documentation prepared in-house for smooth customs clearance.",
  },
  {
    icon: "Handshake",
    title: "Competitive Pricing",
    text: "Premium quality at competitive pricing without compromising international standards.",
  },
  {
    icon: "ShieldCheck",
    title: "Built on Trust",
    text: "Lasting partnerships based on trust, consistency and dependable export service.",
  },
];

const CERTIFICATES = [
  { title: "Halal Certificate", text: "Halal certification copies provided with shipments." },
  { title: "Veterinary Health Certificate", text: "Animal health certification for export consignments." },
  { title: "Certificate of Origin", text: "Issued per shipment for customs clearance." },
  { title: "Export Documentation Set", text: "Full document set prepared per destination requirement." },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-brand-gradient pb-24 pt-36 sm:pt-44">
        <div className="pattern-dots absolute inset-0 opacity-30" aria-hidden="true" />
        <div
          className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-gold-500/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-site relative grid items-center gap-14 lg:grid-cols-2">
          <div>
            <Reveal>
              <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2">
                <BadgeCheck className="h-4 w-4" aria-hidden="true" />
                {SITE.role} — Qatar &amp; GCC
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                Premium Pakistani{" "}
                <span className="text-gold-gradient">Halal Beef</span> Exporter
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
                From carefully selected livestock to hygienic processing and temperature-controlled
                logistics — every stage follows strict international quality standards. Fresh chilled,
                frozen and boneless halal beef delivered to importers across the GCC.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-9 flex flex-wrap gap-4">
                <QuoteButton className="btn-gold">
                  Request Quotation <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </QuoteButton>
                <Link href="/products" className="btn-outline !text-white">
                  {t.common.viewProducts}
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/60">
                {["100% Halal Slaughter", "Cold Chain Managed", "Vacuum Packed", "Full Export Docs"].map(
                  (chip) => (
                    <li key={chip} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
                      {chip}
                    </li>
                  )
                )}
              </ul>
            </Reveal>
          </div>

          {/* Hero visual */}
          <Reveal direction="right" delay={0.2} className="relative">
            <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
              <SmartImage
                alt="Premium halal beef cuts prepared for export"
                label="Hero image — premium halal beef photo placeholder"
                icon="Beef"
                aspect="aspect-[4/5]"
                className="rounded-[1.5rem]"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-xl sm:block">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-300">
                  <Snowflake className="h-4 w-4" aria-hidden="true" /> Cold chain
                </p>
                <p className="mt-1 text-sm text-white/80">Farm → Facility → Port → GCC</p>
              </div>
              <div className="absolute -right-4 top-8 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl sm:block">
                <p className="flex items-center gap-2 text-xs font-semibold text-white/90">
                  <Truck className="h-4 w-4 text-gold-300" aria-hidden="true" /> Reefer export
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="container-site relative mt-16">
          <Reveal>
            <dl className="grid grid-cols-2 gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:gap-6 lg:grid-cols-4 lg:p-8">
              {STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <dt className="font-display text-3xl font-bold text-gold-gradient sm:text-4xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-white/55 sm:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ============ MARKETS MARQUEE ============ */}
      <section
        aria-label="Export markets"
        className="overflow-hidden border-y border-white/10 bg-brand-950 py-5"
      >
        <div className="marquee-track animate-marquee">
          {[...SITE.markets, ...SITE.markets, ...SITE.markets].map((m, i) => (
            <span
              key={`${m}-${i}`}
              className="flex shrink-0 items-center gap-3 whitespace-nowrap font-display text-lg font-semibold uppercase tracking-widest text-white/40"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
              {m}
            </span>
          ))}
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Quality, trust and dependable export service"
            description="Every shipment is produced under strict quality control procedures to ensure freshness, safety and consistency."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.1}>
                <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/60 hover:shadow-glow dark:border-white/10 dark:bg-brand-900/40">
                  <span className="mb-5 inline-flex rounded-2xl bg-brand-50 p-3.5 text-brand-700 transition-colors group-hover:bg-gold-gradient group-hover:text-brand-950 dark:bg-white/5 dark:text-gold-300">
                    <Icon name={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MISSION & VISION ============ */}
      <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-28">
        <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Our Mission & Vision"
            title="What drives Imran Khan & Co."
            align="left"
            light
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="h-full rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
                <span className="inline-flex rounded-2xl bg-gold-gradient p-3.5 text-brand-950">
                  <TargetIcon />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">Mission</h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  To supply premium halal beef with uncompromising quality, hygienic processing, and
                  dependable export services while building long-term relationships with our
                  customers.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="h-full rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
                <span className="inline-flex rounded-2xl bg-gold-gradient p-3.5 text-brand-950">
                  <EyeIcon />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-white">Vision</h3>
                <p className="mt-3 leading-relaxed text-white/75">
                  To become one of Pakistan&apos;s leading halal beef exporters, recognized across
                  the GCC for quality, trust, reliability, and customer satisfaction.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {GOALS.map((g) => (
              <span
                key={g}
                className="rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-2 text-xs font-medium text-gold-200"
              >
                {g}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ EXPORT COUNTRIES ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Export Markets"
            title="Proudly exporting to Qatar — expanding across the GCC"
            description="We export premium Pakistani halal beef to Qatar and are expanding our presence throughout the Gulf Cooperation Council."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {SITE.marketShort.map((country, i) => (
              <Reveal key={country} delay={i * 0.06}>
                <div
                  className={`flex h-full flex-col items-center gap-2 rounded-2xl border p-5 text-center transition duration-500 hover:-translate-y-1 ${
                    i === 0
                      ? "border-gold-400/60 bg-gold-500/10 shadow-glow"
                      : "border-slate-200 bg-white dark:border-white/10 dark:bg-brand-900/40"
                  }`}
                >
                  <Icon name="MapPin" className={`h-6 w-6 ${i === 0 ? "text-gold-500" : "text-brand-600 dark:text-gold-300"}`} />
                  <span className="text-sm font-semibold text-brand-900 dark:text-white">
                    {country}
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    {i === 0 ? "Current export market" : "GCC expansion"}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="bg-slate-50 py-20 dark:bg-brand-900/30 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Industries We Serve"
            title="Trusted by food businesses across the GCC"
            description="From hotels and hypermarkets to military camps and government suppliers — we serve importers, wholesalers and institutional buyers."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.slice(0, 8).map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 4) * 0.08}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-gold-400/60 dark:border-white/10 dark:bg-brand-900/50">
                  <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                    <Icon name={ind.icon} className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-brand-900 dark:text-white">
                    {ind.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/industries" className="btn-outline">
              View all industries <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Featured Products"
            title="Premium export-quality halal beef"
            description="Fresh chilled beef, frozen beef, premium buffalo meat and boneless beef — plus customized cuts, vacuum packing and bulk export orders."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.filter((p) => p.featured).map((p, i) => (
              <ProductCard key={p.slug} product={p} compact index={i} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/products" className="btn-brand">
              Browse full catalog
            </Link>
            <Link href="/meat-cuts" className="btn-outline">
              Explore meat cuts
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-slate-50 py-20 dark:bg-brand-900/30 sm:py-28">
        <div className="container-site max-w-4xl">
          <SectionHeading
            eyebrow="Customer Testimonials"
            title="What our partners say"
            description="Sample reviews are shown as placeholders until real customer feedback is published."
          />
          <TestimonialSlider />
          <div className="mt-8 text-center">
            <Link href="/reviews" className="btn-outline">
              Read all reviews <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PACKAGING TYPES ============ */}
      <section className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Packaging Types"
            title="Packed for freshness, sealed for export"
            description="Vacuum packaging, food grade materials, carton boxes and bulk export packaging — all inside an unbroken cold chain."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGING_STYLES.slice(0, 6).map((pack, i) => (
              <Reveal key={pack.slug} delay={(i % 3) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-gold-400/60 dark:border-white/10 dark:bg-brand-900/40">
                  <span className="rounded-xl bg-gold-gradient p-3 text-brand-950">
                    <Icon name={pack.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-brand-900 dark:text-white">
                      {pack.name}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                      {pack.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/packaging" className="btn-outline">
              View packaging details <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CERTIFICATES ============ */}
      <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-28">
        <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Certificates & Compliance"
            title="Documentation that clears customs"
            description="Certificate copies are provided per shipment — the exact set depends on your destination requirements."
            light
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATES.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <FileCheck2 className="h-7 w-7 text-gold-300" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{c.text}</p>
                  <span className="mt-4 inline-block rounded-full border border-gold-400/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-gold-300">
                    Copy on request
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let’s discuss your next shipment"
            description="Tell us your product, quantity and destination — we will respond with a tailored quotation."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal direction="left">
              <div className="flex h-full flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-brand-900/40">
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-gold-400 dark:border-white/10"
                  >
                    <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wide text-slate-400">
                        Email
                      </span>
                      <span className="block break-all text-sm font-semibold text-brand-900 dark:text-white">
                        {SITE.email}
                      </span>
                    </span>
                  </a>
                  {SITE.contacts.map((c) => (
                    <a
                      key={c.phone}
                      href={`tel:+${c.wa}`}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4 transition hover:border-gold-400 dark:border-white/10"
                    >
                      <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-slate-400">
                          {c.name}
                        </span>
                        <span className="block text-sm font-semibold text-brand-900 dark:text-white">
                          {c.phone}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-white/10 dark:bg-white/5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gold-600 dark:text-gold-400">
                    Stay updated
                  </p>
                  <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">
                    {t.footer.newsletterText}
                  </p>
                  <NewsletterForm />
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  <QuoteButton className="btn-gold flex-1">{t.common.requestQuotation}</QuoteButton>
                  <Link href="/contact" className="btn-outline flex-1">
                    {t.common.contactUs}
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <MapPlaceholder className="h-full" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ GOALS / CTA BAND ============ */}
      <section className="border-t border-slate-200 bg-gold-50 py-14 dark:border-white/10 dark:bg-brand-900/40">
        <div className="container-site flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl font-display text-2xl font-bold sm:text-3xl">
            Delivering premium halal beef that exceeds customer expectations
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <QuoteButton className="btn-gold">Request Quotation</QuoteButton>
            <Link href="/export-process" className="btn-brand">
              See our export process <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function TargetIcon() {
  return <Icon name="Target" className="h-6 w-6" />;
}

function EyeIcon() {
  return <Icon name="Eye" className="h-6 w-6" />;
}
