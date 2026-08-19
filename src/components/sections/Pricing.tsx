import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkle } from "@/components/ui/Sparkle";
import { PriceCalculator } from "@/components/mockups/PriceCalculator";
import { pricing } from "@/lib/data/content";
import { CalendarClock } from "lucide-react";

export function Pricing() {
  return (
    <Section id="fiyat">
      <Reveal>
        <SectionHeading
          eyebrow={pricing.eyebrow}
          title={pricing.title}
          body={pricing.body}
          align="center"
        />
      </Reveal>

      <Reveal delay={80} className="relative mx-auto mt-12 max-w-[920px]">
        <Sparkle className="absolute -left-5 -top-5 opacity-70" size={16} />
        <Sparkle className="absolute -right-4 top-1/3 opacity-60" size={12} />
        <PriceCalculator />

        {/* opens 1 month before the wedding */}
        <div className="mt-5 flex items-start gap-3.5 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-background-soft)] p-5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
            <CalendarClock className="h-5 w-5 text-[var(--color-primary)]" strokeWidth={1.9} />
          </span>
          <div>
            <h3 className="text-[15px] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]">
              {pricing.note.title}
            </h3>
            <p className="mt-1 text-[13.5px] leading-[1.55] text-[var(--color-text-secondary)]">
              {pricing.note.body}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
