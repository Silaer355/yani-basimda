import { cn } from "@/lib/cn";
import { ImageIcon } from "lucide-react";

/**
 * Wedding-photo placeholder slot.
 *
 * >>> Fotoğrafı buraya bağla <<<
 * Kendi görselinle değiştirmek için bu bileşeni `next/image` (veya <img>) ile
 * değiştir. Örn:
 *   <Image src="/photos/couple.jpg" alt={label} fill className="object-cover" />
 * `label` ve `ratio` prop'larını koruyarak layout'u bozmadan swap edebilirsin.
 */
export function Placeholder({
  label,
  ratio = "4 / 3",
  tone = "warm",
  className,
}: {
  label: string;
  /** CSS aspect-ratio, e.g. "4 / 3", "3 / 4", "16 / 9". */
  ratio?: string;
  tone?: "warm" | "cream" | "sage" | "blue";
  className?: string;
}) {
  const tones: Record<string, string> = {
    warm: "bg-[var(--color-surface-warm)]",
    cream: "bg-[var(--color-background-soft)]",
    sage: "bg-[var(--color-sage)]",
    blue: "bg-[var(--color-powder-blue)]",
  };

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden",
        "rounded-[var(--radius-image)] border border-[var(--color-border)]",
        tones[tone],
        className
      )}
    >
      {/* soft editorial texture — a faint warm vignette, no heavy gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 30% 20%, rgba(255,255,255,0.55), transparent 60%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <ImageIcon
          className="h-5 w-5 text-[var(--color-text-muted)]"
          strokeWidth={1.6}
        />
        <span className="text-[12px] font-medium tracking-[0.02em] text-[var(--color-text-secondary)]">
          {label}
        </span>
        <span className="text-[11px] text-[var(--color-text-muted)]">
          düğün fotoğrafı · buraya bağla
        </span>
      </div>
    </div>
  );
}
