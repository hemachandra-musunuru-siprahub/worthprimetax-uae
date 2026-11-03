// [NEED: client to confirm the WhatsApp number and the LinkedIn/Instagram accounts for the UAE site]
export const LINKS = {
  /** The Federal Tax Authority's e-services portal (EmaraTax), where UAE tax is paid. */
  uaeTaxPayment: "https://eservices.tax.gov.ae/",
  irs: "https://sa.www4.irs.gov/irfof/lang/en/irfofgetstatus.jsp",
  linkedin: "https://www.linkedin.com/company/worthprime-tax-legal-and-compliance-services-inc/",
  instagram: "https://www.instagram.com/worthprimetax/",
  phone: "+971 55 341 8233",
  phoneHref: "tel:+971553418233",
  email: "uaeops@worthprimetax.com",
  whatsapp: "https://wa.me/971553418233",
};

/** LinkedIn links and icons stay hidden until the client supplies a real profile URL above. */
/**
 * Production origin for canonical tags, the sitemap, Open Graph URLs and structured data. Change it
 * here only. [NEED: the UAE site's production domain]
 */
export const SITE = {
  url: "https://worthprimetax.com",
  name: "WorthPrime Tax",
  // [NEED: client-approved 1200x630 social sharing image; the hero photo stands in until then]
  socialImageAlt: "WorthPrime Tax advisers at work",
};

export const HAS_LINKEDIN = LINKS.linkedin.startsWith("http");

export const OFFICES = [
  {
    label: "WorthPrime Tax",
    region: "United Arab Emirates",
    address:
      "Office No. 286, Corridor 1, Hamsah A Building, Mezzanine Floor, Behind Ansar Gallery Mall, Al Karama, P.O. Box 87556, Dubai, UAE",
  },
];

/** Home page "Why Businesses Choose WorthPrime Tax" cards. */
export const REASONS = [
  {
    title: "Experience That Adds Perspective",
    body: "Since 2018, WorthPrime Tax has been empowering businesses, entrepreneurs and individuals across the UAE with evolving tax, accounting and compliance requirements. Experience gives us perspective; precision gives that experience its value.",
  },
  {
    title: "Support That Follows the Business",
    body: "Business needs do not end with incorporation. They become more nuanced with every new stage. Our end-to-end expertise unifies incorporation, accounting, audit and PRO services, tax compliance and payroll, delivering a seamless experience throughout the business lifecycle.",
  },
  {
    title: "Compliance Without Compromise",
    body: "Sound regulatory compliance is anchored in rigour, consistency and timely execution. We remain focused on deadlines, documentation and applicable regulations, helping businesses maintain robust compliance while keeping their operations on course.",
  },
  {
    title: "Professional Expertise, Without the Jargon",
    body: "Financial and regulatory matters can be intricate enough without adding unnecessary complexity to the conversation. We believe professional advice should be clear, considered and commercially relevant—with straightforward communication and practical guidance at every stage.",
  },
  {
    title: "Solutions Shaped Around the Business",
    body: "No two businesses operate in exactly the same way. We take the time to understand the structure, priorities and requirements behind each engagement, then shape our approach accordingly. The objective is not simply to deliver a service, but to create a more effective and dependable way of managing the responsibilities that come with doing business.",
  },
];

/** Contact section beside the enquiry form ("Let's Talk" in the client's document). */
export const HOME_CONTACT = {
  label: "Let’s Talk",
  heading: "Bring us the complexity.",
  headingAccent: "We’ll help bring clarity to it.",
  intro:
    "Whether you are managing UAE Corporate Tax, preparing a VAT return, maintaining your books, preparing for an Audit, establishing a business, managing payroll or navigating U.S. Tax from the UAE, the right conversation can make all the difference.",
  replyNote: "Tell us what you need.",
};

export const ABOUT_STORY = {
  label: "How We Started?",
  body: "Behind every enduring enterprise lies a confluence of sound structure, considered decisions and discerning professional counsel. At WorthPrime Tax, this perspective is shaped by the complementary expertise of its co-founders, bringing together extensive experience across accounting, taxation, audit, payroll, legal and compliance services spanning the UAE, U.S. and India.",
};

export const FOUNDERS = [
  {
    name: "Abuzer Ahmed Siddiqui",
    title: "Co-Founder",
    credential: "Qualified Company Secretary (ICSI) · 15+ years · PwC and Deloitte",
    summary:
      "His expertise encompasses U.S. Corporate Tax, U.S. Payroll, Middle East Corporate Tax and VAT, together with the incorporation and dissolution of businesses across these jurisdictions.",
    bio: [
      "A Qualified Company Secretary from ICSI, Abuzer brings more than 15 years of multifaceted experience spanning accounting, taxation, payroll, due diligence, legal and compliance services, with professional experience with PwC and Deloitte, across the U.S., UAE and India. His expertise encompasses U.S. Corporate Tax, U.S. Payroll, Middle East Corporate Tax and VAT, together with the incorporation and dissolution of businesses across these jurisdictions.",
      "His professional tenure complemented by exposure within multiple firms, has cultivated a leadership perspective shaped by strategic thinking, adaptability and decisive execution. Having led pilot projects and worked with teams exceeding 100 professionals, he has developed a nuanced understanding of building operations from inception, refining processes and scaling them with purpose.",
      "His entrepreneurial journey found its defining expression in the co-founding of WorthPrime Tax in 2020—an endeavour shaped by years of professional insight and a conviction that financial and compliance services should be more connected, accessible and commercially relevant. Today, he brings that vision to life through an approach marked by intellectual curiosity, composure and an enduring commitment to creating meaningful value for businesses and individuals.",
    ],
  },
  {
    name: "Jafiruddin Mohammad",
    title: "Co-Founder",
    credential: "Certified Accountant · 15 years · PwC and PepsiCo",
    summary:
      "Brings a distinctive blend of corporate discipline and entrepreneurial perspective to WorthPrime Tax.",
    bio: [
      "A Certified Accountant with 15 years of experience across audit, accounting, financial planning and tax, Jafiruddin brings a distinctive blend of corporate discipline and entrepreneurial perspective to WorthPrime Tax. His professional journey includes management roles with global organisations such as PwC and PepsiCo, where he worked across financial strategy, reporting and rigorous compliance.",
      "Driven by an entrepreneurial spirit and a commitment to helping businesses make informed financial decisions, his transition from global corporate environments to entrepreneurship culminated in the co-founding of WorthPrime Tax in 2020. The experience gained across leading organisations continues to shape a pragmatic, commercially minded approach to financial and advisory services.",
      "Today, he draws upon a wealth of institutional experience while retaining the agility and entrepreneurial conviction of a growing firm, delivering practical, high-quality financial solutions and advisory services shaped around the evolving needs of businesses and individuals.",
    ],
  },
];

/** Closing block under the co-founders on the About page. */
export const FOUNDERS_CLOSING = {
  heading: "Two perspectives. One purpose.",
  body: [
    "Together, the co-founders bring a distinctive blend of Big Four experience, technical expertise, leadership, entrepreneurial thinking and hands-on knowledge of businesses at different stages of growth—from building processes from the ground up to managing complex financial and regulatory requirements.",
    "At WorthPrime Tax, this experience forms the foundation for a simple belief: professional expertise should create clarity, strengthen compliance and help businesses move forward with greater purpose.",
  ],
};

/*
 * Home page "What Our Clients Say" section. [NEED: client reviews for the UAE site; the client's
 * document asks for them to be added. Until then the section shows its heading and intro only.]
 */
export const CLIENT_EXPERIENCE = {
  label: "What Our Clients Say",
  heading: "Trusted by Businesses.",
  headingMuted: "Valued by Clients.",
  intro:
    "At WorthPrime Tax, our greatest measure of success is the confidence our clients place in us. From entrepreneurs and SMEs to established businesses and individuals, we are proud to be part of our clients’ financial and business journeys.",
  tagline: "Real businesses. Real relationships. Reliable support.",
};

export const CONTACT_PAGE = {
  title: "Contact WorthPrime Tax | Tax & Accounting in Dubai, UAE",
  description:
    "Call, email or WhatsApp WorthPrime Tax, or send an enquiry. Office in Al Karama, Dubai, UAE.",
  detailsHeading: "Contact Details",
  detailsIntro: "Reach out to our office or connect with us directly.",
};

/** Large closing CTA band (CtaBand); no page shows it at the moment. */
export const CTA_BAND = {
  label: "Let’s Talk",
  heading: "Bring us the complexity. We’ll help bring clarity to it.",
  intro: "Tell us what you need.",
  primary: "Book a Consultation",
  secondary: "Explore Our Services",
  points: [] as Array<{ title: string; text: string }>,
};

export type LegalSection = {
  heading: string;
  body: string[];
  /** Optional bullet list shown after the body paragraphs. */
  list?: string[];
  /** Optional paragraph shown after the list. */
  after?: string;
};

export type LegalPage = {
  title: string;
  description: string;
  heading: string;
  /** Optional lead paragraph under the heading. */
  intro?: string;
  updated: string;
  sections: LegalSection[];
  /** Heading of the contact card at the end of the page. */
  contactHeading: string;
};

/*
 * Privacy Policy and Terms of Use. [placeholder: general wording written for the site build; the
 * client must have the final text reviewed by their legal adviser before launch, and confirm the
 * effective date and governing law.]
 * [NEED: UAE legal review, e.g. the UAE Personal Data Protection Law and governing law. The U.S.-only
 * IRC Section 7216 section was removed for the UAE site.]
 */
export const PRIVACY_PAGE: LegalPage = {
  title: "Privacy Policy | WorthPrime Tax",
  description:
    "How WorthPrime Tax keeps client information confidential and uses it only for the services agreed with each client.",
  heading: "Privacy Policy",
  intro: "Client Information Confidentiality, Non-Disclosure and Permitted Use Policy.",
  updated: "[date TBC]",
  contactHeading: "Questions About Your Privacy?",
  sections: [
    // Client-supplied wording.
    {
      heading: "Purpose of Collecting Client Information",
      body: [
        "We collect documents, financial records, personal information, tax-related information, accounting records, and other relevant information from our clients solely for the purpose of providing the professional services requested or agreed upon under our applicable Service Agreements, Engagement Letters, and Non-Disclosure Agreements (NDAs).",
        "Such services may include, but are not limited to:",
      ],
      list: [
        "Tax preparation, tax planning, and tax-related compliance services.",
        "Accounting, bookkeeping, and financial reporting services.",
        "Audit, assurance, and related professional services.",
        "Financial statement preparation and analysis.",
        "Other accounting, taxation, consulting, compliance, or related professional services expressly agreed upon with the client.",
      ],
    },
    {
      heading: "Confidentiality and Non-Disclosure of Client Information",
      body: [
        "We maintain strict confidentiality regarding all information and documents received from our clients. We undertake that client information will not be sold, rented, traded, marketed, or disclosed to any unauthorized third party for commercial, promotional, marketing, or any unrelated purpose.",
        "All client information will be handled exclusively by authorized personnel involved in delivering the contracted services and will be protected through appropriate confidentiality obligations, internal safeguards, and applicable Non-Disclosure Agreements.",
      ],
    },
    {
      heading: "Limited and Authorized Use of Information",
      body: [
        "The information and documents provided by clients shall be used exclusively for the purposes of performing the services requested by the client and agreed upon in the relevant Service Agreement, Engagement Letter, or other contractual arrangement.",
        "We shall not use client information for any unrelated business activity, independent commercial purpose, marketing activity, solicitation, or any purpose outside the scope of the agreed professional engagement, unless expressly authorized by the client or otherwise permitted by applicable law.",
      ],
    },
    {
      heading: "No Unauthorized Third-Party Disclosure",
      body: [
        "We do not disclose or share client information with any external individual, organization, business entity, or third party without the client's prior written authorization, except where such disclosure is required or permitted under applicable laws, regulations, professional obligations, or valid legal or regulatory orders.",
        "Where any disclosure is legally required or otherwise permitted, we shall limit the disclosure to the extent necessary and take reasonable measures to safeguard the confidentiality of the information.",
      ],
    },
    {
      heading: "Data Security and Protection",
      body: [
        "We implement reasonable administrative, technical, and organizational safeguards to protect client information against unauthorized access, misuse, alteration, loss, disclosure, or destruction.",
        "Access to client documents and information shall be restricted to authorized personnel who require such access to perform their assigned professional responsibilities.",
      ],
    },
    {
      heading: "Retention and Disposal of Client Information",
      body: [
        "Client information shall be retained only for the period necessary to fulfill the purposes for which it was collected, comply with applicable legal and regulatory requirements, and satisfy relevant professional record-retention obligations.",
        "Upon expiry of the applicable retention period, information shall be securely disposed of or deleted, subject to any legal requirements to retain such information.",
      ],
    },
    {
      heading: "Our Commitment",
      body: [
        "We respect the confidentiality and privacy of every client. Client information is entrusted to us solely for the purpose of delivering the agreed professional services, and we are committed to protecting that information against unauthorized use or disclosure.",
      ],
    },
  ],
};

export const TERMS_PAGE: LegalPage = {
  title: "Terms of Use | WorthPrime Tax",
  description:
    "How WorthPrime Tax treats the documents and information clients share, under its NDAs and service agreements.",
  heading: "Terms of Use",
  updated: "[date TBC]",
  contactHeading: "Questions About These Terms?",
  sections: [
    // Client-supplied wording.
    {
      heading: "Compliance with Non-Disclosure Agreements and Service Agreements",
      body: [
        "All documents, records, and information received from clients shall be treated as confidential and shall be governed by the confidentiality, privacy, and non-disclosure provisions contained in the applicable Non-Disclosure Agreements, Service Agreements, Engagement Letters, and other contractual arrangements executed with the respective clients.",
        "Our personnel and authorized representatives shall be required to maintain the confidentiality of client information and use such information only for the fulfillment of the agreed professional obligations.",
      ],
    },
    {
      heading: "Client Acknowledgment",
      body: [
        "By submitting documents, records, or other information through our website, email, client portal, or any other authorized communication channel, the client acknowledges that the information is being provided for the purpose of receiving the professional services requested or agreed upon.",
        "The client further acknowledges that we will handle such information in accordance with this Confidentiality and Permitted Use Policy, the applicable Non-Disclosure Agreement, Service Agreement, Engagement Letter, and relevant laws and regulations.",
      ],
    },
  ],
};
