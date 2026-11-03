import {
  Building2,
  Calculator,
  FileCheck,
  FileText,
  Landmark,
  Receipt,
  ShieldCheck,
  Stamp,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

/** One icon per service, keyed by slug, for lists that show services (e.g. the footer). */
export const SERVICE_ICONS: Record<string, LucideIcon> = {
  "corporate-tax": Landmark,
  "vat-compliance": Receipt,
  "accounting-bookkeeping": Calculator,
  "business-incorporation-dissolution": Building2,
  "payroll-services": Users,
  "pro-visa-services": Stamp,
  "us-expat-tax-filing": FileText,
  "statutory-financial-audit": TrendingUp,
  "e-invoicing": FileCheck,
  "anti-money-laundering": ShieldCheck,
};
