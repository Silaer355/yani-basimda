import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Photo } from "@/components/ui/Photo";
import { DragChip } from "@/components/mockups/FloatingCards";
import { emotional } from "@/lib/data/content";
import { Check } from "lucide-react";

export function Emotional() {
  return (
    <Section className="bg-[var(--color-background-soft)]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* photo + small UI preview */}
        <Reveal className="relative order-2 lg:order-1">
          <Photo
            src="/photos/celebration.webp"
            alt="Düğünde konfeti eşliğinde öpüşen çift"
            label="Düğün masası · misafirler"
            ratio="4 / 5"
            tone="warm"
            position="center 45%"
          />
          <div className="absolute -bottom-5 -right-3 hidden sm:block">
            <DragChip />
          </div>
          {/* small curved-arrow decorative accent (used sparingly) */}
          <svg
            aria-hidden
            className="absolute -left-6 -top-6 hidden h-12 w-12 text-[var(--color-primary)]/50 md:block"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M6 30c8-14 22-18 34-14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M34 10l6 6-8 3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Reveal>

        {/* copy */}
        <Reveal className="order-1 lg:order-2" delay={80}>
          <span className="text-eyebrow text-[var(--color-primary)]">
            {emotional.eyebrow}
          </span>
          <h2 className="text-heading mt-4 text-[32px] md:text-[44px] lg:text-[50px] text-[var(--color-text-primary)]">
            {emotional.titleLead}{" "}
            <span className="text-serif italic text-[var(--color-primary)]">
              {emotional.titleAccent}
            </span>
          </h2>
          <p className="mt-6 max-w-[440px] text-[16px] md:text-[18px] leading-[1.65] text-[var(--color-text-secondary)]">
            {emotional.body}
          </p>
          <ul className="mt-7 space-y-3">
            {emotional.points.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-primary)_14%,white)]">
                  <Check className="h-3.5 w-3.5 text-[var(--color-primary)]" strokeWidth={2.6} />
                </span>
                <span className="text-[15px] text-[var(--color-text-primary)]">{p}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
