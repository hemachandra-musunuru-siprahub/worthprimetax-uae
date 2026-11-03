import { Link } from "@tanstack/react-router";
import { SERVICES } from "@/data/services";

function ServiceItem({ service }: { service: (typeof SERVICES)[number] }) {
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

/** Scrolling strip of every service, shown under each page hero. */
export function ServiceMarquee() {
  return (
    <section aria-label="Our services" className="overflow-hidden border-y border-hero bg-hero">
      <div className="marquee-track flex w-max hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {[...SERVICES, ...SERVICES].map((service, index) => (
          <ServiceItem key={`${service.slug}-${index}`} service={service} />
        ))}
      </div>
    </section>
  );
}
