import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data/content";

export function Testimonials() {
  return (
    <Section id="yorumlar">
      <Reveal>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          body={testimonials.body}
          align="center"
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {testimonials.cards.map((c, i) => (
          <Reveal
            key={i}
            as="article"
            delay={i * 80}
            className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white p-7"
          >
            {/* five small terracotta ticks instead of cliché stars */}
            <div className="flex gap-1" aria-hidden>
              {Array.from({ length: 5 }).map((_, s) => (
                <span key={s} className="h-1.5 w-4 rounded-full bg-[var(--color-primary-soft)]" />
              ))}
            </div>
            <p className="mt-5 flex-1 text-[16px] leading-[1.6] text-[var(--color-text-primary)]">
              “{c.quote}”
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-[var(--color-border)] pt-5">
              <span className="h-9 w-9 rounded-full bg-[var(--color-surface-warm)]" />
              <div>
                <div className="text-[13.5px] font-semibold text-[var(--color-text-primary)]">
                  {c.name}
                </div>
                <div className="text-[12px] text-[var(--color-text-muted)]">{c.meta}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
