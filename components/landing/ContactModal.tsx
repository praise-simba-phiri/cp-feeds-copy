"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, Send, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brandName, contactInfo } from "@/lib/constants";
import { productSlides } from "@/lib/data";

const CONTACT_EVENT = "cp:open-contact";
const GENERAL_INQUIRY = "General Inquiry";

export function openContactModal() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CONTACT_EVENT));
}

type SubmitState = "idle" | "sending" | "sent" | "error";

export function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [productKey, setProductKey] = useState(GENERAL_INQUIRY);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");

  useEffect(() => {
    const onOpen = () => setIsOpen(true);
    window.addEventListener(CONTACT_EVENT, onOpen);
    return () => window.removeEventListener(CONTACT_EVENT, onOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const subject = encodeURIComponent(
        `Request from ${name || "site visitor"} — ${productKey}`,
      );
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInterest: ${productKey}\n\nMessage:\n${message}`,
      );
      window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[var(--indigo-ink)]/55 px-4 py-8"
          style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Contact ${brandName}`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[720px] overflow-hidden rounded-[24px] bg-white shadow-[0_40px_80px_-20px_rgba(15,10,43,0.55)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--paper-warm)] text-[var(--ink)] transition-colors hover:bg-[var(--paper-strong)]"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="px-8 pb-8 pt-10 sm:px-12 sm:pt-12 sm:pb-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--red)]/10 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[var(--red)]">
                Contact {brandName}
              </span>
              <h2 className="m-0 mb-2 mt-4 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-black leading-[1.05] tracking-[-0.04em] text-[var(--indigo-ink)]">
                Send us a request.
              </h2>
              <p className="m-0 text-[14px] leading-[1.7] text-[var(--muted-strong)]">
                We&rsquo;ll get back to you within one working day.
              </p>

              <form onSubmit={onSubmit} className="mt-7 grid gap-3.5">
                <label className="grid gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Your name
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Banda"
                    className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-4 text-[14px] font-bold text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--indigo)] focus:ring-2 focus:ring-[var(--ring)]"
                  />
                </label>

                <div className="grid gap-3.5 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Email
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-4 text-[14px] font-bold text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--indigo)] focus:ring-2 focus:ring-[var(--ring)]"
                    />
                  </label>
                  <label className="grid gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
                    Phone
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+265 …"
                      className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-4 text-[14px] font-bold text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--indigo)] focus:ring-2 focus:ring-[var(--ring)]"
                    />
                  </label>
                </div>

                <label className="grid gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Interest
                  <select
                    value={productKey}
                    onChange={(e) => setProductKey(e.target.value)}
                    className="h-11 w-full rounded-xl border border-[var(--line)] bg-white px-3 text-[14px] font-bold text-[var(--ink)] outline-none transition-colors focus:border-[var(--indigo)] focus:ring-2 focus:ring-[var(--ring)]"
                  >
                    <option value={GENERAL_INQUIRY}>{GENERAL_INQUIRY}</option>
                    {productSlides.map((p) => (
                      <option key={p.slug} value={p.eyebrow}>
                        {p.eyebrow} — {p.title}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-1.5 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[var(--muted)]">
                  Message
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help?"
                    className="w-full resize-none rounded-xl border border-[var(--line)] bg-white px-4 py-3 text-[14px] font-bold text-[var(--ink)] outline-none transition-colors placeholder:text-[var(--muted)] focus:border-[var(--indigo)] focus:ring-2 focus:ring-[var(--ring)]"
                  />
                </label>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[var(--red)] text-[13px] font-extrabold uppercase tracking-[0.14em] text-white shadow-[0_16px_36px_-14px_rgba(220,27,34,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[var(--red-dark)] disabled:opacity-70"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending…" : "Send request"}
                </button>

                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[var(--line)] pt-4 text-[12px] text-[var(--muted-strong)]">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
                    className="inline-flex items-center gap-2 font-bold hover:text-[var(--indigo)]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[var(--red)]" />
                    {contactInfo.phone}
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="inline-flex items-center gap-2 font-bold hover:text-[var(--indigo)]"
                  >
                    <Mail className="h-3.5 w-3.5 text-[var(--red)]" />
                    {contactInfo.email}
                  </a>
                </div>

                {status === "sent" ? (
                  <p className="m-0 text-center text-[12px] font-bold text-[var(--indigo)]">
                    Opened your email client — finish sending there.
                  </p>
                ) : null}
              </form>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
