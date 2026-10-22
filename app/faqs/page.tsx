import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import FaqList, { faqAnswerText, type Faq } from "@/components/FaqList";
import PageHero from "@/components/PageHero";
import { CONTACT, URLS } from "@/lib/content";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import Icon from "@/components/Icon";

// Copy: "7. FAQs" in the client's Website Content document. This is the only page with
// FAQ schema (client instruction); it is generated from the same questions shown below.

export const metadata: Metadata = {
  alternates: { canonical: "/faqs/" },
  title: { absolute: "FMCG Recruitment FAQs | Bell Recruitment" },
  description:
    "Answers for FMCG candidates and employers in Northern Ireland: how Bell Recruitment works.",
};

const ROLES_ANSWER =
  "Commercial Directors, Heads of Sales, Commercial Managers, Sales Executives and Representatives, Business Development Managers and Executives, National, Key, On-Trade and Off-Trade Account Managers, Marketing and Brand Managers, and commercial roles inside FMCG businesses.";

const CANDIDATE_FAQS: Faq[] = [
  { q: "Which FMCG roles does Bell Recruitment recruit?", a: ROLES_ANSWER },
  {
    q: "Do I need FMCG experience?",
    a: "It depends on the role. Some employers want direct FMCG sales experience and others will consider transferable experience, such as retail or wholesale.",
  },
  {
    q: "What happens after I upload my CV?",
    a: "We read your CV, check it against the roles we’re working on and call you if there’s a possible fit. We talk through the role with you before your details go to any employer.",
  },
  {
    q: "Will you send my CV to an employer without asking me?",
    a: "No. We speak to you first, and your CV only goes to an employer with your agreement.",
  },
  {
    q: "Do you have jobs that aren’t advertised?",
    a: "Yes. Many roles are filled before they reach a job board, because employers ask us to approach suitable people directly.",
  },
  {
    q: "How do I register with Bell Recruitment?",
    a: "Send us your CV through our Upload CV page, with your name, email, phone number and LinkedIn profile if you have one. We accept PDF, DOC and DOCX files.",
    link: { label: "Upload your CV", href: URLS.cvUpload },
  },
  {
    q: "What should I include on my FMCG CV?",
    a: "The territory or accounts you managed, the customers you sold to (retail, wholesale, foodservice, on-trade, off-trade), the products or categories you handled, your sales targets and what you achieved against them, and any growth you delivered, with numbers where you can.",
  },
];

const EMPLOYER_FAQS: Faq[] = [
  {
    q: "What does Bell Recruitment do?",
    a: "We provide FMCG executive search and recruitment across Northern Ireland, Ireland and the UK. We find commercial, sales and other leaders and professionals for FMCG businesses, approach them directly, assess each one and send you a short list.",
  },
  {
    q: "What is executive search?",
    a: "Executive search means approaching suitable people directly, including those not looking for a job, instead of waiting for applications. It’s usually confidential.",
  },
  { q: "Which FMCG roles do you recruit?", a: ROLES_ANSWER },
  {
    q: "How does Bell Recruitment find candidates?",
    a: "We start with your brief, then search from there:",
    steps: [
      "Brief. We agree what you sell, to whom, the territory, how performance is measured and which experience is essential.",
      "Search. We look through our network and approach people who aren’t applying for jobs.",
      "Assess. Every candidate goes through rigorous screening, structured interviews and behavioural assessment.",
      "Shortlist. You get the strongest matches, with notes on why each one fits.",
      "Offer. We support interviews, negotiation and the move to a start date.",
    ],
  },
  { q: "How quickly will you start the search?", a: "Within 24 hours of receiving your job description." },
  {
    q: "How do you check candidates?",
    a: "Through rigorous screening, structured interviews and behavioural assessment, plus references. The full process is on our Client Process page.",
    link: { label: "See the Client Process page", href: URLS.hire },
  },
  { q: "Can you recruit confidentially for a senior role?", a: "Yes. Our process is confidential from first approach to offer." },
  {
    q: "What is the difference between Executive Search and Recruitment?",
    a: "Executive Search is a retained, research-led service for senior, business-critical and confidential appointments, where we find and approach leaders who aren’t actively looking. Recruitment is for professional, management and operational roles you need filled well and quickly, using our network, candidate database and targeted advertising.",
    link: { label: "See our services", href: URLS.services },
  },
  {
    q: "What makes Bell Recruitment different from other recruitment agencies?",
    a: "Bell Recruitment was founded in 1999 by Julie Bell, who spent a decade working within FMCG for brands including Pepsi, 7UP, Ballygowan water and Budweiser. We specialise in FMCG, and many of our clients have worked with us for years, some for over 20.",
    link: { label: "About Bell Recruitment", href: URLS.aboutUs },
  },
  {
    q: "Which FMCG sectors does Bell Recruitment recruit in?",
    a: "We recruit across food, beverage, bakery, grocery, wholesale and distribution businesses, and across the wider consumer goods sector.",
  },
  {
    q: "Where does Bell Recruitment work?",
    a: "We help clients from a range of cities and towns across Northern Ireland, Ireland and the UK, including Belfast, Dublin, Cork, London and Edinburgh.",
    link: { label: "See where we work", href: URLS.locations },
  },
  {
    q: "Does Bell Recruitment offer psychometric testing?",
    a: "Yes. We offer online psychometric assessments that give deeper insight into candidates’ behavioural preferences, cognitive abilities and leadership potential, supporting evidence-based selection decisions.",
  },
  {
    q: "What is talent pipelining?",
    a: "Talent pipelining means building a pipeline of high-potential candidates ahead of your future recruitment needs. It strengthens succession planning and reduces time to hire.",
  },
  {
    q: "What is market mapping and market intelligence?",
    a: "Market mapping identifies where suitable talent is working across your sector, including high performers who aren’t looking for a new role. Our market intelligence covers talent availability, leadership markets, competitor activity, remuneration trends and organisational structures, to support informed hiring decisions.",
  },
];

const ALL_FAQS = [...CANDIDATE_FAQS, ...EMPLOYER_FAQS];

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "FAQs", path: "/faqs/" }])} />
      <JsonLd data={faqSchema(ALL_FAQS.map((f) => ({ q: f.q, a: faqAnswerText(f) })))} />

      <PageHero eyebrow="FAQs" title="FMCG Recruitment FAQs">
        Whether you&rsquo;re looking for your next FMCG opportunity or the right person for your team, here are answers
        to the questions we hear most often across Northern Ireland.
      </PageHero>

      <nav className="jump-links" aria-label="FAQ sections">
        <a href="#candidates">
          <Icon name="user" /> Candidate FAQs
        </a>
        <a href="#employers">
          <Icon name="building" /> Employer FAQs
        </a>
      </nav>

      <section className="section anchor-target" id="candidates">
        <div className="container container-faq">
          <div className="section-label">For candidates</div>
          <h2>Candidate FAQs</h2>
          <FaqList items={CANDIDATE_FAQS} />
        </div>
      </section>

      <section className="section section-alt anchor-target" id="employers">
        <div className="container container-faq">
          <div className="section-label">For employers</div>
          <h2>Employer FAQs</h2>
          <FaqList items={EMPLOYER_FAQS} />
        </div>
      </section>

      <CtaBand
        title="Still have a question?"
        image="/images/team-meeting.jpg"
        buttons={[
          { label: "Hire FMCG talent", href: URLS.hire },
        ]}
      />
    </>
  );
}
