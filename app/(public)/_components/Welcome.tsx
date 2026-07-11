"use client";

import Image from "next/image";

/**
 * Welcome
 * -----------------------------------------------------------------------
 * Re-structured layout with clean white background theme:
 * - Row 1: Header (Left) and Description (Right) split columns
 * - Row 2: Sharp, flat, lower-profile landscape image aligned with layout edges
 * -----------------------------------------------------------------------
 */

const MEDIA = {
  image: "https://images.pexels.com/photos/9577010/pexels-photo-9577010.jpeg",
};

export default function Welcome() {
  return (
    <section className="bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        
        {/* Top Section: Split Title & Description */}
        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-2 lg:gap-20 items-end">
          {/* Left Column - Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold">
              Charisword Gospel Ministry
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-zinc-900">
              Welcome to Our Family
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg max-w-xl">
              Immerse yourself in our inspiring teachings, participate in
              vibrant events, and become part of a welcoming community.
              Discover guidance, grow in your faith, and experience a
              journey of spiritual transformation that begins here.
            </p>
          </div>
        </div>

        {/* Bottom Section: Width matched to max-w-7xl, completely sharp and flat */}
        <div className="w-full max-w-7xl mx-auto mt-4">
          {/* Main image container: completely flat, non-rounded, ultra-low profile height */}
          <div className="relative aspect-[32/9] w-full overflow-hidden rounded-none">
            <Image
              src={MEDIA.image}
              alt="A pastor warmly welcoming a family into the church community"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}