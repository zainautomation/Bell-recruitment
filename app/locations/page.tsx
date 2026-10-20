import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { LOCATIONS, URLS } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/locations/" },
  title: "Cities, Areas and Regions | Bell Recruitment",
  description:
    "FMCG executive search and recruitment for businesses across Northern Ireland, Ireland and the UK: the cities, areas and regions we work in.",
};

const AREA_TEXT = {
  ni: "across Northern Ireland",
  ie: "across Ireland",
  uk: "across the UK",
} as const;

export default function LocationsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Where we work", path: "/locations/" }])} />
      <PageHero eyebrow="Where we work" title="Where We Work">
        We work with FMCG businesses throughout Northern Ireland, Ireland and the UK.
      </PageHero>

      <section className="section">
        <div className="container">
          <h2 className="locations-heading">Cities, areas and regions.</h2>
          <div className="locations-panel">
            <h2>We help clients from across a range of cities and towns.</h2>
            <div className="locations-grid">
              {LOCATIONS.map((l) => (
                <article className="location-card" key={l.name}>
                  <h3>{l.name}</h3>
                  <p>
                    FMCG executive search and recruitment for businesses in {l.name}, supporting senior, commercial
                    and sales appointments {AREA_TEXT[l.area]}.
                  </p>
                  <Link href={URLS.contact} className="location-arrow" aria-label={`Talk to us about hiring in ${l.name}`}>
                    <i className="fas fa-arrow-right" aria-hidden="true" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
