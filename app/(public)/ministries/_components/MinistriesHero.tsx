"use client";

import Image from "next/image";

/**
 * Ministries Hero Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Full-screen height background layout (`h-screen`).
 * - Dark overlay rising from the bottom edge to preserve text contrast.
 * - Text details pushed to the bottom and centered horizontally.
 * - Bold "Get Involved" kicker, with unbolded normal weight title text.
 * -----------------------------------------------------------------------
 */
export default function MinistriesHero() {
  return (
    <section className="relative w-full h-screen bg-zinc-950 overflow-hidden rounded-none">
      
      {/* Updated Background Image - Dramatic modern sanctuary architecture */}
      <Image
        src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1600&q=80"
        alt="Charisword ministries architectural backdrop"
        fill
        priority
        className="object-cover rounded-none opacity-40 brightness-75"
      />

      {/* Dark Overlay focused mainly on the lower third area */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Hero Content - Anchored to the bottom and horizontally centered */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-24 text-center">
        <div className="w-full max-w-4xl px-5 select-none flex flex-col items-center">
          
          {/* Bold Section Label */}
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-[#C9A227] font-bold mb-6">
             Our Ministries
          </p>
          
          {/* Main Core Heading Statement (Unbolded regular font weight weight variant) */}
          <div className="flex flex-col gap-2">
            <h1 className="font-[family-name:var(--font-anton)] font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-normal text-zinc-100 leading-none">
               Get Involved
            </h1>
          </div>

        </div>
      </div>
      
    </section>
  );
}