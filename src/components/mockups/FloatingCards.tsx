import { cn } from "@/lib/cn";
import { Search, MapPin, AlertCircle, GripVertical } from "lucide-react";

const cardBase =
  "rounded-[16px] border border-[var(--color-border)] bg-white/95 backdrop-blur-sm";

/* A guest looked up their own name and found their table. */
export function GuestFoundCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(cardBase, "w-[228px] p-3", className)}
      style={{ boxShadow: "var(--shadow-float)" }}
    >
      <div className="flex items-center gap-2 rounded-[10px] border border-[var(--color-border)] bg-[var(--color-background-soft)] px-2.5 py-1.5">
        <Search className="h-3.5 w-3.5 text-[var(--color-text-muted)]" strokeWidth={2} />
        <span className="text-[12.5px] font-medium text-[var(--color-text-primary)]">
          Elif Yıldız
        </span>
      </div>
      <div className="mt-2 flex items-center gap-2 px-0.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-primary)_14%,white)]">
          <MapPin className="h-4 w-4 text-[var(--color-primary)]" strokeWidth={2} />
        </div>
        <div>
          <div className="text-[13px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
            Masa 3
          </div>
          <div className="text-[11px] text-[var(--color-text-muted)]">
            Sahne yanı · Aile masası
          </div>
        </div>
      </div>
    </div>
  );
}

/* Alert: someone is still unseated. */
export function UnseatedCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(cardBase, "flex items-center gap-2.5 px-3 py-2.5", className)}
      style={{ boxShadow: "var(--shadow-float)" }}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-ui-warning)_16%,white)]">
        <AlertCircle className="h-4 w-4 text-[var(--color-ui-warning)]" strokeWidth={2} />
      </div>
      <div>
        <div className="text-[12.5px] font-semibold text-[var(--color-text-primary)]">
          17 misafir açıkta
        </div>
        <div className="text-[11px] text-[var(--color-text-muted)]">
          Yerleştirmek için sürükle
        </div>
      </div>
    </div>
  );
}

/* A guest chip mid-drag. */
export function DragChip({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        cardBase,
        "flex w-[190px] items-center gap-2 px-2.5 py-2",
        "rotate-[-4deg]",
        className
      )}
      style={{ boxShadow: "var(--shadow-float)" }}
    >
      <GripVertical className="h-4 w-4 text-[var(--color-text-muted)]" strokeWidth={2} />
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-warm)] text-[10.5px] font-semibold text-[var(--color-brown)]">
        MÇ
      </div>
      <div className="min-w-0">
        <div className="truncate text-[12.5px] font-medium leading-tight text-[var(--color-text-primary)]">
          Mert Çelik
        </div>
        <div className="text-[11px] leading-tight text-[var(--color-text-muted)]">
          Masa 4&apos;e taşınıyor
        </div>
      </div>
    </div>
  );
}
