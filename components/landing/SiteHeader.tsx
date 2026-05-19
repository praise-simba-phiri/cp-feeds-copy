"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brandName, contactInfo, navigationLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isContactOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsContactOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isContactOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        isScrolled ? "pt-2" : "pt-4 sm:pt-5",
      )}
    >
      <div className="page-shell">
        <nav
          className={cn(
            "flex h-[84px] items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-6",
            isScrolled
              ? "border-[var(--line)] bg-[var(--paper)] shadow-[0_14px_30px_-14px_rgba(35,31,32,0.22)]"
              : "border-[var(--line)] bg-[var(--paper)] shadow-[0_6px_22px_-12px_rgba(35,31,32,0.14)]",
          )}
        >
          <Link href="#home" className="inline-flex items-center gap-2.5">
            <span
              className="grid h-10 w-10 place-items-center overflow-hidden rounded-full border-2 border-[var(--green-dark)] shadow-[inset_0_0_0_4px_rgba(255,255,255,0.55)]"
              style={{ background: "linear-gradient(145deg, #fff7df, #f1d18b)" }}
            >
              <span className="relative inline-flex h-7 w-7 items-center justify-center overflow-hidden rounded-full">
                <Image
                  src="/cp-feed-logo.webp"
                  alt={`${brandName} logo`}
                  fill
                  sizes="28px"
                  className="object-contain"
                />
              </span>
            </span>
            <span className="text-[1rem] font-black tracking-[-0.04em] text-[var(--ink)]">
              {brandName}
            </span>
          </Link>

          <div className="hidden items-center gap-[22px] text-[12px] font-extrabold uppercase tracking-[0.08em] lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--ink)]/74 transition-colors duration-200 hover:text-[var(--gold-dark)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsContactOpen((s) => !s)}
              className="inline-flex h-11 items-center gap-2.5 rounded-full bg-[var(--ink)] px-4 text-[12px] font-extrabold text-white sm:px-5"
              aria-expanded={isContactOpen}
              aria-controls="contact-panel"
            >
              <span>Contacts</span>
              <span className="grid w-[18px] gap-[4px]" aria-hidden>
                <span
                  className={cn(
                    "block h-[2px] rounded-[2px] bg-current transition-transform",
                    isContactOpen && "translate-y-[6px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] rounded-[2px] bg-current transition-opacity",
                    isContactOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] rounded-[2px] bg-current transition-transform",
                    isContactOpen && "-translate-y-[6px] -rotate-45",
                  )}
                />
              </span>
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen((s) => !s)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {isContactOpen ? (
            <motion.aside
              id="contact-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto mt-3 w-[280px] rounded-3xl bg-[rgba(35,31,32,0.95)] p-5 text-white shadow-[0_22px_60px_rgba(0,0,0,0.28)]"
            >
              <div className="flex items-center justify-between">
                <h4 className="m-0 text-base font-bold">Contact Us</h4>
                <button
                  type="button"
                  onClick={() => setIsContactOpen(false)}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Close contacts"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-white/78">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold)] text-[#261c07]">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <strong className="block text-white">Phone</strong>
                    {contactInfo.phone}
                  </span>
                </a>
                <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold)] text-[#261c07]">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <strong className="block text-white">Email</strong>
                    {contactInfo.email}
                  </span>
                </a>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--gold)] text-[#261c07]">
                    <MapPin className="h-3.5 w-3.5" />
                  </span>
                  <span>
                    <strong className="block text-white">Location</strong>
                    {contactInfo.address}
                  </span>
                </div>
              </div>
            </motion.aside>
          ) : null}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-[var(--ink)]/40 backdrop-blur-[2px] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: 32, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 32, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-[88vw] max-w-[360px] flex-col gap-6 bg-[var(--paper)] p-6 shadow-[0_32px_80px_rgba(35,31,32,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Link
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <span
                    className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border-2 border-[var(--green-dark)]"
                    style={{ background: "linear-gradient(145deg, #fff7df, #f1d18b)" }}
                  >
                    <span className="relative inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full">
                      <Image
                        src="/cp-feed-logo.webp"
                        alt={`${brandName} logo`}
                        fill
                        sizes="32px"
                        className="object-contain"
                      />
                    </span>
                  </span>
                  <span className="text-base font-black tracking-[-0.04em] text-[var(--ink)]">
                    {brandName}
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)]"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="grid gap-2">
                {navigationLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white/70 px-4 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.12em] text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <a
                href={`mailto:${contactInfo.email}`}
                onClick={() => setIsMenuOpen(false)}
                className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--gold)] text-sm font-extrabold uppercase tracking-[0.14em] text-[#261c07] shadow-[0_14px_34px_rgba(217,164,65,0.28)]"
              >
                <Mail className="h-4 w-4" /> Contact sales
              </a>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
