import { SERVICE_IMAGES } from "./serviceImages";
import heroBackdrop from "@/assets/service-pages/hero-backdrop.webp";
import fallbackIncluded from "@/assets/worthprime-documents-blue.webp";
import fallbackWhoFor from "@/assets/worthprime-advisers-blue.webp";
import fallbackOverview from "@/assets/worthprime-workspace.webp";
import stepUnderstand from "@/assets/service-pages/steps/understand.jpg";
import stepPrepare from "@/assets/service-pages/steps/prepare.jpg";
import stepDeliver from "@/assets/service-pages/steps/deliver.jpg";

/*
 * Service detail page photography. Drop files into src/assets/service-pages/<service-slug>/
 * named by slot — hero, overview, included, who-for, thumb (.jpg, .png or .webp) — and the
 * page picks them up. Missing slots fall back to the shared brand photos below.
 * Every page shares the hero background above; a `hero-backdrop` file in a service folder
 * replaces it for that page.
 */
const files = import.meta.glob<string>("../../assets/service-pages/*/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
});

const SLOTS = ["hero-backdrop", "overview", "included", "who-for", "thumb"] as const;
type Slot = (typeof SLOTS)[number];

const BY_SERVICE: Record<string, Partial<Record<Slot, string>>> = {};
for (const [path, url] of Object.entries(files)) {
  const match = /service-pages\/([^/]+)\/([^/.]+)\.\w+$/.exec(path);
  const slug = match?.[1];
  const slot = SLOTS.find((s) => s === match?.[2]);
  if (!slug || !slot) continue;
  (BY_SERVICE[slug] ??= {})[slot] = url;
}

// Descriptions for client-supplied photos; fallbacks get generic text from the service name.
const ALT_TEXT: Record<
  string,
  Partial<Record<Exclude<Slot, "hero-backdrop" | "thumb">, string>>
> = {};

type Image = { src: string; alt: string };

export type ServiceDetailMedia = {
  heroBackdrop: string;
  overview: Image;
  included: Image;
  whoFor: Image;
  /** One per process step (understand, prepare, deliver), shared by every service. */
  steps: [string, string, string];
};

export function getServiceDetailMedia(slug: string, name: string): ServiceDetailMedia {
  const own = BY_SERVICE[slug] ?? {};
  const alt = ALT_TEXT[slug] ?? {};
  return {
    heroBackdrop: own["hero-backdrop"] ?? heroBackdrop,
    overview: {
      src: own.overview ?? SERVICE_IMAGES[slug] ?? fallbackOverview,
      alt: alt.overview ?? `${name} at WorthPrime Tax`,
    },
    included: {
      src: own.included ?? fallbackIncluded,
      alt: alt.included ?? `Documents prepared for ${name.toLowerCase()} work`,
    },
    whoFor: {
      src: own["who-for"] ?? fallbackWhoFor,
      alt: alt["who-for"] ?? "WorthPrime Tax advisers meeting with a client",
    },
    steps: [stepUnderstand, stepPrepare, stepDeliver],
  };
}

/** Thumbnail for a service's related-service card. */
export function getServiceThumb(slug: string): string | undefined {
  return BY_SERVICE[slug]?.thumb ?? SERVICE_IMAGES[slug];
}
