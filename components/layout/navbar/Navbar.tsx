"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

const PRIMARY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Partnership", href: "/partnership" },
  { label: "Sermons", href: "/sermons" },
  { label: "Testimonies", href: "/testimonies" },
];

const MEGA_SECTIONS = [
  {
    title: "Departments",
    links: [
      { label: "M.I.C.", href: "/mic" },
      { label: "Protocol Department", href: "/protocol" },
      { label: "Rhemaword Department", href: "/rhemaword" },
      { label: "IT & Media Department", href: "/media" },
    ],
  },
  {
    title: "Resources",
    links: [{ label: "Sermons Library", href: "https://www.charisword.org/sermons" }],
  },
  {
    title: "Charisword",
    links: [
      { label: "Jesus Conference", href: "/jesus-conference" },
      { label: "Singles Conference", href: "/singles-conference" },
    ],
  },
  {
    title: "Our Events",
    links: [
      { label: "Charis Conference", href: "/charis-conference" },
      { label: "All Leaders Camp", href: "/leaders-camp" },
      { label: "Travailing All-Night", href: "/travailing" },
    ],
  },
  {
    title: "Become a Member",
    links: [
      { label: "Introductory Class", href: "/intro-class" },
      { label: "International Membership", href: "/international-membership" },
    ],
  },
];

export default function MegaNavbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) {
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", onKeyDown);
      return () => window.removeEventListener("keydown", onKeyDown);
    }
  }, [open]);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 mx-auto w-[92%] max-w-5xl px-2 sm:px-0">
      {/* Removed outer border */}
      <header className="w-full overflow-hidden rounded-2xl bg-black/80 text-white shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out">
        {/* Primary Top Bar */}
        <div className="px-6 py-3.5 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Component */}
            <Link
              href="https://www.charisword.org/"
              className="group flex items-center gap-3"
              aria-label="Charisword Gospel Ministry — home"
            >
              {/* Removed border ring around image */}
              <div className="relative h-9 w-9 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800 to-black p-0.5 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Charisword Gospel Ministry logo"
                  width={36}
                  height={36}
                  priority
                  className="h-full w-full object-contain rounded-[14px]"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-[family-name:var(--font-anton)] text-sm tracking-wide text-zinc-100 transition-colors group-hover:text-white">
                  Charisword
                </span>
                <span className="mt-0.5 text-[8px] font-bold uppercase tracking-[0.25em] text-[#C9A227]/90">
                  Gospel Ministry
                </span>
              </div>
            </Link>

            {/* Centered Primary Inline Navigation */}
            <nav aria-label="Primary Links" className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {PRIMARY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="relative text-[11px] font-semibold uppercase tracking-widest text-zinc-400 transition-all duration-300 hover:text-[#C9A227]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Menu Trigger Button */}
            {/* Removed trigger wrapper border */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mega-expansion-panel"
              aria-label={open ? "Close navigation panel" : "Expand navigation panel"}
              className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-900/50 text-zinc-300 transition-all duration-300 hover:text-white hover:bg-zinc-900 focus:outline-none"
            >
              <div className="relative h-4 w-4">
                <span className={`absolute block h-0.5 w-4 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0.5"}`} />
                <span className={`absolute block h-0.5 w-3 bg-current transition-all duration-200 right-0 top-1.5 ${open ? "opacity-0 translate-x-2" : "opacity-100"}`} />
                <span className={`absolute block h-0.5 w-4 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-2.5"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Expanding Dropdown Mega Panel Inside Container */}
        {/* Removed divider border line */}
        <div
          id="mega-expansion-panel"
          className={`grid transition-all duration-500 ease-in-out bg-zinc-950/60 ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 py-10 lg:px-8">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr]">
                
                {/* Highlighted Primary Section */}
                {/* Removed inner containment border */}
                <div className="rounded-2xl bg-zinc-900/40 p-5">
                  <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-[#C9A227]">
                    Quick Navigation
                  </p>
                  <ul className="space-y-3.5">
                    {PRIMARY_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center justify-between text-sm font-medium text-zinc-300 transition-colors hover:text-white"
                        >
                          <span>{link.label}</span>
                          <ArrowUpRight
                            size={14}
                            className="text-zinc-600 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#C9A227]"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dynamic Sub-Sections Layout */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
                  {MEGA_SECTIONS.map((section) => (
                    <div key={section.title} className="flex flex-col space-y-3">
                      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                        {section.title}
                      </p>
                      <ul className="space-y-2">
                        {section.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="inline-block text-xs text-zinc-400 transition-colors hover:text-[#C9A227]"
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}