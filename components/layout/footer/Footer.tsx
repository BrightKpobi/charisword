"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const EXPLORE_LINKS = [
  { label: "About", href: "https://www.charisword.org/about" },
  { label: "Ministries", href: "https://www.charisword.org/ministries" },
  { label: "Sermons", href: "https://www.charisword.org/sermons" },
  { label: "Partnership", href: "https://www.charisword.org/partnership" },
];

const EVENT_LINKS = [
  { label: "Charis Conference", href: "https://www.charisword.org/charis-conference" },
  { label: "All Leaders Camp", href: "https://www.charisword.org/leaders-camp" },
  { label: "Travailing All Night", href: "https://www.charisword.org/travailing" },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com/charisword", icon: "/icons/facebook.svg" },
  { label: "Instagram", href: "https://www.instagram.com/charisword", icon: "/icons/instagram.svg" },
  { label: "Twitter", href: "https://x.com/ChariswordM", icon: "/icons/twitter.svg" },
  { label: "YouTube", href: "https://www.youtube.com/@ChariswordGospelMinistry", icon: "/icons/youtube.svg" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    // Updated background to true black, and bordered borders with white opacity lines
    <footer className="border-t border-white/5 bg-black text-zinc-300">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Wordmark + tagline + socials */}
          <div>
            <Link
              href="https://www.charisword.org/"
              className="flex items-center gap-2.5"
              aria-label="Charisword Gospel Ministry — home"
            >
              <Image
                src="/images/logo.png"
                alt="Charisword Gospel Ministry logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-full object-contain"
              />
              <span className="flex flex-col leading-tight">
                <span className="font-[family-name:var(--font-anton)] text-lg tracking-wide text-zinc-100">
                  Charisword
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C9A227]">
                  Gospel Ministry
                </span>
              </span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
              We&apos;re Apostolic, We&apos;re Charismatic, We&apos;re Charisword.
              Spreading the word of grace with power and truth across the globe.
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/10 transition-colors hover:border-[#C9A227]"
                  >
                    <Image src={icon} alt="" width={16} height={16} aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#C9A227]">
              Explore
            </p>
            <ul className="space-y-3">
              {EXPLORE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Events */}
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#C9A227]">
              Our Events
            </p>
            <ul className="space-y-3">
              {EVENT_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Office */}
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#C9A227]">
              Office
            </p>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#C9A227]" />
                <span>Transformer Junction, Lashibi, Accra-Ghana</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-[#C9A227]" />
                <Link
                  href="tel:+233261169859"
                  className="transition-colors hover:text-white"
                >
                  +233 26 116 9859
                </Link>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-[#C9A227]" />
                <Link
                  href="mailto:chariswordinfo@gmail.com"
                  className="transition-colors hover:text-white"
                >
                  chariswordinfo@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-zinc-500 sm:flex-row sm:px-8">
          <span>© {year} Charisword Gospel Ministry</span>
          <span className="uppercase tracking-[0.22em] text-[#C9A227]/80">
            the supernatural community
          </span>
        </div>
      </div>
    </footer>
  );
}