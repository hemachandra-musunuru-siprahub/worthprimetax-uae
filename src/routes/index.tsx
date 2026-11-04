import { createFileRoute, Link } from "@tanstack/react-router";
import { seoHead } from "@/lib/seo";
import { useRef, useState, type CSSProperties, type PointerEvent } from "react";
import {
  ArrowRight,
  Building2,
  Calculator,
  ChevronDown,
  Landmark,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "@/data/services";
import { FAQ_GROUPS } from "@/data/serviceFaqs";
import { CLIENT_EXPERIENCE, REASONS } from "@/data/site";
import {
  Container,
  Reveal,
  Section,
  SectionLabel,
  useInView,
  useSnapCarousel,
} from "@/components/site/primitives";
import { ServiceCard } from "@/components/site/ServiceCard";
import { SERVICE_GRID } from "@/components/site/serviceGrid";
import { ContactSection } from "@/components/site/ContactSection";
import { FaqIllustration } from "@/components/site/FaqIllustration";
import { ServiceMarquee } from "@/components/site/ServiceMarquee";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/worthprime-hero-team.webp";
import heroMobileImage from "@/assets/home-hero-mobile.webp";
import advisersImage from "@/assets/worthprime-advisers-blue.webp";
import workspaceImage from "@/assets/worthprime-workspace.webp";

const TITLE = "WorthPrime Tax | Tax, Accounting & Compliance in Dubai, UAE";
const DESCRIPTION =
  "Since 2018, WorthPrime Tax has supported businesses, entrepreneurs and individuals across Dubai and the UAE with Tax, Accounting, Audit, PRO / Visa and U.S. Expat Tax Services.";

export const Route = createFileRoute("/")({
  head: () => seoHead({ title: TITLE, description: DESCRIPTION, path: "/" }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* On large screens the hero fills the first screen so the service strip sits on its bottom edge.
          The layout's nav spacer moves from this wrapper into the hero, so the photo still runs up
          behind the transparent nav. */}
      {/* Portrait tablets (e.g. iPad at 1024x1366) skip the full-screen stretch: on a tall screen it
          made the photo huge and squeezed the copy into the top. The hero sizes to its content there. */}
      <div className="before:!hidden lg:landscape:flex lg:landscape:min-h-svh lg:landscape:flex-col">
        <Hero />
        <ServiceMarquee />
      </div>
      {/* Follows the hero intro, in the order of the client's document. */}
      <WhatComesNext />
      <ServicesGrid />
      <ProofSection />
      <ClientExperience />
      <Faq />
      <ContactSection compact />
    </>
  );
}

function Hero() {
  // The intro shows its first half until the visitor asks for the rest.
  const [introOpen, setIntroOpen] = useState(false);
  // While the intro is open the photo keeps the hero's collapsed height, so the extra text makes
  // the hero taller without the cover photo zooming in.
  const heroRef = useRef<HTMLElement | null>(null);
  const [photoHeight, setPhotoHeight] = useState<number | null>(null);
  const toggleIntro = () => {
    setPhotoHeight(introOpen ? null : (heroRef.current?.offsetHeight ?? null));
    setIntroOpen(!introOpen);
  };
  const introToggle = (
    <button
      type="button"
      aria-expanded={introOpen}
      aria-controls="hero-intro-more"
      onClick={toggleIntro}
      className="font-semibold whitespace-nowrap text-primary underline underline-offset-2 hover:no-underline"
    >
      {introOpen ? "Read less" : "Read more"}
    </button>
  );
  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-background text-foreground before:block before:h-16 before:content-[''] lg:flex-1"
    >
      {/*
       * The photo fills the hero at every size; a soft white wash, strongest on the left, keeps the
       * navy copy readable while the advisers stay clear on the right, as in the approved design.
       */}
      {/* Phones use the advisers photo cut from the approved mobile design (its baked-in text and
          buttons removed), in the same place: the right half, from just above the heading. The file
          carries a blurred strip past the woman's shoulder that fades to white, and the left edge
          fades along a curve, so she is never cut off in a straight line. The top and bottom fade
          into the white too, so the copy beside it sits on plain white. */}
      <img
        src={heroMobileImage}
        alt=""
        width={502}
        height={812}
        fetchPriority="high"
        className="absolute top-[4.5rem] right-0 -z-10 hidden h-auto w-[58.1%] [mask-composite:intersect] [mask-image:radial-gradient(ellipse_100%_70%_at_100%_50%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_16%,black_58%,transparent_84%)] max-sm:block"
      />
      <div
        className={cn(
          "absolute -z-10 max-sm:hidden",
          photoHeight
            ? "inset-x-0 top-0 [mask-image:linear-gradient(to_bottom,black_85%,transparent)]"
            : "inset-0",
        )}
        style={photoHeight ? { height: photoHeight } : undefined}
      >
        <img
          src={heroImage}
          alt="Tax advisers reviewing financial documents together"
          width={1531}
          height={1027}
          fetchPriority="high"
          className="h-full w-full object-cover object-[68%_center]"
        />
        {/* A left-side fade behind the copy (no flat white wash over the whole photo), so the text
            stays readable while the advisers stay clear on the right. Tablets, where the copy runs
            further across the photo, get a stronger fade. */}
        <div
          className="absolute inset-0 bg-linear-to-r from-background/85 from-20% via-background/60 via-42% to-transparent to-62% max-lg:from-background/92 max-lg:from-40% max-lg:via-background/75 max-lg:via-65% max-lg:to-95% lg:portrait:from-background/92 lg:portrait:from-40% lg:portrait:via-background/75 lg:portrait:via-65% lg:portrait:to-95%"
          aria-hidden
        />
      </div>
      {/* Wider than the standard container, like the reference; the nav widens to match on this page. */}
      <Container className="relative max-w-[1540px] lg:px-10">
        <div className="flex max-w-[900px] flex-col pt-16 pb-20 max-sm:pt-10 max-sm:pb-9 sm:pt-20 sm:pb-24 lg:landscape:pt-[min(4rem,8svh)] lg:landscape:pb-[min(5rem,8svh)]">
          {/* Same heading size as the Services hero (BackdropHero). */}
          <h1 className="font-serif text-[clamp(2rem,3.4vw,3.5rem)] leading-[1.12] font-bold tracking-[-0.02em] text-primary max-sm:text-[1.75rem] max-sm:leading-[1.1]">
            {/* One sentence a line from tablet up; phones break the longer two again so they stay
                beside the photo. */}
            <span className="block">One partner.</span>{" "}
            <span className="block sm:whitespace-nowrap">
              <span className="max-sm:block">Multiple</span> financial needs.
            </span>{" "}
            <span className="block sm:whitespace-nowrap">
              <span className="max-sm:block">Connected</span> solutions.
            </span>
          </h1>
          <div className="mt-2 max-w-[37rem] text-base leading-relaxed text-foreground/85 max-sm:mt-3 max-sm:text-xs max-sm:leading-[1.5] sm:text-[0.9375rem] sm:max-w-[30rem] lg:landscape:max-w-[min(42rem,37vw)] xl:text-[clamp(0.875rem,1.6svh,0.9375rem)]">
            <p>
              {/* Phones: an empty float the size of the photo's area keeps the text in the narrow
                  column beside the photo, then the rest of the paragraph runs full width below it.
                  Its height tracks the photo, which scales with the screen width: the photo has
                  faded out 72px + 79vw from the top of the hero, and the paragraph starts about
                  270px down. */}
              <span
                aria-hidden
                className="float-right hidden h-[calc(79vw-11.625rem)] w-[calc(100%-10.5rem)] max-sm:block"
              />
              Business does not stand still. Neither do its responsibilities. Tax regulations
              evolve. Businesses grow. New opportunities emerge. And with every stage of that
              journey comes a new set of financial and compliance considerations.
              {/* The client's document puts this line straight after the opening paragraph. */}
              <span className="mt-[0.5lh] block font-semibold text-primary max-sm:text-[0.8125rem]">
                At WorthPrime Tax, we turn financial complexity into confident decisions.
                {!introOpen && <> {introToggle}</>}
              </span>
              {/* Opened, the rest starts on its own line after a small gap (half a line), and "Read less"
                  follows it. */}
              {introOpen && (
                <span id="hero-intro-more" className="mt-[0.5lh] block">
                  Since 2018, we have been supporting businesses, entrepreneurs and individuals
                  across Dubai and the UAE with comprehensive, practical and reliable solutions
                  across Tax, Accounting, Audit, PRO / Visa and U.S. Expat Tax Services.
                  <span className="mt-[0.5lh] block">
                    From UAE Corporate Tax and VAT to U.S. tax filing, bookkeeping, payroll, company
                    formation and IRS compliance, we bring the right expertise together under one
                    trusted relationship—helping you keep your affairs in order, compliant and
                    well-positioned for what comes next. {introToggle}
                  </span>
                </span>
              )}
            </p>
          </div>
          {/* Phones: both buttons share one row across the full width. */}
          <div className="mt-8 flex flex-wrap gap-4 max-sm:mt-5 max-sm:flex-nowrap max-sm:gap-2 xl:mt-[clamp(1rem,3.4svh,2rem)]">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-[0.8125rem] font-semibold text-primary-foreground transition-transform hover:scale-[1.03] max-sm:flex-auto max-sm:justify-center max-sm:gap-1.5 max-sm:px-3 max-sm:py-3 max-sm:text-[0.8125rem] max-sm:whitespace-nowrap"
            >
              <span>
                {/* "Explore" is dropped on the narrowest phones so both buttons still fit in one row. */}
                <span className="hidden min-[360px]:max-sm:inline">Explore </span>Our Services
              </span>
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-primary bg-background/70 px-5 py-2 text-[0.8125rem] font-semibold text-primary transition-transform hover:scale-[1.03] max-sm:flex-auto max-sm:justify-center max-sm:bg-background max-sm:px-3 max-sm:py-3 max-sm:text-[0.8125rem] max-sm:whitespace-nowrap"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function WhatComesNext() {
  return (
    <>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
          {/* A pale panel sits offset behind the photo's top-left corner. */}
          <Reveal className="relative pt-4 pl-4">
            <span
              aria-hidden
              className="absolute top-0 left-0 h-[85%] w-[90%] rounded-2xl bg-tint"
            />
            <img
              src={advisersImage}
              alt="Two WorthPrime Tax advisers reviewing financial documents together"
              width={1200}
              height={896}
              loading="lazy"
              className="relative aspect-[3/2] w-full rounded-xl object-cover shadow-[0_24px_50px_-30px] shadow-primary/50"
            />
          </Reveal>
          <Reveal delay={100} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              WorthPrime equips businesses to launch new companies, manage established operations,
              expand their reach and stay ahead of UAE and U.S. tax obligations.
            </p>
            <p className="font-semibold text-primary">
              Our role is to navigate the intricacies while leaving room for bigger priorities.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Full-width closing band for this section. */}
      <section className="bg-linear-to-r from-hero to-brand-secondary text-hero-foreground">
        <Container className="flex flex-col gap-6 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-serif text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.1] font-bold tracking-[-0.01em] text-balance text-hero-foreground">
              Your business deserves more than compliance. It deserves clarity.
            </h2>
            <p className="mt-3 text-[clamp(1rem,1.3vw,1.2rem)] leading-snug text-hero-foreground/90">
              Talk to WorthPrime Tax today and discover a smarter way to manage your tax and
              accounting requirements.
            </p>
          </div>
          <Link
            to="/contact"
            hash="contact-form"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-lg bg-hero-foreground px-7 py-4 font-semibold text-primary transition-transform hover:scale-[1.03] lg:self-auto"
          >
            Talk to WorthPrime Tax <ArrowRight className="size-4" aria-hidden />
          </Link>
        </Container>
      </section>
    </>
  );
}

/** Furthest a card turns, in degrees, when the pointer is at its edge. */
const MAX_TILT = 10;

// Mouse only: on touch screens the cards scroll, so they stay flat.
function tiltCard(e: PointerEvent<HTMLDivElement>) {
  if (e.pointerType !== "mouse") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  // -0.5 to 0.5 across the card, so the card leans towards the pointer.
  const x = (e.clientX - rect.left) / rect.width - 0.5;
  const y = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `rotateX(${-y * MAX_TILT * 2}deg) rotateY(${x * MAX_TILT * 2}deg) scale(1.03)`;
}

function resetTilt(e: PointerEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "";
}

function ProofSection() {
  const total = REASONS.length;
  // On narrow screens the cards become a swipeable track; on desktop tapping a card highlights it.
  const { active, setActive, trackRef, itemRefs: cardRefs } = useSnapCarousel(total);
  // Not `once`: the cards fan out as they come into view, gather back into a deck while still on
  // screen as scrolling down carries them into the top quarter, and fan out again on the way back
  // up. The top margin keeps that quarter out of the measured view so the closing can be seen.
  const { ref: cardsRef, inView: cardsInView } = useInView<HTMLDivElement>(
    0.5,
    false,
    "-25% 0px 0px 0px",
  );

  return (
    <section
      aria-labelledby="why-worthprime-heading"
      className="relative isolate overflow-hidden bg-background py-12 sm:py-16"
    >
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-background via-tint/70 to-background"
        aria-hidden
      />
      <div
        className="absolute top-1/4 right-0 -z-10 size-[36rem] rounded-full bg-brand-secondary/10 blur-3xl"
        aria-hidden
      />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="min-w-0">
            <h2
              id="why-worthprime-heading"
              className="font-serif text-[clamp(2.3rem,4.6vw,3.8rem)] leading-[1.02] font-bold tracking-[-0.02em] text-balance text-primary"
            >
              Why Businesses Choose WorthPrime Tax
            </h2>
            <p className="mt-4 font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-snug font-semibold text-primary">
              One Trusted Partner. A Wider Perspective. Everything At One Place.
            </p>
            <p className="mt-6 max-w-[38rem] text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              Business rarely operates in neat compartments. Tax influences accounting. Payroll
              intersects with compliance. Audits depend on accurate records. Government formalities
              can affect how quickly a business moves. Managing each requirement through separate
              providers can create unnecessary layers, fragmented communication and avoidable
              administrative effort.
            </p>
            <p className="mt-4 max-w-[38rem] text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
              WorthPrime Tax brings these essential functions into one seamless continuum of
              support, creating a more connected approach to Tax, Accounting, Bookkeeping, Payroll,
              Audit, PRO / Visa and business compliance. The result is a relationship built around
              continuity, clarity and a deeper understanding of the business behind the numbers.
            </p>
          </div>

          <Reveal className="min-w-0">
            <div className="relative overflow-hidden rounded-2xl border border-brand-secondary/20 bg-card shadow-[0_24px_60px_-28px] shadow-primary/35">
              <img
                src={workspaceImage}
                alt="WorthPrime Tax services — tax, accounting, payroll, audit, business formation, compliance and financial planning — connected around a financial dashboard"
                width={1672}
                height={941}
                loading="lazy"
                className="aspect-16/9 w-full object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/5"
                aria-hidden
              />
            </div>
          </Reveal>
        </div>

        <div ref={cardsRef}>
          <div
            ref={trackRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Why clients choose WorthPrime Tax"
            className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pt-1 pb-4 perspective-[1200px] [scrollbar-width:none] sm:mx-0 sm:mt-14 sm:grid sm:auto-rows-fr sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden"
          >
            {REASONS.map((r, i) => {
              const isActive = active === i;
              // The cards start as a deck in the middle of their row, last card on top and the
              // ones behind peeking out to its left, then fan out into their own columns.
              const lgDepth = total - 1 - i;
              const smDepth = 1 - (i % 2);
              const deck = {
                "--deck-lg": `calc(${(total - 1) / 2 - i} * (100% + 1.25rem) - ${lgDepth * 0.875}rem)`,
                "--deck-sm": `calc(${0.5 - (i % 2)} * (100% + 1.25rem) - ${smDepth * 0.875}rem)`,
              } as CSSProperties;
              return (
                <article
                  key={r.title}
                  ref={(n) => {
                    cardRefs.current[i] = n;
                  }}
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActive(i)}
                  style={{ ...deck, zIndex: i }}
                  className={cn(
                    "flex w-[85%] shrink-0 snap-start perspective-[900px] transition-all duration-1000 ease-out motion-reduce:transition-none sm:w-auto",
                    cardsInView
                      ? "translate-x-0 translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0 sm:translate-x-(--deck-sm) sm:translate-y-0 sm:opacity-100 lg:translate-x-(--deck-lg)",
                  )}
                >
                  <div
                    onPointerMove={tiltCard}
                    onPointerLeave={resetTilt}
                    className={cn(
                      // Every card is a navy panel with white text; the selected one gets a brighter
                      // blue edge and a deeper shadow.
                      "group relative flex w-full flex-col rounded-xl border bg-linear-to-b from-hero to-hero p-6 text-hero-foreground transform-3d transition-[transform,box-shadow,border-color] duration-300 ease-out sm:p-7 lg:p-5",
                      isActive
                        ? "border-brand-secondary shadow-[0_22px_44px_-20px] shadow-primary/70"
                        : "border-hero shadow-[0_10px_30px_-22px] shadow-primary/50 hover:border-brand-secondary/60 hover:shadow-[0_26px_50px_-24px]",
                    )}
                  >
                    {/* Lifted off the card face so the text floats above it as the card tilts. */}
                    <h3 className="font-serif text-lg leading-snug font-bold text-hero-foreground translate-z-6 sm:text-[1.125rem]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[0.8125rem] leading-relaxed text-hero-foreground/85 translate-z-3 sm:text-sm">
                      {r.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl font-serif text-[clamp(1.2rem,1.7vw,1.5rem)] leading-snug font-semibold text-primary">
            More than a service provider. A partner built around the way business works.
          </p>
          <Link
            to="/services"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            Discover What WorthPrime Can Do for Your Business{" "}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </Container>
    </section>
  );
}

function ServicesGrid() {
  return (
    <Section id="services">
      <h2 className="text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05] text-primary">Our Services</h2>
      <div className={cn("mt-8", SERVICE_GRID)}>
        {SERVICES.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 5) * 80}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ClientExperience() {
  const { heading, subheading, intro, tagline } = CLIENT_EXPERIENCE;
  return (
    <section
      aria-labelledby="client-experience-heading"
      className="relative isolate overflow-hidden bg-background py-12 sm:py-16"
    >
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-background via-tint/60 to-background"
        aria-hidden
      />
      <div
        className="absolute top-16 right-6 -z-10 hidden h-28 w-40 [background-image:radial-gradient(var(--theme-border)_1.5px,transparent_1.5px)] [background-size:18px_18px] md:block"
        aria-hidden
      />
      <Container>
        {/* Same heading size as "Why Businesses Choose WorthPrime Tax"; the subheading is one line
            in one style, as the client asked. */}
        <h2
          id="client-experience-heading"
          className="font-serif text-[clamp(2.3rem,4.6vw,3.8rem)] leading-[1.02] font-bold tracking-[-0.02em] text-balance text-primary"
        >
          {heading}
        </h2>
        <p className="mt-4 font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-snug font-semibold text-primary">
          {subheading}
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-[1.0625rem]">
          {intro}
        </p>
        <p className="mt-4 font-semibold text-primary">{tagline}</p>
      </Container>
    </section>
  );
}

// One icon per FAQ_GROUPS entry, in order: company setup, UAE tax, accounting and audit.
const FAQ_GROUP_ICONS: LucideIcon[] = [Building2, Landmark, Calculator];

function Faq() {
  // The first question starts open. Keys are "group-question" indexes.
  const [open, setOpen] = useState<string | null>("0-0");
  return (
    <Section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-background via-tint/50 to-background"
        aria-hidden
      />
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12">
        <div className="lg:sticky lg:top-24">
          <h2 className="font-serif text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.04] font-bold tracking-[-0.02em] text-primary">
            Frequently Asked <span className="block text-brand-secondary">Questions</span>
          </h2>
          <Link
            to="/"
            hash="contact-form"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_14px_30px_-18px] shadow-primary/70 transition-transform hover:scale-[1.03]"
          >
            Contact Us <ArrowRight className="size-4" aria-hidden />
          </Link>
          <FaqIllustration className="mt-5 hidden max-w-[14rem] lg:block" />
        </div>

        <div className="space-y-8">
          {FAQ_GROUPS.map((group, g) => {
            const Icon = FAQ_GROUP_ICONS[g] ?? Landmark;
            return (
              <div key={group.title}>
                <h3 className="flex items-center gap-2.5 text-lg font-semibold text-primary sm:text-xl">
                  <Icon className="size-6 shrink-0" strokeWidth={1.5} aria-hidden />
                  {group.title}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {group.faqs.map((f, i) => {
                    const key = `${g}-${i}`;
                    const isOpen = open === key;
                    const panelId = `faq-panel-${key}`;
                    const buttonId = `faq-button-${key}`;
                    return (
                      <li
                        key={f.q}
                        className={cn(
                          "rounded-2xl border shadow-[0_14px_34px_-28px] shadow-primary/60 transition-colors duration-300",
                          isOpen ? "border-brand-secondary/30 bg-tint/70" : "border-border bg-card",
                        )}
                      >
                        <h4>
                          <button
                            type="button"
                            id={buttonId}
                            aria-expanded={isOpen}
                            aria-controls={panelId}
                            onClick={() => setOpen(isOpen ? null : key)}
                            className="flex w-full items-center gap-3 px-4 py-3 text-left sm:gap-4 sm:px-5 sm:py-3.5"
                          >
                            <span className="min-w-0 flex-1 text-sm font-semibold text-primary sm:text-base">
                              {f.q}
                            </span>
                            <ChevronDown
                              className={cn(
                                "size-4 shrink-0 text-primary transition-transform duration-300",
                                isOpen && "rotate-180",
                              )}
                              aria-hidden
                            />
                          </button>
                        </h4>
                        <div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          className={cn(
                            "grid transition-[grid-template-rows,opacity] duration-300 ease-out",
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                          )}
                        >
                          <div className="overflow-hidden">
                            <p className="mx-4 border-t border-brand-secondary/15 pt-3 pb-4 text-sm leading-relaxed text-foreground/80 sm:mx-5">
                              {f.a}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
