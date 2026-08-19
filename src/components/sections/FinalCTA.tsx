import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { finalCta } from "@/lib/data/content";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="basla" className="py-[72px] md:py-[110px]">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[var(--radius-large)] bg-[var(--color-primary)] px-8 py-16 text-center md:px-12 md:py-20">
          {/* soft warm texture, no gradient band */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.22), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-[620px]">
            <h2 className="text-heading text-[32px] md:text-[48px] text-white">
              {finalCta.title[0]}
              <br />
              {finalCta.title[1]}
            </h2>
            <p className="mx-auto mt-5 max-w-[440px] text-[16px] md:text-[18px] leading-[1.6] text-white/85">
              {finalCta.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex h-[52px] items-center gap-2 rounded-[var(--radius-button)] bg-white px-6 text-[15px] font-medium text-[var(--color-primary)] transition-colors hover:bg-white/90"
              >
                {finalCta.primaryCta}
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </a>
              <a
                href="#urun"
                className="inline-flex h-[52px] items-center gap-2 rounded-[var(--radius-button)] border border-white/40 px-6 text-[15px] font-medium text-white transition-colors hover:bg-white/10"
              >
                {finalCta.secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
