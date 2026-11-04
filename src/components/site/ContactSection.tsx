import type { ComponentType, ReactNode } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { HOME_CONTACT, LINKS, OFFICES } from "@/data/site";
import { cn } from "@/lib/utils";
import { WhatsAppIcon } from "./ContactCluster";
import { EnquiryForm } from "./EnquiryForm";
import { Section } from "./primitives";

/**
 * "Let's talk about what comes next" block: contact lines beside the enquiry form.
 * The contact page uses it as its hero (h1); the home page uses the smaller `compact` size.
 */
export function ContactSection({
  asPageHeading = false,
  compact = false,
}: {
  asPageHeading?: boolean;
  compact?: boolean;
}) {
  const value = compact ? "text-[0.95rem]" : "text-lg";
  return (
    <Section
      id="contact-form"
      className={cn("relative isolate scroll-mt-28 overflow-hidden", compact && "py-10 sm:py-12")}
    >
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-background via-tint/70 to-tint/40"
        aria-hidden
      />
      <div
        className="absolute top-1/4 left-[38%] -z-10 hidden size-[32rem] rounded-full bg-brand-secondary/10 blur-3xl lg:block"
        aria-hidden
      />
      <div
        className={cn(
          "grid items-center lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]",
          // Compact: the heading lines up with the top of the form card.
          compact && "lg:items-start",
          compact ? "gap-8 lg:gap-12" : "gap-10 lg:gap-14",
        )}
      >
        <div>
          {asPageHeading ? (
            // The contact page leads with "Let's Talk" as its large title, as the client asked.
            <>
              <h1 className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.02] font-bold tracking-[-0.02em] text-primary">
                {HOME_CONTACT.label}
              </h1>
              <p className="mt-3 font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-snug font-semibold text-primary">
                {HOME_CONTACT.heading} <span className="block">{HOME_CONTACT.headingAccent}</span>
              </p>
            </>
          ) : (
            <>
              <p className="label-slash mb-3">{HOME_CONTACT.label}</p>
              <h2
                className={cn(
                  "font-serif leading-[1.04] font-bold tracking-[-0.02em] text-primary",
                  compact ? "text-[clamp(2rem,4vw,3.25rem)]" : "text-[clamp(2.4rem,5vw,4.25rem)]",
                )}
              >
                {HOME_CONTACT.heading} <span className="block">{HOME_CONTACT.headingAccent}</span>
              </h2>
            </>
          )}
          <p
            className={cn(
              "max-w-xl leading-relaxed text-foreground/80",
              compact ? "mt-4 text-[0.95rem]" : "mt-5 text-base sm:text-lg",
            )}
          >
            {HOME_CONTACT.intro}
          </p>
          <p className="mt-4 font-semibold text-primary">{HOME_CONTACT.prompt}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              // Moves the visitor into the enquiry form beside this copy.
              onClick={(e) =>
                e.currentTarget
                  .closest("section")
                  ?.querySelector<HTMLInputElement>("form input")
                  ?.focus()
              }
              className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {HOME_CONTACT.bookLabel}
            </button>
            <a
              href={LINKS.phoneHref}
              className="inline-flex items-center rounded-md border border-primary bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-transform hover:scale-[1.03]"
            >
              {HOME_CONTACT.callLabel}
            </a>
          </div>

          <ul className={compact ? "mt-6 space-y-4" : "mt-8 space-y-5"}>
            <ContactLine icon={Phone} title="Call Us" compact={compact}>
              <a href={LINKS.phoneHref} className={cn(value, "text-foreground hover:text-primary")}>
                {LINKS.phone}
              </a>
            </ContactLine>
            <ContactLine icon={WhatsAppIcon} title="WhatsApp" compact={compact}>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className={cn(value, "text-foreground hover:text-primary")}
              >
                {LINKS.phone}
              </a>
            </ContactLine>
            <ContactLine icon={Mail} title="Drop Us an Email" compact={compact}>
              <a
                href={`mailto:${LINKS.email}`}
                className={cn(value, "break-all text-foreground hover:text-primary")}
              >
                {LINKS.email}
              </a>
            </ContactLine>
            <ContactLine icon={MapPin} title="Visit Us" compact={compact}>
              <span className={cn(value, "text-foreground")}>{OFFICES[0].address}</span>
            </ContactLine>
          </ul>
        </div>
        <EnquiryForm headingLevel={asPageHeading ? 2 : 3} submitLabel="Submit Request" />
      </div>
    </Section>
  );
}

function ContactLine({
  icon: Icon,
  title,
  compact,
  children,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  compact?: boolean;
  children: ReactNode;
}) {
  return (
    <li className="flex items-center gap-4">
      <span className="grid shrink-0 place-items-center text-primary" aria-hidden>
        <Icon className={compact ? "size-5.5" : "size-6.5"} strokeWidth={1.5} />
      </span>
      <div className="min-w-0">
        <p className={cn("font-semibold text-primary", compact && "text-sm")}>{title}</p>
        <div className="mt-0.5">{children}</div>
      </div>
    </li>
  );
}
