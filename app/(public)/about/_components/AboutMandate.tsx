"use client";

import Image from "next/image";

/**
 * About Mandate Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Row 1: Split Title (Left) and Detailed Ministry Description (Right)
 * - Row 2: Wide landscape image row stacked cleanly below the text,
 *          built completely sharp, flat, and unrounded.
 * -----------------------------------------------------------------------
 */

export default function AboutMandate() {
  return (
    <section className="bg-white text-zinc-900 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        
        {/* Top Section: Title Left, Description Right */}
        <div className="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-2 lg:gap-20 items-start">
          
          {/* Left Column - Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold">
              Our Mandate
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-anton)] text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl text-zinc-900">
              About <br />Us
            </h2>
          </div>

          {/* Right Column - Detailed Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-2xl">
            <p className="font-medium text-zinc-900 md:text-lg">
              Charisword Gospel Ministry is an End Time Ministry graced with the mandate of 
              demonstrating the power of God&apos;s Word in our generation and bringing the 
              Body of Christ to the consciousness of the Super-Life, culminating in raising 
              able ministers of the Gospel of Grace worldwide.
            </p>
            <p>
              We unveil the unconditional love of God to our local communities, our nation, 
              and the world at large. We are called into deeper relationship with the Lord—going 
              beyond religion to discover and enjoy the reality of His Person and the perfection 
              of His work.
            </p>
            <p>
              We equip members with the undiluted Word of Grace, empowering them to fulfill 
              their call as ministers of reconciliation. Being in Charisword is more than just 
              being part of a local assembly, it is a movement of the Spirit. We model and 
              substantiate the Gospel of Grace through the visible demonstration of the power 
              of God&apos;s Word in our lives.
            </p>
          </div>

        </div>

        {/* Bottom Section: Landscape Image Positioned Below Text Layout */}
        <div className="relative w-full aspect-[21/9] sm:aspect-[32/10] overflow-hidden bg-zinc-100 rounded-none border border-zinc-200/60">
          <Image
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&w=1200&q=80"
            alt="Charisword corporate worship gathering and corporate movement"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover rounded-none"
          />
        </div>

      </div>
    </section>
  );
}