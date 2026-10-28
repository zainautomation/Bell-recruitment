// Full text of the blog articles. The cards on the Home and Blogs pages (BLOG_POSTS in
// lib/content.ts) link to /blogs/<slug>/ and the article page is built from the data below.
//
// Inside paragraphs and list items, links are written as [anchor text](/path/) and bold as **text**.
// Every statement about Bell Recruitment comes from the rest of this site; the rest is ordinary hiring
// and CV advice with no invented figures.

import { URLS } from "@/lib/content";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "compare"; heads: [string, string]; rows: [string, string, string][] };

export type Article = {
  seoTitle: string; // shown in search results; the site adds " | Bell Recruitment"
  description: string; // meta description
  published: string; // ISO date
  takeaways: string[];
  intro: string[];
  sections: { heading: string; blocks: Block[] }[];
  faqs?: { q: string; a: string }[]; // shown as "Frequently asked questions" and marked up as FAQPage
  cta: { title: string; text: string; buttons?: { label: string; href: string; variant: "light" | "outline" }[] };
};

const HIRE_BUTTONS: NonNullable<Article["cta"]["buttons"]> = [
  { label: "Hire FMCG talent", href: URLS.hire, variant: "light" },
  { label: "Contact us", href: URLS.contact, variant: "outline" },
];
const CANDIDATE_BUTTONS: NonNullable<Article["cta"]["buttons"]> = [
  { label: "Upload your CV", href: URLS.cvUpload, variant: "light" },
  { label: "Contact Julie", href: URLS.contact, variant: "outline" },
];

export const ARTICLES: Record<string, Article> = {
  "fmcg-jobs-northern-ireland": {
    seoTitle: "FMCG Jobs in Northern Ireland and Belfast",
    description:
      "Looking for FMCG jobs in Northern Ireland? Where the roles are, from Belfast to the regions, the skills employers want and how to land a head of sales role.",
    published: "2026-10-28",
    takeaways: [
      "Belfast and the surrounding area hold the most FMCG head office, sales and marketing roles, while production sites are spread across the province.",
      "Employers keep asking for commercial results you can prove, retail and foodservice knowledge, relationship skills and data confidence.",
      "Most head of sales roles are never advertised. They are filled through networks and executive search.",
      "It pays to be known to a specialist FMCG recruiter before you start looking.",
    ],
    intro: [
      "Northern Ireland punches well above its weight in food and drink. From bakeries and dairies to sauce makers, distilleries and meat processors, the region is home to manufacturers that supply supermarkets and foodservice customers across the UK, Ireland and beyond. That makes FMCG one of the most rewarding sectors to build a career in here.",
      "At Bell Recruitment, we've been placing people into FMCG roles in Northern Ireland since 1999. Here's where the jobs are, what employers are looking for, and how to position yourself for the next step.",
    ],
    sections: [
      {
        heading: "What counts as an FMCG job?",
        blocks: [
          {
            type: "p",
            text: "FMCG stands for fast-moving consumer goods: products people buy often and use quickly, such as food, drink, toiletries and household goods. FMCG jobs cover every stage of getting those products onto shelves, including:",
          },
          {
            type: "ul",
            items: [
              "**Sales:** field sales, telesales, sales executive and sales manager roles",
              "**Account management:** key account managers looking after retailers, wholesalers or foodservice customers",
              "**Marketing:** brand, trade and shopper marketing",
              "**Operations:** production, technical, quality, NPD and site management",
              "**Supply chain:** procurement, planning, logistics and customer service",
              "**Leadership:** heads of sales, commercial directors, general managers and managing directors",
            ],
          },
        ],
      },
      {
        heading: "Where are FMCG jobs in Northern Ireland?",
        blocks: [
          {
            type: "p",
            text: "**Belfast and the surrounding area** has the highest concentration of FMCG head office, sales and marketing roles. Many manufacturers and distributors base their commercial teams in or around the city, even when production happens elsewhere.",
          },
          {
            type: "p",
            text: "**Beyond Belfast,** much of Northern Ireland's food manufacturing sits in towns and rural areas across the province, with sites in Co Down, Co Armagh, Co Tyrone, Co Fermanagh and Co Antrim. Operations, technical and site leadership roles are often based at these sites, and some businesses run sites on both sides of the border.",
          },
          {
            type: "p",
            text: "**Field-based roles** cover a territory rather than an office. If you're in sales or account management, you may find your patch covers all of Northern Ireland, or Northern Ireland and the Republic together.",
          },
        ],
      },
      {
        heading: "Which FMCG skills are in demand?",
        blocks: [
          { type: "p", text: "Across the roles we recruit, employers keep asking for the same things:" },
          {
            type: "ol",
            items: [
              "**Commercial results you can prove.** Revenue growth, new listings, margin improvement and accounts won.",
              "**Retail and foodservice knowledge.** Understanding how the multiples, symbols, wholesalers and foodservice distributors buy.",
              "**Relationship skills.** FMCG in Northern Ireland is a small world. Employers value people who are trusted by buyers.",
              "**Data confidence.** Using EPOS, category and BI data to plan and win arguments with buyers.",
              "**Food industry standards.** For operations roles, knowledge of BRCGS, retailer codes of practice and food safety.",
            ],
          },
        ],
      },
      {
        heading: "Head of sales roles in FMCG in Northern Ireland",
        blocks: [
          {
            type: "p",
            text: "The head of sales is one of the most important hires an FMCG business makes, and one of the hardest to fill. Many local manufacturers are growing into GB and the Republic, so they need sales leaders who can win national listings as well as manage local accounts.",
          },
          { type: "p", text: "To be considered for a head of sales FMCG role in Northern Ireland, you'll usually need:" },
          {
            type: "ul",
            items: [
              "several years managing major retail or foodservice accounts",
              "experience leading and developing a sales team",
              "ownership of a sales budget, and ideally a P&L",
              "a record of new business wins, not just account maintenance",
              "the ability to work with production, finance and marketing on pricing, promotions and forecasting",
            ],
          },
          {
            type: "p",
            text: "Most head of sales roles are never advertised. They're filled through networks and [executive search](/services/). That's why it pays to be known to a specialist recruiter before you start looking.",
          },
        ],
      },
      {
        heading: "How to find FMCG jobs in Northern Ireland",
        blocks: [
          {
            type: "ul",
            items: [
              "**Talk to a specialist FMCG recruiter.** Many of the best roles are handled confidentially. A recruiter who knows the sector can tell you about them and represent you properly.",
              "**Get your CV FMCG-ready.** Lead with numbers: sales growth, listings won, accounts managed. Our [FMCG CV tips](/blogs/preparing-your-cv-for-a-commercial-role/) show you how.",
              "**Know your market value.** Ask a specialist recruiter what comparable roles are paying before you negotiate.",
              "**Build your network.** Industry events, trade shows and LinkedIn all help, because local buyers and suppliers talk to each other.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "Are there many FMCG jobs in Belfast?",
        a: "Yes. Belfast and its surrounding area hold many of Northern Ireland's FMCG head office, sales and marketing roles, while production roles are spread across the province.",
      },
      {
        q: "What qualifications do I need for an FMCG job in Northern Ireland?",
        a: "Most commercial roles value experience over qualifications. A degree in business, marketing or food science helps early in your career, and professional qualifications such as CIM or CIPS are useful for marketing and procurement roles.",
      },
      {
        q: "Do FMCG jobs in Northern Ireland cover the Republic of Ireland too?",
        a: "Often. Many Northern Ireland manufacturers sell across the island of Ireland, so sales and account management roles frequently cover both markets.",
      },
    ],
    cta: {
      title: "Looking for your next FMCG role?",
      text: "Bell Recruitment specialises in FMCG jobs across Northern Ireland and Ireland, from sales executives to managing directors. Upload your CV or contact Julie Bell for a confidential conversation.",
      buttons: CANDIDATE_BUTTONS,
    },
  },

  "fmcg-recruitment-agency-ireland": {
    seoTitle: "How to Choose an FMCG Recruitment Agency in Ireland",
    description:
      "Hiring in food, drink or consumer goods? Seven questions to ask any FMCG recruitment agency in Ireland before you trust it with your next key hire.",
    published: "2026-10-28",
    takeaways: [
      "Choose an agency that specialises in FMCG, and ask what share of its work is in food, drink and consumer goods.",
      "Check that it regularly fills roles at your level and can reach candidates who are not on the market.",
      "If you hire north and south of the border, make sure it has contacts and candidates in both markets.",
      "Ask how it assesses candidates, to see examples of similar results, and to give its terms in writing.",
    ],
    intro: [
      "The right FMCG hire can win you new listings, grow your margins and strengthen your team for years. The wrong one can cost you customers. So choosing a recruitment agency is a decision worth taking care over.",
      "There are plenty of generalist agencies in Ireland, but FMCG has its own language, customers and pressures. Here are seven questions to ask any FMCG recruitment agency before you brief it.",
    ],
    sections: [
      {
        heading: "1. Do you specialise in FMCG?",
        blocks: [
          {
            type: "p",
            text: "A specialist agency understands the difference between a key account manager for a multiple and one for a wholesaler, knows what a good foodservice track record looks like, and can tell when a candidate's numbers don't add up. Ask what proportion of its work is in food, drink and consumer goods, and which roles it fills most often.",
          },
        ],
      },
      {
        heading: "2. Which roles and seniority levels do you recruit?",
        blocks: [
          {
            type: "p",
            text: "Some agencies focus on volume roles, others on senior appointments. Check the agency regularly fills roles like yours, whether that's a field sales executive, a national account manager or a managing director.",
          },
        ],
      },
      {
        heading: "3. How will you find candidates?",
        blocks: [
          {
            type: "p",
            text: "The best FMCG candidates are often in work and not looking. An agency that relies only on job adverts will mostly reach active job seekers. Ask how it finds people who aren't on the market, through its network, direct approaches or [executive search](/services/).",
          },
        ],
      },
      {
        heading: "4. Do you cover the whole island of Ireland?",
        blocks: [
          {
            type: "p",
            text: "Many FMCG businesses sell north and south of the border, and many roles cover both. If you're hiring in Dublin, Belfast or for an all-island role, check the agency has contacts and candidates in both markets.",
          },
        ],
      },
      {
        heading: "5. How will you assess candidates?",
        blocks: [
          {
            type: "p",
            text: "You want a shortlist, not a pile of CVs. Ask how the agency screens candidates, whether it interviews them in person, and how it checks claims about sales results and customer relationships.",
          },
        ],
      },
      {
        heading: "6. Can you show me results?",
        blocks: [
          {
            type: "p",
            text: "Ask for examples of similar roles the agency has filled, client testimonials or case studies. A good agency will be happy to share them. You can read [how we recruited two senior leaders for Crust & Crumb and a managing director for Prep House](/employers/how-we-hire/).",
          },
        ],
      },
      {
        heading: "7. What are your terms?",
        blocks: [
          {
            type: "p",
            text: "Check the fee structure, when fees are payable, and what happens if a placement doesn't work out. Ask whether the agency offers a rebate or replacement period, and how long it lasts.",
          },
        ],
      },
      {
        heading: "Warning signs to watch for",
        blocks: [
          {
            type: "ul",
            items: [
              "CVs sent before the agency has properly understood your brief",
              "candidates who weren't told your company name or don't know the role",
              "pressure to decide quickly without a clear reason",
              "little knowledge of your customers or competitors",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        q: "What does an FMCG recruitment agency do?",
        a: "An FMCG recruitment agency finds, screens and presents candidates for roles in food, drink and consumer goods businesses, from sales and marketing to operations and leadership.",
      },
      {
        q: "Is there an FMCG recruiter that covers Dublin and Belfast?",
        a: "Yes. Bell Recruitment is based in Belfast and recruits FMCG roles across the island of Ireland, including Dublin and the rest of the Republic.",
      },
      {
        q: "How much does an FMCG recruitment agency cost?",
        a: "Most agencies charge a fee based on a percentage of the successful candidate's first-year salary. Senior executive search is often charged on a retained basis. Ask for terms in writing before you begin.",
      },
    ],
    cta: {
      title: "Talk to Bell Recruitment",
      text: "Bell Recruitment has been recruiting since 1999 and specialises in FMCG, placing people into food and drink businesses across Northern Ireland and Ireland. Contact Julie Bell to talk about your next hire.",
      buttons: HIRE_BUTTONS,
    },
  },

  "how-to-attract-top-fmcg-talent": {
    seoTitle: "Attract Top FMCG Talent: 7 Steps",
    description:
      "Seven practical steps for employers who want to attract top FMCG sales and commercial talent: a clear brief, the full package, speed and a direct approach.",
    published: "2026-10-20",
    takeaways: [
      "The strongest FMCG candidates are usually in a good job already, so you are competing for their attention.",
      "Be clear about the territory, the customers, the targets and the full package before you start.",
      "Move quickly and give feedback within a few days. Delays lose good people.",
      "Approach people directly. Many strong candidates never apply to adverts.",
    ],
    intro: [
      "The best FMCG sales and commercial people are usually doing well where they are. They are not scrolling job boards, and they will weigh up any approach against what they have now. If you want to hire them, you are competing for their attention as much as for their signature.",
      "These are the steps that make the biggest difference.",
    ],
    sections: [
      {
        heading: "1. Start with a clear picture of the job",
        blocks: [
          {
            type: "p",
            text: "Candidates decide quickly whether a role is worth a conversation, and a vague advert gives them little to go on. Before you start looking, be able to say what you sell and to whom, whether the role is new business, account management or both, which territory it covers and how much travel is involved, how performance is measured, and what the first year should deliver.",
          },
          {
            type: "p",
            text: "Separate what is essential from what is only preferred. A shortlist is quickest when the must-haves are agreed at the start.",
          },
        ],
      },
      {
        heading: "2. Show the whole package",
        blocks: [
          {
            type: "p",
            text: "Sales and commercial candidates compare packages line by line. Set out the basic salary, commission or bonus, car or van, pension and other benefits. If part of the package depends on targets, explain how the targets are set.",
          },
        ],
      },
      {
        heading: "3. Be honest about the territory and the travel",
        blocks: [
          {
            type: "p",
            text: "A territory that looks reasonable on a map can mean a lot of daily driving. Say what the patch is, which customers sit in it and how much time away from home the role involves. People accept a demanding territory when they know about it at the start. They leave when they find out later.",
          },
        ],
      },
      {
        heading: "4. Move quickly once you find someone good",
        blocks: [
          {
            type: "p",
            text: "Good FMCG people are often in demand, and delays lose them. Keep the number of interview stages sensible, agree the dates before you begin, and give feedback within a few days. Silence after an interview is a quick way to lose a good candidate's interest.",
          },
        ],
      },
      {
        heading: "5. Show where the role leads",
        blocks: [
          {
            type: "p",
            text: "Most strong candidates ask what comes next. Explain how the role could grow, who they would report to and what the people above them have gone on to do. A clear path counts for a lot when you are asking someone to leave a job that is going well.",
          },
        ],
      },
      {
        heading: "6. Reach people who are not applying",
        blocks: [
          {
            type: "p",
            text: "Many of the strongest candidates never respond to adverts. Approaching them directly, and in confidence, is often the only way to put your opportunity in front of them. That means knowing who is performing in the market, which takes a network built over time.",
          },
          {
            type: "p",
            text: "For senior roles, confidentiality matters even more. The person may not be ready to leave, and you may be replacing someone.",
          },
        ],
      },
      {
        heading: "7. Let candidates meet the team",
        blocks: [
          {
            type: "p",
            text: "People join teams as much as companies. Let them meet the person they would report to, and be straightforward about the culture and the management style they would work in.",
          },
        ],
      },
      {
        heading: "How Bell Recruitment can help",
        blocks: [
          {
            type: "p",
            text: "Bell Recruitment has recruited for FMCG businesses since 1999. Once we have agreed the job description, the search begins within 24 hours. We go to our network across food, drink and FMCG, approach people directly and in confidence, assess every candidate before you meet them, and give you a shortlist of the strongest matches.",
          },
          {
            type: "p",
            text: "You can read about the steps in our [FMCG recruitment process for employers](/employers/how-we-hire/), or see how [executive search and recruitment](/services/) differ.",
          },
        ],
      },
    ],
    cta: {
      title: "Hiring in FMCG?",
      text: "Send us the job description and we start the search within 24 hours.",
    },
  },

  "preparing-your-cv-for-a-commercial-role": {
    seoTitle: "How to Write a Commercial FMCG CV",
    description:
      "How to write a CV for a commercial FMCG role: what to include, how to show results and how to make it easy to read. Tips from an FMCG recruitment specialist.",
    published: "2026-10-20",
    takeaways: [
      "Lead with results against your targets, then add your responsibilities.",
      "Include the territory, the customers, the products and the growth you delivered.",
      "Use numbers you can talk through in an interview.",
      "Tailor the CV to each role and keep it easy to read.",
    ],
    intro: [
      "Employers and recruiters read commercial CVs quickly. They are looking for evidence that you can do the job: the customers you have handled, the numbers you were measured against and what you delivered. A CV that shows this clearly gets read properly.",
    ],
    sections: [
      {
        heading: "Start with a short profile",
        blocks: [
          {
            type: "p",
            text: "Write two or three lines at the top: your sector, your level and the kind of role you want next. Write it for the job you are applying for, not for every job you have ever done.",
          },
        ],
      },
      {
        heading: "Put results ahead of duties",
        blocks: [
          {
            type: "p",
            text: "A list of responsibilities tells a reader what the job was. Results tell them how you did. For each role, lead with what you achieved against your targets and what grew while you were there, then add the responsibilities that matter most.",
          },
        ],
      },
      {
        heading: "Include the details FMCG employers look for",
        blocks: [
          { type: "p", text: "Employers in this sector look for specifics. Include:" },
          {
            type: "ul",
            items: [
              "The territory or accounts you managed",
              "The customers you sold to, such as retail, wholesale, foodservice, on-trade and off-trade",
              "The products or categories you handled",
              "Your sales targets and what you achieved against them",
              "Any growth you delivered, with numbers where you can",
            ],
          },
        ],
      },
      {
        heading: "Use numbers carefully",
        blocks: [
          {
            type: "p",
            text: "Numbers make a claim believable, but only when they are right. Use figures you can talk through in an interview: the value of an account, a percentage of growth, a ranking within your team. If you are not sure of a figure, give a range or describe it plainly.",
          },
        ],
      },
      {
        heading: "Keep it easy to read",
        blocks: [
          {
            type: "p",
            text: "Put your most recent role first and work backwards. Use the same layout for every role, with the company, your job title and the dates. Aim for two pages. Use plain headings, a clear font and bullet points for achievements. Proofread it, and ask someone else to read it too.",
          },
        ],
      },
      {
        heading: "Match your CV to the role",
        blocks: [
          {
            type: "p",
            text: "Read the job description and pick out the experience that fits. Move that experience higher up the page. If a role asks for key account experience, make sure yours is easy to find. Check that your LinkedIn profile tells the same story as your CV.",
          },
        ],
      },
      {
        heading: "If you are moving into FMCG",
        blocks: [
          {
            type: "p",
            text: "Some employers want direct FMCG sales experience, and others will consider transferable experience, such as retail or wholesale. If you are coming from another sector, say which parts of your experience carry across, such as managing key accounts, negotiating terms or working to targets.",
          },
        ],
      },
      {
        heading: "Sending your CV to Bell Recruitment",
        blocks: [
          {
            type: "p",
            text: "You can [upload your CV](/cv-upload/) as a PDF, DOC or DOCX file. We read it, check it against the roles we are working on and contact you if there is a possible fit. Many roles are filled before they reach a job board, so it is worth registering even when nothing is advertised today.",
          },
        ],
      },
    ],
    cta: {
      title: "Looking for your next FMCG role?",
      text: "Send us your CV and we will check it against the roles we are working on.",
    },
  },

  "executive-search-vs-recruitment": {
    seoTitle: "Executive Search vs Recruitment",
    description:
      "Executive search is retained and research-led, built for senior and confidential hires. Recruitment fills professional roles quickly. Here is how to choose.",
    published: "2026-10-20",
    takeaways: [
      "Executive search is a retained, research-led service for senior, business-critical and confidential appointments.",
      "Recruitment is for professional, management and operational roles you need filled well and quickly.",
      "Choose executive search when the role is senior or hard to fill, or when confidentiality matters.",
      "Choose recruitment when you need a strong shortlist within a short timeframe.",
    ],
    intro: [
      "Executive search and recruitment are often used as if they mean the same thing. They are different services, built for different situations. Knowing which one fits a vacancy can save you time and help you avoid a poor hire.",
    ],
    sections: [
      {
        heading: "What is executive search?",
        blocks: [
          {
            type: "p",
            text: "Executive search is a retained, research-led service built to find and engage senior leaders. The right person for a role such as Managing Director, Head of Sales or Operations Director is rarely browsing job boards. They are usually doing well where they are and not actively looking.",
          },
          {
            type: "p",
            text: "A search firm works out who those people are, contacts them personally and in confidence, and presents your opportunity in a way that gets serious consideration.",
          },
        ],
      },
      {
        heading: "What is recruitment?",
        blocks: [
          {
            type: "p",
            text: "Recruitment is for professional, management and operational roles that you need filled well and quickly. It draws on an established network, a candidate database and targeted advertising to reach the right people. Candidates are interviewed and assessed before you see them, so you only meet people worth your time.",
          },
        ],
      },
      {
        heading: "How the two compare",
        blocks: [
          {
            type: "compare",
            heads: ["Executive search", "Recruitment"],
            rows: [
              ["Best for", "Senior, specialist or hard-to-fill roles", "Professional, management and operational roles"],
              [
                "How candidates are found",
                "Research and a direct, discreet approach to people who are not looking",
                "Our network, a candidate database and targeted advertising",
              ],
              [
                "Who it suits",
                "Roles where confidentiality matters and the cost of a wrong hire is high",
                "Roles that suit active jobseekers as well as passive candidates",
              ],
              [
                "What you receive",
                "A small number of well-qualified candidates with detailed written reports",
                "A strong shortlist within a short timeframe",
              ],
            ],
          },
        ],
      },
      {
        heading: "How an executive search works",
        blocks: [
          {
            type: "ol",
            items: [
              "The brief: we spend time with you and your leadership team to understand the role, the strategy behind it and the culture the right person must fit.",
              "Mapping the market: we identify the organisations, competitors and adjacent sectors where suitable leaders are working now.",
              "A direct, discreet approach: we contact potential candidates personally and in confidence.",
              "Rigorous assessment: candidates are interviewed in depth against the brief, with their track record, motivations and fit tested before they meet you.",
              "A considered shortlist: you receive a small number of well-qualified candidates with detailed written reports.",
              "Through to appointment: we manage interviews, references, offer negotiation and resignation, and stay in touch through onboarding.",
            ],
          },
        ],
      },
      {
        heading: "When to choose executive search",
        blocks: [
          {
            type: "ul",
            items: [
              "The role is senior, specialist or hard to fill",
              "Confidentiality matters, for example when replacing an incumbent or entering a new market",
              "The cost of getting the hire wrong is high",
              "You need access to people who are not actively looking",
            ],
          },
        ],
      },
      {
        heading: "When to choose recruitment",
        blocks: [
          {
            type: "ul",
            items: [
              "You need a strong shortlist within a short timeframe",
              "The role suits active jobseekers as well as passive candidates",
              "You are hiring for sales, commercial, operations, production, technical or support roles",
              "You want a trusted partner",
            ],
          },
        ],
      },
      {
        heading: "Not sure which one you need?",
        blocks: [
          {
            type: "p",
            text: "Bell Recruitment offers both. Our [FMCG executive search and recruitment services](/services/) are described in full on the Services page, or you can [talk to us about the role](/contact-us/) and we can help you decide.",
          },
        ],
      },
    ],
    cta: {
      title: "Hiring a senior leader in FMCG?",
      text: "Tell us about the role and we will help you choose the right approach.",
    },
  },
};

export function readingMinutes(a: Article) {
  const text = [
    ...a.intro,
    ...a.takeaways,
    ...a.sections.flatMap((s) =>
      s.blocks.flatMap((b) =>
        b.type === "p" ? [b.text] : b.type === "compare" ? b.rows.flat() : b.items,
      ),
    ),
    ...(a.faqs ?? []).flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 200));
}
