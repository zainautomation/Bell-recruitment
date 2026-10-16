// Data shared across several pages: contact details, navigation, client logos and
// testimonials. Copy that belongs to a single page lives in that page's page.tsx,
// written from the client's "Website Content" document.

export const CONTACT = {
  phone: "+44 28 9031 1211",
  phoneHref: "tel:+442890311211",
  email: "julie@bellrecruitment.net",
  address: "24 Mount Charles, Belfast BT7 1NZ, United Kingdom",
  linkedin: "https://www.linkedin.com/company/bell-recruitment-ni/",
};

// URLs from the content document. /jobs/ and /jobs/sales-roles-northern-ireland/ are
// planned pages that are not written yet; next.config.ts redirects them to the current
// jobs board until they exist.
export const URLS = {
  home: "/",
  services: "/services/",
  aboutUs: "/about-us/",
  hire: "/employers/how-we-hire/",
  faqs: "/faqs/",
  blogs: "/blogs/",
  locations: "/locations/",
  jobs: "/jobs/",
  salesRoles: "/jobs/sales-roles-northern-ireland/",
  contact: "/contact-us/",
  cvUpload: "/cv-upload/",
};

export const NAV_LINKS = [
  { href: URLS.aboutUs, label: "About Us" },
  { href: URLS.services, label: "Services" },
  { href: URLS.hire, label: "Employers" },
  { href: URLS.jobs, label: "Jobs" },
  { href: URLS.blogs, label: "Blogs" },
  { href: URLS.contact, label: "Contact" },
];

export const PARTNERS = [
  { src: "/images/partner-irwins.png", alt: "Irwin's Bakery", w: 153, h: 100 },
  { src: "/images/partner-prep.png", alt: "Prep House", w: 92, h: 100 },
  { src: "/images/partner-henderson.png", alt: "Henderson Group", w: 249, h: 100 },
  { src: "/images/partner-gm.png", alt: "GM Marketing", w: 121, h: 100 },
  { src: "/images/partner-richmond.png", alt: "Richmond Marketing", w: 287, h: 100 },
  { src: "/images/partner-thompsons.jpg", alt: "Thompson's Family Tea", w: 135, h: 100 },
  { src: "/images/partner-whites.png", alt: "Whites", w: 100, h: 100 },
  { src: "/images/partner-cn.jpeg", alt: "Courtney and Nelson", w: 100, h: 100 },
  { src: "/images/partner-mulrines.jpeg", alt: "Mulrines", w: 337, h: 100 },
  { src: "/images/partner-crust.png", alt: "Crust & Crumb", w: 93, h: 100 },
  { src: "/images/partner-blenders.png", alt: "Blenders", w: 318, h: 100 },
  { src: "/images/partner-excellence.png", alt: "Excellence", w: 322, h: 100 },
  { src: "/images/partner-tsfoods.png", alt: "TS Foods", w: 191, h: 100 },
  { src: "/images/partner-clandeboye.png", alt: "Clandeboye Estate", w: 241, h: 100 },
  { src: "/images/partner-forestfeast.png", alt: "Forest Feast", w: 228, h: 100 },
  { src: "/images/partner-bako.png", alt: "BAKO", w: 343, h: 100 },
];

// Testimonial quotes must stay word for word (client instruction). Pages pick
// testimonials by id, in the order the content document lists them.
export const TESTIMONIALS = {
  irwins: {
    quote: "Bell Recruitment are my go-to company when it comes to recruitment for commercial roles in our business.",
    name: "John Hopkins",
    role: "Sales and Development Director",
    company: "Irwin’s Bakery",
    logo: { src: "/images/irwins.png", w: 231, h: 151 },
  },
  richmond: {
    quote: "Bell Recruitment have been working with our company for over 20 years, they are a professional organisation.",
    name: "Alison McCluskey",
    role: "NI Field Sales Director",
    company: "Richmond Marketing",
    logo: { src: "/images/richmond.png", w: 434, h: 151 },
  },
  courtneyNelson: {
    quote:
      "We have used Bell Recruitment as our recruitment partner for many years, and they have always provided us with excellent candidates for a range of commercial and operational roles.",
    name: "Jeff Tosh",
    role: "CEO",
    company: "Courtney and Nelson",
    logo: { src: "/images/cn.jpeg", w: 225, h: 224 },
  },
  gmMarketing: {
    quote:
      "Bell Recruitment is our go-to recruitment partner because we know they will always deliver the resources we need, when we need them.",
    name: "Gerard McAdorey",
    role: "Managing Director",
    company: "GM Marketing",
    logo: { src: "/images/gm.png", w: 165, h: 136 },
  },
  prepHouse: {
    quote: "I have always used Bell Recruitment for all our commercial recruitment requirements.",
    name: "Paul Bell",
    role: "CEO",
    company: "Prep House",
    logo: { src: "/images/prep.png", w: 139, h: 151 },
  },
  henderson: {
    quote:
      "The Field Marketing Team have brought our in-store activities to life with energy, enthusiasm and just the right amount of shopper persuasion!",
    name: "Julia Galbraith",
    role: "Brand Development and Marketing Manager",
    company: "Henderson Group",
    logo: { src: "/images/partner-henderson.png", w: 249, h: 100 },
  },
};
export type TestimonialId = keyof typeof TESTIMONIALS;

export const JULIE_ROLES = [
  "Council Member of the Northern Ireland Chamber of Commerce",
  "Committee Member of the Institute of Directors",
  "Board Member of the Council for Curriculum, Examinations & Assessment",
  "Committee Member of the Grocers’ Benevolent Fund",
];

// Used on the CV upload page (not yet rewritten in the content document).
export const BLOG_POSTS = [
  {
    title: "How to attract top FMCG talent in a competitive market",
    excerpt: "A few practical steps employers can take to stand out to candidates in the FMCG sector.",
    image: "/images/grocery-aisle.jpg",
  },
  {
    title: "Preparing your CV for a commercial role",
    excerpt: "Simple tips to help your CV get noticed by hiring managers in commercial and operational roles.",
    image: "/images/employer-meeting.jpg",
  },
  {
    title: "Why executive search is different to standard recruitment",
    excerpt: "What sets an executive search apart, and when it's the right approach for your business.",
    image: "/images/team-success.jpg",
  },
];

// "Roles we recruit" cards on the Home page. Wording is from the client; keep it word for word.
export const ROLE_AREAS = [
  {
    title: "Sales leadership",
    text: "Heads of Sales, Sales Directors and Commercial Directors who can set strategy, lead a team and grow revenue across retail, wholesale and foodservice.",
  },
  {
    title: "National and key account management",
    text: "Account managers and controllers who manage the major multiples, symbol groups and wholesalers, and who can negotiate range, promotions and margin with buyers.",
  },
  {
    title: "Field sales and business development",
    text: "Sales executives, territory managers and business development managers who are out on the road, opening new accounts and growing existing accounts in independent retail and convenience channels.",
  },
  {
    title: "Foodservice and trade sales",
    text: "Specialists who sell into hotels, restaurants, contract caterers, distributors and trade channels, and who understand how those customers buy.",
  },
  {
    title: "Marketing, brand and category",
    text: "Marketing Directors, Brand managers, marketing managers and category specialists who turn customer and shopper insight into products, campaigns and plans that sell.",
  },
  {
    title: "Procurement, supply chain and commercial operations",
    text: "Heads of procurement, supply chain managers, planners and commercial analysts who keep costs under control, stock moving and customers supplied.",
  },
  {
    title: "Sales support and customer service",
    text: "Sales support executives, sales administrators and customer service teams who keep orders, pricing and promotions accurate, so the sales team can sell.",
  },
];
// "Our Services" cards on the Home page. Wording is from the client; keep it word for word.
export const OUR_SERVICES = [
  {
    icon: "fa-user-tie",
    title: "Executive Search",
    text: "Strategic, research-led executive search to identify and secure exceptional senior leaders and C-suite talent within the FMCG and consumer goods sectors.",
  },
  {
    icon: "fa-people-group",
    title: "Recruitment & Selection",
    text: "End-to-end recruitment solutions designed to identify, assess and appoint high-calibre professionals who align with your business objectives, culture and long-term ambitions.",
  },
  {
    icon: "fa-chart-line",
    title: "Market Intelligence & Insights",
    text: "Actionable intelligence on talent availability, leadership markets, competitor activity, remuneration trends and organisational structures to support informed hiring and business decisions.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Candidate Assessment, Preparation & Screening",
    text: "Rigorous candidate screening, structured interviews and behavioural assessment to evaluate leadership capability, cultural alignment and suitability for the role.",
  },
  {
    icon: "fa-brain",
    title: "Psychometric Testing",
    text: "Online psychometric assessments that provide deeper insight into candidates’ behavioural preferences, cognitive abilities and leadership potential, supporting evidence-based selection decisions.",
  },
  {
    icon: "fa-filter",
    title: "Talent Pipelining",
    text: "Proactive talent pipeline development to identify, engage and nurture high-potential candidates ahead of future recruitment needs, strengthening succession planning and reducing time to hire.",
  },
  {
    icon: "fa-map-location-dot",
    title: "Talent Sourcing & Market Mapping",
    text: "Targeted talent sourcing and comprehensive market mapping to uncover exceptional candidates, including high-performing individuals who may not be actively seeking new opportunities.",
  },
];

// "Executive Search" and "Recruitment" detail cards on the Home page. Wording is from the client; keep it word for word.
export const SERVICE_DETAILS = [
  {
    title: "Executive Search",
    tagline: "For C-suite, senior, business-critical and confidential appointments",
    chooseLabel: "Choose Executive Search when",
    intro: [
      "When you’re appointing a Managing Director, Head of Sales, Operations Director or another leader whose decisions will define your next chapter, the best person is rarely browsing job boards. They’re usually doing well where they are and not actively looking.",
      "Executive Search is a retained, research-led service built to find and engage those people.",
    ],
    steps: [
      {
        lead: "The brief.",
        text: "We spend time with you and your leadership team to understand the role, the business strategy behind it, and the culture the right person must fit.",
      },
      {
        lead: "Mapping the market.",
        text: "We identify the organisations, competitors and adjacent sectors where suitable leaders are working now, across Northern Ireland, the Republic of Ireland and beyond.",
      },
      {
        lead: "Direct, discreet approach.",
        text: "We contact potential candidates personally and in confidence, and present your opportunity in a way that gets serious consideration.",
      },
      {
        lead: "Rigorous assessment.",
        text: "Candidates are interviewed in depth against the brief, with their track record, motivations and fit tested well before they meet you.",
      },
      {
        lead: "A considered shortlist.",
        text: "You receive a small number of well-qualified candidates with detailed written reports.",
      },
      {
        lead: "Through to appointment.",
        text: "We manage interviews, references, offer negotiation and resignation, and stay in touch through onboarding.",
      },
    ],
    chooseWhen: [
      "The role is senior, specialist or hard to fill",
      "Confidentiality matters, for example when replacing an incumbent or entering a new market",
      "The cost of getting the hire wrong is high",
      "You need access to people who aren’t actively looking",
    ],
  },
  {
    title: "Recruitment",
    tagline: "Our Recruitment service gives you fast access to good candidates, with the screening and judgement that save your team time.",
    chooseLabel: "Choose Bell Recruitment when",
    intro: [],
    steps: [
      {
        lead: "The brief.",
        text: "We take the time to understand the role, the team and what good looks like, and can help write the job description if you need one.",
      },
      {
        lead: "Targeted sourcing.",
        text: "We draw on our established network, our candidate database and targeted advertising to reach the right people.",
      },
      {
        lead: "Careful screening.",
        text: "Every candidate is interviewed and assessed before you see them, so you only meet people worth your time.",
      },
      {
        lead: "Interview support.",
        text: "We can provide structured interview questions and coordinate the process from start to finish.",
      },
      {
        lead: "Offer and beyond.",
        text: "We handle feedback, offers and start dates, and keep in touch once your new hire is in place.",
      },
    ],
    chooseWhen: [
      "You need a strong shortlist within a short timeframe",
      "The role suits active jobseekers as well as passive candidates",
      "You’re hiring for sales, commercial, operations, production, technical or support roles",
      "You want a trusted partner",
    ],
  },
];

// Cities, areas and regions page. `area` picks the wording of the short description.
export const LOCATIONS = [
  { name: "Belfast", area: "ni" },
  { name: "Bangor", area: "ni" },
  { name: "Lisburn", area: "ni" },
  { name: "Newry", area: "ni" },
  { name: "Portadown", area: "ni" },
  { name: "Craigavon", area: "ni" },
  { name: "Armagh", area: "ni" },
  { name: "Ballymena", area: "ni" },
  { name: "Derry / Londonderry", area: "ni" },
  { name: "Dublin", area: "ie" },
  { name: "Cork", area: "ie" },
  { name: "Limerick", area: "ie" },
  { name: "Galway", area: "ie" },
  { name: "Waterford", area: "ie" },
  { name: "Donegal", area: "ie" },
  { name: "Cardiff", area: "uk" },
  { name: "Edinburgh", area: "uk" },
  { name: "York", area: "uk" },
  { name: "Brighton", area: "uk" },
  { name: "London", area: "uk" },
  { name: "Cambridge", area: "uk" },
  { name: "Oxford", area: "uk" },
  { name: "Manchester", area: "uk" },
] as const;

// Crust & Crumb case study (Employers page). Wording is from the client's case study PDF; keep it word for word.
// The PDF's customer quote is left out until the person's name and job title are confirmed.
export const CASE_STUDY = {
  label: "Case study",
  title: "Crust & Crumb",
  subtitle: "Two senior leadership hires for a cross-border food manufacturer",
  stats: [
    { value: "2", label: "senior leaders placed" },
    { value: "3", label: "production sites" },
    { value: "2", label: "jurisdictions, NI and ROI" },
    { value: "AA", label: "BRCGS grade, plus Sedex" },
  ],
  about: {
    title: "About Crust & Crumb",
    text: "Crust & Crumb is a leading manufacturer of freshly prepared flatbreads, pizza bases, tortillas, wraps and garlic breads. It supplies major retail and foodservice customers globally from three sites: Derrylin, Craigavon and Ballyconnell.",
    sites: [
      { name: "Derrylin", region: "Co Fermanagh, NI" },
      { name: "Craigavon", region: "Co Armagh, NI" },
      { name: "Ballyconnell", region: "Co Cavan, ROI" },
    ],
  },
  challenge: {
    title: "The challenge",
    text: "Crust & Crumb needed two senior leaders who could support its growth across multiple sites, two jurisdictions and a demanding customer base. Both roles sit close to the top of the business and carry direct influence over group strategy.",
    intro: "The brief raised four specific hiring challenges:",
    items: [
      {
        title: "A small, specialist talent pool",
        text: "Each role called for senior experience in food manufacturing, FMCG or a similarly regulated industry, ideally with bakery or chilled and ambient food exposure.",
      },
      {
        title: "Cross-border, multi-site operations",
        text: "The procurement lead would run supply across sites in Fermanagh and Cavan. Candidates needed to manage multi-site supply chains, cross-border sourcing, and commodity and currency risk.",
      },
      {
        title: "High-profile customer accounts",
        text: "The foodservice lead would own relationships with major QSR chains and national foodservice distributors. Candidates needed proven credibility with senior buyers at that scale.",
      },
      {
        title: "Strict compliance standards",
        text: "Both roles operate within BRCGS AA and Sedex frameworks, so candidates had to understand food safety and ethical sourcing.",
      },
    ],
  },
  approach: {
    title: "Our approach",
    text: "Bell Recruitment ran both searches end to end, from defining the roles to managing offers.",
    steps: [
      {
        lead: "Defining the roles.",
        text: "We worked with Crust & Crumb's leadership to write a full job description for each position. Each set out the role's purpose, reporting lines, key responsibilities and an essential versus desirable candidate profile.",
      },
      {
        lead: "Mapping the market.",
        text: "We targeted senior procurement and commercial leaders across food manufacturing, bakery, FMCG and foodservice distribution in Northern Ireland, the Republic of Ireland and Great Britain.",
      },
      {
        lead: "Screening against the brief.",
        text: "Candidates were assessed on sector experience, scale of accounts or spend managed, multi-site leadership and knowledge of BRCGS and Sedex standards.",
      },
      {
        lead: "Shortlisting and interviews.",
        text: "We presented a focused shortlist for each role and supported the interview process.",
      },
      {
        lead: "Offer and onboarding.",
        text: "We managed offer negotiations and kept candidates engaged through to their start date.",
      },
    ],
  },
  roles: {
    title: "The roles we filled",
    items: [
      {
        title: "Head of Procurement",
        text: "The Head of Procurement leads strategic sourcing, purchasing and supply chain across all Crust & Crumb sites. The role sits on the senior leadership team and is based across Derrylin, Co Fermanagh and Ballyconnell, Co Cavan.",
        points: [
          "Group-wide procurement strategy covering flour, oils, dairy, packaging, indirect spend and capital equipment",
          "End-to-end supply chain planning and continuity across multi-site production",
          "Supply resilience against commodity volatility, currency fluctuation and geopolitical disruption",
          "Supplier negotiation, cost savings, and BRCGS AA and Sedex compliance",
          "Procurement input into capital investment and grant-funded growth projects",
          "Leading buyers, supply chain planners and logistics coordinators",
        ],
      },
      {
        title: "Head of Foodservice / Commercial Manager",
        text: "The Head of Foodservice / Commercial Manager owns and grows Crust & Crumb's foodservice and quick service restaurant (QSR) portfolio. The role is based at Portadown, with travel to customer sites across the UK and Ireland.",
        points: [
          "Key account management of major QSR chains and foodservice distributors",
          "Ownership of the foodservice sales budget and P&L",
          "Annual customer negotiations, pricing reviews and contract renewals",
          "New business development, including tenders and RFPs",
          "Working with NPD on customer-specific product innovation",
          "Leading account managers and foodservice sales executives",
        ],
      },
    ],
  },
  outcome: {
    title: "The outcome",
    text: "Bell Recruitment successfully placed both senior leaders, giving Crust & Crumb dedicated leadership for procurement and for its foodservice channel.",
    placed: [
      { title: "Head of Procurement", text: "Placed: dedicated group procurement and supply chain leadership" },
      { title: "Head of Foodservice", text: "Placed: dedicated leadership for the foodservice and QSR channel" },
    ],
    closing: "Both appointments strengthen Crust & Crumb’s senior team as it continues to invest in capacity across its sites in Northern Ireland and Ireland.",
  },
  faqs: [
    {
      q: "Which recruitment agency recruited Crust & Crumb's Head of Procurement and Head of Foodservice?",
      a: "Bell Recruitment Services recruited both roles for Crust & Crumb, a bakery manufacturer with sites in Derrylin, Craigavon and Ballyconnell.",
    },
    {
      q: "Does Bell Recruitment recruit senior roles in food manufacturing in Northern Ireland?",
      a: "Yes. Bell Recruitment Services recruits senior and leadership roles for food manufacturers in Northern Ireland and the Republic of Ireland, including procurement, supply chain, sales and commercial positions.",
    },
    {
      q: "What experience does a Head of Procurement in food manufacturing need?",
      a: "A Head of Procurement in food manufacturing typically needs senior procurement and supply chain leadership experience, a record of cost savings at scale, multi-site experience and knowledge of food safety standards such as BRCGS and Sedex. A CIPS qualification is often desirable.",
    },
    {
      q: "What does a Head of Foodservice do at a food manufacturer?",
      a: "A Head of Foodservice manages a food manufacturer's relationships with quick service restaurants, wholesalers and foodservice distributors. The role owns the channel's sales budget and P&L, leads customer negotiations and wins new business.",
    },
    {
      q: "Can Bell Recruitment recruit for roles that span Northern Ireland and the Republic of Ireland?",
      a: "Yes. The Crust & Crumb roles covered sites in Co Fermanagh, Co Armagh and Co Cavan, and Bell Recruitment sourced candidates with cross-border experience.",
    },
  ],
  cta: {
    title: "Hiring a senior leader in food manufacturing or FMCG?",
    text: "Bell Recruitment Services finds procurement, supply chain, commercial and operations leaders for manufacturers across Northern Ireland and Ireland.",
    linkLabel: "Contact Bell Recruitment",
    after: " to discuss your next senior hire.",
  },
};
