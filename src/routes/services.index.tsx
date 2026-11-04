import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { pageHead } from "@/lib/seo";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { AUDIENCES, type Audience } from "@/data/services";
import { useServices } from "@/i18n/content";
import { LINKS } from "@/data/site";
import { Reveal, Section } from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICE_GRID } from "@/components/site/serviceGrid";
import { BackdropHero } from "@/components/site/BackdropHero";
// import { CtaBand } from "@/components/site/CtaBand";
import { ServiceMarquee } from "@/components/site/ServiceMarquee";
import { cn } from "@/lib/utils";
import heroBackdrop from "@/assets/service-pages/hero-backdrop.webp";

export const Route = createFileRoute("/services/")({
  head: ({ match }) => pageHead(match.context.lng, "services", "/services"),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useTranslation();
  const services = useServices();
  // Filter values stay English identifiers; only their labels are translated.
  const [filter, setFilter] = useState<"All" | Audience>("All");
  const shown = filter === "All" ? services : services.filter((s) => s.audience === filter);

  return (
    <>
      <BackdropHero
        lines={[[{ text: t("servicesPage.heading") }]]}
        intro={t("servicesPage.intro")}
        image={heroBackdrop}
      />

      <ServiceMarquee />

      <Section className="pt-10 sm:pt-14">
        {/* The cards carry h3 names; this keeps the outline h1 → h2 → h3 without changing the look. */}
        <h2 className="sr-only">{t("servicesPage.allServices")}</h2>
        <div className="flex flex-wrap gap-2">
          {AUDIENCES.map((a) => (
            <button
              key={a}
              type="button"
              onClick={() => setFilter(a)}
              aria-pressed={filter === a}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-colors",
                filter === a
                  ? "border-primary bg-primary text-hero-foreground"
                  : "border-border text-foreground/80 hover:bg-accent",
              )}
            >
              {t(`servicesPage.audiences.${a}`)}
            </button>
          ))}
        </div>

        <div className={cn("mt-8", SERVICE_GRID)}>
          {shown.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 5) * 70}>
              <ServiceCard service={s} photoOnly />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* For U.S. expats in the UAE (see the U.S. Expat Tax Filing service). */}
      <Section className="pt-0 sm:pt-0">
        <a
          href={LINKS.irs}
          target="_blank"
          rel="noreferrer noopener"
          className="surface-card flex flex-wrap items-center justify-between gap-4 p-7 transition-colors hover:border-primary/60"
        >
          <div>
            <p className="label-slash">{t("servicesPage.irsLabel")}</p>
            <h3 className="mt-2 text-2xl">{t("servicesPage.irsHeading")}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{t("servicesPage.irsBody")}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-hero-foreground">
            {t("servicesPage.openTool")} <ExternalLink className="size-4" aria-hidden />
          </span>
        </a>
      </Section>

      {/* <CtaBand /> */}
    </>
  );
}
