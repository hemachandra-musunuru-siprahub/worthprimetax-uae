import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CtaIllustration } from "./CtaIllustration";
import { Reveal } from "./primitives";

/**
 * Closing call to action: a compact rounded blue panel (about 360px tall on desktop) with copy and
 * two buttons on the start side and an illustration in the bottom end corner. No page shows it at
 * the moment; its copy is the "Let's Talk" block from the translations.
 */
export function CtaBand() {
  const { t } = useTranslation();
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-8">
      <Reveal>
        <div className="relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl bg-linear-to-br from-hero via-hero to-brand-secondary p-6 text-hero-foreground shadow-[0_24px_60px_-40px] shadow-primary/70 sm:p-8 lg:min-h-[360px] lg:p-10 rtl:bg-linear-to-bl">
          {/* Anchored to the panel's bottom end corner; the road in the drawing meets both edges. */}
          <CtaIllustration className="pointer-events-none absolute end-0 bottom-0 hidden w-[min(38%,26rem)] lg:block rtl:-scale-x-100" />

          <div className="relative grid items-center gap-8 lg:min-h-[280px] lg:grid-cols-[55fr_45fr] lg:gap-6">
            <div>
              {/* max-sm: classes tighten the band on phones only; sm and up are unchanged. */}
              <p className="text-xs font-medium tracking-[0.22em] text-hero-foreground/90 uppercase max-sm:text-[0.7rem] max-sm:tracking-[0.14em] sm:text-[0.8rem]">
                {t("contact.label")}
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-[clamp(1.3rem,1.8vw,1.9rem)] leading-[1.2] font-bold tracking-[-0.01em] text-hero-foreground max-sm:text-[1.15rem] max-sm:leading-[1.25]">
                {t("contact.heading")} {t("contact.headingAccent")}
              </h2>
              <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-hero-foreground/85 sm:text-base">
                {t("contact.prompt")}
              </p>

              <div className="mt-4 flex flex-wrap gap-3 max-sm:mt-5 max-sm:grid">
                <Link
                  to="/contact"
                  hash="contact-form"
                  className="inline-flex h-11 items-center gap-2 max-sm:justify-center rounded-xl bg-hero-foreground px-5 text-[0.95rem] font-semibold text-primary transition-transform hover:scale-[1.03]"
                >
                  {t("common.bookConsultation")}{" "}
                  <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex h-11 items-center max-sm:justify-center rounded-xl border border-hero-foreground/70 px-5 text-[0.95rem] font-semibold text-hero-foreground transition-colors hover:bg-hero-foreground/10"
                >
                  {t("common.explore")} {t("common.ourServices")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
