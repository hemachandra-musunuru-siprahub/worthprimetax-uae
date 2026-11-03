import { createFileRoute } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";
import { absoluteUrl } from "@/lib/seo";

// Every indexable page, built from the same data as the routes so new services appear
// automatically. Not-found and redirecting URLs are never listed.
const STATIC_PATHS = ["/", "/about", "/services", "/contact", "/privacy-policy", "/terms-of-use"];

function sitemapXml() {
  const paths = [...STATIC_PATHS, ...SERVICES.map((s) => `/services/${s.slug}`)];
  const urls = paths.map((path) => `  <url><loc>${absoluteUrl(path)}</loc></url>`).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () =>
        new Response(sitemapXml(), {
          headers: { "content-type": "application/xml; charset=utf-8" },
        }),
    },
  },
});
