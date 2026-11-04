import { useCallback } from "react";
import { useRouter } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import {
  DEFAULT_LANGUAGE,
  applyDocumentLanguage,
  isLanguage,
  persistLanguage,
  type Language,
} from "./i18n";

/**
 * The active language and a setter that switches the whole site in place: text re-renders,
 * <html lang dir> flips, the choice is remembered, and route head() titles re-run. No reload.
 */
export function useLanguage() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const language: Language = isLanguage(i18n.language) ? i18n.language : DEFAULT_LANGUAGE;

  const setLanguage = useCallback(
    async (lng: Language) => {
      await i18n.changeLanguage(lng);
      persistLanguage(lng);
      applyDocumentLanguage(lng);
      await router.invalidate();
    },
    [i18n, router],
  );

  return { language, setLanguage };
}
