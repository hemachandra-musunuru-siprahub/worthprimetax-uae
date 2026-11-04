import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

/**
 * Flat FAQ illustration for the home FAQ section: a question bubble, a reply bubble, a note card
 * and a plant on a soft blue backdrop. Colours come from theme tokens only (navy, blue, tint).
 */
export function FaqIllustration({ className }: { className?: string }) {
  const { t } = useTranslation();
  return (
    <svg
      viewBox="0 0 420 300"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label={t("home.faq.illustrationLabel")}
    >
      {/* Backdrop */}
      <ellipse cx="215" cy="170" rx="190" ry="118" className="fill-tint" />
      <ellipse cx="215" cy="268" rx="150" ry="14" className="fill-brand-secondary/10" />

      {/* Dashed path linking the bubbles */}
      <path
        d="M120 92 C 160 30, 260 20, 300 70"
        fill="none"
        strokeWidth="2"
        strokeDasharray="5 7"
        strokeLinecap="round"
        className="stroke-brand-secondary/50"
      />
      <path
        d="M296 62 l6 10 l-11 1"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-brand-secondary/50"
      />

      {/* Note card */}
      <g transform="rotate(-8 170 230)">
        <rect
          x="120"
          y="190"
          width="120"
          height="78"
          rx="12"
          className="fill-card stroke-border"
          strokeWidth="1.5"
        />
        <rect x="138" y="212" width="70" height="8" rx="4" className="fill-brand-secondary/25" />
        <rect x="138" y="230" width="84" height="8" rx="4" className="fill-brand-secondary/15" />
        <rect x="138" y="248" width="56" height="8" rx="4" className="fill-brand-secondary/15" />
      </g>

      {/* Question bubble */}
      <path
        d="M215 70 c 48 0 82 32 82 72 s -34 72 -82 72 c -12 0 -23 -2 -33 -6 l -28 14 l 8 -28 c -18 -14 -29 -32 -29 -52 c 0 -40 34 -72 82 -72 z"
        className="fill-card stroke-brand-secondary/20"
        strokeWidth="1.5"
      />
      <text
        x="215"
        y="172"
        textAnchor="middle"
        className="fill-primary font-sans"
        fontSize="92"
        fontWeight="800"
      >
        ?
      </text>

      {/* Reply bubble */}
      <g transform="rotate(8 330 190)">
        <rect x="276" y="150" width="108" height="76" rx="18" className="fill-brand-secondary" />
        <path d="M352 224 l 14 22 l -2 -24 z" className="fill-brand-secondary" />
        <circle cx="306" cy="188" r="7" className="fill-card" />
        <circle cx="330" cy="188" r="7" className="fill-card" />
        <circle cx="354" cy="188" r="7" className="fill-card" />
      </g>

      {/* Accent strokes */}
      <g strokeWidth="3.5" strokeLinecap="round" className="stroke-brand-secondary/70">
        <path d="M336 96 l 18 -16" />
        <path d="M344 112 l 24 -6" />
        <path d="M342 128 l 22 4" />
      </g>

      {/* Plant */}
      <path
        d="M78 262 h 44 l -6 -30 h -32 z"
        className="fill-card stroke-border"
        strokeWidth="1.5"
      />
      <path
        d="M100 232 C 100 205, 96 185, 92 165"
        fill="none"
        strokeWidth="2.5"
        className="stroke-primary/60"
      />
      <path
        d="M93 190 c -26 -6 -36 -28 -30 -44 c 22 6 34 24 30 44 z"
        className="fill-brand-secondary/70"
      />
      <path
        d="M97 205 c 22 -12 44 -8 52 6 c -18 14 -40 12 -52 -6 z"
        className="fill-brand-secondary/50"
      />
      <path
        d="M92 168 c 6 -22 24 -32 40 -28 c -4 20 -22 32 -40 28 z"
        className="fill-brand-secondary/60"
      />
    </svg>
  );
}
