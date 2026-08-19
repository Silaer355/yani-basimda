import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { footer } from "@/lib/data/content";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background-soft)]">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-[300px]">
            <Logo />
            <p className="mt-4 text-[14px] leading-[1.6] text-[var(--color-text-secondary)]">
              {footer.blurb}
            </p>
            <div className="mt-5 flex gap-2">
              {footer.social.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="rounded-full border border-[var(--color-border-strong)] bg-white px-3 py-1 text-[12.5px] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-[13px] font-semibold tracking-[-0.01em] text-[var(--color-text-primary)]">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--color-border)] pt-6 sm:flex-row sm:items-center">
          <span className="text-[13px] text-[var(--color-text-muted)]">{footer.legal}</span>
          <span className="text-[13px] text-[var(--color-text-muted)]">
            Sevgiyle tasarlandı · Türkiye
          </span>
        </div>
      </Container>
    </footer>
  );
}
