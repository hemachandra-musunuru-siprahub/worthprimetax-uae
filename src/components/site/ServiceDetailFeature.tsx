import type { Service } from "@/data/services";
import { useTranslation } from "react-i18next";
import { useServiceFaqs } from "@/i18n/content";
import { Container } from "./primitives";
import { BackdropHero } from "./BackdropHero";
import { CapabilityShowcase } from "./CapabilityShowcase";
import { ServiceMarquee } from "./ServiceMarquee";
import { ServiceFaqs } from "./ServiceFaqs";
import type { ServiceDetailMedia } from "./serviceDetailMedia";

// Same width as the hero (BackdropHero) so every section lines up with its copy.
const WIDE = "max-w-[1540px] lg:px-10";

/** Service detail layout: hero with the overview, the capabilities infographic with its call to action, then the FAQs. */
export function ServiceDetailFeature({
  service,
  media,
}: {
  service: Service;
  media: ServiceDetailMedia;
}) {
  const { t } = useTranslation();
  const faqs = useServiceFaqs(service.slug);

  return (
    <>
      <BackdropHero
        lines={[[{ text: service.name }]]}
        tagline={service.tagline}
        intro={service.overview}
        image={media.heroBackdrop}
        showCta={false}
      />

      <ServiceMarquee />

      <CapabilityShowcase service={service} />

      {/* FAQs: client-supplied questions */}
      {faqs.length > 0 && (
        <section id="faqs" aria-labelledby="faqs-heading" className="scroll-mt-20 pb-12 sm:pb-16">
          <Container className={WIDE}>
            <h2
              id="faqs-heading"
              className="font-serif text-[clamp(1.7rem,3vw,2.4rem)] leading-[1.15] font-bold text-primary"
            >
              {t("serviceDetail.faqHeading")}
            </h2>
            <ServiceFaqs groups={faqs} />
          </Container>
        </section>
      )}
    </>
  );
}
