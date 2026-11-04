import "i18next";
import type en from "@/locales/en/translation.json";

// English is the source of truth: `t()` keys are checked against it at compile time.
declare module "i18next" {
  interface CustomTypeOptions {
    resources: { translation: typeof en };
  }
}
