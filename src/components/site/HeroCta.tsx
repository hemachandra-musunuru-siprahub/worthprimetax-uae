import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

/**
 * The home hero's "Contact us" button, shared by every page hero so they all match. It jumps to the
 * enquiry form: the one on the home page from home, the Contact page's from everywhere else.
 * `onDark` swaps to a white button for navy heroes.
 */
export function HeroCta({
  toHome = false,
  onDark = false,
  label,
  className,
}: {
  toHome?: boolean;
  onDark?: boolean;
  label?: string;
  className?: string;
}) {
  const { t } = useTranslation();
  return (
    <Link
      to={toHome ? "/" : "/contact"}
      hash="contact-form"
      className={cn(
        "inline-flex items-center gap-2 rounded-md px-6 py-2.5 text-sm font-semibold transition-transform hover:scale-[1.03] sm:text-base",
        onDark ? "bg-background text-primary" : "bg-primary text-primary-foreground",
        className,
      )}
    >
      {label ?? t("common.contactUs")}{" "}
      <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden />
    </Link>
  );
}
