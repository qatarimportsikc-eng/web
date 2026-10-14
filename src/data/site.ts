/**
 * Central site identity, navigation and contact data.
 * All values are taken from the uploaded Imran Khan & Co. company profile
 * presentation. Anything not present in the presentation is explicitly
 * marked as a placeholder.
 */

export const SITE = {
  name: "Imran Khan & Co.",
  monogram: "IKC",
  tagline: "Delivering Quality, You Can Trust.",
  alternateTagline: "Your Trusted Partner for Premium Halal Beef Exports",
  role: "Premium Pakistani Halal Beef Exporter",
  origin: "Pakistan",
  description:
    "Imran Khan & Co. is a trusted Pakistani exporter of premium halal beef for Qatar and GCC markets — fresh chilled, frozen and boneless beef with hygienic processing, vacuum packaging and temperature-controlled cold chain logistics.",
  email: "qatar.imports.ikc@gmail.com",
  whatsappNumber: "97430157663",
  whatsappDisplay: "+974 3015 7663",
  markets: ["Qatar", "Saudi Arabia", "United Arab Emirates", "Oman", "Kuwait", "Bahrain"],
  marketShort: ["Qatar", "Saudi Arabia", "UAE", "Oman", "Kuwait", "Bahrain"],
  contacts: [
    { name: "Murtaza Ali", phone: "+974 3015 7663", wa: "97430157663", role: "Point of contact" },
    { name: "Ahad Ali", phone: "+974 3015 6536", wa: "97430156536", role: "Point of contact" },
  ],
  address: {
    line: "Pakistan — plant & office address to be confirmed",
    isPlaceholder: true,
  },
} as const;

export type NavItem = { href: string; label: string };

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/meat-cuts", label: "Meat Cuts" },
  { href: "/packaging", label: "Packaging" },
  { href: "/quality", label: "Quality Assurance" },
  { href: "/industries", label: "Industries We Serve" },
  { href: "/export-process", label: "Export Process" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

/** Short list shown on desktop before the "More" dropdown. */
export const NAV_PRIMARY = NAV.filter((item) =>
  ["/", "/about", "/products", "/meat-cuts", "/packaging", "/quality"].includes(item.href)
);

/** Everything inside the "More" dropdown. */
export const NAV_MORE = NAV.filter(
  (item) => !NAV_PRIMARY.some((p) => p.href === item.href) && item.href !== "/contact"
);

export const FOOTER_LINKS = {
  company: NAV.filter((n) => ["/", "/about", "/reviews", "/blog"].includes(n.href)),
  offerings: NAV.filter((n) =>
    ["/products", "/meat-cuts", "/packaging", "/quality", "/industries"].includes(n.href)
  ),
  export: NAV.filter((n) => ["/export-process", "/faq", "/gallery", "/contact"].includes(n.href)),
};
