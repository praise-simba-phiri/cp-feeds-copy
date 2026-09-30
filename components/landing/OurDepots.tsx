"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { MapPin } from "lucide-react";
import { depots, type Depot } from "@/lib/data";
import { cn } from "@/lib/utils";

const MalawiMap = dynamic(() => import("./MalawiMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center bg-[var(--paper-warm)] text-[var(--muted)]">
      Loading map…
    </div>
  ),
});

export function OurDepots() {
  const [selected, setSelected] = useState<Depot | null>(null);

  return (
    <section
      id="depots"
      aria-label="Our depots"
      className="relative bg-white px-5 py-[88px] sm:px-8 lg:px-12"
    >
      <div className="mx-auto mb-10 flex w-fit flex-col items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--red)]/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--red)]">
          Our Depots
        </span>
        <h3 className="m-0 max-w-[720px] text-center font-display text-[clamp(2rem,3.6vw,3rem)] font-black leading-[1.05] tracking-[-0.05em] text-[var(--indigo-ink)]">
          Three depots, one nation served.
        </h3>
        <p className="m-0 max-w-[620px] text-center text-[15px] leading-[1.7] text-[var(--muted-strong)]">
          We deliver dependable feed across Malawi from our regional depots —
          tap a city to focus the map.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.25fr_0.95fr]">
        <div className="relative h-[420px] overflow-hidden rounded-[24px] border border-[var(--line)] bg-[var(--paper-warm)] shadow-[0_24px_60px_-30px_rgba(15,10,43,0.4)] lg:h-[520px]">
          <MalawiMap selected={selected} />
          {selected ? (
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute bottom-3 left-3 z-[400] inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--indigo)] shadow-[0_10px_24px_-12px_rgba(15,10,43,0.45)]"
            >
              ← View all depots
            </button>
          ) : null}
        </div>

        <ul className="m-0 grid list-none gap-3 p-0">
          {depots.map((d) => {
            const isActive = selected?.name === d.name;
            return (
              <li key={d.name}>
                <button
                  type="button"
                  onClick={() => setSelected(isActive ? null : d)}
                  className={cn(
                    "group flex w-full items-start gap-4 rounded-[20px] border px-5 py-4 text-left transition-all duration-300",
                    isActive
                      ? "border-transparent bg-[var(--indigo)] text-white shadow-[0_20px_40px_-18px_rgba(42,27,140,0.55)]"
                      : "border-[var(--line)] bg-white hover:border-[var(--indigo)] hover:shadow-[0_16px_30px_-20px_rgba(15,10,43,0.3)]",
                  )}
                >
                  <span
                    className={cn(
                      "mt-1 grid h-10 w-10 flex-shrink-0 place-items-center rounded-full transition-colors",
                      isActive
                        ? "bg-[var(--red)] text-white"
                        : "bg-[var(--indigo)]/10 text-[var(--indigo)] group-hover:bg-[var(--red)] group-hover:text-white",
                    )}
                  >
                    <MapPin className="h-4 w-4" />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span
                      className={cn(
                        "text-[11px] font-extrabold uppercase tracking-[0.16em]",
                        isActive ? "text-[var(--red-soft)]" : "text-[var(--red)]",
                      )}
                    >
                      {d.region}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 font-display text-[20px] font-black tracking-[-0.02em]",
                        isActive ? "text-white" : "text-[var(--indigo-ink)]",
                      )}
                    >
                      {d.name}
                    </span>
                    <span
                      className={cn(
                        "mt-1 text-[13px] leading-[1.55]",
                        isActive ? "text-white/85" : "text-[var(--muted-strong)]",
                      )}
                    >
                      {d.detail}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
