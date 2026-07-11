"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Features / Highlights Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Row 1: Split Title (Left) and Mandate Description (Right)
 * - Row 2: 3-column grid with tall, sharp layout cards. 
 *          Header sits at the top, link sits at the bottom.
 * -----------------------------------------------------------------------
 */

const CARDS = [
  {
    title: "Our Ministries",
    href: "https://www.charisword.org/ministries",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg",
  },
  {
    title: "Sermons",
    href: "https://www.charisword.org/sermons",
    image: "https://images.pexels.com/photos/3756345/pexels-photo-3756345.jpeg",
  },
  {
    title: "Testimonies",
    href: "https://www.charisword.org/testimonies",
    image: "https://images.pexels.com/photos/7005049/pexels-photo-7005049.jpeg",
  },
];

export default function Highlights() {
  return (
    <section className="bg-white text-zinc-900 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        
        {/* Top Section: Title Left, Mandate Description Right */}
        <div className="grid grid-cols-1 gap-6 pb-16 lg:grid-cols-2 lg:gap-20 items-end">
          {/* Left Column - Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold">
              To every ethnos
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-zinc-900">
              God&apos;s Presence <br />&amp; Power
            </h2>
          </div>

          {/* Right Column - Description */}
          <div>
            <p className="text-sm leading-relaxed text-zinc-600 sm:text-base md:text-lg max-w-xl">
              We are driven by the singular mandate and grace to demonstrate the power of God&apos;s Word in our generation.
            </p>
          </div>
        </div>

        {/* Bottom Section: 3-Column Grid with Taller Profile Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {CARDS.map((card) => (
            <Link 
              key={card.title} 
              href={card.href}
              className="group relative block overflow-hidden bg-zinc-900 aspect-[3/4] rounded-none"
            >
              {/* Card Image Background */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 768px) 30vw, 100vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105 opacity-80"
              />

              {/* Protective Dark Overlays */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />

              {/* Top Area: Header Layout */}
              <div className="absolute top-0 left-0 right-0 p-6 select-none">
                <h3 className="font-[family-name:var(--font-anton)] text-2xl uppercase tracking-wide text-white drop-shadow-sm group-hover:text-[#C9A227] transition-colors">
                  {card.title}
                </h3>
              </div>

              {/* Bottom Area: Link Action */}
              <div className="absolute bottom-0 left-0 right-0 p-6 select-none">
                <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-zinc-300 group-hover:text-white transition-colors">
                  Explore More &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}