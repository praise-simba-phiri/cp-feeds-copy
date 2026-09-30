"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { productSlides } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = productSlides[activeIndex];

  return (
    <section
      id="home"
      className="relative isolate w-full overflow-hidden bg-white"
    >
      {/* Desktop purple curve — large ellipse anchored off the left edge.
          The right side of the ellipse is the visible curve in the design. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-18%] top-[-15%] z-0 hidden h-[130%] w-[80%] rounded-[50%] bg-[var(--indigo)] lg:block"
      />

      {/* Mobile purple band — half-disc at the top */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-[-12%] top-[-8%] z-0 h-[68%] rounded-[0_0_50%_50%] bg-[var(--indigo)] lg:hidden"
      />

      <div className="relative z-10 grid min-h-[640px] grid-cols-1 gap-y-8 px-5 pb-12 pt-[120px] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-y-0 lg:px-12 lg:pb-[60px] lg:pt-[140px] lg:min-h-[calc(100svh-0px)]">
        {/* LEFT — sits over the purple curve. Product image + slide content + CTA */}
        <div className="relative flex flex-col items-start justify-center gap-6 text-white lg:gap-7">
          <div className="relative h-[260px] w-full max-w-[420px] sm:h-[320px] lg:h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.slug}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full w-full"
              >
                <Image
                  src={active.image}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full max-w-[460px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${active.slug}-meta`}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="m-0 mb-2 text-[12px] font-extrabold uppercase tracking-[0.22em] text-white/85">
                  {active.eyebrow}
                </p>
                <h3 className="m-0 text-[clamp(30px,5.4vw,40px)] font-black leading-[0.95] tracking-[-0.04em] text-white">
                  {active.title}
                </h3>
              </motion.div>
            </AnimatePresence>

            <div className="mt-6 flex items-center gap-5">
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-md bg-[var(--red)] px-7 py-4 text-[14px] font-extrabold uppercase tracking-[0.1em] text-white shadow-[0_18px_38px_-12px_rgba(220,27,34,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--red-dark)]"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-7 flex items-center gap-2.5" role="tablist" aria-label="Product slides">
              {productSlides.map((slide, i) => (
                <button
                  key={slide.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === activeIndex}
                  aria-label={`Show ${slide.title}`}
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "h-[9px] rounded-full transition-all duration-300",
                    i === activeIndex
                      ? "w-[28px] bg-white"
                      : "w-[9px] bg-white/45 hover:bg-white/70",
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — sits on white. Product range list with brand-colored accents. */}
        <div
          id="products"
          className="flex flex-col justify-center gap-4 lg:gap-5 lg:pl-[60px]"
        >
          <span className="inline-flex w-fit items-center self-start rounded-full bg-[var(--red)]/10 px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--red)]">
            Our Range
          </span>
          <h2 className="m-0 font-display text-[clamp(38px,4.8vw,64px)] font-black leading-[0.95] tracking-[-0.05em] text-[var(--indigo-ink)]">
            Feed that grows the nation.
          </h2>
          <p className="m-0 max-w-[440px] text-[15px] leading-[1.7] text-[var(--muted-strong)]">
            Stage-matched poultry and cattle programs — dependable nutrition,
            steady supply, and direct sales support across Malawi.
          </p>

          <div className="mt-3 grid max-w-[460px] gap-2.5">
            {productSlides.map((slide, i) => {
              const selected = i === activeIndex;
              return (
                <button
                  key={slide.slug}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "group flex cursor-pointer items-center justify-between rounded-2xl border px-5 py-[14px] text-left text-[15px] font-extrabold tracking-[-0.01em] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--indigo)] focus-visible:ring-offset-2",
                    selected
                      ? "border-transparent bg-[var(--indigo)] text-white shadow-[0_18px_40px_-12px_rgba(42,27,140,0.45)]"
                      : "border-[var(--line-strong)] bg-white text-[var(--ink)] hover:border-[var(--indigo)] hover:bg-[var(--paper-warm)]",
                  )}
                >
                  <span>{slide.eyebrow}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "inline-flex h-7 w-7 items-center justify-center rounded-full text-[14px] transition-colors",
                      selected
                        ? "bg-white text-[var(--indigo)]"
                        : "bg-[var(--indigo)]/10 text-[var(--indigo)] group-hover:bg-[var(--red)] group-hover:text-white",
                    )}
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
