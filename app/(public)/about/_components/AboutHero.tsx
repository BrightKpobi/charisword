"use client";

import Image from "next/image";

/**
 * About Hero Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Full-screen height background layout (`h-screen`).
 * - Dark overlay rising from the bottom edge to preserve text contrast.
 * - Text details pushed to the bottom and centered horizontally.
 * -----------------------------------------------------------------------
 */

export default function AboutHero() {
  return (
    <section className="relative w-full h-screen bg-zinc-950 overflow-hidden rounded-none">
      
      {/* Background Image - Clear view area across the top and middle */}
      <Image
        src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1600&q=80"
        alt="Charisword global church environment backdrop"
        fill
        priority
        className="object-cover rounded-none opacity-50 brightness-90"
      />

      {/* Dark Overlay focused mainly on the lower third area */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Hero Content - Anchored to the bottom and horizontally centered */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-20 text-center">
        <div className="w-full max-w-4xl px-5 select-none flex flex-col items-center">
          
          {/* Small scaled-down Section Label */}
          <p className="text-xs uppercase tracking-[0.4em] text-[#C9A227] font-semibold mb-6">
            About Us
          </p>
          
          {/* Main Core Statements with "We Are" prefixes added back */}
          <div className="flex flex-col gap-2 sm:gap-3">
            <h1 className="font-[family-name:var(--font-anton)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-zinc-100 leading-tight">
              We are apostolic
            </h1>
            <h2 className="font-[family-name:var(--font-anton)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-zinc-300 leading-tight">
              We are charismatic
            </h2>
            <h3 className="font-[family-name:var(--font-anton)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-widest text-[#C9A227] leading-tight">
              We are charisword
            </h3>
          </div>

        </div>
      </div>
      
    </section>
  );
}