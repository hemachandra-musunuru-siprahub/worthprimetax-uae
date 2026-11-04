import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Crumb } from "@/lib/seo";
import { cn } from "@/lib/utils";

/** Visible trail for nested pages; the same crumbs feed the BreadcrumbList schema in the route head. */
export function Breadcrumbs({ crumbs, className }: { crumbs: Crumb[]; className?: string }) {
  const { t } = useTranslation();
  return (
    <nav
      aria-label={t("breadcrumbs.label")}
      className={cn("text-sm text-muted-foreground", className)}
    >
      <ol className="flex flex-wrap items-center gap-1.5">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-primary">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link to={c.path} className="hover:text-primary hover:underline">
                    {c.name}
                  </Link>
                  <ChevronRight className="size-3.5 rtl:-scale-x-100" aria-hidden />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
