import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, MapPin, Quote } from "lucide-react";
import { Icon } from "@/components/Icon";
import { MapPlaceholder } from "@/components/MapPlaceholder";
import { PageHeader, SectionHeading } from "@/components/PageHeader";
import { QuoteButton } from "@/components/Quote";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import {
  COLD_CHAIN_PROCESS,
  COMPANY_STORY,
  GOALS,
  MISSION,
  QUALITY_PROMISE,
  TEAM,
  TIMELINE,
  TRUST_POINTS,
  VISION,
} from "@/data/about";
import { EXPORT_STEPS, FACILITIES, QUALITY_STANDARDS } from "@/data/operations";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Imran Khan & Co. — a trusted Pakistani exporter specializing in premium halal beef for Qatar and GCC markets. Our story, mission, vision, goals, facilities and export process.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Company Profile"
        title="About Imran Khan & Co."
        description="A trusted Pakistani exporter specializing in premium halal beef for Qatar and GCC markets — from carefully selected livestock to temperature-controlled logistics."
      />

      {/* Story */}
      <section className="py-20 sm:py-24">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <div className="space-y-5">
              <p className="eyebrow">Our Story</p>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                From selected livestock to your cold room
              </h2>
              {COMPANY_STORY.map((para) => (
                <p key={para.slice(0, 24)} className="leading-relaxed text-slate-600 dark:text-slate-300">
                  {para}
                </p>
              ))}
              <div className="rounded-2xl border border-gold-500/30 bg-gold-500/10 p-5">
                <p className="flex items-start gap-3 text-sm font-medium text-brand-900 dark:text-gold-200">
                  <Quote className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden="true" />
                  “{MISSION}”
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <QuoteButton className="btn-gold">Request Quotation</QuoteButton>
                <Link href="/quality" className="btn-outline">
                  Quality standards <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <div className="relative">
              <SmartImage
                alt="Imran Khan and Co processing facility"
                label="Company facility — photo placeholder"
                icon="Factory"
                aspect="aspect-[4/3]"
                className="rounded-3xl"
              />
              <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:block dark:border-white/10 dark:bg-brand-900">
                <p className="text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400">
                  Headquartered in
                </p>
                <p className="mt-1 flex items-center gap-2 font-display text-lg font-bold">
                  <MapPin className="h-4 w-4 text-gold-500" aria-hidden="true" /> Pakistan
                </p>
                <p className="mt-1 text-[11px] text-slate-400">Exporting to Qatar &amp; the GCC</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / Vision / Goals */}
      <section className="bg-slate-50 py-20 dark:bg-brand-900/30 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Mission · Vision · Goals"
            title="The direction of our company"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-brand-900/50">
                <span className="inline-flex rounded-2xl bg-gold-gradient p-3.5 text-brand-950">
                  <Icon name="Target" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">Mission</h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{MISSION}</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-brand-900/50">
                <span className="inline-flex rounded-2xl bg-gold-gradient p-3.5 text-brand-950">
                  <Icon name="Eye" className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold">Vision</h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-300">{VISION}</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-brand-900/50">
            <h3 className="mb-6 font-display text-2xl font-bold">Our Goals</h3>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GOALS.map((goal, i) => (
                <li
                  key={goal}
                  className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-white/5"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-xs font-bold text-brand-950">
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {goal}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Timeline"
            title="Our journey"
            description="Milestones are shown as placeholders until founding and export dates are confirmed by Imran Khan & Co."
          />
          <div className="relative mx-auto max-w-3xl">
            <span
              className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold-400 via-slate-200 to-transparent"
              aria-hidden="true"
            />
            <ol className="space-y-8">
              {TIMELINE.map((m, i) => (
                <li key={m.title} className="relative pl-14">
                  <span
                    className={`absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 text-[10px] font-bold ${
                      m.isPlaceholder
                        ? "border-dashed border-slate-300 bg-white text-slate-400 dark:border-slate-600 dark:bg-brand-950"
                        : "border-gold-400 bg-gold-gradient text-brand-950"
                    }`}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <Reveal delay={i * 0.06}>
                    <div
                      className={`rounded-2xl border p-5 ${
                        m.isPlaceholder
                          ? "border-dashed border-slate-300 bg-white dark:border-slate-600 dark:bg-brand-900/40"
                          : "border-gold-400/60 bg-gold-500/10 shadow-glow"
                      }`}
                    >
                      <p
                        className={`text-xs font-semibold uppercase tracking-widest ${
                          m.isPlaceholder ? "text-slate-400" : "text-gold-600 dark:text-gold-400"
                        }`}
                      >
                        {m.period}
                        {m.isPlaceholder ? " · placeholder" : ""}
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold">{m.title}</h3>
                      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{m.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Why customers trust us */}
      <section className="relative overflow-hidden bg-brand-gradient py-20 sm:py-24">
        <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Why Customers Trust Us"
            title="Standards we never compromise"
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_POINTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
                  <span className="inline-flex rounded-2xl bg-gold-gradient p-3 text-brand-950">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-white/65">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Export process overview */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Export Process"
            title="Twelve steps from inquiry to delivery"
            description="A transparent, repeatable workflow that keeps you informed at every stage of the order."
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXPORT_STEPS.slice(0, 8).map((s, i) => (
              <li key={s.step} className="h-full">
                <Reveal delay={(i % 4) * 0.07} className="h-full">
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-brand-900/40">
                  <div className="flex items-center justify-between">
                    <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-display text-2xl font-bold text-slate-200 dark:text-white/10">
                      {String(s.step).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold">{s.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    {s.description}
                  </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link href="/export-process" className="btn-brand">
              See the full export process <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-slate-50 py-20 dark:bg-brand-900/30 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Our Team"
            title="The people behind the exports"
            description="Named contacts from our company profile — formal titles and additional team members to be added."
          />
          <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 text-center dark:border-white/10 dark:bg-brand-900/50">
                  <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold-gradient font-display text-2xl font-bold text-brand-950">
                    {member.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{member.role}</p>
                  {member.phone ? (
                    <a
                      href={`tel:${member.phone.replace(/\s/g, "")}`}
                      className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:underline dark:text-gold-400"
                    >
                      <Icon name="Phone" className="h-4 w-4" /> {member.phone}
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Factory overview */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Factory Overview"
            title="Facilities built for hygiene and quality"
            description="Our facilities are designed to ensure the highest standards of hygiene, food safety, and product quality."
          />
          <div className="grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-2">
              <SmartImage
                alt="Halal processing facility overview"
                label="Factory overview — photo placeholder"
                icon="Factory"
                aspect="aspect-[4/3] lg:!aspect-auto lg:h-full"
                className="h-full rounded-3xl"
              />
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
              {FACILITIES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 2) * 0.08}>
                  <div className="flex h-full items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-gold-400/60 dark:border-white/10 dark:bg-brand-900/40">
                    <span className="rounded-xl bg-brand-50 p-2.5 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                      <Icon name={f.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold">{f.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cold chain process */}
      <section className="bg-slate-50 py-20 dark:bg-brand-900/30 sm:py-24">
        <div className="container-site">
          <SectionHeading
            eyebrow="Cold Chain Process"
            title="Temperature control at every handover"
            description="An unbroken chain of temperature-controlled steps from our cold rooms to the reefer container."
          />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {COLD_CHAIN_PROCESS.map((step, i) => (
              <li key={step.title} className="h-full">
                <Reveal delay={i * 0.08} className="h-full">
                  <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-brand-900/50">
                  <span className="absolute right-5 top-5 font-display text-3xl font-bold text-slate-100 dark:text-white/10">
                    {i + 1}
                  </span>
                  <span className="inline-flex rounded-2xl bg-brand-50 p-3 text-brand-700 dark:bg-white/5 dark:text-gold-300">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Quality promise */}
      <section className="py-20 sm:py-24">
        <div className="container-site">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-brand-gradient p-10 text-center sm:p-14 dark:border-white/10">
            <div className="pattern-dots absolute inset-0 opacity-25" aria-hidden="true" />
            <div className="relative mx-auto max-w-3xl">
              <BadgeCheck className="mx-auto h-10 w-10 text-gold-300" aria-hidden="true" />
              <p className="eyebrow mt-5">Quality Promise</p>
              <blockquote className="mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                “{QUALITY_PROMISE}”
              </blockquote>
              <p className="mt-5 text-sm uppercase tracking-widest text-white/50">
                {QUALITY_STANDARDS.length} documented quality standards · 100% halal slaughter
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <QuoteButton className="btn-gold">Request Quotation</QuoteButton>
                <Link href="/gallery" className="btn-outline !text-white">
                  View our gallery
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <MapPlaceholder />
          </div>
        </div>
      </section>
    </>
  );
}
