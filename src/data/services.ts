export type Audience = "Individuals" | "Businesses" | "Compliance" | "Assurance";

export type Service = {
  number: string;
  slug: string;
  name: string;
  audience: Audience;
  tagline: string;
  summary: string;
  overview: string[];
  capabilitiesLabel: string;
  capabilities: string[];
  /** How many of `capabilities` the flip side of the service card shows; all of them when unset. */
  cardCapabilityCount?: number;
  /** Lines from the client's document that follow the capabilities list, shown above the call to action. */
  closing?: string[];
  cta: string;
};

// Copy from the client's "UAE Worth Prime content" document.
export const SERVICES: Service[] = [
  {
    number: "01",
    slug: "corporate-tax",
    name: "Corporate Tax",
    audience: "Compliance",
    tagline: "Stay compliant. Plan smarter. Grow with confidence.",
    summary:
      "WorthPrime Tax provides end-to-end Corporate Tax support, covering the complete compliance cycle.",
    overview: [
      "Under Federal Decree-Law No. 47 of 2022, Corporate Tax registration applies to resident businesses, individuals conducting business activities, and non-resident companies with a permanent establishment in the UAE. Understanding the applicable requirements and meeting FTA obligations accurately and on time is imperative.",
      "WorthPrime Tax provides end-to-end Corporate Tax support, covering the complete compliance cycle.",
    ],
    capabilitiesLabel: "Our Corporate Tax capabilities include",
    capabilities: [
      "Corporate Tax registration and deregistration",
      "Tax planning",
      "Timely preparation and filing of Corporate Tax returns",
      "Tax return amendments",
      "Responses to departmental and FTA queries and notices",
      "Penalty mitigation assistance",
      "Ongoing compliance with FTA requirements",
    ],
    closing: ["The objective is simple: accurate compliance, handled with foresight."],
    cta: "Explore Corporate Tax Services",
  },
  {
    number: "02",
    slug: "vat-compliance",
    name: "VAT Compliance Services",
    audience: "Compliance",
    tagline: "Accurate VAT. Timely filings. Confident compliance.",
    summary:
      "WorthPrime Tax provides end-to-end VAT compliance support, helping businesses manage their obligations with precision.",
    overview: [
      "Introduced in 2018, VAT has become a defining element of the UAE's modern economic landscape. Registration is mandatory when taxable supplies or imports exceed AED 375,000 in the preceding 12 months, while voluntary registration is available when they exceed AED 187,500.",
      "Managed by the Federal Tax Authority (FTA), VAT compliance calls for accurate records, timely reporting and a clear understanding of applicable requirements across both Mainland and Free Zone businesses.",
      "WorthPrime Tax provides end-to-end VAT compliance support, helping businesses manage their obligations with precision. Our team ensures each requirement is addressed accurately and on time, helping businesses maintain full compliance with UAE tax regulations.",
    ],
    capabilitiesLabel: "What we manage across VAT",
    capabilities: [
      "VAT registration and deregistration",
      "VAT return preparation and filing",
      "VAT compliance reviews",
      "VAT return amendments",
      "Support with FTA queries and correspondence",
      "VAT documentation and record-keeping",
      "Ongoing VAT compliance support",
    ],
    closing: ["Clear records. Accurate filings. Compliance handled with confidence."],
    cta: "Speak with our VAT Specialists",
  },
  {
    number: "03",
    slug: "accounting-bookkeeping",
    name: "Accounting & Bookkeeping",
    audience: "Businesses",
    tagline: "Know your numbers. Make better decisions.",
    summary:
      "WorthPrime Tax offers tailored Accounting and Bookkeeping solutions, designed around accuracy, reliability and full compliance.",
    overview: [
      "Bookkeeping provides the financial trail on which accurate accounting is built. For UAE businesses, well-maintained financial records aligned with IFRS underpin robust financial management and regulatory compliance.",
      "WorthPrime Tax offers tailored Accounting and Bookkeeping solutions, designed around accuracy, reliability and full compliance—bringing greater structure, consistency and clarity to financial records.",
    ],
    capabilitiesLabel: "Our Accounting & Bookkeeping expertise covers",
    capabilities: [
      "Maintain accurate books of accounts",
      "Record and reconcile daily transactions",
      "Prepare financial statements and reports",
      "Monitor income, expenses and cash flow",
      "Maintain organised financial records",
      "Support tax and audit requirements",
      "Gain better visibility into business performance",
    ],
    closing: [
      "With your finances in order, you can spend less time chasing numbers and more time growing your business.",
      "Make every number count.",
    ],
    cta: "Connect with Our Accounting & Bookkeeping Experts",
  },
  {
    number: "04",
    slug: "business-incorporation-dissolution",
    name: "Business Incorporation & Dissolution",
    audience: "Businesses",
    tagline: "Start right. Operate smoothly. Close properly.",
    summary:
      "WorthPrime Tax manages the complete setup, incorporation and dissolution of companies in Dubai, UAE.",
    overview: [
      "Every business begins with a strong foundation, and every closure calls for the same level of precision. WorthPrime Tax manages the complete setup, incorporation and dissolution of companies in Dubai, UAE, bringing structure and expertise to every stage of the business lifecycle.",
      // [NEED: the client flagged the Free Zone structuring paragraph "Please check"; add it here once confirmed]
      "From selecting the appropriate business structure and securing the necessary regulatory approvals to overseeing compliant dissolution and liquidation procedures, our team brings together the required expertise and formalities for a process that is clear, efficient and carefully coordinated from inception to closure. We also facilitate business bank account opening, adding another essential dimension to the company setup process.",
    ],
    capabilitiesLabel: "Our professional scope covers",
    capabilities: [
      "Business setup and incorporation",
      "Company structure guidance",
      "Regulatory and documentation support",
      "Licensing assistance",
      "Business bank account assistance",
      "Company closure and dissolution",
      "Liquidation support and compliance procedures",
    ],
    closing: [
      "Whether you are establishing your first UAE business or bringing an existing operation to an end, we help make the process clear, coordinated and hassle-free.",
    ],
    cta: "Take the Next Step in Your Business Journey",
  },
  {
    number: "05",
    slug: "payroll-services",
    name: "Payroll Services",
    audience: "Businesses",
    tagline: "Precision in every pay cycle. Integrity in every record.",
    summary:
      "WorthPrime Tax delivers meticulously structured payroll support encompassing critical employee-related processes.",
    overview: [
      "Payroll is more than a monthly process. It is a highly exacting business function, demanding the seamless convergence of accuracy, timeliness and regulatory compliance.",
      "WorthPrime Tax delivers meticulously structured payroll support encompassing critical employee-related processes, enabling businesses to administer their workforce obligations with greater precision, efficiency and regulatory rigour.",
    ],
    capabilitiesLabel: "Our payroll solutions span",
    capabilities: [
      "Payroll preparation and processing",
      "WPS registration and compliance",
      "Salary and payroll record maintenance",
      "Employee-related documentation",
      "Payroll reporting",
      "Day-to-day HR administration support",
    ],
    closing: [
      "With a structured approach to payroll administration, we help businesses reduce administrative pressure, maintain accurate records and keep workforce processes aligned with UAE requirements.",
    ],
    cta: "Bring Precision to Every Pay Cycle",
  },
  {
    number: "06",
    slug: "pro-visa-services",
    name: "PRO / Visa Services",
    audience: "Businesses",
    tagline: "Less paperwork. Faster processes. Greater peace of mind.",
    summary:
      "Our PRO and Visa support services assist businesses and individuals in managing UAE government and immigration procedures.",
    overview: [
      "Government, labour and immigration procedures often involve multiple authorities, approvals and documentation, making precision and procedural fluency indispensable.",
      "Our PRO and Visa support services assist businesses and individuals in managing UAE government and immigration procedures with precision, efficiency and regulatory diligence.",
    ],
    capabilitiesLabel: "We assist with",
    capabilities: [
      "Employment visa applications",
      "Visa renewals and cancellations",
      "Golden Visa applications and processing",
      "Labour and immigration approvals",
      "Emirates ID-related processes",
      "Document clearances",
      "Government liaison and PRO support",
      "Other business and employee-related administrative procedures",
    ],
    closing: [
      "Let our team handle the paperwork while you focus on what matters most—running your business.",
      "Navigate the formalities with precision.",
    ],
    cta: "Streamline Your PRO & Visa Requirements",
  },
  {
    number: "07",
    slug: "us-expat-tax-filing",
    name: "U.S. Expat Tax Filing",
    audience: "Individuals",
    tagline: "Your UAE life. Your U.S. tax obligations. One trusted team.",
    summary:
      "WorthPrime Tax assists U.S. taxpayers based in the UAE with the preparation and filing of their required U.S. tax returns.",
    overview: [
      "Residing in the UAE does not, by itself, extinguish U.S. tax filing obligations. For U.S. citizens and Green Card holders living in the UAE, U.S. Expat Tax Filing in Dubai/UAE can involve intricate reporting requirements, foreign income disclosures and important deadlines.",
      "WorthPrime Tax assists U.S. taxpayers based in the UAE with the preparation and filing of their required U.S. tax returns, bringing precision and clarity to cross-border tax compliance.",
      "Our U.S. Expat Tax team helps individuals understand and manage their U.S. tax responsibilities while making use of applicable provisions and credits.",
    ],
    capabilitiesLabel: "Our areas of expertise include",
    capabilities: [
      "U.S. individual tax return preparation and filing",
      "Foreign Earned Income Exclusion",
      "Foreign Tax Credit",
      "FBAR reporting",
      "FATCA-related reporting",
      "Foreign income and asset reporting",
      "Expatriate tax compliance",
      "Support with U.S. tax filing requirements",
    ],
    closing: [
      "Our approach centres on timely, accurate and comprehensive filing, while identifying eligible exclusions and credits to help minimise exposure to IRS penalties and maximise the tax benefits available under applicable U.S. tax provisions.",
      "Cross-border obligations require specialised attention.",
    ],
    cta: "Get Your U.S. Tax Filing on the Right Track",
  },
  {
    number: "08",
    slug: "statutory-financial-audit",
    name: "Statutory & Financial Audit",
    audience: "Assurance",
    tagline: "Independent insight. Stronger financial governance.",
    summary:
      "WorthPrime Tax conducts statutory and financial audits with professional rigour, ensuring financial reporting is aligned with IFRS and applicable UAE laws.",
    overview: [
      "A meaningful audit goes beyond the fulfilment of annual statutory obligations; it provides an objective perspective on financial reporting, strengthens accountability and reinforces the integrity of a business's financial framework.",
      "WorthPrime Tax conducts statutory and financial audits with professional rigour, ensuring financial reporting is aligned with IFRS and applicable UAE laws, while supporting transparency, regulatory compliance and sound financial governance.",
    ],
    capabilitiesLabel: "Our audit scope extends to",
    capabilities: [
      "Statutory audits",
      "Financial statement audits",
      "IFRS-based financial reporting reviews",
      "Audit preparation and coordination",
      "Financial compliance reviews",
      "Regulatory and annual reporting requirements",
    ],
    closing: [
      "We combine professional rigour with a practical understanding of how businesses operate—helping you build stronger financial foundations for the future.",
      "Clarity in reporting. Integrity in assurance. Strength in governance.",
    ],
    cta: "Strengthen Your Financial Oversight",
  },
  {
    number: "09",
    slug: "e-invoicing",
    name: "E-Invoicing Services",
    audience: "Compliance",
    tagline: "Digital precision. Regulatory readiness. Operational control.",
    summary:
      "WorthPrime Tax advises businesses on e-invoicing readiness and compliance, helping align invoicing processes with applicable regulatory requirements.",
    overview: [
      "As tax administration becomes increasingly digital, e-invoicing is reshaping how businesses issue, process and retain transaction records. WorthPrime Tax advises businesses on e-invoicing readiness and compliance, helping align invoicing processes with applicable regulatory requirements while maintaining accuracy, efficiency and robust documentation.",
    ],
    capabilitiesLabel: "Our E-Invoicing capabilities include",
    capabilities: [
      "E-invoicing readiness and compliance assessment",
      "Implementation and transition advisory",
      "Invoicing process and system review",
      "Digital invoice configuration and compliance",
      "Data, documentation and record-keeping requirements",
      "Process controls and compliance reviews",
      "Ongoing regulatory guidance",
    ],
    closing: ["Prepare your invoicing function for the next phase of digital tax administration."],
    cta: "Strengthen Your E-Invoicing Readiness",
  },
  {
    number: "10",
    slug: "anti-money-laundering",
    name: "Anti-Money Laundering (AML) Services",
    audience: "Assurance",
    tagline: "Stronger governance. Disciplined controls. Regulatory integrity.",
    summary:
      "WorthPrime Tax advises businesses on AML compliance and control measures, helping establish practical procedures that strengthen oversight.",
    overview: [
      "Effective Anti-Money Laundering compliance is fundamental to disciplined corporate governance and responsible business conduct. For businesses subject to UAE AML requirements, maintaining appropriate risk controls, customer due diligence and documentation is integral to meeting regulatory expectations.",
      "WorthPrime Tax advises businesses on AML compliance and control measures, helping establish practical procedures that strengthen oversight, address regulatory obligations and foster a disciplined approach to financial integrity.",
    ],
    capabilitiesLabel: "Our AML capabilities include",
    capabilities: [
      "AML compliance assessments",
      "Business risk assessments",
      "Customer Due Diligence (CDD)",
      "Know Your Customer (KYC) procedures",
      "AML policies and internal procedures",
      "Transaction monitoring and record-keeping",
      "Compliance reviews and control assessments",
      "Regulatory reporting and documentation guidance",
    ],
    closing: ["Build stronger AML controls and reinforce your regulatory standing."],
    cta: "Elevate Your AML Compliance",
  },
];

export const AUDIENCES: Array<"All" | Audience> = [
  "All",
  "Individuals",
  "Businesses",
  "Compliance",
  "Assurance",
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
