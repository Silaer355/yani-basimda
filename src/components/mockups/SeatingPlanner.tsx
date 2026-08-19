"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { LayoutGrid, List, Users, X, Hand, GripVertical, AlertTriangle } from "lucide-react";
import { TableNode } from "./TableNode";

type Guest = { id: number; name: string; group: string; table: number | null };

const TABLES = [
  { id: 1, label: "Masa 1", seats: 8 },
  { id: 2, label: "Masa 2", seats: 8 },
  { id: 3, label: "Masa 3", seats: 6 },
  { id: 4, label: "Masa 4", seats: 8 },
];

const INITIAL_GUESTS: Guest[] = [
  { id: 1, name: "Elif Yıldız", group: "Aile", table: 1 },
  { id: 2, name: "Kaan Demir", group: "Arkadaş", table: 1 },
  { id: 3, name: "Zeynep Arslan", group: "Aile", table: 1 },
  { id: 4, name: "Deniz Aydın", group: "Aile", table: 2 },
  { id: 5, name: "Mert Çelik", group: "İş", table: null },
  { id: 6, name: "Selin Koç", group: "Arkadaş", table: null },
];

// Örnek kurallar: Elif + Kaan birlikte otursun, Mert + Selin ayrı otursun.
const RULES: { type: "together" | "apart"; a: number; b: number }[] = [
  { type: "together", a: 1, b: 2 },
  { type: "apart", a: 5, b: 6 },
];

const initial = (name: string) => (name.trim()[0] || "?").toUpperCase();
const avatarInitials = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const tableLabel = (id: number | null) => TABLES.find((t) => t.id === id)?.label ?? "";

export function SeatingPlanner({ className }: { className?: string }) {
  const [guests, setGuests] = useState<Guest[]>(INITIAL_GUESTS);
  const [selected, setSelected] = useState<number | null>(null);
  const [dragId, setDragId] = useState<number | null>(null);
  const [overTable, setOverTable] = useState<number | null>(null);

  const seated = guests.filter((g) => g.table !== null);
  const total = guests.length;
  const seatedPct = total ? Math.round((seated.length / total) * 100) : 0;
  const selectedGuest = guests.find((g) => g.id === selected) ?? null;

  const occupantsFor = (tableId: number) =>
    guests.filter((g) => g.table === tableId).map((g) => initial(g.name));

  // live rule check → drives the "Kural ihlali yok" badge
  const tableOf = (id: number) => guests.find((g) => g.id === id)?.table ?? null;
  const violations = RULES.filter((r) => {
    const ta = tableOf(r.a);
    const tb = tableOf(r.b);
    if (ta === null || tb === null) return false;
    return r.type === "apart" ? ta === tb : ta !== tb;
  }).length;

  const isFull = (tableId: number, seats: number) =>
    guests.filter((g) => g.table === tableId).length >= seats;

  const assignToTable = (tableId: number, seats: number) => {
    if (selected === null || isFull(tableId, seats)) return;
    setGuests((prev) =>
      prev.map((g) => (g.id === selected ? { ...g, table: tableId } : g))
    );
    setSelected(null);
  };

  const unassign = (id: number) =>
    setGuests((prev) => prev.map((g) => (g.id === id ? { ...g, table: null } : g)));

  const toggleSelect = (g: Guest) =>
    setSelected((cur) => (cur === g.id ? null : g.id));

  // --- drag & drop ---
  const startDrag = (e: React.DragEvent, id: number) => {
    e.dataTransfer.setData("text/plain", String(id));
    e.dataTransfer.effectAllowed = "move";
    setDragId(id);
    setSelected(null);
  };
  const endDrag = () => {
    setDragId(null);
    setOverTable(null);
  };
  const dropOnTable = (e: React.DragEvent, tableId: number, seats: number) => {
    e.preventDefault();
    const raw = e.dataTransfer.getData("text/plain");
    const id = raw ? Number(raw) : dragId;
    endDrag();
    if (id === null || Number.isNaN(id) || isFull(tableId, seats)) return;
    setGuests((prev) => prev.map((g) => (g.id === id ? { ...g, table: tableId } : g)));
  };

  const dragGuest = guests.find((g) => g.id === dragId) ?? null;

  return (
    <div
      className={cn(
        "w-full overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white",
        className
      )}
      style={{ boxShadow: "var(--shadow-float)" }}
    >
      {/* top bar */}
      <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-border-strong)]" />
        </div>
        <span className="ml-1 text-[12.5px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
          Yanı Başımda
          <span className="font-normal text-[var(--color-text-muted)]"> · Oturma Planı</span>
        </span>
        <div className="ml-auto hidden items-center gap-0.5 rounded-full border border-[var(--color-border)] p-0.5 sm:flex">
          <span className="flex items-center gap-1 rounded-full bg-[var(--color-primary)] px-2.5 py-1 text-[11px] font-medium text-white">
            <LayoutGrid className="h-3 w-3" strokeWidth={2} /> Salon
          </span>
          <span className="flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]">
            <List className="h-3 w-3" strokeWidth={2} /> Liste
          </span>
        </div>
        {violations === 0 ? (
          <span className="hidden rounded-full bg-[color-mix(in_srgb,var(--color-ui-success)_14%,white)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-ui-success)] md:inline">
            ✓ Kural ihlali yok
          </span>
        ) : (
          <span className="hidden items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--color-ui-warning)_18%,white)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-ui-warning)] md:inline-flex">
            <AlertTriangle className="h-3 w-3" strokeWidth={2.2} />
            {violations} kural ihlali
          </span>
        )}
      </div>

      {/* body */}
      <div className="flex">
        {/* canvas */}
        <div
          className="relative flex-1 p-5 sm:p-7"
          style={{
            backgroundColor: "var(--color-canvas)",
            backgroundImage: "radial-gradient(rgba(45,33,28,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        >
          {/* instruction / selection banner */}
          <div className="absolute left-1/2 top-3 z-10 -translate-x-1/2">
            {dragGuest ? (
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-3 py-1 text-[11.5px] font-medium text-white shadow-sm">
                <Hand className="h-3.5 w-3.5" strokeWidth={2} />
                “{dragGuest.name}” — bir masaya bırak
              </span>
            ) : selectedGuest ? (
              <span className="flex items-center gap-1.5 rounded-full bg-[var(--color-primary)] px-3 py-1 text-[11.5px] font-medium text-white shadow-sm">
                <Hand className="h-3.5 w-3.5" strokeWidth={2} />
                “{selectedGuest.name}” için bir masaya dokun
              </span>
            ) : (
              <span className="hidden rounded-full border border-[var(--color-border)] bg-white/85 px-3 py-1 text-[11px] font-medium text-[var(--color-text-muted)] backdrop-blur-sm sm:inline">
                Misafiri masaya sürükle · ya da seçip masaya dokun
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 place-items-center gap-x-2 gap-y-6 pt-6">
            {TABLES.map((t) => {
              const dropping = selected !== null || dragId !== null;
              return (
                <TableNode
                  key={t.id}
                  label={t.label}
                  seats={t.seats}
                  occupants={occupantsFor(t.id)}
                  selectable={dropping}
                  active={dropping && !isFull(t.id, t.seats)}
                  over={overTable === t.id}
                  onSelect={() => assignToTable(t.id, t.seats)}
                  onDragOver={(e) => {
                    if (!isFull(t.id, t.seats)) {
                      e.preventDefault();
                      setOverTable(t.id);
                    }
                  }}
                  onDrop={(e) => dropOnTable(e, t.id, t.seats)}
                />
              );
            })}
          </div>

          {/* floating occupancy chip */}
          <div
            className="absolute right-4 top-4 hidden rounded-[14px] border border-[var(--color-border)] bg-white/95 px-3 py-2 backdrop-blur-sm sm:block"
            style={{ boxShadow: "var(--shadow-soft)" }}
          >
            <div className="text-[10px] font-medium uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
              Doluluk
            </div>
            <div className="mt-0.5 flex items-baseline gap-1">
              <span className="text-[18px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
                {seatedPct}%
              </span>
              <span className="text-[11px] text-[var(--color-text-secondary)]">
                {seated.length}/{total}
              </span>
            </div>
          </div>
        </div>

        {/* guest panel */}
        <div className="hidden w-[248px] shrink-0 flex-col border-l border-[var(--color-border)] bg-white lg:flex">
          <div className="flex items-center justify-between px-3.5 pt-3.5">
            <span className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--color-text-primary)]">
              <Users className="h-3.5 w-3.5 text-[var(--color-primary)]" strokeWidth={2} />
              Misafirler
            </span>
            <span className="text-[11px] text-[var(--color-text-muted)]">{total}</span>
          </div>

          <div className="mt-3 flex flex-wrap gap-1 px-3.5">
            {["Tümü", "Aile", "Arkadaş", "İş"].map((c, i) => (
              <span
                key={c}
                className={cn(
                  "rounded-full px-2 py-0.5 text-[10.5px] font-medium",
                  i === 0
                    ? "bg-[var(--color-brown)] text-white"
                    : "bg-[var(--color-background-soft)] text-[var(--color-text-secondary)]"
                )}
              >
                {c}
              </span>
            ))}
          </div>

          {/* list */}
          <div className="thin-scroll mt-2 max-h-[228px] flex-1 overflow-y-auto px-2 pb-1">
            {guests.map((g) => {
              const isSel = g.id === selected;
              const isSeated = g.table !== null;
              return (
                <div
                  key={g.id}
                  draggable
                  onDragStart={(e) => startDrag(e, g.id)}
                  onDragEnd={endDrag}
                  onClick={() => !isSeated && toggleSelect(g)}
                  className={cn(
                    "flex items-center gap-2 rounded-[10px] px-1.5 py-1.5 transition-colors",
                    "cursor-grab active:cursor-grabbing",
                    dragId === g.id && "opacity-40",
                    isSel
                      ? "bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] ring-1 ring-[var(--color-primary)]"
                      : "hover:bg-[var(--color-background-soft)]"
                  )}
                >
                  <GripVertical
                    className="h-3.5 w-3.5 shrink-0 text-[var(--color-text-muted)]"
                    strokeWidth={2}
                  />
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-surface-warm)] text-[10.5px] font-semibold text-[var(--color-brown)]">
                    {avatarInitials(g.name)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[12.5px] font-medium leading-tight text-[var(--color-text-primary)]">
                      {g.name}
                    </div>
                    <div className="truncate text-[11px] leading-tight text-[var(--color-text-muted)]">
                      {g.group}
                    </div>
                  </div>
                  {isSeated ? (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        unassign(g.id);
                      }}
                      className="flex shrink-0 items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-primary)_20%,white)]"
                    >
                      {tableLabel(g.table)}
                      <X className="h-3 w-3" strokeWidth={2.4} />
                    </button>
                  ) : isSel ? (
                    <span className="shrink-0 text-[10.5px] font-medium text-[var(--color-primary)]">
                      masa seç →
                    </span>
                  ) : (
                    <span className="shrink-0 rounded-full bg-[color-mix(in_srgb,var(--color-ui-warning)_16%,white)] px-2 py-0.5 text-[10.5px] font-medium text-[var(--color-ui-warning)]">
                      Açıkta
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* summary footer */}
          <div className="border-t border-[var(--color-border)] px-3.5 py-3">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-[var(--color-ui-success)]">{seated.length} yerleşti</span>
              <span className="text-[var(--color-ui-warning)]">
                {total - seated.length} açıkta
              </span>
            </div>
            <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-[var(--color-background-soft)]">
              <div
                className="h-full rounded-full bg-[var(--color-primary)] transition-all"
                style={{ width: `${seatedPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
