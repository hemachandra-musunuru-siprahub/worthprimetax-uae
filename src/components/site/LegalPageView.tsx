import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { ArrowRight, CalendarDays, Check, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { LINKS, OFFICES, type LegalPage } from "@/data/site";
import { Container } from "./primitives";
import { ServiceMarquee } from "./ServiceMarquee";

// Anchors come from the English section headings, which stay in English (see LegalPage).
const sectionId = (heading: string) =>
  heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const pad = (n: number) => String(n).padStart(2, "0");

const KEYS = {
  privacy: {
    heading: "legal.privacyHeading",
    contactHeading: "legal.privacyContactHeading",
    related: "legal.readTerms",
    relatedTo: "/terms-of-use",
  },
  terms: {
    heading: "legal.termsHeading",
    contactHeading: "legal.termsContactHeading",
    related: "legal.readPrivacy",
    relatedTo: "/privacy-policy",
  },
} as const;

/**
 * Shared layout for the Privacy Policy and Terms of Use pages: a light hero, the service strip,
 * then a sticky "On this page" list beside numbered sections, closing with a contact card and a
 * link to the other legal page. The body text is English only for now; in other languages it is
 * marked as English so it keeps its own direction, and a note says so.
 */
export function LegalPageView({ page, kind }: { page: LegalPage; kind: "privacy" | "terms" }) {
  const { t, i18n } = useTranslation();
  const keys = KEYS[kind];
  const relatedLabel = t(keys.related);
  const bodyIsTranslated = i18n.language === "en";
  // The body (and its "On this page" list) is English: give it English direction and language.
  const bodyLang = bodyIsTranslated ? {} : ({ lang: "en", dir: "ltr" } as const);

  return (
    <>
      <section className="bg-linear-to-b from-tint to-background">
        <Container className="pt-10 pb-12 sm:pt-12 sm:pb-14">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card px-3 py-1 text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            <ShieldCheck className="size-3.5" aria-hidden />
            {t("legal.label")}
          </p>
          <h1 className="mt-5 font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.05] font-bold tracking-[-0.02em] text-primary">
            {t(keys.heading)}
          </h1>
          {!bodyIsTranslated && (
            <p className="mt-4 max-w-3xl text-base text-foreground/80">{t("legal.englishOnly")}</p>
          )}
          {page.intro && (
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-foreground/80" {...bodyLang}>
              {page.intro}
            </p>
          )}
          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="size-4" aria-hidden />
            {t("legal.lastUpdated", { date: page.updated })}
          </p>
        </Container>
      </section>

      <ServiceMarquee />

      <Container className="py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <nav aria-label={t("legal.onThisPageAria")} className="sticky top-28">
              <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
                {t("legal.onThisPage")}
              </p>
              <ol className="mt-4 space-y-1 border-s border-border" {...bodyLang}>
                {page.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#${sectionId(s.heading)}`}
                      className="-ms-px flex gap-3 border-s-2 border-transparent py-1.5 ps-4 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      <span className="tabular-nums">{pad(i + 1)}</span>
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
              <Link
                to={keys.relatedTo}
                className="mt-8 flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-tint"
              >
                {relatedLabel}
                <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden />
              </Link>
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <div {...bodyLang}>
              {page.sections.map((s, i) => (
                <section
                  key={s.heading}
                  id={sectionId(s.heading)}
                  className="scroll-mt-28 border-b border-border pb-9 not-first:pt-9 last:border-b-0"
                >
                  <h2 className="flex items-baseline gap-4 font-serif text-2xl font-bold text-primary sm:text-[1.7rem]">
                    <span className="font-sans text-sm font-semibold tracking-widest text-brand-secondary tabular-nums">
                      {pad(i + 1)}
                    </span>
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-foreground/85">
                    {s.body.map((p) => (
                      <p key={p.slice(0, 32)}>{p}</p>
                    ))}
                    {s.list && (
                      <ul className="space-y-2.5">
                        {s.list.map((item) => (
                          <li key={item.slice(0, 32)} className="flex gap-3">
                            <span
                              className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-tint text-primary"
                              aria-hidden
                            >
                              <Check className="size-3" strokeWidth={2.5} />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {s.after && <p>{s.after}</p>}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-brand-secondary/15 bg-tint p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-primary">
                {t(keys.contactHeading)}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-foreground/80">
                {t("legal.questionsBody")}
              </p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <Mail className="size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                  <a
                    href={`mailto:${LINKS.email}`}
                    dir="ltr"
                    className="break-all text-foreground hover:text-primary hover:underline"
                  >
                    {LINKS.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-5 shrink-0 text-primary" strokeWidth={1.5} aria-hidden />
                  <a
                    href={LINKS.phoneHref}
                    dir="ltr"
                    className="text-foreground hover:text-primary hover:underline"
                  >
                    {LINKS.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3 sm:col-span-2">
                  <MapPin
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="text-foreground" lang="en" dir="ltr">
                    WorthPrime Tax, {OFFICES[0]?.address}
                  </span>
                </li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  {t("common.contactUs")}{" "}
                  <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden />
                </Link>
                <Link
                  to={keys.relatedTo}
                  className="inline-flex items-center rounded-lg border border-primary/40 bg-card px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-background lg:hidden"
                >
                  {relatedLabel}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </>
  );
}
