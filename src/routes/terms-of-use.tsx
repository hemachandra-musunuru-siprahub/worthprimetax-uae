import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { TERMS_PAGE } from "@/data/site";
import { LegalPageView } from "@/components/site/LegalPageView";

export const Route = createFileRoute("/terms-of-use")({
  head: ({ match }) => pageHead(match.context.lng, "terms", "/terms-of-use"),
  component: () => <LegalPageView page={TERMS_PAGE} kind="terms" />,
});
