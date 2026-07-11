"use client";

import Image from "next/image";

/**
 * PartnershipHero Component
 * -----------------------------------------------------------------------
 * Full-screen height hero section for the Giving and Partnerships page.
 * -----------------------------------------------------------------------
 */
export default function PartnershipHero() {
  return (
    <section className="relative w-full h-screen bg-zinc-950 overflow-hidden rounded-none">
      
      {/* Hero Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1600&q=80"
        alt="Partnership and Giving atmosphere"
        fill
        priority
        className="object-cover opacity-50 brightness-75"
      />

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-24 text-center">
        <div className="w-full max-w-4xl px-5 select-none">
          
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#A6811D] font-extrabold mb-6">
            Give
          </p>
          
          <h1 className="font-[family-name:var(--font-anton)] text-4xl sm:text-5xl md:text-7xl uppercase tracking-tight text-white leading-none">
            Partnerships <br className="hidden sm:block" /> & Offerings
          </h1>

        </div>
      </div>
      
    </section>
  );
}