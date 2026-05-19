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
      className="relative border-b border-[var(--line)] bg-[var(--paper)] px-5 pb-[84px] pt-[72px] sm:px-8 lg:px-[70px]"
    >
      <h3 className="mx-auto mb-12 table rounded-full border border-[var(--line)] bg-white px-[22px] py-2.5 text-center font-black uppercase tracking-[0.12em] text-[var(--green-dark)]">
        Our Values
      </h3>

      <div className="grid gap-x-[66px] gap-y-[34px] md:grid-cols-2">
        {coreValues.map((value) => (
          <article
            key={value.title}
            data-value
            className="grid grid-cols-[58px_1fr] items-start gap-[18px]"
          >
            <span className="grid h-[52px] w-[52px] place-items-center rounded-full border-2 border-[var(--green-dark)] bg-[var(--paper-warm)] font-black text-[22px] text-[var(--ink)]">
              {parseInt(value.number, 10)}
            </span>
            <div>
              <h4 className="m-0 mb-2 text-[20px] font-black tracking-[-0.04em] text-[var(--ink)]">
                {value.title}
              </h4>
              <p className="m-0 leading-[1.65] text-[var(--muted)]">
                {value.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
