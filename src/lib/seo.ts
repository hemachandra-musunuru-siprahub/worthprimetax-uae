import { LINKS, SITE } from "@/data/site";
import { tFor, type Language } from "@/i18n/i18n";
// Temporary social sharing image (see SITE in src/data/site.ts): needs client approval.
import socialImage from "@/assets/social-share.jpg";
import logoImage from "@/assets/worthprime-logo-2026.webp";

export function absoluteUrl(path: string) {
  return new URL(path, SITE.url).toString();
}

const OG_LOCALES: Record<Language, string> = { en: "en_AE", ar: "ar_AE" };

type PageMetaKey = "home" | "about" | "services" | "contact" | "privacy" | "terms";

/** seoHead() for a page whose title and description live under `meta.<page>` in the translations. */
export function pageHead(lng: Language, page: PageMetaKey, path: string) {
  const t = tFor(lng);
  return seoHead({
    title: t(`meta.${page}.title`),
    description: t(`meta.${page}.description`),
    path,
    lng,
  });
}

/** Title, description, canonical, Open Graph and Twitter tags for one indexable page. */
export function seoHead({
  title,
  description,
  path,
  lng,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  lng: Language;
  type?: "website" | "article";
}) {
  const url = absoluteUrl(path);
  const image = absoluteUrl(socialImage);
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:locale", content: OG_LOCALES[lng] },
      { property: "og:type", content: type },
      { property: "og:url", content: url },
      { property: "og:site_name", content: SITE.name },
      { property: "og:image", content: image },
      { property: "og:image:width", content: "1264" },
      { property: "og:image:height", content: "848" },
      { property: "og:image:alt", content: SITE.socialImageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: image },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export function jsonLdScript(data: object) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

/** Site-wide Organization and WebSite schema (root head). Only facts already published on the site. */
export function siteJsonLd() {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        logo: absoluteUrl(logoImage),
        email: LINKS.email,
        telephone: LINKS.phoneHref.replace("tel:", ""),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        name: SITE.name,
        url: SITE.url,
        publisher: { "@id": `${SITE.url}/#organization` },
      },
    ],
  });
}

export type Crumb = { name: string; path: string };

export function serviceCrumbs(service: { slug: string; name: string }, lng: Language): Crumb[] {
  const t = tFor(lng);
  return [
    { name: t("common.home"), path: "/" },
    { name: t("common.services"), path: "/services" },
    { name: service.name, path: `/services/${service.slug}` },
  ];
}

export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return jsonLdScript({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  });
}
