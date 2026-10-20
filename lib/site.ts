// Public address of the site. Used for the sitemap, robots.txt, canonical links and structured data.
// Override with NEXT_PUBLIC_SITE_URL (for example on a preview deployment); no trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bellrecruitment.net").replace(/\/+$/, "");

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// Pages that belong in the sitemap. Paths end in a slash because the site uses trailingSlash.
export const SITE_PAGES: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about-us/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/employers/how-we-hire/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/locations/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blogs/", priority: 0.6, changeFrequency: "weekly" },
  { path: "/cv-upload/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/contact-us/", priority: 0.6, changeFrequency: "yearly" },
  { path: "/privacy-policy/", priority: 0.2, changeFrequency: "yearly" },
];
