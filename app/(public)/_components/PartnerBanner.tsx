"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Partnership Banner Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Full Width Edge-to-Edge Grid (Zero spacing on the right side of the screen)
 * - Left Side: Black backdrop hosting heading, description, and link (indented via padding)
 * - Right Side: A much slimmer, flat landscape image stretching to the viewport edge
 * -----------------------------------------------------------------------
 */

export default function PartnerBanner() {
  return (
    <section className="bg-black text-zinc-100 border-t border-zinc-900 w-full overflow-hidden">
      {/* max-w-none and px-0 ensures the layout stretches completely to the screen boundaries */}
      <div className="w-full max-w-none grid grid-cols-1 md:grid-cols-2 items-stretch">
        
        {/* Left Side Content Block - Added pl-5/sm:pl-8/lg:pl-24 to align text inside max-w-7xl limits */}
        <div className="flex flex-col justify-center items-start py-12 md:py-20 px-5 sm:pl-8 md:pl-12 lg:pl-24 pr-5 select-none bg-black">
          <h2 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
            Partner with Us
          </h2>
          
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-lg">
            Your support enables us to reach more lives through our outreach programs, 
            community support initiatives, and global missions. Join us in making a 
            lasting impact today.
          </p>
          
          <Link
            href="https://www.charisword.org/give"
            className="mt-8 text-xs font-bold uppercase tracking-widest text-[#C9A227] hover:text-white underline underline-offset-4 transition-colors duration-200"
          >
            Become a partner today &rarr;
          </Link>
        </div>

        {/* Right Side Visual Image Block - Completely flat, zero spacing, slimmer profile */}
        <div className="relative h-[250px] md:h-auto w-full bg-zinc-900 rounded-none">
          <Image
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
            alt="Global hands reaching together in community alignment and partnership"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover rounded-none opacity-80"
          />
        </div>

      </div>
    </section>
  );
}