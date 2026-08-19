import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { GuestFoundCard } from "@/components/mockups/FloatingCards";
import { Photo } from "@/components/ui/Photo";
import { guestExperience } from "@/lib/data/content";

export function GuestExperience() {
  return (
    <Section id="misafir-deneyimi" className="bg-[var(--color-brown-dark)]">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* copy on dark */}
        <Reveal>
          <span className="text-eyebrow text-[var(--color-primary-soft)]">
            {guestExperience.eyebrow}
          </span>
          <h2 className="text-heading mt-4 text-[32px] md:text-[44px] lg:text-[50px] text-white">
            {guestExperience.title}
          </h2>
          <p className="mt-6 max-w-[440px] text-[16px] md:text-[18px] leading-[1.65] text-white/70">
            {guestExperience.body}
          </p>

          <ol className="mt-8 space-y-4">
            {guestExperience.steps.map((s, i) => (
              <li key={s.title} className="flex items-start gap-4">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 text-[13px] font-semibold text-[var(--color-primary-soft)]">
                  {i + 1}
                </span>
                <div>
                  <div className="text-[16px] font-semibold tracking-[-0.02em] text-white">
                    {s.title}
                  </div>
                  <div className="text-[14px] leading-[1.55] text-white/60">{s.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* photo + lookup card */}
        <Reveal delay={80} className="relative">
          <Photo
            src="/photos/guest.jpg"
            alt="Gün batımında tarlada uçuşan duvaklı çift"
            label="Misafir · salon girişi"
            ratio="4 / 3"
            tone="warm"
            position="center 35%"
          />
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-6 sm:translate-x-0">
            <GuestFoundCard />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
