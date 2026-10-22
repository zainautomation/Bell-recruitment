import type { NextConfig } from "next";

// Current external jobs board, used until the planned /jobs/ pages are written.
const JOBS_BOARD = "https://www.careers-page.com/bellrecruitment";

const nextConfig: NextConfig = {
  // Keep the original site's trailing-slash URLs (/about-us/, /services/ ...).
  trailingSlash: true,
  // Basic hardening headers for every page. No Content-Security-Policy: the pages use inline
  // JSON-LD and a small inline script, which a strict policy would block.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The Services page moved from /employer/ to /services/ (content document URL).
      { source: "/employer/", destination: "/services/", permanent: true },
      // The Candidates and Testimonials pages were removed; send old links to the home page.
      { source: "/candidates/how-it-works/", destination: "/", permanent: true },
      { source: "/testimonials/", destination: "/", permanent: true },
      // Planned pages from the content document that are not written yet. Temporary
      // redirects, so they can be replaced by real pages without browsers caching them.
      // Remove each entry when its page is added under app/jobs/.
      { source: "/jobs/", destination: JOBS_BOARD, permanent: false },
      { source: "/jobs/sales-roles-northern-ireland/", destination: JOBS_BOARD, permanent: false },
    ];
  },
};

export default nextConfig;
