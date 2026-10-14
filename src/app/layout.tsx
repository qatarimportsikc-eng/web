import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { QuoteProvider } from "@/components/Quote";
import { SITE } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE.name} — Premium Pakistani Halal Beef Exporter to Qatar & GCC`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "halal beef exporter",
    "Pakistani halal beef",
    "beef export Qatar",
    "GCC halal meat supplier",
    "frozen beef exporter",
    "fresh chilled beef",
    "boneless beef export",
    "halal meat Pakistan",
    "Imran Khan & Co",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE.name,
    title: `${SITE.name} — Premium Pakistani Halal Beef Exporter`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Premium Pakistani Halal Beef Exporter`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#0a231b",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE.name,
  alternateName: "Imran Khan and Co.",
  url: SITE_URL,
  slogan: SITE.tagline,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.contacts[0].phone,
  foundingLocation: "Pakistan",
  areaServed: SITE.markets.map((m) => ({ "@type": "Country", name: m })),
  contactPoint: SITE.contacts.map((c) => ({
    "@type": "ContactPoint",
    telephone: c.phone,
    contactType: "sales",
    areaServed: SITE.markets,
    availableLanguage: ["English", "Urdu", "Arabic"],
  })),
  knowsAbout: [
    "Halal beef export",
    "Fresh chilled beef",
    "Frozen beef",
    "Cold chain logistics",
    "Export documentation",
  ],
};

/** Applies the saved theme before paint to avoid a flash of the wrong theme. */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (stored === "dark" || (!stored && prefersDark)) {
      document.documentElement.classList.add("dark");
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only left-4 top-4 z-[100] rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-semibold text-brand-950 focus:not-sr-only focus:fixed"
        >
          Skip to content
        </a>
        <QuoteProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </QuoteProvider>
        <FloatingActions />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
