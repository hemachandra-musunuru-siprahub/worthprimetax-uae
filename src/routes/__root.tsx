import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";

import { useEffect, useState, type ReactNode } from "react";
import { I18nextProvider, useTranslation } from "react-i18next";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { siteJsonLd } from "../lib/seo";
import { createI18n, dirOf, getLanguage, RESTORE_LANGUAGE_SCRIPT } from "@/i18n/i18n";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ContactCluster } from "@/components/site/ContactCluster";

function NotFoundComponent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      {/* React hoists these into <head>; the route tree has no head() for unknown URLs. */}
      <title>{t("meta.notFound")}</title>
      <meta name="robots" content="noindex" />
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{t("notFound.heading")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("notFound.body")}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("notFound.goHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  const { t } = useTranslation();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          {t("error.heading")}
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">{t("error.body")}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("error.tryAgain")}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {t("error.goHome")}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  // Every route reads the visitor's language from context (page titles in head(), the shell's
  // <html lang dir>). Re-runs on router.invalidate() after the language is switched.
  beforeLoad: () => ({ lng: getLanguage() }),
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "WorthPrime Tax" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "WorthPrime Tax" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    // The restore script must run before hydration, so it goes first in <head>.
    scripts: [{ children: RESTORE_LANGUAGE_SCRIPT }, siteJsonLd()],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        // Noto Sans Arabic is split by unicode-range, so English pages never download it.
        href: "https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700&family=Open+Sans:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,600;8..60,700&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", sizes: "48x48" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const { lng } = Route.useRouteContext();
  // One i18next instance per server render and one for the browser visit; switching languages
  // changes it in place (see useLanguage), so it is never recreated.
  const [i18n] = useState(() => createI18n(lng));

  return (
    <html lang={lng} dir={dirOf(lng)}>
      <head>
        <HeadContent />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { t } = useTranslation();

  return (
    <QueryClientProvider client={queryClient}>
      {/* First tab stop: lets keyboard users jump past the nav. Hidden until focused. */}
      <a
        href="#main"
        className="sr-only z-[100] rounded-md bg-primary text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:px-4 focus:py-2"
      >
        {t("common.skipToContent")}
      </a>
      <Nav />
      {/*
       * Every page lets its first section run up behind the transparent nav; a 4rem spacer at the
       * top of that section keeps its content clear of the bar.
       */}
      <main
        id="main"
        tabIndex={-1}
        className="min-h-screen outline-none [&>:first-child]:before:block [&>:first-child]:before:h-16 [&>:first-child]:before:content-['']"
      >
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </main>
      <Footer />
      <ContactCluster />
    </QueryClientProvider>
  );
}
