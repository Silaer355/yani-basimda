import { Container } from "@/components/ui/Container";
import { valueStrip } from "@/lib/data/content";

export function ValueStrip() {
  return (
    <div className="py-6 md:py-8">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white px-6 py-4 md:gap-x-6">
          {valueStrip.map((item, i) => (
            <div key={item} className="flex items-center gap-3 md:gap-6">
              {i > 0 && (
                <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]/70" />
              )}
              <span className="text-[13.5px] font-medium tracking-[-0.01em] text-[var(--color-text-secondary)] md:text-[14.5px]">
                {item}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
