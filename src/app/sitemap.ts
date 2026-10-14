import type { MetadataRoute } from "next";
import { NAV } from "@/data/site";
import { SITE_URL } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return NAV.map((item) => ({
    url: `${SITE_URL}${item.href === "/" ? "" : item.href}`,
    lastModified,
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
