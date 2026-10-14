/**
 * i18n scaffolding — English is live, Arabic is prepared but not yet shipped.
 *
 * To add a locale: create its dictionary (e.g. ./ar), add it to `locales`,
 * and translate the strings. Pages read shared UI strings through `t`.
 */

export const locales = ["en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Languages prepared for future release (shown as "coming soon" in the UI). */
export const plannedLocales: { code: string; label: string; nativeLabel: string }[] = [
  { code: "ar", label: "Arabic", nativeLabel: "العربية" },
];

export interface Dictionary {
  nav: {
    more: string;
    requestQuotation: string;
    menu: string;
    close: string;
    language: string;
    theme: string;
  };
  common: {
    viewProducts: string;
    requestQuotation: string;
    contactUs: string;
    learnMore: string;
    inquire: string;
    placeholderNotice: string;
    readMore: string;
    backToHome: string;
  };
  footer: {
    tagline: string;
    newsletterTitle: string;
    newsletterText: string;
    newsletterPlaceholder: string;
    rights: string;
    markets: string;
  };
}

export const en: Dictionary = {
  nav: {
    more: "More",
    requestQuotation: "Request Quotation",
    menu: "Open menu",
    close: "Close menu",
    language: "Language",
    theme: "Toggle dark mode",
  },
  common: {
    viewProducts: "View Products",
    requestQuotation: "Request Quotation",
    contactUs: "Contact Us",
    learnMore: "Learn More",
    inquire: "Send Inquiry",
    placeholderNotice:
      "Items marked as placeholder are pending confirmation by Imran Khan & Co.",
    readMore: "Read More",
    backToHome: "Back to Home",
  },
  footer: {
    tagline: "Premium Pakistani halal beef exported to Qatar and the GCC.",
    newsletterTitle: "Stay Updated",
    newsletterText: "Product updates and export news — no spam, unsubscribe anytime.",
    newsletterPlaceholder: "your@company.com",
    rights: "All rights reserved.",
    markets: "Export Markets",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? en;
}
