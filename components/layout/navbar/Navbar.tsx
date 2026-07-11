"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const PRIMARY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Ministries", href: "/ministries" },
  { label: "Partnership", href: "/partnership" },
  { label: "Sermons", href: "/sermons" },
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
    links: [{ label: "Sermons Library", href: "/sermons" }],
  },
 
  {
    title: "Our Events",
    links: [
      { label: "Charis Conference", href: "/charis-conference" },
      { label: "Jesus Conference", href: "/jesus-conference" },
      { label: "Singles Conference", href: "/singles-conference" },
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
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  // Reset menu and layout locks when route changes internally
  useEffect(() => {
    setOpen(false);
    setActiveAccordion(null);
    document.body.style.overflow = "";
  }, [pathname]);

  // Lock scrolling on mobile view only
  useEffect(() => {
    if (open && window.innerWidth < 1024) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        document.body.style.overflow = "";
      } else if (open) {
        document.body.style.overflow = "hidden";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 lg:top-4 lg:mx-auto lg:w-[92%] lg:max-w-5xl lg:px-0">
      <header className="w-full bg-black/80 text-white shadow-2xl backdrop-blur-md transition-all duration-500 ease-in-out lg:rounded-2xl lg:overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="px-6 py-3.5 lg:px-8 relative z-50 bg-black/10">
          <div className="flex items-center justify-between gap-4">
            
            {/* Free-standing Logo */}
            <Link href="/" className="group flex items-center transition-transform duration-300 hover:scale-105" aria-label="Home">
              <Image
                src="/logo/logo.png"
                alt="Logo"
                width={36}
                height={36}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav aria-label="Primary Links" className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {PRIMARY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`relative text-[11px] font-semibold uppercase tracking-widest transition-all duration-300 hover:text-[#C9A227] ${
                        pathname === link.href ? "text-[#C9A227]" : "text-zinc-400"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Free-standing Menu Trigger Icon */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="relative flex h-6 w-6 items-center justify-center text-zinc-300 transition-colors duration-300 hover:text-white focus:outline-none"
              aria-expanded={open}
              aria-controls="mega-expansion-panel"
            >
              <div className="relative h-4 w-4">
                <span className={`absolute block h-0.5 w-4 bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0.5"}`} />
                <span className={`absolute block h-0.5 w-3 bg-current transition-all duration-200 right-0 top-1.5 ${open ? "opacity-0 translate-x-2" : "opacity-100"}`} />
                <span className={`absolute block h-0.5 w-4 bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-2.5"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mega Panel Dropdown Area */}
        <div
          id="mega-expansion-panel"
          className={`fixed inset-x-0 top-[64px] h-[calc(100vh-64px)] overflow-y-auto bg-zinc-950/95 transition-all duration-500 ease-in-out pb-12
            lg:static lg:h-auto lg:w-full lg:bg-zinc-950/60 lg:pb-0 lg:overflow-hidden lg:grid
            ${
              open 
                ? "opacity-100 translate-y-0 pointer-events-auto lg:grid-rows-[1fr]" 
                : "opacity-0 -translate-y-4 pointer-events-none lg:grid-rows-[0fr] lg:translate-y-0"
            }`}
        >
          <div className="overflow-hidden">
            <div className="px-6 py-10 lg:px-8">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[200px_1fr]">
                
                {/* Quick Navigation */}
                <div className="flex flex-col space-y-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                    Quick Navigation
                  </p>
                  <ul className="space-y-2.5">
                    {PRIMARY_LINKS.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`group inline-flex items-center gap-2 font-[family-name:var(--font-anton)] text-lg uppercase tracking-wide transition-colors hover:text-[#C9A227] ${
                            pathname === link.href ? "text-[#C9A227]" : "text-zinc-300"
                          }`}
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

                {/* Sub Menu Categories */}
                <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-8">
                  {MEGA_SECTIONS.map((section) => {
                    const isAccordionOpen = activeAccordion === section.title;

                    return (
                      <div key={section.title} className="flex flex-col border-b border-zinc-900 pb-4 lg:border-0 lg:pb-0 lg:space-y-3">
                        
                        <button
                          type="button"
                          onClick={() => setActiveAccordion(isAccordionOpen ? null : section.title)}
                          className="flex w-full items-center justify-between text-left lg:cursor-default lg:pointer-events-none focus:outline-none"
                        >
                          <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-zinc-500">
                            {section.title}
                          </p>
                          <ChevronDown 
                            size={14} 
                            className={`text-zinc-500 transition-transform duration-300 lg:hidden ${
                              isAccordionOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Content Container Area */}
                        <div
                          className={`grid transition-all duration-300 ease-in-out lg:grid-rows-[1fr] lg:opacity-100 lg:mt-2 ${
                            isAccordionOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <ul className="space-y-2">
                              {section.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className={`inline-block text-xs transition-colors hover:text-[#C9A227] ${
                                      pathname === link.href ? "text-[#C9A227]" : "text-zinc-400"
                                    }`}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}