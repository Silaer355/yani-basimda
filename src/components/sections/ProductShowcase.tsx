import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SeatingPlanner } from "@/components/mockups/SeatingPlanner";
import { showcase } from "@/lib/data/content";

export function ProductShowcase() {
  return (
    <Section id="urun">
      <Reveal>
        <SectionHeading
          eyebrow={showcase.eyebrow}
          title={showcase.title}
          body={showcase.body}
          align="center"
        />
      </Reveal>

      <Reveal delay={80} className="mt-12">
        {/* framed presentation on a warm band */}
        <div className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-4 sm:p-8 lg:p-12">
          <SeatingPlanner />
        </div>
      </Reveal>

      <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
        {showcase.details.map((d, i) => (
          <Reveal key={d.title} delay={i * 70}>
            <div className="border-t border-[var(--color-border-strong)] pt-4">
              <h3 className="text-[15px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                {d.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--color-text-secondary)]">
                {d.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
