"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Mail, MapPin, Phone } from "lucide-react";
import { brandName, contactInfo, navigationLinks } from "@/lib/constants";
import { depots } from "@/lib/data";
import { openContactModal } from "./ContactModal";

const MalawiMap = dynamic(() => import("./MalawiMap"), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center bg-white/5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white/40">
      Loading map
    </div>
  ),
});

export function SiteFooter() {
  return (
    <footer id="depot" className="bg-[var(--indigo-ink)] text-white">
      <div className="grid gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.85fr_1fr] lg:gap-12 lg:px-12 lg:py-[80px]">
        <div>
          <Link href="#home" className="inline-flex items-center gap-3">
            <span className="relative grid h-[58px] w-[58px] place-items-center overflow-hidden rounded-full bg-white">
              <Image
                src="/cp-feed-logo.webp"
                alt={`${brandName} logo`}
                fill
                sizes="58px"
                className="object-contain p-1"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[1.2rem] font-black tracking-[-0.04em] text-white">
                {brandName}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--red-soft)]">
                Quality Feeds
              </span>
            </span>
          </Link>
          <p className="mt-5 max-w-[380px] leading-[1.8] text-white/72">
            Quality animal feed for poultry and cattle — supporting growing
            farms across Malawi with stage-matched programs and clear product
            guidance.
          </p>

          <div className="mt-6 grid max-w-[380px] gap-2.5">
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--red)] text-white">
                <Phone className="h-3.5 w-3.5" />
              </span>
              {contactInfo.phone}
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-3 text-sm text-white/85 transition-colors hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--red)] text-white">
                <Mail className="h-3.5 w-3.5" />
              </span>
              {contactInfo.email}
            </a>
            <div className="flex items-center gap-3 text-sm text-white/85">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[var(--red)] text-white">
                <MapPin className="h-3.5 w-3.5" />
              </span>
              {contactInfo.address}
            </div>
          </div>
        </div>

        <div>
          <h4 className="m-0 mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--red-soft)]">
            Quick Links
          </h4>
          <ul className="m-0 grid list-none gap-2 p-0">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[15px] font-bold leading-[1.9] text-white/85 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={openContactModal}
                className="text-left text-[15px] font-bold leading-[1.9] text-white/85 transition-colors hover:text-white"
              >
                Contacts
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="m-0 mb-4 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[var(--red-soft)]">
            Where we operate
          </h4>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="relative h-[180px] w-full">
              <MalawiMap />
            </div>
            <ul className="m-0 grid list-none gap-2 p-3">
              {depots.map((d) => (
                <li
                  key={d.name}
                  className="flex items-center gap-2.5 text-[12px] text-white/85"
                >
                  <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-[var(--red)] text-white">
                    <MapPin className="h-3 w-3" />
                  </span>
                  <span className="font-bold text-white">{d.name}</span>
                  <span className="ml-auto text-[10px] font-extrabold uppercase tracking-[0.14em] text-[var(--red-soft)]">
                    {d.region.split(" ")[0]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-[12px] text-white/55 sm:px-8 lg:px-12">
        © {new Date().getFullYear()} {brandName}. All rights reserved.
      </div>
    </footer>
  );
}
