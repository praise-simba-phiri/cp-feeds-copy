"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brandName, navigationLinks } from "@/lib/constants";
import { openContactModal } from "./ContactModal";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleContactsClick = () => {
    setIsMenuOpen(false);
    openContactModal();
  };

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="flex h-[88px] items-center justify-between gap-6 px-5 sm:px-8 lg:h-[104px] lg:px-12">
        <Link
          href="#home"
          className="inline-flex items-center gap-3"
          aria-label={`${brandName} home`}
        >
          <span className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-full bg-white shadow-[0_8px_24px_-10px_rgba(15,10,43,0.45)] lg:h-[72px] lg:w-[72px]">
            <Image
              src="/cp-feed-logo.webp"
              alt={`${brandName} logo`}
              fill
              sizes="72px"
              className="object-contain p-1"
              priority
            />
          </span>
        </Link>

        <nav
          className="hidden items-center gap-9 text-[14px] font-extrabold tracking-[-0.01em] lg:flex"
          aria-label="Primary"
        >
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative inline-flex items-center text-[var(--ink)] transition-colors duration-200 hover:text-[var(--red)] after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--red)] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

          <button
            type="button"
            onClick={handleContactsClick}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--red)] px-5 py-2.5 text-[12px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_12px_28px_-12px_rgba(220,27,34,0.55)] transition-transform hover:-translate-y-0.5 hover:bg-[var(--red-dark)]"
          >
            <Send className="h-3.5 w-3.5" />
            Contacts
          </button>
        </nav>

        <button
          type="button"
          onClick={() => setIsMenuOpen((s) => !s)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--ink)] shadow-[0_6px_18px_-10px_rgba(15,10,43,0.35)] transition-colors lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 bg-[var(--indigo-ink)]/60 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.aside
              initial={{ x: 32, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 32, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-[88vw] max-w-[360px] flex-col gap-6 bg-white p-6 shadow-[0_32px_80px_rgba(15,10,43,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Link
                  href="#home"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <span className="relative grid h-12 w-12 place-items-center overflow-hidden rounded-full bg-white shadow-[0_8px_20px_-10px_rgba(15,10,43,0.4)]">
                    <Image
                      src="/cp-feed-logo.webp"
                      alt={`${brandName} logo`}
                      fill
                      sizes="48px"
                      className="object-contain p-1"
                    />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-base font-black tracking-[-0.04em] text-[var(--indigo-ink)]">
                      {brandName}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--red)]">
                      Quality Feeds
                    </span>
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
                    className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5 text-[13px] font-extrabold uppercase tracking-[0.12em] text-[var(--ink)]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <button
                type="button"
                onClick={handleContactsClick}
                className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[var(--red)] text-sm font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_14px_34px_rgba(220,27,34,0.32)]"
              >
                <Send className="h-4 w-4" /> Contacts
              </button>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
