/** Absolute site URL used for SEO metadata, sitemap and schema markup. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com").replace(
  /\/$/,
  ""
);
