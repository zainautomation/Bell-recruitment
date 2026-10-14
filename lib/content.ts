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

// "Roles we recruit" tiles on the Home page.
export const EXPERTISE = [
  "Recruitment",
  "FMCG + Executive",
  "Commercial",
  "Sales",
  "Market / Marketing",
  "Procurement",
  "Production",
  "HR",
  "Ops",
  "Supply Chain",
  "Admin",
  "Finance in NI, Ireland & UK",
  "Engineering",
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
    tagline: "For senior, business-critical and confidential appointments",
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
    tagline: "For professional, management and operational roles you need filled well and quickly",
    intro: [
      "Our Recruitment service gives you fast access to good candidates, with the screening and judgement that save your team time.",
    ],
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
      "You want a trusted partner across several vacancies",
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
