// Structured data (schema.org JSON-LD) builders. Every fact here comes from the site's own content
// (lib/content.ts and the pages); nothing is invented. In particular there are no star ratings,
// because the site's testimonials carry none.
import { BLOG_POSTS, CONTACT, JULIE_ROLES, OUR_SERVICES, SERVICE_DETAILS, TESTIMONIALS, CASE_STUDY } from "@/lib/content";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const ORG_ID = `${SITE_URL}/#organization`;
export const JULIE_ID = `${SITE_URL}/#julie-bell`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Northern Ireland" },
  { "@type": "Country", name: "Ireland" },
  { "@type": "Country", name: "United Kingdom" },
];

export function graph(...nodes: Record<string, unknown>[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

// Site-wide: the business, its website and its founder. Rendered once in the root layout.
export function siteSchema() {
  return graph(
    {
      "@type": ["ProfessionalService", "EmploymentAgency"],
      "@id": ORG_ID,
      name: "Bell Recruitment",
      alternateName: "Bell Recruitment Services",
      url: `${SITE_URL}/`,
      logo: absoluteUrl("/images/logo.png"),
      image: absoluteUrl("/images/hero-bg.png"),
      description:
        "Specialist FMCG recruitment and executive search consultancy in Belfast, founded in 1999 by Julie Bell, placing commercial, sales, operations, technical, procurement, production, supply chain, finance and engineering talent across Northern Ireland, Ireland and the UK.",
      foundingDate: "1999",
      founder: { "@id": JULIE_ID },
      telephone: CONTACT.phone,
      email: CONTACT.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "24 Mount Charles",
        addressLocality: "Belfast",
        postalCode: "BT7 1NZ",
        addressCountry: "GB",
      },
      areaServed: AREA_SERVED,
      knowsAbout: [
        "FMCG recruitment",
        "Executive search",
        "Candidate assessment and screening",
        "Psychometric testing",
        "Talent pipelining",
        "Talent sourcing and market mapping",
        "Market intelligence",
      ],
      sameAs: [CONTACT.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Bell Recruitment",
      inLanguage: "en-GB",
      publisher: { "@id": ORG_ID },
    },
    {
      "@type": "Person",
      "@id": JULIE_ID,
      name: "Julie Bell",
      jobTitle: "Founder and CEO",
      worksFor: { "@id": ORG_ID },
      image: absoluteUrl("/images/julie-bell.jpg"),
      url: absoluteUrl("/about-us/"),
      knowsAbout: ["FMCG recruitment", "Executive search"],
      memberOf: JULIE_ROLES.map((r) => ({
        "@type": "Organization",
        name: r.replace(/^(Council Member|Committee Member|Board Member) of (the )?/, ""),
      })),
    },
  );
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

function serviceNode(name: string, description: string, url: string) {
  return {
    "@type": "Service",
    name,
    serviceType: name,
    description,
    url,
    provider: { "@id": ORG_ID },
    areaServed: AREA_SERVED,
  };
}

// The seven services shown on the home page.
export function homeServicesSchema() {
  return graph(...OUR_SERVICES.map((s) => serviceNode(s.title, s.text, absoluteUrl("/services/"))));
}

// Executive Search and Recruitment, as described on the Services page.
export function mainServicesSchema() {
  return graph(
    ...SERVICE_DETAILS.map((d) => serviceNode(d.title, [d.tagline, ...d.intro].join(" "), absoluteUrl("/services/"))),
  );
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Client testimonials as Review items. No rating is given (the testimonials have none), so there is
// no AggregateRating either: one must never be made up.
export function reviewsSchema() {
  return graph(
    ...Object.values(TESTIMONIALS).map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: {
        "@type": "Person",
        name: t.name,
        jobTitle: t.role,
        worksFor: { "@type": "Organization", name: t.company },
      },
      itemReviewed: { "@id": ORG_ID },
    })),
  );
}

export function caseStudySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${CASE_STUDY.title} case study: ${CASE_STUDY.subtitle}`,
    description: `${CASE_STUDY.challenge.text} ${CASE_STUDY.outcome.text}`,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: absoluteUrl("/employers/how-we-hire/"),
    about: [
      { "@type": "Organization", name: CASE_STUDY.title },
      { "@type": "Service", name: "Executive search", provider: { "@id": ORG_ID } },
    ],
  };
}

export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Bell Recruitment blog",
    url: absoluteUrl("/blogs/"),
    publisher: { "@id": ORG_ID },
    blogPost: BLOG_POSTS.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      image: absoluteUrl(p.image),
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      mainEntityOfPage: absoluteUrl("/blogs/"),
    })),
  };
}
