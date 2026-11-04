# WorthPrime Tax

Marketing website for WorthPrime Tax — U.S. tax, accounting and compliance services.

Built with TanStack Start, React, Vite and Tailwind CSS.

## Development

You need [Node.js](https://nodejs.org/) (or [Bun](https://bun.sh/)).

```sh
git clone https://github.com/Siprahub-Org/WorthPrimeTax.git
cd WorthPrimeTax
bun install   # or: npm install
bun run dev   # or: npm run dev
```

The site runs at http://localhost:8080.

## Scripts

- `dev` — start the local dev server
- `build` — production build
- `preview` — preview the production build
- `lint` — run ESLint
- `format` — format with Prettier

## Languages (English and Arabic)

The site is translated with [i18next](https://www.i18next.com/) and
[react-i18next](https://react.i18next.com/). Arabic is shown right to left.

- **Translations:** `src/locales/<language>/translation.json`. English is the source of truth;
  every other language must have exactly the same keys. Components read text with `useTranslation()`
  and `t("key")`; services, FAQs, reasons and founders come from the helpers in
  `src/i18n/content.ts`.
- **Setup:** `src/i18n/i18n.ts` lists the languages (`LANGUAGES`), creates the i18next instance and
  remembers the visitor's choice in localStorage and in an `lng` cookie, so the server renders the
  right language and direction on the first load. Missing keys fall back to English.
- **Switcher:** `src/components/LanguageSwitcher.tsx` (nav bar and mobile menu). Switching updates
  the whole page, `<html lang dir>` and the page title without reloading.
- **Not translated:** the Privacy Policy and Terms of Use bodies stay in English until a reviewed
  legal translation exists (their headings and labels are translated).

> **The Arabic text is a first draft.** Have it reviewed by a native Arabic speaker (and the tax and
> legal terms by the firm) before launch.

### Adding a language (for example Hindi)

1. Copy `src/locales/en/translation.json` to `src/locales/hi/translation.json` and translate the
   values only (keep every key and `{{placeholder}}`).
2. In `src/i18n/i18n.ts`, import the file into `resources` and add an entry to `LANGUAGES`:
   `hi: { label: "हिन्दी", short: "हि", dir: "ltr" }`.
3. If the script needs its own font, add it to the Google Fonts link in `src/routes/__root.tsx` and
   a `:lang(hi)` font rule in `src/styles.css`, as Arabic does.
