import type en from "@/locales/en/translation.json";

export type Audience = "Individuals" | "Businesses" | "Compliance" | "Assurance";

/** Service slugs, taken from the English translation file so every service has copy. */
export type ServiceSlug = keyof typeof en.services;

/**
 * Identifiers and structure for each service. All copy (name, tagline, overview, capabilities,
 * call to action) lives in src/locales/<lang>/translation.json under `services.<slug>`; use
 * `useServices()` / `localizeService()` from src/i18n/content.ts to get the full, translated service.
 */
export type ServiceMeta = {
  number: string;
  slug: ServiceSlug;
  audience: Audience;
  /** How many capabilities the flip side of the service card shows; all of them when unset. */
  cardCapabilityCount?: number;
};

export type Service = ServiceMeta & {
  name: string;
  tagline: string;
  summary: string;
  overview: string[];
  capabilitiesLabel: string;
  capabilities: string[];
  /** Lines from the client's document that follow the capabilities list, shown above the call to action. */
  closing?: string[];
  cta: string;
};

// Order and grouping from the client's "UAE Worth Prime content" document.
export const SERVICES: ServiceMeta[] = [
  { number: "01", slug: "corporate-tax", audience: "Compliance" },
  { number: "02", slug: "vat-compliance", audience: "Compliance" },
  { number: "03", slug: "accounting-bookkeeping", audience: "Businesses" },
  { number: "04", slug: "business-incorporation-dissolution", audience: "Businesses" },
  { number: "05", slug: "payroll-services", audience: "Businesses" },
  { number: "06", slug: "pro-visa-services", audience: "Businesses" },
  { number: "07", slug: "us-expat-tax-filing", audience: "Individuals" },
  { number: "08", slug: "statutory-financial-audit", audience: "Assurance" },
  { number: "09", slug: "e-invoicing", audience: "Compliance" },
  { number: "10", slug: "anti-money-laundering", audience: "Assurance" },
];

/** Filter values on the Services page; labels come from `servicesPage.audiences`. */
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
