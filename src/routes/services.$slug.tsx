import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { getService } from "@/data/services";
import { tFor } from "@/i18n/i18n";
import { localizeService } from "@/i18n/content";
import { breadcrumbJsonLd, seoHead, serviceCrumbs } from "@/lib/seo";
import { Section } from "@/components/site/primitives";
import { ServiceDetailFeature } from "@/components/site/ServiceDetailFeature";
import { getServiceDetailMedia } from "@/components/site/serviceDetailMedia";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData, match }) => {
    const { lng } = match.context;
    const t = tFor(lng);
    if (!loaderData) {
      const title = t("meta.serviceNotFound.title");
      return {
        meta: [
          { title },
          { name: "robots", content: "noindex" },
          { property: "og:title", content: title },
          { property: "og:description", content: t("meta.serviceNotFound.description") },
          { property: "og:type", content: "website" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
      };
    }
    const service = localizeService(loaderData.service, t);
    return {
      ...seoHead({
        title: t("meta.service", { name: service.name }),
        description: service.summary,
        path: `/services/${service.slug}`,
        lng,
      }),
      scripts: [breadcrumbJsonLd(serviceCrumbs(service, lng))],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServiceDetail,
});

function ServiceNotFound() {
  const { t } = useTranslation();
  return (
    <Section>
      <h1 className="text-4xl">{t("servicesPage.notFound")}</h1>
      <Link
        to="/services"
        className="mt-6 inline-flex items-center gap-1.5 text-primary hover:underline"
      >
        <ArrowLeft className="size-4 rtl:-scale-x-100" aria-hidden />
        {t("servicesPage.backToAll")}
      </Link>
    </Section>
  );
}

function ServiceDetail() {
  const { t } = useTranslation();
  const service = localizeService(Route.useLoaderData().service, t);
  return (
    <ServiceDetailFeature
      service={service}
      media={getServiceDetailMedia(service.slug, service.name)}
    />
  );
}
