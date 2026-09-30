"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, Compass, Target } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}



export function MissionVision() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-mv]", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      });
    },
    { scope: ref },
  );

  return (
    <section
      ref={ref}
      aria-label="Vision and mission"
      className="relative overflow-hidden bg-[var(--indigo-ink)] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 hidden h-[140%] w-[420px] -translate-y-1/2 rounded-[50%] bg-[var(--indigo)] opacity-45 md:block"
        style={{ left: "-260px" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 hidden h-[140%] w-[420px] -translate-y-1/2 rounded-[50%] bg-[var(--red)] opacity-18 md:block"
        style={{ right: "-260px" }}
      />

      <div className="relative grid gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:gap-0 md:px-12 md:py-[88px] lg:px-16">
        <div data-mv className="relative md:pr-10 lg:pr-16">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--red)] text-white shadow-[0_12px_28px_-12px_rgba(220,27,34,0.55)]">
              <Compass className="h-5 w-5" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[var(--red-soft)]">
              Where we&rsquo;re heading
            </span>
          </div>
          <h3 className="m-0 mb-4 mt-5 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-black leading-[1] tracking-[-0.04em]">
            Our Vision
          </h3>
          <p className="m-0 text-[16px] leading-[1.8] text-white/80">
            To become the most trusted animal feed partner for farmers and
            communities across the country.
          </p>
          
        </div>

        <div
          data-mv
          className="relative md:border-l md:border-white/15 md:pl-10 lg:pl-16"
        >
          <div className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--indigo)] shadow-[0_12px_28px_-12px_rgba(255,255,255,0.35)]">
              <Target className="h-5 w-5" />
            </span>
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-white/70">
              How we get there
            </span>
          </div>
          <h3 className="m-0 mb-4 mt-5 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-black leading-[1] tracking-[-0.04em]">
            Our Mission
          </h3>
          <p className="m-0 text-[16px] leading-[1.8] text-white/80">
            To produce and distribute affordable, high-quality feed that
            improves productivity and supports national food security.
          </p>
          
        </div>
      </div>
    </section>
  );
}
