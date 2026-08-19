import { cn } from "@/lib/cn";

/**
 * A round table with its seats laid out in a ring.
 * - Occupied seats show the guest's initial (maroon), empty seats are beige.
 * - `occupants` (array of initials) drives the fill; falls back to `filled`.
 * - `selectable`/`active`/`onSelect` make it a drop target in the interactive planner.
 */
export function TableNode({
  label,
  seats,
  filled,
  occupants,
  size = 104,
  seatSize = 15,
  selectable = false,
  active = false,
  over = false,
  onSelect,
  onDragOver,
  onDrop,
}: {
  label: string;
  seats: number;
  filled?: number;
  occupants?: string[];
  size?: number;
  seatSize?: number;
  selectable?: boolean;
  active?: boolean;
  over?: boolean;
  onSelect?: () => void;
  onDragOver?: (e: React.DragEvent) => void;
  onDrop?: (e: React.DragEvent) => void;
}) {
  const filledCount = occupants ? occupants.length : filled ?? 0;
  const radius = size / 2 + Math.round(seatSize * 0.73);
  const full = filledCount >= seats;
  const canDrop = selectable && !full;

  return (
    <div
      onClick={onSelect}
      onDragOver={onDragOver}
      onDrop={onDrop}
      role={onSelect ? "button" : undefined}
      className={cn(
        "relative transition-transform",
        canDrop && "cursor-pointer hover:scale-[1.03]",
        over && "scale-[1.06]"
      )}
      style={{ width: size + seatSize * 2, height: size + seatSize * 2 }}
    >
      {Array.from({ length: seats }).map((_, i) => {
        const angle = (i / seats) * 2 * Math.PI - Math.PI / 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const occ = occupants ? i < occupants.length : i < (filled ?? 0);
        return (
          <span
            key={i}
            className={cn(
              "absolute flex items-center justify-center rounded-full font-semibold text-white",
              occ ? "bg-[var(--color-seat-occupied)]" : "bg-[var(--color-seat-available)]"
            )}
            style={{
              width: seatSize,
              height: seatSize,
              fontSize: Math.round(seatSize * 0.52),
              left: "50%",
              top: "50%",
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
            }}
          >
            {occ && occupants ? occupants[i] : ""}
          </span>
        );
      })}

      <div
        className={cn(
          "absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border transition-all",
          active && "ring-2 ring-[var(--color-primary)] ring-offset-2 ring-offset-[var(--color-canvas)]",
          over
            ? "bg-[color-mix(in_srgb,var(--color-primary)_10%,white)] ring-[3px]"
            : "bg-white"
        )}
        style={{
          width: size,
          height: size,
          borderColor: active || over ? "var(--color-primary)" : "var(--color-border-strong)",
          boxShadow: "0 1px 2px rgba(45,33,28,0.04)",
        }}
      >
        <span className="text-[13px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
          {label}
        </span>
        <span
          className={cn(
            "mt-0.5 text-[11px] font-medium",
            full ? "text-[var(--color-ui-success)]" : "text-[var(--color-text-muted)]"
          )}
        >
          {filledCount}/{seats}
        </span>
      </div>
    </div>
  );
}
