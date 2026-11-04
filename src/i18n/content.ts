import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { SERVICES, type Service, type ServiceMeta, type ServiceSlug } from "@/data/services";
import {
  FAQ_GROUPS,
  SERVICE_FAQS,
  type FaqId,
  type ServiceFaq,
  type ServiceFaqGroup,
} from "@/data/serviceFaqs";
import { FOUNDER_IDS } from "@/data/site";

/*
 * Reusable translation helpers: they join the identifiers kept in src/data with the copy in the
 * translation files, so components receive the same shapes as before and never build keys by hand.
 */

export function localizeService(meta: ServiceMeta, t: TFunction): Service {
  return { ...meta, ...t(`services.${meta.slug}`, { returnObjects: true }) };
}

/** Every service, translated, in display order. */
export function useServices(): Service[] {
  const { t } = useTranslation();
  return useMemo(() => SERVICES.map((meta) => localizeService(meta, t)), [t]);
}

function localizeFaq(id: FaqId, t: TFunction): ServiceFaq {
  return t(`faqs.${id}`, { returnObjects: true });
}

/** All FAQs under their group titles, for the home page. */
export function useFaqGroups(): Array<ServiceFaqGroup & { title: string }> {
  const { t } = useTranslation();
  return useMemo(
    () =>
      FAQ_GROUPS.map((group) => ({
        title: t(`faqGroups.${group.id}`),
        faqs: group.faqs.map((id) => localizeFaq(id, t)),
      })),
    [t],
  );
}

/** The FAQs a service page shows (none for most services). */
export function useServiceFaqs(slug: ServiceSlug): ServiceFaqGroup[] {
  const { t } = useTranslation();
  return useMemo(() => {
    const ids = SERVICE_FAQS[slug];
    return ids ? [{ faqs: ids.map((id) => localizeFaq(id, t)) }] : [];
  }, [slug, t]);
}

/** "Why Businesses Choose WorthPrime Tax" cards. */
export function useReasons(): Array<{ title: string; body: string }> {
  const { t } = useTranslation();
  return useMemo(() => t("reasons", { returnObjects: true }), [t]);
}

export type Founder = {
  name: string;
  title: string;
  credential: string;
  summary: string;
  bio: string[];
};

/** Co-founders in display order (matching FOUNDER_PHOTOS). */
export function useFounders(): Founder[] {
  const { t } = useTranslation();
  return useMemo(() => FOUNDER_IDS.map((id) => t(`founders.${id}`, { returnObjects: true })), [t]);
}
