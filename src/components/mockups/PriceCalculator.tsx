"use client";

import { useState } from "react";
import { pricing } from "@/lib/data/content";
import { ArrowRight, Check } from "lucide-react";

const fmt = (n: number) => n.toLocaleString("tr-TR");

export function PriceCalculator() {
  const { min, max, monthsEarly, monthsLate } = pricing;
  const [months, setMonths] = useState(6);

  // earlier reservation → lower price (linear, rounded to 10 ₺)
  const t = (months - monthsLate) / (monthsEarly - monthsLate); // 0 at latest, 1 at earliest
  const clamped = Math.max(0, Math.min(1, t));
  const price = Math.round((max - clamped * (max - min)) / 10) * 10;
  const savings = max - price;
  const fillPct = ((months - monthsLate) / (monthsEarly - monthsLate)) * 100;

  return (
    <div className="card-soft bg-[var(--color-surface)] p-6 sm:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        {/* live price */}
        <div className="lg:w-[42%]">
          <div className="flex items-end gap-2">
            <span className="text-hero text-[52px] leading-none text-[var(--color-text-primary)] sm:text-[60px]">
              {fmt(price)}
            </span>
            <span className="mb-1.5 text-[22px] font-medium text-[var(--color-text-secondary)]">
              ₺
            </span>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="text-[13.5px] text-[var(--color-text-secondary)]">
              tek seferlik · düğününüze özel
            </span>
            {savings > 0 && (
              <span className="rounded-full bg-[color-mix(in_srgb,var(--color-ui-success)_15%,white)] px-2.5 py-0.5 text-[12px] font-semibold text-[var(--color-ui-success)]">
                {fmt(savings)} ₺ tasarruf
              </span>
            )}
          </div>
        </div>

        {/* slider */}
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <label
              htmlFor="months"
              className="text-[13.5px] font-medium text-[var(--color-text-primary)]"
            >
              {pricing.sliderLabel}
            </label>
            <span className="rounded-full bg-[var(--color-background-soft)] px-2.5 py-1 text-[12.5px] font-semibold text-[var(--color-primary)]">
              {months >= monthsEarly ? `${monthsEarly}+ ay` : `${months} ay`}
            </span>
          </div>

          <input
            id="months"
            type="range"
            min={monthsLate}
            max={monthsEarly}
            step={1}
            value={months}
            onChange={(e) => setMonths(Number(e.target.value))}
            className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-full accent-[var(--color-primary)]"
            style={{
              background: `linear-gradient(90deg, var(--color-primary) ${fillPct}%, var(--color-border) ${fillPct}%)`,
            }}
          />

          <div className="mt-2 flex justify-between text-[11.5px] text-[var(--color-text-muted)]">
            <span>
              {pricing.rangeEarlyLabel} · {fmt(min)} ₺
            </span>
            <span>
              {pricing.rangeLateLabel} · {fmt(max)} ₺
            </span>
          </div>
        </div>
      </div>

      {/* includes + cta */}
      <div className="mt-7 flex flex-col gap-6 border-t border-[var(--color-border)] pt-6 lg:flex-row lg:items-center lg:justify-between">
        <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
          {pricing.includes.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-[13.5px] text-[var(--color-text-primary)]"
            >
              <Check className="h-4 w-4 text-[var(--color-primary)]" strokeWidth={2.4} />
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#basla"
          className="inline-flex h-[52px] shrink-0 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-[var(--color-primary)] px-7 text-[15px] font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]"
        >
          {pricing.cta}
          <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
        </a>
      </div>

      <p className="mt-4 text-[12.5px] leading-[1.5] text-[var(--color-text-muted)]">
        {pricing.reserveNote}
      </p>
    </div>
  );
}
