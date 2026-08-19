import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkle } from "@/components/ui/Sparkle";
import { TableNode } from "@/components/mockups/TableNode";
import { cn } from "@/lib/cn";
import { features } from "@/lib/data/content";
import { Search, GripVertical, Check, AlertCircle, ArrowRight } from "lucide-react";

/* Wedibox keeps cards mostly uniform warm-cream; colour comes from the UI
   inside, not the card. We keep just two gentle tints to anchor the grid. */
const toneClass: Record<string, string> = {
  surface: "bg-[var(--color-surface)]",
  warm: "bg-[var(--color-surface-warm)]",
  blue: "bg-[var(--color-surface)]",
  sage: "bg-[var(--color-background-soft)]",
};

/* Cards that carry a little sparkle accent. */
const sparkleOn = new Set(["guests", "tables", "search"]);

const spanClass: Record<string, string> = {
  guests: "md:col-span-4",
  tables: "md:col-span-2 md:row-span-2",
  drag: "md:col-span-2",
  unseated: "md:col-span-2",
  groups: "md:col-span-3",
  search: "md:col-span-3",
};

/* --- per-card mini visuals ------------------------------------------------- */

function MiniGuestRow({
  initials,
  name,
  group,
  seated,
}: {
  initials: string;
  name: string;
  group: string;
  seated?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-[10px] border border-[var(--color-border)] bg-white px-2.5 py-2">
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-surface-warm)] text-[10.5px] font-semibold text-[var(--color-brown)]">
        {initials}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate text-[12.5px] font-medium leading-tight text-[var(--color-text-primary)]">
          {name}
        </div>
        <div className="text-[11px] leading-tight text-[var(--color-text-muted)]">{group}</div>
      </div>
      {seated && (
        <Check className="h-4 w-4 text-[var(--color-ui-success)]" strokeWidth={2.4} />
      )}
    </div>
  );
}

function Visual({ k }: { k: string }) {
  switch (k) {
    case "guests":
      return (
        <div className="grid gap-2 sm:grid-cols-2">
          <MiniGuestRow initials="EY" name="Elif Yıldız" group="Aile" seated />
          <MiniGuestRow initials="KD" name="Kaan Demir" group="Arkadaş" seated />
          <MiniGuestRow initials="ZA" name="Zeynep Arslan" group="Aile" seated />
          <MiniGuestRow initials="SK" name="Selin Koç" group="Arkadaş" />
        </div>
      );
    case "tables":
      return (
        <div className="flex flex-1 items-center justify-center py-2">
          <TableNode label="Masa 3" seats={8} filled={6} size={116} />
        </div>
      );
    case "drag":
      return (
        <div className="flex items-center gap-2 rounded-[12px] border border-[var(--color-border)] bg-white px-2.5 py-2 rotate-[-3deg]"
          style={{ boxShadow: "var(--shadow-soft)" }}>
          <GripVertical className="h-4 w-4 text-[var(--color-text-muted)]" strokeWidth={2} />
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-surface-warm)] text-[10px] font-semibold text-[var(--color-brown)]">
            MÇ
          </span>
          <span className="text-[12.5px] font-medium text-[var(--color-text-primary)]">
            Mert Çelik
          </span>
          <ArrowRight className="ml-auto h-3.5 w-3.5 text-[var(--color-primary)]" strokeWidth={2.2} />
        </div>
      );
    case "unseated":
      return (
        <div className="flex items-center gap-3 rounded-[14px] bg-[color-mix(in_srgb,var(--color-ui-warning)_12%,white)] px-3.5 py-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
            <AlertCircle className="h-4.5 w-4.5 text-[var(--color-ui-warning)]" strokeWidth={2} />
          </span>
          <div>
            <div className="text-[20px] font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
              17
            </div>
            <div className="-mt-1 text-[11.5px] text-[var(--color-text-secondary)]">
              misafir açıkta
            </div>
          </div>
        </div>
      );
    case "groups":
      return (
        <div className="flex flex-wrap gap-1.5">
          {["Aile", "Arkadaş", "İş", "Üniversite", "Komşular"].map((g, i) => (
            <span
              key={g}
              className={cn(
                "rounded-full px-2.5 py-1 text-[12px] font-medium",
                i === 0
                  ? "bg-[var(--color-brown)] text-white"
                  : "border border-[var(--color-border-strong)] bg-white text-[var(--color-text-secondary)]"
              )}
            >
              {g}
            </span>
          ))}
        </div>
      );
    case "search":
      return (
        <div className="flex items-center gap-3">
          <div className="flex flex-1 items-center gap-2 rounded-[12px] border border-[var(--color-border)] bg-white px-3 py-2.5">
            <Search className="h-4 w-4 text-[var(--color-text-muted)]" strokeWidth={2} />
            <span className="text-[13px] text-[var(--color-text-primary)]">Zeynep</span>
            <span className="ml-1 inline-block h-4 w-px animate-pulse bg-[var(--color-primary)]" />
          </div>
          <span className="flex shrink-0 items-center gap-1 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_12%,white)] px-3 py-1.5 text-[12px] font-medium text-[var(--color-primary)]">
            Masa 3
          </span>
        </div>
      );
    default:
      return null;
  }
}

export function FeatureBento() {
  return (
    <Section id="ozellikler">
      <Reveal>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          body={features.body}
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[minmax(0,1fr)]">
        {features.cards.map((card, i) => (
          <Reveal
            key={card.key}
            as="article"
            delay={i * 60}
            className={cn(
              "card-soft relative flex flex-col gap-4 p-6 md:p-7",
              toneClass[card.tone],
              spanClass[card.key]
            )}
          >
            {sparkleOn.has(card.key) && (
              <Sparkle className="absolute right-5 top-5 opacity-70" size={14} />
            )}
            <div>
              <h3 className="text-[19px] font-semibold tracking-[-0.02em] text-[var(--color-text-primary)]">
                {card.title}
              </h3>
              <p className="mt-1.5 text-[14px] leading-[1.55] text-[var(--color-text-secondary)]">
                {card.body}
              </p>
            </div>
            <div className={cn("mt-auto", card.key === "tables" && "flex flex-1")}>
              <Visual k={card.key} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
