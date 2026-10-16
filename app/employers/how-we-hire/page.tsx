import type { Metadata } from "next";
import { ButtonRow } from "@/components/ButtonLink";
import CtaBand from "@/components/CtaBand";
import FaqList from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import CaseStudy from "@/components/CaseStudy";
import ProcessSteps from "@/components/ProcessSteps";
import TestimonialGrid from "@/components/TestimonialGrid";
import { URLS } from "@/lib/content";

// Copy: "5. Client Process" in the client's Website Content document.

export const metadata: Metadata = {
  title: { absolute: "FMCG Recruitment Process for Employers | Bell Recruitment" },
  description:
    "How Bell Recruitment hires for FMCG employers in Northern Ireland: search begins in 24 hours, with rigorous candidate assessment.",
};

export default function HowWeHirePage() {
  return (
    <>
      <PageHero
        eyebrow="For employers"
        title="How Bell Recruitment Hires for FMCG Employers"
        image="/images/employer-meeting.jpg"
        imagePosition="50% 35%"
      >
        Send us the job description and we start the search within 24 hours. This page explains what happens from
        your first call to your new hire&rsquo;s start date, so you know what to expect at each step.
      </PageHero>

      <section className="section">
        <div className="container text-center">
          <div className="section-label">Our FMCG recruitment process</div>
          <h2 className="center">How we recruit, step by step</h2>
          <ProcessSteps
            vertical
            steps={[
              {
                title: "The brief",
                text: "Before we search, we sit down with you to understand the role and the business behind it. We ask what the job really involves, who it reports to, and what the first year should deliver. We also ask what experience is essential, and what kind of person will fit your team.",
              },
              {
                title: "The search begins within 24 hours",
                text: "Once we have agreed the job description, we go straight to our network across food, drink and FMCG in Northern Ireland and Ireland. That includes people who aren’t actively looking. Many of the best candidates never apply to adverts, so we approach them directly and in confidence.",
              },
              {
                title: "Candidate assessment",
                text: "We interview every candidate ourselves before you see them. We test their experience against your brief, look at what they’ve actually achieved, and consider how they’ll fit your culture and your team. We check that the move makes sense for them as well as for you.",
              },
              {
                title: "The shortlist",
                text: "You see only the strongest matches. Each one comes with our notes: what they’ve achieved, what they’re looking for, and why we think they’re right for the role.",
              },
              {
                title: "Interviews and offer",
                text: "We arrange interviews and gather feedback from both sides. We also help with salary and package discussions, and keep everyone informed until an offer is accepted. Candidates hear from us at every stage.",
              },
              {
                title: "Start date and 90-day guarantee",
                text: "We stay in touch with your new hire right up to their start date. If someone we place leaves within 90 days, we’ll find a replacement.",
              },
            ]}
          />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <CaseStudy />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head-center">
            <div className="section-label">Client testimonials</div>
            <h2>What FMCG employers say about Bell Recruitment</h2>
          </div>
          <TestimonialGrid ids={["irwins", "richmond", "courtneyNelson", "gmMarketing", "prepHouse", "henderson"]} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container container-faq">
          <div className="section-label">FAQs</div>
          <h2>Frequently asked questions</h2>
          <FaqList
            items={[
              { q: "How quickly will you start the search?", a: "Within 24 hours of receiving your job description." },
              {
                q: "How do you find candidates?",
                a: "We start with your brief, search our network and approach people directly, including those who aren’t applying for jobs.",
              },
              {
                q: "How do you check candidates?",
                a: "Through rigorous screening, structured interviews and behavioural assessment, plus references.",
              },
              { q: "Can the search be confidential?", a: "Yes. Our process is confidential from first approach to offer." },
            ]}
          />
          <ButtonRow buttons={[{ label: "See all FAQs", href: URLS.faqs, variant: "ghost" }]} />
        </div>
      </section>

      <CtaBand
        title="Ready to brief us on your next FMCG hire?"
        image="/images/warehouse-logistics.jpg"
        buttons={[{ label: "Send us a vacancy", href: URLS.contact }]}
      />
    </>
  );
}
