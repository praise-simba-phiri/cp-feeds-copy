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
      className="relative bg-[var(--indigo)] text-white"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/15" aria-hidden />
      <div className="grid grid-cols-2 md:grid-cols-4">
        {impactStats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={stat.label}
              data-stat
              className={`flex min-h-[120px] items-center justify-center gap-4 px-4 py-6 ${
                i < impactStats.length - 1
                  ? "md:border-r md:border-white/15"
                  : ""
              } ${i < 2 ? "border-b border-white/15 md:border-b-0" : ""}`}
            >
              <span className="grid h-[46px] w-[46px] place-items-center rounded-full bg-[var(--red)] text-white shadow-[0_10px_20px_-10px_rgba(220,27,34,0.65)]">
                <Icon className="h-[18px] w-[18px]" />
              </span>
              <div>
                <strong className="block text-[30px] font-black leading-none tracking-[-0.05em]">
                  {stat.value}
                </strong>
                <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-white/75">
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
