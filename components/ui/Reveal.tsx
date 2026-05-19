"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  once?: boolean;
};

export function Reveal({
  children,
  as: Tag = "div",
  className,
  delay = 0,
  y = 28,
  duration = 0.9,
  stagger = 0.08,
  start = "top 85%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(ref.current.querySelectorAll("[data-reveal], [data-reveal-stagger] > *"), {
          clearProps: "all",
          opacity: 1,
          y: 0,
        });
        gsap.set(ref.current, { clearProps: "all", opacity: 1, y: 0 });
        return;
      }

      const staggerTargets = gsap.utils.toArray<HTMLElement>(
        "[data-reveal-stagger] > *",
        ref.current,
      );
      const singleTargets = gsap.utils.toArray<HTMLElement>(
        "[data-reveal]",
        ref.current,
      );

      const allTargets =
        staggerTargets.length || singleTargets.length
          ? [...staggerTargets, ...singleTargets]
          : [ref.current];

      gsap.fromTo(
        allTargets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
          },
        },
      );
    },
    { scope: ref, dependencies: [delay, y, duration, stagger, start, once] },
  );

  const TagComponent = Tag as ElementType;
  return (
    <TagComponent ref={ref} className={cn(className)}>
      {children}
    </TagComponent>
  );
}
