import { createFileRoute, Link } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { ABOUT_STORY, FOUNDERS, FOUNDERS_CLOSING } from "@/data/site";
import { Section, SectionLabel } from "@/components/site/primitives";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import advisersImage from "@/assets/worthprime-advisers-blue.webp";
import { FOUNDER_PHOTOS } from "@/components/site/founderPhotos";
import aboutHeroImage from "@/assets/about hero.png";
import aboutHeroMobileImage from "@/assets/about-hero-mobile.webp";
import { ServiceMarquee } from "@/components/site/ServiceMarquee";

const TITLE = "About WorthPrime Tax | How We Started";
const DESCRIPTION =
  "Co-founded in 2020, WorthPrime Tax brings together experience across accounting, taxation, audit, payroll, legal and compliance services spanning the UAE, U.S. and India.";

const HEADING = "font-serif font-bold leading-[1.08] tracking-[-0.01em] text-primary";

export const Route = createFileRoute("/about")({
  head: () => seoHead({ title: TITLE, description: DESCRIPTION, path: "/about" }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Skip the layout's nav spacer so the photo runs up behind the transparent bar. */}
      {/* Phones (max-sm) follow the service hero: the photo sits behind the copy under a white
          wash so the service strip shows on the first screen. sm and up keep the chevron layout. */}
      <section className="relative isolate overflow-hidden before:!hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden bg-linear-to-r from-background from-55% via-background/85 via-75% to-background/0 max-sm:block"
        />
        {/* Lifts the lower part of the phone photo (navy desk and shelves) so the copy stays readable. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-10 hidden h-2/5 bg-linear-to-t from-background from-30% via-background/80 to-background/0 max-sm:block"
        />
        {/* Phones use a bright office interior (city view, desk on the right) instead of the
            logo-wall photo. */}
        <img
          src={aboutHeroMobileImage}
          alt=""
          width={1024}
          height={1536}
          className="absolute inset-0 -z-20 hidden size-full object-cover object-[right_top] max-sm:block"
        />
        {/* Chevron for the hero photo: rounded point on the left, matching rounded notch on the right. */}
        <svg width="0" height="0" className="absolute" aria-hidden>
          <clipPath id="about-hero-shape" clipPathUnits="objectBoundingBox">
            <path d="M0.18,0 L0.84,0 L0.752,0.2 Q0.73,0.25 0.748,0.3 L1,1 L0.35,1 L0.023,0.3 Q0,0.25 0.036,0.2 Z" />
          </clipPath>
        </svg>
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 max-sm:gap-6 lg:grid-cols-[1fr_1.15fr] lg:gap-0">
          <div className="px-5 pt-24 pb-10 sm:px-8 lg:pt-28 lg:pb-16 lg:pl-[max(2rem,calc((100vw-1200px)/2))]">
            <h1
              className={cn(
                "text-[clamp(2.3rem,3.9vw,3.6rem)] max-sm:text-[1.95rem] max-sm:leading-[1.05]",
                HEADING,
              )}
            >
              {ABOUT_STORY.label}
            </h1>
            {/* Phones only: a short rule under the heading, and the hero buttons below the intro. */}
            <span
              className="mt-5 hidden h-0.5 w-12 rounded-full bg-brand-secondary/60 max-sm:block"
              aria-hidden
            />
            <p className="mt-6 max-w-xl leading-relaxed max-sm:mt-4 max-sm:text-[0.875rem] max-sm:text-foreground/80">
              {ABOUT_STORY.body}
            </p>
            {/* Phones only: the same two buttons as the home hero, in one row. */}
            <div className="mt-6 hidden gap-2 max-sm:flex">
              <Link
                to="/services"
                className="inline-flex flex-auto items-center justify-center gap-1.5 rounded-md bg-primary px-3 py-3 text-[0.8125rem] leading-[1.43] font-semibold whitespace-nowrap text-primary-foreground"
              >
                <span>
                  {/* "Explore" is dropped on the narrowest phones so both buttons still fit. */}
                  <span className="hidden min-[360px]:inline">Explore </span>Our Services
                </span>
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex flex-auto items-center justify-center rounded-md border border-primary bg-background px-3 py-3 text-[0.8125rem] leading-[1.43] font-semibold whitespace-nowrap text-primary"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
          <img
            src={aboutHeroImage}
            alt="WorthPrime logo on a marble office wall"
            width={1672}
            height={941}
            className="aspect-[4/3] h-full w-full object-cover object-[60%_center] [clip-path:url(#about-hero-shape)] max-sm:hidden lg:aspect-auto lg:min-h-[560px]"
          />
        </div>
      </section>

      <ServiceMarquee />

      <Founders />
    </>
  );
}

function Founders() {
  const [open, setOpen] = useState<number | null>(null);
  const scroll = (dir: number) =>
    document.getElementById("founders-track")?.scrollBy({ left: dir * 400, behavior: "smooth" });
  return (
    <Section>
      <div className="flex items-center justify-between gap-6">
        <SectionLabel as="h2">Co-Founders</SectionLabel>
        <div className="flex gap-3">
          {[
            { dir: -1, Icon: ChevronLeft, label: "Previous co-founder" },
            { dir: 1, Icon: ChevronRight, label: "Next co-founder" },
          ].map(({ dir, Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              onClick={() => scroll(dir)}
              className="grid size-9 place-items-center rounded-full border border-border bg-card text-primary hover:bg-muted"
            >
              <Icon className="size-4" aria-hidden />
            </button>
          ))}
        </div>
      </div>
      <div
        id="founders-track"
        className="mt-8 grid snap-x snap-mandatory auto-cols-[minmax(300px,1fr)] grid-flow-col gap-6 overflow-x-auto pb-2 lg:auto-cols-[calc(50%-12px)]"
      >
        {FOUNDERS.map((f, i) => (
          <article
            key={f.name}
            className="group grid snap-start overflow-hidden bg-card shadow-sm transition duration-300 ease-out focus-within:-translate-y-1 focus-within:shadow-xl hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:grid-cols-[0.8fr_1fr]"
          >
            {/* Subtle reveal on hover or focus: the photo eases in and the credential slides up over it. */}
            <div className="relative overflow-hidden">
              <img
                src={FOUNDER_PHOTOS[i] ?? advisersImage}
                alt={
                  FOUNDER_PHOTOS[i]
                    ? `Portrait of ${f.name}`
                    : "Professional advisers in consultation"
                }
                width={1408}
                height={1008}
                loading="lazy"
                className="h-full min-h-56 w-full object-cover object-top transition-transform duration-700 ease-out group-focus-within:scale-105 group-hover:scale-105 motion-reduce:transition-none"
              />
              <div
                className="absolute inset-x-0 bottom-0 translate-y-full bg-linear-to-t from-hero/90 via-hero/70 to-transparent px-4 pt-10 pb-4 opacity-0 transition duration-500 ease-out group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:translate-y-0 group-hover:opacity-100 motion-reduce:transition-none"
                aria-hidden
              >
                <p className="text-xs leading-snug font-medium text-hero-foreground">
                  {f.credential}
                </p>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-lg font-bold text-primary">{f.name}</h3>
              <p className="mt-1 text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase">
                {f.title}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">{f.credential}</p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{f.summary}</p>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
              >
                Read Full Biography
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  aria-hidden
                />
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-start">
        <h3 className={cn("text-[clamp(1.6rem,2.6vw,2.2rem)]", HEADING)}>
          {FOUNDERS_CLOSING.heading}
        </h3>
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          {FOUNDERS_CLOSING.body.map((p) => (
            <p key={p.slice(0, 30)}>{p}</p>
          ))}
        </div>
      </div>

      {/* Full bio opens in a dialog so the cards keep a fixed height. */}
      <Dialog open={open !== null} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto p-0 sm:rounded-2xl">
          {open !== null && (
            <>
              <div className="grid gap-5 border-b border-border p-6 sm:grid-cols-[120px_1fr] sm:items-center sm:p-8">
                <img
                  src={FOUNDER_PHOTOS[open] ?? advisersImage}
                  alt=""
                  width={1408}
                  height={1008}
                  className="size-28 rounded-full object-cover object-top"
                />
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl font-bold text-primary">
                    {FOUNDERS[open].name}
                  </DialogTitle>
                  <p className="text-[0.65rem] font-semibold tracking-[0.2em] text-primary uppercase">
                    {FOUNDERS[open].title}
                  </p>
                  <DialogDescription className="text-xs">
                    {FOUNDERS[open].credential}
                  </DialogDescription>
                </DialogHeader>
              </div>
              <div className="space-y-4 p-6 text-sm leading-relaxed text-muted-foreground sm:p-8">
                {FOUNDERS[open].bio.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
