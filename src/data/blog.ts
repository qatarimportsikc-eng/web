/**
 * Blog-ready content layer.
 *
 * The structure below is ready for a CMS: replace the static array with data
 * fetched from a CMS (Sanity, Contentful, Markdown files, etc.) without
 * changing the /blog pages. No posts are published yet.
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO date
  author: string;
  category: string;
  /** Optional hero image path; falls back to a designed placeholder. */
  image?: string;
  body: string[];
}

export const POSTS: BlogPost[] = [];

export const BLOG_CATEGORIES = ["Company News", "Halal Export", "Cold Chain", "Market Insights"];
