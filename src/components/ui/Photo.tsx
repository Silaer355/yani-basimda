"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { Placeholder } from "./Placeholder";

/**
 * Real photo with a graceful fallback.
 *
 * - Renders <img> from `src` (a file in /public/photos).
 * - If the file is missing (404) it falls back to the labelled Placeholder
 *   (ratio mode) or to nothing (fill mode → the parent's background shows).
 *
 * This lets the layout be wired to the final filenames before the images are
 * dropped in — the page stays intact either way.
 */
export function Photo({
  src,
  alt,
  label,
  ratio = "4 / 3",
  tone = "warm",
  fill = false,
  priority = false,
  className,
  imgClassName,
  position = "center",
}: {
  src: string;
  alt: string;
  /** Placeholder caption when the image is missing (defaults to alt). */
  label?: string;
  ratio?: string;
  tone?: "warm" | "cream" | "sage" | "blue";
  fill?: boolean;
  priority?: boolean;
  className?: string;
  imgClassName?: string;
  position?: string;
}) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement | null>(null);

  // Catch images that 404'd before React hydrated (onError already fired).
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (fill) {
    if (failed) return null; // let the parent background stand in
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        className={cn("absolute inset-0 h-full w-full object-cover", imgClassName)}
        style={{ objectPosition: position }}
      />
    );
  }

  if (failed) {
    return <Placeholder label={label ?? alt} ratio={ratio} tone={tone} className={className} />;
  }

  return (
    <div
      style={{ aspectRatio: ratio }}
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-image)] border border-[var(--color-border)]",
        className
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onError={() => setFailed(true)}
        className={cn("h-full w-full object-cover", imgClassName)}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
