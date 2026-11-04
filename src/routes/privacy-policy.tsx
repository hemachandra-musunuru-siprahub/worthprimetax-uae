import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { PRIVACY_PAGE } from "@/data/site";
import { LegalPageView } from "@/components/site/LegalPageView";

export const Route = createFileRoute("/privacy-policy")({
  head: ({ match }) => pageHead(match.context.lng, "privacy", "/privacy-policy"),
  component: () => <LegalPageView page={PRIVACY_PAGE} kind="privacy" />,
});
