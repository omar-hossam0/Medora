import { cn } from "@/lib/cn";

type Props = {
  variant?: "dark" | "light";
  withWordmark?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
};

/**
 * Medora brand wordmark — recreated in SVG to closely match
 * the supplied design reference: rounded teal "M" mark with a
 * subtle inner pulse accent, paired with the wordmark.
 */
export function MedoraLogo({
  variant = "dark",
  withWordmark = true,
  className,
  size = "md",
}: Props) {
  const ink = variant === "dark" ? "#0F172A" : "#FFFFFF";
  const muted = variant === "dark" ? "#475569" : "rgba(255,255,255,0.78)";
  const dim =
    size === "sm" ? 24 : size === "lg" ? 36 : 30;
  const text =
    size === "sm"
      ? "text-[15px]"
      : size === "lg"
        ? "text-[22px]"
        : "text-[19px]";

  return (
    <div
      className={cn("flex items-center gap-2.5 select-none", className)}
      aria-label="Medora"
    >
      <svg
        width={dim}
        height={dim}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="mlogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop stopColor="#16B8AA" />
            <stop offset="1" stopColor="#007F74" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="40" height="40" rx="10" fill="url(#mlogoGrad)" />
        <path
          d="M9 28.5V13.2c0-.55.45-1 1-1h2.06c.42 0 .82.21 1.06.56l5.4 7.86a.5.5 0 0 0 .82 0L24.74 12.76c.24-.35.64-.56 1.06-.56h2.2c.55 0 1 .45 1 1v15.3"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="22" r="2.4" fill="#fff" />
      </svg>
      {withWordmark && (
        <div className="flex flex-col leading-none">
          <span
            className={cn("font-bold tracking-tight", text)}
            style={{ color: ink }}
          >
            Medora
          </span>
          {size !== "sm" && (
            <span
              className="mt-1 text-[10px] tracking-[0.14em] uppercase"
              style={{ color: muted }}
            >
              Healthcare
            </span>
          )}
        </div>
      )}
    </div>
  );
}
