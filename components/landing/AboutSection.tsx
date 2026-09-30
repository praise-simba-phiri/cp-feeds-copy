"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { aboutImage } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-about-anim]", {
        y: 28,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
        },
      });
      gsap.to("[data-about-image]", {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: ref },
  );

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-white"
    >
      <div className="grid items-stretch gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-12 lg:py-[96px]">
        <div className="relative min-h-[360px] overflow-hidden rounded-[28px] lg:min-h-[480px]">
          <Image
            data-about-image
            src={aboutImage}
            alt="CP Feeds farm operations"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,10,43,0.15),rgba(42,27,140,0.45))]"
          />
          <span className="absolute bottom-5 left-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--indigo)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--red)]" />
            Made in Malawi
          </span>
        </div>

        <div className="relative z-[3] flex flex-col justify-center">
          <p
            data-about-anim
            className="m-0 mb-3.5 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--red)]/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--red)]"
          >
            About Us
          </p>
          <h2
            data-about-anim
            className="m-0 mb-[18px] font-display text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[0.96] tracking-[-0.05em] text-[var(--indigo-ink)]"
          >
            Reliable feed for stronger farms.
          </h2>
          <p
            data-about-anim
            className="m-0 max-w-[560px] text-[16px] leading-[1.85] text-[var(--muted-strong)]"
          >
            CP Feeds manufactures dependable poultry and cattle feed designed to
            support farmers, households, and businesses across Malawi. Our focus
            is on consistent nutrition, accessible supply, and dependable
            service through our product range and depot network.
          </p>

          <div data-about-anim className="mt-8 grid max-w-[560px] gap-3 sm:grid-cols-2">
            {[
              { k: "Stage-matched", v: "Programs by life-cycle" },
              { k: "Direct support", v: "Sales team on the ground" },
              { k: "National reach", v: "Depots in all 3 regions" },
              { k: "Trusted formula", v: "Built for Malawian farms" },
            ].map((f) => (
              <div
                key={f.k}
                className="rounded-2xl border border-[var(--line)] bg-white p-4"
              >
                <p className="m-0 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--indigo)]">
                  {f.k}
                </p>
                <p className="m-0 mt-1 text-[14px] font-bold text-[var(--ink)]">
                  {f.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
