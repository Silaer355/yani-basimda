import { cn } from "@/lib/cn";
import { Container } from "./Container";

/** Generous vertical rhythm — 72→160px per breakpoint. */
export function Section({
  id,
  className,
  containerClassName,
  bare = false,
  children,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  /** When true, skip the inner Container (section manages its own width). */
  bare?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn("py-[72px] md:py-[110px] lg:py-[140px]", className)}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  );
}

/** Eyebrow + heading + optional lead — the standard section intro. */
export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center mx-auto max-w-[680px]",
        className
      )}
    >
      {eyebrow && (
        <span className="text-eyebrow text-[var(--color-primary)]">{eyebrow}</span>
      )}
      <h2 className="text-heading text-[34px] leading-[1.05] md:text-[44px] lg:text-[52px] text-[var(--color-text-primary)]">
        {title}
      </h2>
      {body && (
        <p className="max-w-[560px] text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text-secondary)]">
          {body}
        </p>
      )}
    </div>
  );
}
