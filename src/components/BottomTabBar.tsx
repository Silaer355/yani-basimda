import { Home, LayoutGrid, Users, Tag, ArrowUpRight } from "lucide-react";

const items = [
  { label: "Ana Sayfa", href: "#top", icon: Home },
  { label: "Özellikler", href: "#ozellikler", icon: LayoutGrid },
  { label: "Deneyim", href: "#misafir-deneyimi", icon: Users },
  { label: "Fiyat", href: "#fiyat", icon: Tag },
];

/**
 * App-style floating bottom navigation — echoes Wedibox's persistent tab bar.
 * Frosted pill, centered, with an emphasized primary action on the right.
 */
export function BottomTabBar() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-white/85 p-1.5 shadow-[0_16px_50px_rgba(45,33,28,0.14)] backdrop-blur-md">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <a
              key={it.href}
              href={it.href}
              className="flex flex-col items-center gap-0.5 rounded-[var(--radius-pill)] px-3.5 py-2 text-[var(--color-text-secondary)] transition-colors hover:bg-[var(--color-background-soft)] hover:text-[var(--color-primary)] sm:flex-row sm:gap-1.5"
            >
              <Icon className="h-4 w-4" strokeWidth={1.9} />
              <span className="text-[10.5px] font-medium sm:text-[13px]">{it.label}</span>
            </a>
          );
        })}
        <a
          href="#basla"
          className="ml-0.5 flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-4 py-2.5 text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          <span className="text-[10.5px] font-semibold sm:text-[13px]">Başla</span>
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
        </a>
      </nav>
    </div>
  );
}
