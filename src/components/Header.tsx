import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { nav } from "@/lib/data/content";
import { UserPlus } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/70 bg-[var(--color-background)]/80 backdrop-blur-md">
      <Container className="flex h-16 items-center gap-6">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>

        <nav className="ml-2 hidden items-center gap-7 md:flex">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <a
            href="#giris"
            className="hidden text-[14px] font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)] sm:block"
          >
            Giriş yap
          </a>
          <a
            href="#kayit"
            className="inline-flex h-10 items-center gap-1.5 rounded-[var(--radius-button)] bg-[var(--color-primary)] px-4 text-[14px] font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <UserPlus className="h-4 w-4" strokeWidth={2} />
            {nav.cta}
          </a>
        </div>
      </Container>
    </header>
  );
}
