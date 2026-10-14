# Imran Khan & Co. — Premium Pakistani Halal Beef Exporter

Modern, responsive B2B export website for **Imran Khan & Co.**, a Pakistani halal beef exporter
serving Qatar and the GCC. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS,
Framer Motion and Lucide icons.

> **Source of truth:** the company profile presentation. Every business fact on the site comes from
> it. Anything the profile does not contain (MOQ, shelf life, addresses, dates, real reviews,
> photos) is shown as a clearly labelled **placeholder** — nothing has been invented.

## Quick start

```bash
npm install          # already installed in this workspace
npm run dev          # dev server on http://localhost:3000
npm run build        # production build
npm run start        # serve the production build
npm run typecheck    # tsc --noEmit
```

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, why choose us, mission/vision/goals, export markets, industries, featured products, testimonials, packaging, certificates, contact + map + newsletter |
| `/about` | Story, mission, vision, goals, timeline (placeholder), trust points, export process, team, factory, cold chain, quality promise |
| `/products` | Full catalog with search, category filters and storage filters |
| `/meat-cuts` | 16 premium cuts with recommended use, availability and packaging |
| `/packaging` | 8 packaging styles, specification matrix (indicative), cold chain highlights |
| `/quality` | 8 quality standards + interactive farm-to-delivery QC timeline |
| `/industries` | 12 industries served |
| `/export-process` | 12-step alternating timeline |
| `/reviews` | 5.0 rating summary, animated slider, filterable grid — **all sample reviews, labelled** |
| `/gallery` | 10 categories, lightbox (keyboard accessible) — photo placeholders |
| `/faq` | 9 FAQs with FAQPage schema; unknown answers marked as placeholders |
| `/contact` | Validated inquiry form, direct contact details, map placeholder |
| `/blog` | CMS-ready structure (typed posts in `src/data/blog.ts`), empty state until posts are added |

## Features

- Sticky glass navigation with "More" dropdown, mobile full-screen menu, dark/light mode
  (persisted, no flash), language switcher (English live, Arabic prepared)
- Global **Request Quotation** popup (prefills the selected product), floating WhatsApp button,
  back-to-top
- Scroll animations (Framer Motion, respects `prefers-reduced-motion`), lazy-loaded images with
  branded placeholder fallbacks
- SEO: per-page metadata, Open Graph, XML sitemap, robots.txt, Organization/Product/FAQ schema
  markup
- Accessibility: skip link, labelled forms, focus rings, aria attributes, keyboard-operable
  lightbox and accordion
- Secure forms: client + server validation, honeypot, per-IP rate limiting

## Forms / API

- `POST /api/inquiry` — validates server-side. With `RESEND_API_KEY` + `INQUIRY_TO_EMAIL` set it
  sends email via Resend; otherwise it appends to `data/inquiries.jsonl` (dev/preview fallback).
- `POST /api/newsletter` — validates and appends to `data/newsletter.jsonl`.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Absolute URL used in metadata, sitemap, schema (defaults to `https://example.com` — **set your real domain**) |
| `RESEND_API_KEY` | Optional: enable email delivery for inquiries |
| `INQUIRY_TO_EMAIL` | Optional: where inquiries are delivered (e.g. `qatar.imports.ikc@gmail.com`) |
| `INQUIRY_FROM_EMAIL` | Optional: verified sender address for Resend |

## Placeholders awaiting company confirmation

Marked on-page with “placeholder / to be confirmed” labels:

- Exact MOQ, weights, shelf life and temperature specifications
- Certificate copies (halal, veterinary health, certificate of origin)
- Company timeline dates, team titles, office/plant address, response hours
- Google Maps embed (needs the address)
- Photography (hero, products, cuts, packaging, gallery)
- Customer reviews (sample reviews shown until real ones exist)
- Social media profile links

## i18n & CMS readiness

- `src/i18n` holds the shared UI dictionary; adding a locale = add a dictionary file + locale code.
  The header switcher shows Arabic as “coming soon”.
- `src/data/blog.ts` is a typed content layer — swap the static array for a CMS without touching
  the pages.

## Project structure

```
src/
  app/            # routes, layout, metadata, sitemap, robots, API routes
  components/     # header, footer, quote modal, forms, sliders, lightbox, cards
  data/           # all content data (products, cuts, packaging, faq, …)
  i18n/           # dictionaries, locale config
  lib/            # site URL helper
```
