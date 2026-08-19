import { Container } from "@/components/ui/Container";
import { Sparkle } from "@/components/ui/Sparkle";
import { Photo } from "@/components/ui/Photo";
import { SeatingPlanner } from "@/components/mockups/SeatingPlanner";
import { GuestFoundCard, UnseatedCard } from "@/components/mockups/FloatingCards";
import { hero } from "@/lib/data/content";
import { ArrowRight, Check } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative">
      {/* ================= PHOTO-FORWARD HERO BAND =================
          >>> Arka plan düğün fotoğrafı buraya <<<
          Bu bloğu kendi görselinle değiştir:
            <Image src="/photos/reception.jpg" alt="" fill priority
                   className="object-cover" />
          Altındaki koyu overlay, krem başlığın okunması için gerekli. */}
      <div className="relative overflow-hidden">
        {/* warm gradient — fallback behind the cover photo (and if it's missing) */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 70% 15%, #5a3d2c 0%, #3a2820 45%, #2a1c16 100%)",
          }}
        />
        {/* cover cinemagraph (animated) — falls back to a static poster when
            the viewer prefers reduced motion */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/hero.webp"
          alt="Gün batımında sahilde el ele gelin ve damat"
          className="motion-only absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/photos/hero-poster.jpg"
          alt=""
          aria-hidden
          className="reduced-only absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 60%" }}
        />
        {/* warm legibility scrim over the photo */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(28,18,12,0.5) 0%, rgba(28,18,12,0.42) 45%, rgba(28,18,12,0.72) 100%)",
          }}
        />

        {/* sparkles */}
        <Sparkle className="absolute left-[10%] top-[26%] opacity-80" size={18} />
        <Sparkle className="absolute right-[14%] top-[38%] opacity-70" size={13} />
        <Sparkle className="absolute left-[22%] bottom-[20%] opacity-60" size={11} />

        <Container className="relative">
          <div className="mx-auto flex max-w-[760px] flex-col items-center pt-24 pb-40 text-center md:pt-28 md:pb-48">
            <span className="glass text-eyebrow rounded-[var(--radius-pill)] px-4 py-1.5 text-white/85">
              {hero.eyebrow}
            </span>

            <h1 className="text-hero mt-6 text-[42px] leading-[1.04] text-[#fbf7f1] sm:text-[56px] lg:text-[70px]">
              {hero.title[0]}
              <br />
              <span className="relative inline-block">
                {hero.title[1]}
                {/* hand-drawn underline accent — anchored just below the line */}
                <svg
                  aria-hidden
                  className="absolute left-0 top-full h-[0.16em] w-full text-[var(--color-primary)]"
                  style={{ marginTop: "-0.02em" }}
                  viewBox="0 0 300 10"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 5c60-4 236-5 296 0"
                    stroke="currentColor"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-[500px] text-[16px] leading-[1.6] text-white/75 md:text-[18px]">
              {hero.body}
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#basla"
                className="inline-flex h-[52px] items-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
              >
                {hero.primaryCta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <a
                href="#nasil-calisir"
                className="glass inline-flex h-[52px] items-center gap-2 rounded-[var(--radius-pill)] px-7 text-[15px] font-medium text-white transition-colors hover:bg-white/25"
              >
                {hero.secondaryCta}
              </a>
            </div>

            {/* honest trust chips (no fabricated stats) */}
            <ul className="mt-9 flex flex-wrap items-center justify-center gap-2.5">
              {hero.trust.map((t) => (
                <li
                  key={t}
                  className="glass flex items-center gap-1.5 rounded-[var(--radius-pill)] px-3 py-1.5 text-[12.5px] font-medium text-white/85"
                >
                  <Check className="h-3.5 w-3.5 text-[var(--color-primary-soft)]" strokeWidth={2.6} />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>

      {/* ================= FLOATING PRODUCT DEMO ================= */}
      <Container className="relative">
        <div className="relative mx-auto -mt-28 max-w-[1080px] md:-mt-32">
          {/* small candid peek, framed, floating over the planner's top-left */}
          <div className="absolute -left-4 -top-12 z-20 hidden w-[128px] rotate-[-5deg] rounded-[18px] border-4 border-white bg-white shadow-[var(--shadow-float)] md:block">
            <Photo
              src="/photos/rings.webp"
              alt="Yüzükleri gösteren çiftin elleri"
              ratio="3 / 4"
              position="center 40%"
              className="!rounded-[12px] !border-0"
            />
          </div>

          <SeatingPlanner className="relative z-10" />

          <div className="absolute -bottom-6 -left-4 z-20 hidden sm:block">
            <GuestFoundCard />
          </div>
          <div className="absolute -right-3 bottom-16 z-20 hidden lg:block">
            <UnseatedCard />
          </div>
          <Sparkle className="absolute -right-5 top-1/2 opacity-60" size={12} />
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-[13px] text-[var(--color-text-muted)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
          {hero.stat.value} {hero.stat.label}
        </div>
      </Container>
    </section>
  );
}
