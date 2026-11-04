import i18next, { type i18n as I18n } from "i18next";
import { initReactI18next } from "react-i18next";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getCookie } from "@tanstack/react-start/server";
import en from "@/locales/en/translation.json";
import ar from "@/locales/ar/translation.json";

/*
 * Supported languages. To add one (e.g. Hindi): create src/locales/hi/translation.json with the
 * same keys as English, import it into `resources` below and add an entry here.
 */
export const LANGUAGES = {
  en: { label: "English", short: "EN", dir: "ltr" },
  ar: { label: "العربية", short: "ع", dir: "rtl" },
} as const;

export type Language = keyof typeof LANGUAGES;
export type Direction = (typeof LANGUAGES)[Language]["dir"];

export const DEFAULT_LANGUAGE: Language = "en";

export const resources = {
  en: { translation: en },
  ar: { translation: ar },
} as const satisfies Record<Language, unknown>;

/** localStorage key and cookie name that remember the visitor's choice. */
const STORAGE_KEY = "lng";
const ONE_YEAR_SECONDS = 60 * 60 * 24 * 365;

export function isLanguage(value: unknown): value is Language {
  return typeof value === "string" && Object.hasOwn(LANGUAGES, value);
}

export function dirOf(lng: Language): Direction {
  return LANGUAGES[lng].dir;
}

/**
 * A fresh i18next instance with every language loaded synchronously, so server rendering never
 * waits. The server builds one per request; the browser keeps one for the whole visit.
 * Missing keys fall back to English rather than showing the raw key.
 */
export function createI18n(lng: Language): I18n {
  const instance = i18next.createInstance();
  void instance.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: Object.keys(LANGUAGES),
    initAsync: false,
    interpolation: { escapeValue: false }, // React already escapes rendered text.
    saveMissing: import.meta.env.DEV,
    missingKeyHandler: (lngs, _ns, key) => {
      console.warn(`[i18n] Missing translation for "${key}" in ${lngs.join(", ")}`);
    },
  });
  return instance;
}

/** Shared instance for code outside React (route head() titles, the enquiry webhook). */
const fixed = createI18n(DEFAULT_LANGUAGE);

/** A `t` bound to one language, for page titles and other non-component code. */
export function tFor(lng: Language) {
  return fixed.getFixedT(lng);
}

function readCookie(name: string): string | undefined {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match?.[1];
}

/**
 * The language to render: the cookie, or English without one. Server and browser read the same
 * cookie, so the browser's first render matches the server's HTML (no hydration mismatch). A choice
 * saved only in localStorage is applied after hydration (see readSavedLanguage).
 */
export const getLanguage = createIsomorphicFn()
  .server((): Language => {
    const saved = getCookie(STORAGE_KEY);
    return isLanguage(saved) ? saved : DEFAULT_LANGUAGE;
  })
  .client((): Language => {
    const saved = readCookie(STORAGE_KEY);
    return isLanguage(saved) ? saved : DEFAULT_LANGUAGE;
  });

/**
 * Inline <head> script, run before React hydrates. If localStorage holds a different language than
 * the cookie the server rendered with (only when the cookie alone was cleared), it restores the
 * cookie and reloads once, so the page is server-rendered in the saved language. Switching
 * languages in the page never reloads; this covers a lost cookie only.
 */
export const RESTORE_LANGUAGE_SCRIPT = `(function(){try{
var k=${JSON.stringify(STORAGE_KEY)},ok=${JSON.stringify(Object.keys(LANGUAGES))};
var s=localStorage.getItem(k);var m=document.cookie.match(new RegExp("(?:^|; )"+k+"=([^;]*)"));
var c=m?m[1]:${JSON.stringify(DEFAULT_LANGUAGE)};
if(s&&ok.indexOf(s)>-1&&s!==c){document.cookie=k+"="+s+"; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax";location.reload();}
}catch(e){}})();`;

/** Remembers the choice in localStorage and in a cookie the server can read on the next visit. */
export function persistLanguage(lng: Language) {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // Storage can be blocked; the cookie below still carries the choice.
  }
  document.cookie = `${STORAGE_KEY}=${lng}; path=/; max-age=${ONE_YEAR_SECONDS}; samesite=lax`;
}

/** Points <html> at the language so the browser, screen readers and CSS (:lang, [dir]) follow it. */
export function applyDocumentLanguage(lng: Language) {
  document.documentElement.lang = lng;
  document.documentElement.dir = dirOf(lng);
}
