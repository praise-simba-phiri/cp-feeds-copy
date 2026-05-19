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
      className="relative overflow-hidden border-b border-[var(--line)] bg-[var(--paper)]"
    >
      <div className="relative">
        <div className="relative grid items-stretch lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[360px] lg:min-h-[470px]">
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
              className="absolute inset-0 bg-[linear-gradient(0deg,rgba(36,57,29,0.25),rgba(36,57,29,0.25))]"
            />
          </div>

          <div
            aria-hidden
            className="absolute top-[-12%] hidden h-[125%] w-[280px] rounded-[50%] bg-[var(--paper)] shadow-[-22px_0_0_rgba(217,164,65,0.18)] lg:block"
            style={{ left: "36%" }}
          />

          <div className="relative z-[3] flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-[70px] lg:py-[74px] lg:pl-[115px]">
            <p
              data-about-anim
              className="m-0 mb-3.5 text-[12px] font-black uppercase tracking-[0.14em] text-[var(--gold-dark)]"
            >
              About Us
            </p>
            <h2
              data-about-anim
              className="m-0 mb-[18px] text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.06em] text-[var(--ink)]"
              style={{ wordSpacing: "0.04em" }}
            >
              Reliable feed for stronger farms.
            </h2>
            <p
              data-about-anim
              className="m-0 max-w-[600px] text-[16px] leading-[1.9] text-[#5d564d]"
            >
              CP Feeds manufactures dependable poultry and cattle feed designed to
              support farmers, households, and businesses across Malawi. Our focus is
              on consistent nutrition, accessible supply, and dependable service
              through our product range and depot network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
