import { cn } from "@/lib/cn";

/** Centered content column — max 1240px, 32px inline padding (24 on mobile). */
export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-6 md:px-8", className)}>
      {children}
    </div>
  );
}
