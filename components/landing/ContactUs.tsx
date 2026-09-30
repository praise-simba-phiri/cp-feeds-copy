"use client";

import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contactInfo } from "@/lib/constants";
import { openContactModal } from "./ContactModal";

export function ContactUs() {
  return (
    <section
      id="contact"
      aria-label="Contact us"
      className="relative overflow-hidden bg-[var(--indigo-ink)] text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 h-[140%] w-[420px] -translate-y-1/2 rounded-[50%] bg-[var(--indigo)] opacity-45"
        style={{ right: "-240px" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 h-[140%] w-[420px] -translate-y-1/2 rounded-[50%] bg-[var(--red)] opacity-20"
        style={{ left: "-260px" }}
      />

      <div className="relative grid gap-12 px-5 py-[88px] sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-[110px]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--red-soft)]">
            Contact Us
          </span>
          <h3 className="m-0 mb-4 mt-5 font-display text-[clamp(2.4rem,4.4vw,3.8rem)] font-black leading-[1.02] tracking-[-0.05em]">
            Let&rsquo;s grow your farm together.
          </h3>
          <p className="m-0 max-w-[520px] text-[15px] leading-[1.85] text-white/80">
            Place an order, request a feed program for your operation, or talk
            to our sales team about partnership. We&rsquo;ll get back to you
            within one working day.
          </p>

          <button
            type="button"
            onClick={openContactModal}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--red)] px-7 py-4 text-[13px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_18px_38px_-12px_rgba(220,27,34,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[var(--red-dark)]"
          >
            <Send className="h-4 w-4" />
            Send a request
          </button>
        </div>

        <div className="grid gap-3">
          <button
            type="button"
            onClick={openContactModal}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 text-left transition-all hover:border-white/40 hover:bg-white/10"
          >
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-[var(--red)] text-white">
              <Phone className="h-4 w-4" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                Call us
              </span>
              <span className="text-[15px] font-bold text-white">
                {contactInfo.phone}
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={openContactModal}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 text-left transition-all hover:border-white/40 hover:bg-white/10"
          >
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-[var(--red)] text-white">
              <Mail className="h-4 w-4" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                Email sales
              </span>
              <span className="break-all text-[15px] font-bold text-white">
                {contactInfo.email}
              </span>
            </span>
          </button>
          <button
            type="button"
            onClick={openContactModal}
            className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-4 text-left transition-all hover:border-white/40 hover:bg-white/10"
          >
            <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-[var(--red)] text-white">
              <MapPin className="h-4 w-4" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/60">
                Visit
              </span>
              <span className="text-[15px] font-bold text-white">
                {contactInfo.address}
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
