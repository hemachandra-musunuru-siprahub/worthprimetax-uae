import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import type { Service } from "@/data/services";
import { useServices } from "@/i18n/content";

function ServiceItem({ service }: { service: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      className="group flex shrink-0 items-center gap-3 px-5 py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-hero-foreground sm:gap-4 sm:px-7"
    >
      <span className="text-xs font-medium text-hero-foreground/80 transition-colors group-hover:text-hero-foreground sm:text-sm">
        {service.name}
      </span>
      <span className="text-xs text-hero-foreground/35" aria-hidden>
        •
      </span>
    </Link>
  );
}

/** Scrolling strip of every service, shown under each page hero. Scrolls the other way in RTL. */
export function ServiceMarquee() {
  const { t } = useTranslation();
  const services = useServices();
  return (
    <section
      aria-label={t("marquee.label")}
      className="overflow-hidden border-y border-hero bg-hero"
    >
      <div className="marquee-track flex w-max hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {[...services, ...services].map((service, index) => (
          <ServiceItem key={`${service.slug}-${index}`} service={service} />
        ))}
      </div>
    </section>
  );
}
