import type { Metadata } from "next";
import Image from "next/image";
import { ButtonRow } from "@/components/ButtonLink";
import FaqList from "@/components/FaqList";
import ExpertiseGrid from "@/components/ExpertiseGrid";
import Founder from "@/components/Founder";
import LetterReveal from "@/components/LetterReveal";
import PartnerCarousel from "@/components/PartnerCarousel";
import ProofStrip from "@/components/ProofStrip";
import ServiceCards from "@/components/ServiceCards";
import ServiceDetail from "@/components/ServiceDetails";
import TestimonialGrid from "@/components/TestimonialGrid";
import Tilt from "@/components/Tilt";
import { BLOG_POSTS, EXPERTISE, JULIE_ROLES, OUR_SERVICES, SERVICE_DETAILS, URLS } from "@/lib/content";

// Copy: "1. Home" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "FMCG Recruitment Northern Ireland, Ireland and United Kingdom | Bell Recruitment" },
  description:
    "FMCG executive search in Northern Ireland since 1999. Sales, key account and commercial hires. Search begins within 24 hours.",
};

const LOCATIONS = [
  "Belfast",
  "Bangor",
  "Lisburn",
  "Newry",
  "Portadown",
  "Craigavon",
  "Armagh",
  "Ballymena",
  "Derry/Londonderry",
  "Dublin",
  "Cork",
  "Limerick",
  "Galway",
  "Waterford",
  "Donegal",
  "Cardiff",
  "Edinburgh",
  "York",
  "Brighton",
  "London",
  "Cambridge",
  "Oxford",
  "Manchester",
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="hero-badge">
              <span className="hero-badge-dot" /> FMCG Recruitment Specialists &middot; Belfast
            </div>
            <h1>
              Sourcing the best <em>FMCG talent</em>
            </h1>
            <p>
              Julie Bell, Founder &amp; CEO of Bell Recruitment, has been delivering the best FMCG talent and
              Executive Search solutions for over 25 years, connecting leading food, beverage, and consumer
              goods brands with exceptional commercial talent across Northern Ireland, Ireland, and the UK.
            </p>
            <ButtonRow
              buttons={[
                { label: "Hire FMCG talent", href: URLS.hire, variant: "light" },
                { label: "Find FMCG jobs", href: URLS.jobs, variant: "outline" },
              ]}
            />
          </div>
          <Tilt className="hero-photo">
            <Image
              src="/images/hero-bg.png"
              alt="Julie Bell on a call with a client"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) 100vw, 520px"
              priority
            />
            <div className="hero-chip hero-chip-years">
              <strong>25+</strong>
              <span>
                years placing
                <br />
                FMCG talent
              </span>
            </div>
            <div className="photo-caption">
              <strong>Julie Bell</strong>
              <span>Founder &amp; CEO, Bell Recruitment</span>
            </div>
          </Tilt>
        </div>
      </section>

      <ProofStrip
        items={[
          { value: "1999", label: "Recruiting since", countUp: false },
          { value: "1000+", label: "Placements" },
          { value: "105", label: "Brand partners" },
        ]}
      />

      <PartnerCarousel />

      <section className="section section-alt">
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

      <section className="section">
        <div className="container">
          <div className="section-label">Roles we recruit</div>
          <h2>FMCG sales and commercial recruitment in Northern Ireland, Ireland and United Kingdom</h2>
          <p className="section-intro">
            Whether a hire works depends on the customers, the territory and the targets.
            These are the roles we recruit:
          </p>
          <ExpertiseGrid items={EXPERTISE} href={URLS.jobs} />
          <ButtonRow
            buttons={[{ label: "Browse FMCG jobs in Northern Ireland", href: URLS.jobs }]}
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-label">What we do</div>
          <h2>
            <LetterReveal text="Our Services" />
          </h2>
          <ServiceCards items={OUR_SERVICES} />
          <ButtonRow buttons={[{ label: "Learn more about our services", href: URLS.services }]} />
        </div>
      </section>

      {SERVICE_DETAILS.map((d, i) => (
        <section className={`section${i === 0 ? " section-dark" : ""}`} key={d.title}>
          <div className="container">
            <ServiceDetail item={d} />
          </div>
        </section>
      ))}

      <section className="section section-alt">
        <div className="container text-center">
          <div className="section-label">Where we work</div>
          <h2 className="center">Recruiting for FMCG employers across Northern Ireland, Ireland and United Kingdom</h2>
          <p className="section-intro center">
            We work with FMCG businesses throughout Northern Ireland.
          </p>
          <ul className="loc-pills" aria-label="Locations">
            {LOCATIONS.map((l) => (
              <li className="loc-pill" key={l}>
                <i className="fas fa-location-dot" aria-hidden="true" /> {l}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-center">
            <div className="section-label">Client testimonials</div>
            <h2>What FMCG employers say about Bell Recruitment</h2>
          </div>
          <TestimonialGrid ids={["irwins", "richmond", "courtneyNelson"]} swipeOnMobile />
          <ButtonRow center buttons={[{ label: "Read more client reviews", href: URLS.testimonials }]} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container container-faq">
          <div className="section-label">FAQs</div>
          <h2>Frequently asked questions</h2>
          <FaqList
            items={[
              {
                q: "What does Bell Recruitment specialise in?",
                a: "FMCG executive search in Northern Ireland, covering sales, key account, brand and commercial roles.",
              },
              { q: "How quickly will you start the search?", a: "Within 24 hours of receiving your job description." },
              {
                q: "Do I need FMCG experience to apply?",
                a: "It depends on the vacancy. Some employers require it and others consider transferable sales experience.",
              },
            ]}
          />
          <ButtonRow buttons={[{ label: "See all FAQs", href: URLS.faqs, variant: "ghost" }]} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-center">
            <div className="section-label">Blogs</div>
            <h2>Latest from Bell Recruitment</h2>
          </div>
          <div className="card-grid-3 mobile-swipe">
            {BLOG_POSTS.map((post) => (
              <article className="blog-card" key={post.title}>
                <Image src={post.image} alt="" width={800} height={500} sizes="(max-width: 900px) 100vw, 380px" />
                <div className="body">
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <ButtonRow center buttons={[{ label: "View all blogs", href: URLS.blogs }]} />
        </div>
      </section>
    </>
  );
}
