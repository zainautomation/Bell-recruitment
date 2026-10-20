import type { MetadataRoute } from "next";
import { SITE_PAGES, absoluteUrl } from "@/lib/site";

// Served at /sitemap.xml. Edit SITE_PAGES in lib/site.ts when a page is added or removed.
export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PAGES.map((p) => ({
    url: absoluteUrl(p.path),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
