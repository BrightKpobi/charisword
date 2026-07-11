"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Annual Events Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Row 1: Split Title (Left) and Conference Mandate Description (Right)
 * - Row 2: Wide landscape image rows stacked below the description,
 *          built completely sharp, flat, and unrounded.
 * -----------------------------------------------------------------------
 */

const EVENTS = [
  {
    title: "Charis Conference",
    timeline: "Annual Spiritual Convergence • Q1",
    href: "https://www.charisword.org/charis-conference",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Singles Conference",
    timeline: "Purpose, Relationships & Destiny • Q2",
    href: "https://www.charisword.org/singles-conference",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Glory Conference",
    timeline: "Prophetic Manifestation & Power • Q4",
    href: "https://www.charisword.org/glory-conference",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AnnualEvents() {
  return (
    <section className="bg-white text-zinc-900 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        
        {/* Top Section: Title Left, Description Right */}
        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-2 lg:gap-20 items-end">
          {/* Left Column - Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold">
              Set Appointments
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-zinc-900">
              Our Annual <br />Conferences
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg max-w-xl">
              Yearly seasons of intentional separation, intense prayer, deep illumination in the Word, and structural alignment for global impact.
            </p>
          </div>
        </div>

        {/* Bottom Section: Landscape Images Below The Text Layout */}
        <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto">
          {EVENTS.map((event) => (
            <Link 
              key={event.title} 
              href={event.href}
              className="group relative block w-full aspect-[21/7] sm:aspect-[32/9] overflow-hidden bg-zinc-900 rounded-none"
            >
              {/* Event Cover Image Background - Sharp & Flat */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="(min-width: 1280px) 1216px, 100vw"
                className="object-cover rounded-none transition-transform duration-700 ease-out group-hover:scale-102 opacity-70 group-hover:opacity-85"
                priority
              />

              {/* Protective dark overlay scrim */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              {/* Text Meta content layout over the horizontal card */}
              <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-6 sm:p-10 select-none">
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A227] font-semibold mb-1">
                  {event.timeline}
                </span>
                <h3 className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide text-white group-hover:text-[#C9A227] transition-colors">
                  {event.title}
                </h3>
                <span className="mt-4 text-[11px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors flex items-center gap-1.5">
                  View Conference Page &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}