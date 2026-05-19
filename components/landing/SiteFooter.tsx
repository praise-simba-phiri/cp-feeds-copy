"use client";

import Link from "next/link";
import Image from "next/image";
import { brandName, contactInfo, navigationLinks } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer
      id="depot"
      className="grid gap-10 bg-[var(--green-dark)] px-5 py-14 text-white sm:px-8 lg:grid-cols-[1fr_0.8fr_1.1fr] lg:gap-10 lg:px-[52px] lg:py-[58px]"
    >
      <div>
        <Link href="#home" className="inline-flex items-center gap-3">
          <span
            className="grid h-[46px] w-[46px] place-items-center overflow-hidden rounded-full border-2 border-white/30"
            style={{ background: "linear-gradient(145deg, #fff7df, #f1d18b)" }}
          >
            <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full">
              <Image
                src="/cp-feed-logo.webp"
                alt={`${brandName} logo`}
                fill
                sizes="36px"
                className="object-contain"
              />
            </span>
          </span>
          <span className="text-[1.05rem] font-black tracking-[-0.04em] text-white">
            {brandName}
          </span>
        </Link>
        <p className="mt-4 leading-[1.75] text-white/72">
          Quality animal feed products for poultry and cattle, supporting growing
          farms across Malawi with stage-matched programs and clear product
          guidance.
        </p>
      </div>

      <div>
        <h4 className="m-0 mb-4 text-[18px] font-bold">Quick Links</h4>
        <div className="grid gap-2.5">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="leading-[1.75] text-white/72 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${contactInfo.email}`}
            className="leading-[1.75] text-white/72 transition-colors hover:text-white"
          >
            {contactInfo.email}
          </a>
        </div>
      </div>

      <div>
        <h4 className="m-0 mb-4 text-[18px] font-bold">Our Depots</h4>
        <div
          className="grid min-h-[150px] place-items-center rounded-[22px] border border-white/18 text-center font-black uppercase tracking-[0.15em]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(217,164,65,0.8), rgba(255,255,255,0.16)), repeating-linear-gradient(45deg, rgba(255,255,255,0.18) 0 2px, transparent 2px 16px)",
          }}
        >
          Map
        </div>
      </div>
    </footer>
  );
}
