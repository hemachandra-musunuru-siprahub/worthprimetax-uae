// Served without the app stylesheet, so the theme variables are inlined here.
import themeCss from "../styles/theme.css?raw";
// Read straight from the translation files (not through i18next) so this page has as few
// dependencies as possible: it is what visitors see when the app itself failed.
import en from "@/locales/en/translation.json";
import ar from "@/locales/ar/translation.json";

/** The error message in English and Arabic, each block with its own language and direction. */
export function renderErrorPage(): string {
  const block = (copy: typeof en.error, lang: string, dir: "ltr" | "rtl") => `
    <div class="card" lang="${lang}" dir="${dir}">
      <h1>${copy.heading}</h1>
      <p>${copy.body}</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">${copy.tryAgain}</button>
        <a class="secondary" href="/">${copy.goHome}</a>
      </div>
    </div>`;

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${en.error.heading}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      ${themeCss}
      body { font: 15px/1.5 system-ui, -apple-system, "Segoe UI", Tahoma, sans-serif; background: var(--theme-page-bg); color: var(--theme-text); display: grid; place-content: center; gap: 1rem; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 1.5rem 2rem; }
      .card + .card { border-top: 1px solid var(--theme-border); }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; color: var(--theme-heading); }
      p { color: var(--theme-text-muted); margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: var(--theme-button-bg); color: var(--theme-button-text); }
      .secondary { background: var(--theme-surface); color: var(--theme-text); border-color: var(--theme-border); }
    </style>
  </head>
  <body>${block(en.error, "en", "ltr")}${block(ar.error, "ar", "rtl")}
  </body>
</html>`;
}
