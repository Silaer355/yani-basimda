import { cn } from "@/lib/cn";

/**
 * Brand logo — "Yanı Başımda" wordmark (transparent SVG, dark brown #402a1f).
 * Works on light surfaces (header / footer).
 */
export function Logo({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-wordmark.svg"
      alt="Yanı Başımda"
      className={cn("h-6 w-auto md:h-[26px]", className)}
    />
  );
}
