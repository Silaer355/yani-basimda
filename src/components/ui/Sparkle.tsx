import { cn } from "@/lib/cn";

/**
 * Tiny four-point sparkle — Wedibox's signature accent, in warm terracotta
 * (kept warm rather than lilac, per the brand's no-purple rule).
 * Position it with absolute utilities from the parent.
 */
export function Sparkle({
  className,
  size = 16,
  animate = true,
}: {
  className?: string;
  size?: number;
  animate?: boolean;
}) {
  return (
    <svg
      aria-hidden
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-[var(--color-primary)]", animate && "sparkle", className)}
    >
      <path
        d="M12 0c.7 6.3 4.9 10.5 12 12-7.1 1.5-11.3 5.7-12 12-.7-6.3-4.9-10.5-12-12C7.1 10.5 11.3 6.3 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
