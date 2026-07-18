"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Church Branches Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Row 1: Split Title (Left) and Description (Right) on Black Background
 * - Row 2: 6-column grid with unrounded, sharp Unsplash image cards. 
 *          Header sits at the top, branch link sits at the bottom.
 * -----------------------------------------------------------------------
 */

const BRANCHES = [
  {
    city: "Accra (HQ)",
    location: "Lashibi, Ghana",
    href: "https://www.charisword.org/hq",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Kumasi",
    location: "Asokwa, Ghana",
    href: "https://www.charisword.org/kumasi",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "London",
    location: "United Kingdom",
    href: "https://www.charisword.org/london",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Houston",
    location: "Texas, USA",
    href: "https://www.charisword.org/houston",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Lagos",
    location: "Ikeja, Nigeria",
    href: "https://www.charisword.org/lagos",
    image: "https://images.unsplash.com/photo-1629814402127-14e414c7d0d0?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Toronto",
    location: "Ontario, Canada",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80",
    href: "https://www.charisword.org/toronto",
  },
];

export default function Branches() {
  return (
    <section className="bg-black text-zinc-100 ">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        
        {/* Top Section: Title Left, Description Right */}
        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-2 lg:gap-20 items-end">
          {/* Left Column - Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold">
              Global Fellowships
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-zinc-100">
              Our Church <br />Branches
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-sm leading-relaxed text-zinc-400 sm:text-base md:text-lg max-w-xl">
              Find a home and connect with our thriving expressions across major global cities. Experience the same atmosphere of truth, word, and power close to you.
            </p>
          </div>
        </div>

        {/* Bottom Section: 6-Card Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {BRANCHES.map((branch) => (
            <Link 
              key={branch.city} 
              href={branch.href}
              className="group relative block overflow-hidden bg-zinc-950 aspect-[3/4] rounded-none"
            >
              {/* Card Image Background with flat unrounded edges */}
              <Image
                src={branch.image}
                alt={`${branch.city} Branch`}
                fill
                sizes="(min-width: 1024px) 15vw, (min-width: 768px) 30vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-75 rounded-none"
              />

              {/* Protective Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

              {/* Top Area: Location Header */}
              <div className="absolute top-0 left-0 right-0 p-4 select-none">
                <h3 className="font-[family-name:var(--font-anton)] text-lg uppercase tracking-wide text-zinc-100 ">
                  {branch.city}
                </h3>
                <p className="text-[11px] text-zinc-400 tracking-wide mt-0.5">
                  {branch.location}
                </p>
              </div>

              {/* Bottom Area: Link Action */}
              <div className="absolute bottom-0 left-0 right-0 p-4 select-none">
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-white transition-colors">
                  View Details &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}