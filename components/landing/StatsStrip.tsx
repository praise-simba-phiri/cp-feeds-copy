"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Package, Star, Truck, Users } from "lucide-react";
import { impactStats, type Stat } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconMap: Record<Stat["icon"], typeof Users> = {
  users: Users,
  star: Star,
  package: Package,
  truck: Truck,
};

export function StatsStrip() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from("[data-stat]", {
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
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
      aria-label="CP Feeds impact"
      className="border-y border-[var(--line)] bg-[var(--paper-warm)]"
    >
      <div className="grid grid-cols-2 md:grid-cols-4">
        {impactStats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={stat.label}
              data-stat
              className={`flex min-h-[108px] items-center justify-center gap-4 px-4 py-6 ${i < impactStats.length - 1 ? "md:border-r md:border-[var(--line)]" : ""} ${i < 2 ? "border-b border-[var(--line)] md:border-b-0" : ""}`}
            >
              <span className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[var(--green-dark)] text-white">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <div>
                <strong className="block text-[28px] font-black leading-none tracking-[-0.05em] text-[var(--ink)]">
                  {stat.value}
                </strong>
                <span className="text-[13px] font-bold text-[var(--muted)]">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
