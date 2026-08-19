import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[var(--radius-button)] " +
  "text-[15px] font-medium tracking-[-0.01em] transition-colors duration-200 " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "focus-visible:outline-[var(--color-primary)]";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
  secondary:
    "bg-white text-[var(--color-text-primary)] border border-[var(--color-border-strong)] " +
    "hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]",
  ghost:
    "bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-primary)]",
};

export function Button({
  as = "a",
  href,
  variant = "primary",
  className,
  children,
}: {
  as?: "a" | "button";
  href?: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
}) {
  const classes = cn(base, variants[variant], className);
  if (as === "button") {
    return <button className={classes}>{children}</button>;
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
