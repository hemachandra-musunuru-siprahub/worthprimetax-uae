import type en from "@/locales/en/translation.json";
import type { ServiceSlug } from "./services";

/*
 * Which FAQs exist and where they appear. The questions and answers, word for word from the
 * client's "UAE Worth Prime content" document, live in src/locales/<lang>/translation.json under
 * `faqs.<id>`; group titles under `faqGroups.<id>`. Use the hooks in src/i18n/content.ts.
 */
export type FaqId = keyof typeof en.faqs;
export type FaqGroupId = keyof typeof en.faqGroups;

export type ServiceFaq = { q: string; a: string };
export type ServiceFaqGroup = { title?: string; faqs: ServiceFaq[] };

/** Every FAQ in the document's order and groups, for the home page. */
export const FAQ_GROUPS: Array<{ id: FaqGroupId; faqs: FaqId[] }> = [
  {
    id: "setup",
    faqs: ["mainlandVsFreeZone", "incorporationTime", "dissolution", "shareTransfer"],
  },
  { id: "tax", faqs: ["corporateTaxRate", "freeZoneExempt", "vatThreshold", "vatFrequency"] },
  { id: "accounting", faqs: ["booksMandatory", "auditRequired", "remoteAccounting"] },
];

/** The questions each service page shows, as one untitled group. */
export const SERVICE_FAQS: Partial<Record<ServiceSlug, FaqId[]>> = {
  "corporate-tax": ["corporateTaxRate", "freeZoneExempt"],
  "vat-compliance": ["vatThreshold", "vatFrequency"],
  "accounting-bookkeeping": ["booksMandatory", "remoteAccounting"],
  "business-incorporation-dissolution": [
    "mainlandVsFreeZone",
    "incorporationTime",
    "dissolution",
    "shareTransfer",
  ],
  "statutory-financial-audit": ["auditRequired"],
};
