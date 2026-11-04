import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  FileText,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useServices } from "@/i18n/content";
import { HAS_LINKEDIN, LINKS, OFFICES } from "@/data/site";
import { Container } from "./primitives";
import { WhatsAppIcon } from "./ContactCluster";
import { SERVICE_ICONS } from "./serviceIcons";
import logoImage from "@/assets/worthprime-logo-2026.webp";

// YouTube shows as a placeholder until the client supplies its profile.
const SOCIALS: { label: string; Icon: LucideIcon; href?: string }[] = [
  { label: "LinkedIn", Icon: Linkedin, href: HAS_LINKEDIN ? LINKS.linkedin : undefined },
  { label: "Instagram", Icon: Instagram, href: LINKS.instagram },
  { label: "YouTube", Icon: Youtube },
];

const focusRing =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2 className="text-xs font-bold tracking-[0.2em] text-footer-heading uppercase">
        {children}
      </h2>
      <span aria-hidden className="mt-2.5 block h-0.5 w-10 bg-tint" />
    </div>
  );
}

function ContactLink({
  href,
  icon,
  label,
  external,
  children,
}: {
  href: string;
  icon: ReactNode;
  label?: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        aria-label={label}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
        className={`group inline-flex items-center gap-3 text-sm text-footer-heading ${focusRing}`}
      >
        <span className="grid shrink-0 place-items-center">{icon}</span>
        <span className="group-hover:underline">{children}</span>
      </a>
    </li>
  );
}

export function Footer() {
  const { t } = useTranslation();
  const services = useServices();
  return (
    <footer id="contact" className="border-t border-border bg-footer">
      {/* Extra right padding below lg keeps text clear of the fixed contact buttons. */}
      <Container className="pe-20 sm:pe-20 lg:pe-8">
        {/* max-sm: classes shorten the footer on phones only; sm and up are unchanged. */}
        <div className="grid gap-10 pt-12 pb-8 max-sm:gap-8 max-sm:pt-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Link
              to="/"
              aria-label={t("common.homeAria")}
              className={`inline-flex flex-col items-center ${focusRing}`}
            >
              <img
                src={logoImage}
                alt={t("common.brand")}
                width={600}
                height={383}
                loading="lazy"
                className="h-[4.5rem] w-auto object-contain max-sm:h-12"
              />
              {/* Tagline as live text, not part of the logo image. */}
              <span className="mt-1.5 text-[0.5625rem] leading-none font-medium whitespace-nowrap text-primary max-sm:text-[0.5rem]">
                {t("common.tagline")}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>

            <ul className="mt-5 space-y-2.5">
              <ContactLink
                href={LINKS.phoneHref}
                icon={<Phone className="size-5" strokeWidth={1.5} />}
              >
                <span dir="ltr">{LINKS.phone}</span>
              </ContactLink>
              <ContactLink
                href={LINKS.whatsapp}
                external
                label={t("footer.chatOnWhatsapp", { phone: LINKS.phone })}
                icon={<WhatsAppIcon className="size-5" />}
              >
                {t("contact.whatsapp")}
              </ContactLink>
              <ContactLink
                href={`mailto:${LINKS.email}`}
                icon={<Mail className="size-5" strokeWidth={1.5} />}
              >
                <span dir="ltr">{LINKS.email}</span>
              </ContactLink>
            </ul>

            <ul className="mt-5 flex gap-3">
              {SOCIALS.map(({ label, Icon, href }) => {
                const circle =
                  "grid size-9 place-items-center rounded-full bg-tint text-footer-heading transition-colors";
                return (
                  <li key={label}>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={t("footer.socialAria", { network: label })}
                        className={`${circle} hover:bg-primary hover:text-primary-foreground ${focusRing}`}
                      >
                        <Icon className="size-4" aria-hidden />
                      </a>
                    ) : (
                      <span
                        className={circle}
                        title={t("footer.socialPending", { network: label })}
                      >
                        <Icon className="size-4" aria-hidden />
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <nav aria-label={t("footer.services")}>
            <ColumnHeading>{t("footer.services")}</ColumnHeading>
            <ul className="mt-5 space-y-3 max-sm:mt-4 max-sm:space-y-2.5">
              {services.slice(0, 6).map((s) => {
                const Icon = SERVICE_ICONS[s.slug] ?? FileText;
                return (
                  <li key={s.slug}>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className={`group flex items-start gap-3 text-sm text-footer-link transition-colors hover:text-footer-link-hover ${focusRing}`}
                    >
                      <Icon
                        aria-hidden
                        className="mt-0.5 size-4.5 shrink-0 text-footer-heading"
                        strokeWidth={1.5}
                      />
                      <span className="leading-snug group-hover:underline">{s.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              to="/services"
              className={`group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-link-accent transition-colors hover:text-footer-link-hover ${focusRing}`}
            >
              {t("common.allServices")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" />
            </Link>
          </nav>

          <nav aria-label={t("footer.company")}>
            <ColumnHeading>{t("footer.company")}</ColumnHeading>
            <ul className="mt-3 max-w-56 max-sm:grid max-sm:max-w-none max-sm:grid-cols-2 max-sm:gap-x-6">
              <FooterRowLink to="/about">{t("common.aboutUs")}</FooterRowLink>
              <FooterRowLink to="/contact">{t("common.contactUs")}</FooterRowLink>
              <FooterRowLink href={LINKS.uaeTaxPayment}>{t("common.uaeTaxPayment")}</FooterRowLink>
              <FooterRowLink href={LINKS.irs}>{t("common.irsRefundStatus")}</FooterRowLink>
            </ul>
          </nav>

          <div>
            <ColumnHeading>{t("footer.office")}</ColumnHeading>
            <ul className="mt-3 divide-y divide-border">
              {OFFICES.map((o) => (
                <li key={o.label} className="flex gap-3 py-3 first:pt-2 last:pb-0">
                  <span className="grid shrink-0 place-items-start pt-0.5 text-footer-heading">
                    <MapPin aria-hidden className="size-5" strokeWidth={1.5} />
                  </span>
                  <address className="min-w-0 not-italic">
                    <span className="block text-[0.7rem] font-bold tracking-[0.14em] text-footer-heading uppercase">
                      {t("contact.officeLabel")}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-footer-link">
                      <span lang="en" dir="ltr">
                        {o.address}
                      </span>
                    </span>
                  </address>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright centred; policy links on the right (both centred and stacked on phones). */}
        <div className="grid items-center gap-3 border-t border-border py-4 text-center sm:grid-cols-[1fr_auto_1fr]">
          <p className="text-xs text-muted-foreground sm:col-start-2">
            {t("footer.rights", { year: new Date().getFullYear() })}
          </p>
          <p className="flex items-center justify-center gap-3 text-xs text-muted-foreground sm:justify-self-end">
            <Link
              to="/privacy-policy"
              className={`hover:text-footer-link-hover hover:underline ${focusRing}`}
            >
              {t("footer.privacy")}
            </Link>
            <span aria-hidden className="h-3 w-px bg-border" />
            <Link
              to="/terms-of-use"
              className={`hover:text-footer-link-hover hover:underline ${focusRing}`}
            >
              {t("footer.terms")}
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}

function FooterRowLink({
  children,
  to,
  href,
}: {
  children: ReactNode;
  to?: "/about" | "/contact";
  href?: string;
}) {
  const className = `group flex items-center justify-between gap-4 py-1.5 text-sm text-footer-link transition-colors hover:text-footer-link-hover ${focusRing}`;
  const content = (
    <>
      <span className="group-hover:underline">{children}</span>
      <ChevronRight
        aria-hidden
        className="size-4 shrink-0 text-muted-foreground transition-transform max-sm:hidden group-hover:translate-x-0.5 group-hover:text-footer-link-hover rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5"
      />
    </>
  );
  return (
    <li>
      {to ? (
        <Link to={to} className={className}>
          {content}
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noreferrer noopener" className={className}>
          {content}
        </a>
      )}
    </li>
  );
}
