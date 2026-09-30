"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { coreValues } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ValuesGrid() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-value]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 78%",
        },
      });
    },
    { scope: ref },
  );

  return (
    <section
      id="values"
      ref={ref}
      className="relative bg-white px-5 py-[88px] sm:px-8 lg:px-12"
    >
      <div className="mx-auto mb-12 flex w-fit flex-col items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--red)]/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--red)]">
          Our Values
        </span>
        <h3 className="m-0 font-display text-[clamp(2rem,3.6vw,3rem)] font-black leading-[1] tracking-[-0.05em] text-[var(--indigo-ink)]">
          What we stand for.
        </h3>
      </div>

      <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
        {coreValues.map((value) => (
          <article
            key={value.title}
            data-value
            className="group relative rounded-[22px] border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--indigo)] hover:shadow-[0_24px_48px_-20px_rgba(42,27,140,0.35)]"
          >
            <span className="absolute -top-5 left-6 grid h-12 w-12 place-items-center rounded-full bg-[var(--indigo)] font-black text-[18px] text-white shadow-[0_10px_24px_-10px_rgba(42,27,140,0.55)] transition-colors group-hover:bg-[var(--red)]">
              {parseInt(value.number, 10)}
            </span>
            <h4 className="m-0 mb-2 mt-6 font-display text-[22px] font-black tracking-[-0.03em] text-[var(--indigo-ink)]">
              {value.title}
            </h4>
            <p className="m-0 text-[14px] leading-[1.7] text-[var(--muted-strong)]">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
