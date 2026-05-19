"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { productSlides } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(1);
  const active = productSlides[activeIndex];

  const orbOverlay = (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(135deg, rgba(73,107,53,0.9), rgba(36,57,29,0.96))",
        mixBlendMode: "multiply",
      }}
    />
  );

  return (
    <section
      id="home"
      className="relative min-h-[560px] overflow-hidden border-b border-[var(--line)] bg-[var(--paper)] pt-[100px] lg:h-[calc(100svh-108px)] lg:min-h-[620px] lg:pt-0"
    >
      {/* Desktop orb — pushed down on big screens so the bottom clips on a wider part of the
          ellipse (much flatter), top stays slightly bled so the navbar visually covers a small
          curved arc. Glass card sits on top of the orb. */}
      <div
        aria-hidden
        className="absolute z-0 hidden overflow-hidden lg:block"
        style={{
          left: "-17%",
          top: "-10%",
          width: "64%",
          height: "140%",
          borderRadius: "50%",
          boxShadow: "inset -18px 0 0 rgba(255,250,240,0.9)",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={active.image}
              alt={active.alt}
              fill
              sizes="60vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>
        {orbOverlay}
      </div>

      {/* Mobile orb — unchanged */}
      <div
        aria-hidden
        className="absolute z-0 overflow-hidden lg:hidden"
        style={{
          left: "-10%",
          top: "0",
          width: "120%",
          height: "44%",
          borderRadius: "0 0 50% 50%",
        }}
      >
        <Image
          src={active.image}
          alt=""
          fill
          sizes="120vw"
          className="object-cover"
          priority
        />
        {orbOverlay}
      </div>

      <div className="relative z-10 grid h-full lg:grid-cols-[1.05fr_0.95fr] lg:pt-[110px]">
        {/* Hero left — slide card pushed to bottom, just above stat strip */}
        <div className="flex min-h-[450px] items-center px-6 pt-10 text-white sm:px-8 lg:min-h-0 lg:items-end lg:px-12 lg:pb-[44px] lg:pt-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-[380px] rounded-[30px] border border-white/[0.22] bg-white/[0.12] p-7"
              style={{ backdropFilter: "blur(14px)" }}
            >
              <p className="m-0 mb-3 text-[12px] font-black uppercase tracking-[0.15em] text-[var(--gold)]">
                {active.eyebrow}
              </p>
              <h1
                className="m-0 text-[clamp(36px,5vw,64px)] font-black leading-[0.92] tracking-[-0.05em]"
                style={{ wordSpacing: "0.02em" }}
              >
                {active.title}
              </h1>
              <p className="mt-4 mb-5 text-[14px] leading-[1.6] text-white/[0.85]">
                {active.description}
              </p>
              <button
                type="button"
                className="inline-flex items-center gap-[10px] rounded-full border-0 bg-[var(--gold)] px-5 py-3 text-[13px] font-black text-[#261c07] shadow-[0_14px_34px_rgba(217,164,65,0.28)] transition-transform hover:-translate-y-0.5"
              >
                Order Now <span aria-hidden>→</span>
              </button>
              <div className="mt-5 flex items-center gap-[9px]">
                {productSlides.map((slide, i) => (
                  <button
                    key={slide.slug}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Show ${slide.title}`}
                    className={cn(
                      "h-[10px] rounded-full transition-all",
                      i === activeIndex
                        ? "w-[30px] bg-[var(--gold)]"
                        : "w-[10px] bg-white/45 hover:bg-white/70",
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Hero right — Products pill, Our Range, tagline, range list */}
        <div
          id="products"
          className="flex flex-col justify-center gap-3 px-6 py-10 sm:px-8 lg:gap-4 lg:px-12 lg:py-[44px] lg:pl-[80px]"
        >
          <span className="inline-flex w-fit items-center self-start rounded-full bg-[rgba(217,164,65,0.2)] px-3 py-2 text-[12px] font-black uppercase tracking-[0.12em] text-[var(--gold-dark)]">
            Products
          </span>
          <h2
            className="m-0 text-[clamp(40px,5.2vw,70px)] font-black leading-[0.95] tracking-[-0.05em] text-[var(--ink)]"
            style={{ wordSpacing: "0.04em" }}
          >
            Our Range
          </h2>
          <p className="m-0 max-w-[380px] text-[19px] font-extrabold text-[var(--green)]">
            Feed that grows the nation.
          </p>
          <div className="mt-1 grid max-w-[380px] gap-2.5">
            {productSlides.map((slide, i) => {
              const selected = i === activeIndex;
              return (
                <button
                  key={slide.slug}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "group flex cursor-pointer items-center justify-between rounded-[20px] border px-5 py-[12px] text-left text-[19px] font-black tracking-[-0.03em] outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]",
                    selected
                      ? "scale-[1] border-transparent bg-[var(--ink)] text-white shadow-[0_18px_40px_rgba(35,31,32,0.2)]"
                      : "scale-[0.98] border-[var(--line-strong)] bg-white/70 text-[var(--ink)] opacity-80 hover:scale-100 hover:border-[var(--gold)] hover:bg-[var(--paper-warm)] hover:opacity-100",
                  )}
                >
                  <span>{slide.eyebrow}</span>
                  <span
                    aria-hidden
                    className={cn(
                      "inline-flex h-7 w-7 items-center justify-center rounded-full text-[14px] transition-colors",
                      selected
                        ? "bg-[var(--gold)] text-[#261c07]"
                        : "bg-[var(--ink)]/8 text-[var(--ink)] group-hover:bg-[var(--gold)] group-hover:text-[#261c07]",
                    )}
                  >
                    →
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
