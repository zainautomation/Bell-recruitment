// Public address of the site. Used for the sitemap, robots.txt, canonical links and structured data.
// Override with NEXT_PUBLIC_SITE_URL (for example on a preview deployment); no trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.bellrecruitment.net").replace(/\/+$/, "");

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// Pages that belong in the sitemap. Paths end in a slash because the site uses trailingSlash.
// `lastModified` is the date the page's content last changed (YYYY-MM-DD). Update it by hand when a
// page's text changes; a date that moves on every deploy teaches Google to ignore it.
const SITE_UPDATED = "2026-10-22";
const ARTICLES_PUBLISHED = "2026-10-20";
const NEW_ARTICLES_PUBLISHED = "2026-10-28";
const AUTHOR_ADDED = "2026-10-29";

export const SITE_PAGES: {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
  lastModified: string;
}[] = [
  { path: "/", priority: 1, changeFrequency: "weekly", lastModified: NEW_ARTICLES_PUBLISHED },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly", lastModified: SITE_UPDATED },
  { path: "/about-us/", priority: 0.8, changeFrequency: "monthly", lastModified: SITE_UPDATED },
  { path: "/employers/how-we-hire/", priority: 0.8, changeFrequency: "monthly", lastModified: SITE_UPDATED },
  { path: "/faqs/", priority: 0.7, changeFrequency: "monthly", lastModified: SITE_UPDATED },
  { path: "/locations/", priority: 0.6, changeFrequency: "monthly", lastModified: AUTHOR_ADDED },
  { path: "/blogs/", priority: 0.6, changeFrequency: "weekly", lastModified: AUTHOR_ADDED },
  { path: "/blogs/fmcg-jobs-northern-ireland/", priority: 0.7, changeFrequency: "monthly", lastModified: AUTHOR_ADDED },
  { path: "/blogs/fmcg-recruitment-agency-ireland/", priority: 0.7, changeFrequency: "monthly", lastModified: AUTHOR_ADDED },
  { path: "/blogs/how-to-attract-top-fmcg-talent/", priority: 0.7, changeFrequency: "monthly", lastModified: AUTHOR_ADDED },
  { path: "/blogs/preparing-your-cv-for-a-commercial-role/", priority: 0.7, changeFrequency: "monthly", lastModified: AUTHOR_ADDED },
  { path: "/blogs/executive-search-vs-recruitment/", priority: 0.7, changeFrequency: "monthly", lastModified: AUTHOR_ADDED },
  { path: "/cv-upload/", priority: 0.6, changeFrequency: "yearly", lastModified: SITE_UPDATED },
  { path: "/contact-us/", priority: 0.6, changeFrequency: "yearly", lastModified: AUTHOR_ADDED },
  { path: "/privacy-policy/", priority: 0.2, changeFrequency: "yearly", lastModified: SITE_UPDATED },
];
