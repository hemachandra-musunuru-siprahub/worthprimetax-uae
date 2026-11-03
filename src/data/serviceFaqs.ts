/*
 * FAQs, word for word from the client's "UAE Worth Prime content" document. The home page shows
 * every group; each service page shows the questions that concern it.
 * Groups with a title render under that subheading; a page with one untitled group has none.
 */
export type ServiceFaq = { q: string; a: string };
export type ServiceFaqGroup = { title?: string; faqs: ServiceFaq[] };

const SETUP: ServiceFaq[] = [
  {
    q: "What is the difference between a UAE Mainland and a Free Zone company?",
    a: "Mainland companies can trade directly within the UAE market and bid on government contracts without restrictions, but usually require compliance with local corporate structures. Free Zone companies offer 100% foreign ownership and specific tax exemptions, but are generally restricted to trading within that specific Free Zone or internationally unless they use a local distributor or set up a mainland branch.",
  },
  {
    q: "How long does it take to incorporate a company in Dubai?",
    a: "Free Zone setups typically take between 3 to 7 working days, depending on the specific zone and activity. Mainland company incorporation generally takes 5 to 10 working days, subject to approvals from the Department of Economy and Tourism (DET) and external regulatory bodies.",
  },
  {
    q: "What is the process for dissolving or liquidating a UAE company?",
    a: "Dissolution requires appointing a registered liquidator, publishing a public notice in local newspapers, clearing all outstanding utility and lease liabilities, cancelling employee visas, and obtaining clearances from the Federal Tax Authority (FTA) and Customs. The process generally takes anywhere from 4 to 8 weeks.",
  },
  {
    q: "Can I transfer shares in an existing Dubai company to a new shareholder?",
    a: "Yes. Share transfers require an updated Board Resolution, amendment of the Memorandum of Association (MOA), and formal approval from the relevant Free Zone Authority or the Dubai Department of Economy and Tourism (DET) for mainland companies.",
  },
];

const CORPORATE_TAX: ServiceFaq[] = [
  {
    q: "What is the Corporate Tax rate in the UAE, and does it apply to my business?",
    a: "The UAE levies a standard Corporate Tax rate of 9% on taxable net profits exceeding AED 375,000. Profits up to this threshold are taxed at 0% to support small businesses.",
  },
  {
    q: "Are Free Zone companies exempt from UAE Corporate Tax?",
    a: "Free Zone companies can qualify for a 0% Corporate Tax rate, provided they maintain adequate substance in the UAE, derive “Qualifying Income” as defined by the law, comply with transfer pricing rules, and file an annual Corporate Tax return.",
  },
];

const VAT: ServiceFaq[] = [
  {
    q: "What is the threshold for mandatory VAT registration in the UAE?",
    a: "Businesses must register for VAT if their taxable supplies and imports exceed AED 375,000 over the previous 12 months. Voluntary registration is available if turnover or expenses exceed AED 187,500.",
  },
  {
    q: "How frequently do I need to file VAT returns?",
    a: "Most businesses file VAT returns quarterly, though the Federal Tax Authority (FTA) may assign monthly filing periods to larger corporations with high annual turnovers.",
  },
];

const BOOKS: ServiceFaq = {
  q: "Is it legally mandatory for UAE companies to maintain proper books of accounts?",
  a: "Yes. Under both the UAE Companies Law and Corporate Tax Law, all registered businesses must maintain accurate financial records for a minimum of 5 to 7 years.",
};

const AUDIT: ServiceFaq = {
  q: "Which businesses are required to undergo an annual financial audit?",
  a: "Annual statutory audits are mandatory for all Mainland companies (LLCs), specific Free Zone entities (such as those in DMCC, DAFZA, and DIFC), and any business applying for corporate bank loans or commercial lease renewals.",
};

const REMOTE: ServiceFaq = {
  q: "Can you handle our accounting remotely, or do you need to be on-site?",
  a: "We provide flexible, secure cloud-based accounting options, allowing us to manage your books completely remotely. On-site visits can be scheduled for businesses that require physical document reviews or inventory audits.",
};

/** Every FAQ in the document's order and groups, for the home page. */
export const FAQ_GROUPS: ServiceFaqGroup[] = [
  { title: "Corporate Setup & Restructuring", faqs: SETUP },
  { title: "UAE Taxation & Compliance", faqs: [...CORPORATE_TAX, ...VAT] },
  { title: "Accounting & Audit Services", faqs: [BOOKS, AUDIT, REMOTE] },
];

const SERVICE_FAQS: Record<string, ServiceFaqGroup[]> = {
  "corporate-tax": [{ faqs: CORPORATE_TAX }],
  "vat-compliance": [{ faqs: VAT }],
  "accounting-bookkeeping": [{ faqs: [BOOKS, REMOTE] }],
  "business-incorporation-dissolution": [{ faqs: SETUP }],
  "statutory-financial-audit": [{ faqs: [AUDIT] }],
};

export function getServiceFaqs(slug: string): ServiceFaqGroup[] {
  return SERVICE_FAQS[slug] ?? [];
}
