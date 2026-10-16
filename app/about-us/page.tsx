import type { Metadata } from "next";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import Founder from "@/components/Founder";
import PageHero from "@/components/PageHero";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProofStrip from "@/components/ProofStrip";
import ServiceDetail from "@/components/ServiceDetails";
import { JULIE_ROLES, SERVICE_DETAILS, URLS } from "@/lib/content";

// Copy: "3. About Us" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "About Bell Recruitment | FMCG Recruitment Specialists Northern Ireland, Ireland and United Kingdom" },
  description:
    "Bell Recruitment is an FMCG executive search firm founded in 1999 by Julie Bell, who spent ten years at Pepsi, 7UP, Ballygowan and Budweiser before starting the business.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="About Bell Recruitment: FMCG Recruitment Specialists in Northern Ireland, Ireland and United Kingdom"
        image="/images/hero-bg.png"
        imagePosition="70% 30%"
        buttons={[
          { label: "Hire FMCG talent", href: URLS.hire },
        ]}
      >
        Bell Recruitment was founded in 1999 by Julie Bell with one aim: to be the best FMCG recruiter in Northern
        Ireland, by combining real FMCG experience with a personal, people-first approach. More than 25 years later,
        that is still how we work.
      </PageHero>

      <section className="section">
        <div className="container split">
          <div>
            <div className="section-label">Our story</div>
            <h2>Built around people. Driven by relationships</h2>
            <p className="lead">
              From the beginning, the aim was never simply to fill vacancies. It was to understand people, understand
              businesses and build relationships that last. By combining genuine industry knowledge with a personal
              approach, Bell Recruitment creates a recruitment experience built on trust, integrity, quality
              and results.
            </p>
            <p>More than 25 years later, that philosophy remains at the heart of the business.</p>
            <p>
              Bell Recruitment has grown through long standing relationships with clients and candidates, many of whom
              have worked with us for years. We believe that successful recruitment is about making the right
              connection between the right person and the right organisation.
            </p>
            <p>
              Bell Recruitment brings together industry expertise, personal relationships and a genuine understanding
              of people.
            </p>
            <div className="story-close">
              <p>At Bell Recruitment, people will always come first.</p>
            </div>
          </div>
          <div className="split-photo split-photo-tall">
            <Image
              src="/images/hero-bg.png"
              alt="Julie Bell on a call with a client"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 540px"
              style={{ objectPosition: "42% 30%" }}
            />
          </div>
        </div>
      </section>

      {SERVICE_DETAILS.map((d, i) => (
        <section className={`section${i === 0 ? " section-dark" : ""}`} key={d.title}>
          <div className="container">
            <ServiceDetail item={d} />
          </div>
        </section>
      ))}

      <section className="section section-alt section-tight">
        <div className="container">
          <h2 className="center">Bell Recruitment at a glance</h2>
        </div>
      </section>
      <ProofStrip
        items={[
          { value: "1999", label: "Founded by Julie Bell", countUp: false },
          { value: "25+", label: "Years placing FMCG talent" },
          { value: "1000+", label: "Placements" },
          { value: "105", label: "Brand partners" },
        ]}
      />

      <section className="section">
        <div className="container">
          <Founder title="Julie Bell">
            <p>
              Bell Recruitment was launched in 1999 by Founder and CEO Julie Bell, with a clear vision: to be the best
              FMCG Recruiter by combining her FMCG industry knowledge with a personal, people-first approach.
            </p>
            <p>
              Now with over 25 years&rsquo; experience, the business has grown steadily, built on long-standing
              relationships with both clients and candidates, and a reputation for quality, integrity, and results.
            </p>
            <p>
              Before founding the business, Julie spent a decade working within FMCG for brands including Pepsi, 7UP,
              Ballygowan water and Budweiser, across promotional activity, merchandising, and sales roles &ndash;
              experience that continues to shape the way Bell Recruitment works with clients today.
            </p>
            <p>Julie is also active beyond the business, holding several notable roles:</p>
            <ul className="roles-list">
              {JULIE_ROLES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p>
              <strong>At Bell Recruitment, people are at the heart of everything we do.</strong>
            </p>
          </Founder>
        </div>
      </section>

      <PartnerCarousel />

      <CtaBand
        title="Let’s talk about your next FMCG hire"
        image="/images/team-success.jpg"
        buttons={[
          { label: "Hire FMCG talent", href: URLS.hire },
        ]}
      />
    </>
  );
}
