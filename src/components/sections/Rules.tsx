import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import { rules } from "@/lib/data/content";
import { Link2, Ban, ShieldCheck } from "lucide-react";

function Chip({ name }: { name: string }) {
  const ini = name.trim().slice(0, 2).toUpperCase();
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-white px-2 py-1 pr-3 shadow-[0_1px_2px_rgba(45,33,28,0.04)]">
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-surface-warm)] text-[10px] font-semibold text-[var(--color-brown)]">
        {ini}
      </span>
      <span className="text-[13px] font-medium text-[var(--color-text-primary)]">{name}</span>
    </span>
  );
}

function Connector({ together }: { together: boolean }) {
  return (
    <span className="flex items-center">
      <span
        className={cn(
          "h-px w-5",
          together
            ? "bg-[var(--color-ui-success)]"
            : "border-t border-dashed border-[var(--color-ui-warning)]"
        )}
      />
      <span
        className={cn(
          "flex h-7 w-7 items-center justify-center rounded-full text-white",
          together ? "bg-[var(--color-ui-success)]" : "bg-[var(--color-ui-warning)]"
        )}
      >
        {together ? (
          <Link2 className="h-3.5 w-3.5" strokeWidth={2.4} />
        ) : (
          <Ban className="h-3.5 w-3.5" strokeWidth={2.4} />
        )}
      </span>
      <span
        className={cn(
          "h-px w-5",
          together
            ? "bg-[var(--color-ui-success)]"
            : "border-t border-dashed border-[var(--color-ui-warning)]"
        )}
      />
    </span>
  );
}

export function Rules() {
  return (
    <Section id="kurallar">
      <Reveal>
        <SectionHeading
          eyebrow={rules.eyebrow}
          title={rules.title}
          body={rules.body}
          align="center"
        />
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-[880px] gap-4 md:grid-cols-2">
        {rules.cards.map((c, i) => {
          const together = c.key === "together";
          return (
            <Reveal key={c.key} as="article" delay={i * 80} className="card-soft bg-white p-6 md:p-7">
              <div className="flex items-center gap-2.5">
                <span
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-full",
                    together
                      ? "bg-[color-mix(in_srgb,var(--color-ui-success)_15%,white)] text-[var(--color-ui-success)]"
                      : "bg-[color-mix(in_srgb,var(--color-ui-warning)_16%,white)] text-[var(--color-ui-warning)]"
                  )}
                >
                  {together ? (
                    <Link2 className="h-4.5 w-4.5" strokeWidth={2} />
                  ) : (
                    <Ban className="h-4.5 w-4.5" strokeWidth={2} />
                  )}
                </span>
                <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                  {c.title}
                </h3>
              </div>
              <p className="mt-2 text-[14px] leading-[1.55] text-[var(--color-text-secondary)]">
                {c.body}
              </p>
              <div className="mt-5 flex items-center justify-center gap-1 rounded-[var(--radius-card)] bg-[var(--color-background-soft)] px-3 py-4">
                <Chip name={c.a} />
                <Connector together={together} />
                <Chip name={c.b} />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* validation strip */}
      <Reveal delay={120} className="mx-auto mt-4 max-w-[880px]">
        <div className="flex items-start gap-3.5 rounded-[var(--radius-card)] border border-[color-mix(in_srgb,var(--color-ui-success)_35%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-ui-success)_8%,white)] p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
            <ShieldCheck className="h-5 w-5 text-[var(--color-ui-success)]" strokeWidth={1.9} />
          </span>
          <div>
            <h3 className="flex items-center gap-1.5 text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]">
              <span className="text-[var(--color-ui-success)]">✓</span> {rules.validation.title}
            </h3>
            <p className="mt-1 text-[13.5px] leading-[1.55] text-[var(--color-text-secondary)]">
              {rules.validation.body}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
