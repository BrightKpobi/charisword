"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Lead Pastor Profile Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Layout: 2-column grid on a rich black backdrop (`bg-black`).
 * - Left Side: Portrait image featuring a subtle fade mask into darkness.
 * - Right Side: Center-aligned bio text stack with an unrounded outlined button.
 * -----------------------------------------------------------------------
 */

export default function LeaderProfile() {
  return (
    <section className="bg-black text-zinc-100 border-t border-zinc-900 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Layout Column: Portrait Shot (Spans 5 Columns on Desktop) */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:col-span-5 bg-zinc-950 rounded-none overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" // Replace with actual high-res portrait of Apostle Stephen Pneuma
            alt="Apostle Stephen Pneuma"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover rounded-none grayscale contrast-125 brightness-90"
            priority
          />
          
          {/* Ambient Vignette & Linear Edge Fades to match reference image styling */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/10 md:to-black/80" />
        </div>

        {/* Right Layout Column: Center-aligned Biographical Details (Spans 7 Columns) */}
        <div className="md:col-span-7 flex flex-col items-center text-center px-4 md:px-8 lg:px-16">
          
          {/* Small Gold Kicker */}
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold mb-4">
            Our Lead Pastor
          </span>

          {/* Main Structural Name Header */}
          <h2 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-wide text-white sm:text-4xl md:text-5xl leading-tight">
            Meet Apostle <br className="sm:hidden" />
            <span className="text-white">Stephen Pneuma</span>
          </h2>

          {/* Core Biography Body Copy */}
          <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl">
            Through a Spirit-led ministry spanning over 8 years, Teacher, Pastor, 
            and Healing Minister Apostle Stephen Pneuma has raised able ministers of Grace worldwide.
          </p>

          {/* Custom Pill Button Link - Shaped with standard border styles */}
          <Link
            href="/about/apostle-stephen-pneuma"
            className="mt-8 px-8 py-3 rounded-full border border-zinc-700 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Read More
          </Link>
          
        </div>

      </div>
    </section>
  );
}