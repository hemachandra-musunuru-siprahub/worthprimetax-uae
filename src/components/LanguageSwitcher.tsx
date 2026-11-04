import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LANGUAGES, type Language } from "@/i18n/i18n";
import { useLanguage } from "@/i18n/useLanguage";
import { cn } from "@/lib/utils";

const OPTIONS = Object.entries(LANGUAGES) as Array<[Language, (typeof LANGUAGES)[Language]]>;

/**
 * Segmented language control, one button per entry in LANGUAGES. `compact` (nav bar) shows short
 * labels such as "EN | ع"; the full variant (mobile menu) shows each language's own name.
 * `overlay` switches to white for the nav over a dark hero.
 */
export function LanguageSwitcher({
  compact = false,
  overlay = false,
  className,
}: {
  compact?: boolean;
  overlay?: boolean;
  className?: string;
}) {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t("language.label")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border p-0.5",
        overlay ? "border-hero-foreground/50" : "border-primary/40 bg-background",
        className,
      )}
    >
      {compact && (
        <Languages
          className={cn(
            "ms-1.5 me-0.5 size-3.5",
            overlay ? "text-hero-foreground" : "text-primary",
          )}
          strokeWidth={1.75}
          aria-hidden
        />
      )}
      {OPTIONS.map(([code, { label, short }]) => {
        const active = code === language;
        return (
          <button
            key={code}
            type="button"
            lang={code}
            aria-pressed={active}
            aria-label={active ? label : t("language.switchTo", { language: label })}
            title={label}
            onClick={() => {
              if (!active) void setLanguage(code);
            }}
            className={cn(
              "rounded-full font-semibold whitespace-nowrap transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              compact ? "h-7 min-w-8 px-2 text-xs" : "h-9 flex-1 px-4 text-sm",
              active
                ? overlay
                  ? "bg-hero-foreground text-primary"
                  : "bg-primary text-primary-foreground"
                : overlay
                  ? "text-hero-foreground/85 hover:text-hero-foreground"
                  : "text-primary hover:bg-tint",
            )}
          >
            {compact ? short : label}
          </button>
        );
      })}
    </div>
  );
}
