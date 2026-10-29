import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { LOCATIONS, URLS } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/locations/" },
  title: "FMCG Recruitment in Ireland and the UK",
  description:
    "FMCG executive search and recruitment for businesses across Northern Ireland, Ireland and the UK: the cities, areas and regions we work in.",
};

// One block per region. The text is written once per region, from what Bell Recruitment knows about each
// market, rather than repeating a sentence for every city; the places are listed underneath.
const REGIONS = [
  {
    area: "ni",
    title: "Northern Ireland",
    text: [
      "Belfast and the surrounding area has the highest concentration of FMCG head office, sales and marketing roles. Many manufacturers and distributors base their commercial teams in or around the city, even when production happens elsewhere.",
      "Beyond Belfast, much of Northern Ireland's food manufacturing sits in towns and rural areas across the province. Operations, technical and site leadership roles are often based at these sites, and some businesses run sites on both sides of the border. Bell Recruitment is based in Belfast and has been placing people into FMCG roles in Northern Ireland since 1999.",
    ],
    link: { label: "Read our guide to FMCG jobs in Northern Ireland", href: "/blogs/fmcg-jobs-northern-ireland/" },
  },
  {
    area: "ie",
    title: "Ireland",
    text: [
      "Many FMCG businesses sell north and south of the border, and many roles cover both. We recruit FMCG roles across the island of Ireland, including Dublin and the rest of the Republic, whether the hire is based in the Republic or covers an all-island territory.",
    ],
    link: { label: "How to choose an FMCG recruitment agency in Ireland", href: "/blogs/fmcg-recruitment-agency-ireland/" },
  },
  {
    area: "uk",
    title: "United Kingdom",
    text: [
      "Many Northern Ireland manufacturers are growing into Great Britain, so they need sales leaders who can win national listings as well as manage local accounts. We recruit senior, commercial and sales roles for FMCG businesses across the UK.",
    ],
    link: { label: "How FMCG executive search works", href: URLS.services },
  },
] as const;

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Where we work", path: "/locations/" }])} />
      <PageHero eyebrow="Where we work" title="FMCG Recruitment Across Northern Ireland, Ireland and the UK">
        We work with FMCG businesses throughout Northern Ireland, Ireland and the UK, from our base at 24 Mount Charles,
        Belfast.
      </PageHero>

      <section className="section">
        <div className="container-narrow">
          <p className="regions-intro">
            These are the cities, areas and regions our clients and candidates come from. If yours isn&rsquo;t listed,
            get in touch: the list is a guide, not a limit.
          </p>

          {REGIONS.map((r) => (
            <div className="region" key={r.area}>
              <h2>{r.title}</h2>
              {r.text.map((t) => (
                <p key={t}>{t}</p>
              ))}
              <ul className="place-list" aria-label={`Places we work in ${r.title}`}>
                {LOCATIONS.filter((l) => l.area === r.area).map((l) => (
                  <li key={l.name}>{l.name}</li>
                ))}
              </ul>
              <Link className="text-link" href={r.link.href}>
                {r.link.label}
              </Link>
            </div>
          ))}

          <div className="region-cta">
            <h2>Hiring, or looking for your next role?</h2>
            <p>Tell us about the role or send us your CV, and we&rsquo;ll talk it through in confidence.</p>
            <Link className="btn btn-burgundy" href={URLS.contact}>
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
