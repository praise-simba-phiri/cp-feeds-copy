"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
      className="relative min-h-[285px] overflow-hidden border-b border-[var(--line)] bg-[var(--paper-strong)]"
    >
      {/* Cream cutout circles — pushed further off so they don't overlap headings */}
      <div
        aria-hidden
        className="absolute top-1/2 hidden h-[200px] w-[200px] -translate-y-1/2 rounded-full border border-[var(--line)] bg-[var(--paper)] md:block"
        style={{ left: "-170px" }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 hidden h-[200px] w-[200px] -translate-y-1/2 rounded-full border border-[var(--line)] bg-[var(--paper)] md:block"
        style={{ right: "-170px" }}
      />

      <div className="relative grid md:grid-cols-2">
        <div
          data-mv
          className="relative z-10 border-b border-[var(--line)] px-5 py-12 sm:px-8 md:border-b-0 md:border-r md:border-[var(--line)] md:py-16 md:pl-[80px] md:pr-[60px] lg:pl-[100px]"
        >
          <h3 className="m-0 mb-3.5 text-[32px] font-black leading-tight tracking-[-0.05em] text-[var(--ink)]">
            Our Vision
          </h3>
          <p className="m-0 max-w-md leading-[1.75] text-[#645c52]">
            To become the most trusted animal feed partner for farmers and
            communities across the country.
          </p>
        </div>

        <div
          data-mv
          className="relative z-10 px-5 py-12 sm:px-8 md:py-16 md:pl-[60px] md:pr-[80px] lg:pr-[100px]"
        >
          <h3 className="m-0 mb-3.5 text-[32px] font-black leading-tight tracking-[-0.05em] text-[var(--ink)]">
            Our Mission
          </h3>
          <p className="m-0 max-w-md leading-[1.75] text-[#645c52]">
            To produce and distribute affordable, high-quality feed that improves
            productivity and supports national food security.
          </p>
        </div>
      </div>
    </section>
  );
}
