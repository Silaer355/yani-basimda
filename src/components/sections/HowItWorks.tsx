import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { howItWorks } from "@/lib/data/content";

export function HowItWorks() {
  return (
    <Section id="nasil-calisir">
      <Reveal>
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          align="center"
        />
      </Reveal>

      <div className="relative mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {/* connecting hairline between steps (desktop) */}
        <div
          aria-hidden
          className="absolute left-[16%] right-[16%] top-[38px] hidden border-t border-dashed border-[var(--color-border-strong)] md:block"
        />
        {howItWorks.steps.map((step, i) => (
          <Reveal
            key={step.no}
            as="article"
            delay={i * 90}
            className="relative flex flex-col items-center text-center"
          >
            <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-[22px] font-semibold tracking-[-0.03em] text-[var(--color-primary)]">
              {step.no}
            </span>
            <h3 className="mt-6 text-[20px] font-semibold tracking-[-0.025em] text-[var(--color-text-primary)]">
              {step.title}
            </h3>
            <p className="mt-2 max-w-[240px] text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
              {step.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
