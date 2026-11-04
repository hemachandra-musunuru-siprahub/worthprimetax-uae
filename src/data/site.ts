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

/**
 * Co-founders in display order; their names, credentials and bios live in the translation files
 * under `founders.<id>`, and FOUNDER_PHOTOS follows the same order.
 */
export const FOUNDER_IDS = ["abuzer", "jafiruddin"] as const;

export type LegalSection = {
  heading: string;
  body: string[];
  /** Optional bullet list shown after the body paragraphs. */
  list?: string[];
  /** Optional paragraph shown after the list. */
  after?: string;
};

/**
 * Body of a legal page. Its title, heading and contact heading are translated (`meta.privacy`,
 * `legal.privacyHeading` …); the body stays in English until a reviewed translation exists.
 */
export type LegalPage = {
  /** Optional lead paragraph under the heading. */
  intro?: string;
  updated: string;
  sections: LegalSection[];
};

/*
 * Privacy Policy and Terms of Use. [placeholder: general wording written for the site build; the
 * client must have the final text reviewed by their legal adviser before launch, and confirm the
 * effective date and governing law.]
 * [NEED: UAE legal review, e.g. the UAE Personal Data Protection Law and governing law. The U.S.-only
 * IRC Section 7216 section was removed for the UAE site.]
 */
export const PRIVACY_PAGE: LegalPage = {
  intro: "Client Information Confidentiality, Non-Disclosure and Permitted Use Policy.",
  updated: "[date TBC]",
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
  updated: "[date TBC]",
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
