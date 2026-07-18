"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Targeted Ministries Section (Kids & Teens)
 * -----------------------------------------------------------------------
 * Structure:
 * - Left Side: Large stylized title and a smooth rounded-2xl action button
 * - Right Side: 2-column layout with text overlay details strictly positioned 
 *          on top of the sharp, unrounded image cards.
 * -----------------------------------------------------------------------
 */

const AGE_GROUPS = [
  {
    title: "Children Ministry",
    subtitle: "Charisword Kids",
    href: "https://www.charisword.org/kids",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Teens Ministry",
    subtitle: "Charisword Teens",
    href: "https://www.charisword.org/teens",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80",
  },
];

export default function AgeMinistries() {
  return (
    <section className="bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
        
        {/* Left Layout Column - Title Stack & 2xl Rounded Action Button */}
        <div className="lg:col-span-5 flex flex-col items-start lg:pr-6">
          <span className="text-xs uppercase tracking-[0.3em] text-orange-500 font-bold">
            Ministries
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-anton)] text-4xl uppercase leading-[0.95] sm:text-5xl md:text-6xl text-zinc-900">
            There&apos;s a place <br />
            <span className="text-orange-500">for everyone</span>
          </h2>
          
          <Link
            href="https://www.charisword.org/ministries"
            className="mt-8 inline-block px-7 py-3 rounded-2xl border border-zinc-900 text-xs font-bold uppercase tracking-widest text-zinc-900 hover:bg-zinc-900 hover:text-white transition-all duration-300"
          >
            See All Ministries
          </Link>
        </div>

        {/* Right Layout Column - 2 Card Grid with Overlaid Text Details */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          {AGE_GROUPS.map((group) => (
            <Link 
              key={group.title} 
              href={group.href} 
              className="group relative block w-full aspect-[4/5] overflow-hidden bg-zinc-900 rounded-none"
            >
              {/* Card Image Background - strictly unrounded / no border radius */}
              <Image
                src={group.image}
                alt={group.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover rounded-none transition-transform duration-500 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              />

              {/* Linear Bottom Scrim for perfect text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text Layout Overlaid on the Card (Pinned to Bottom Left) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 select-none">
                <h3 className="font-[family-name:var(--font-anton)] text-2xl uppercase tracking-wide text-white ">
                  {group.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-zinc-300 tracking-wide">
                  {group.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}