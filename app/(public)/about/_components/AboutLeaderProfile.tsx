"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * About Page Leader Profile Section with Borderless Modal Bio
 * -----------------------------------------------------------------------
 * Structure:
 * - Layout: 2-column grid on a rich black backdrop (`bg-black`).
 * - Left Side: Portrait image with dynamic lighting and edge fades.
 * - Right Side: Center-aligned bio snippet with an interactive modal trigger.
 * - Overlay Modal: Completely borderless minimalist container content layout.
 * -----------------------------------------------------------------------
 */

export default function AboutLeaderProfile() {
  const [isOpen, setIsOpen] = useState(false);

  // Full comprehensive biography text for the modal popup
  const fullBiography = [
    "Through a Spirit-led ministry spanning over 8 years, Teacher, Pastor, and Healing Minister Apostle Stephen Pneuma has raised able ministers of Grace worldwide.",
    "Called with a distinct apostolic mandate to demonstrate the raw power of God's Word, his teachings collapse complex spiritual realities into simple, actionable truths that transform lives instantly. His ministry is marked by an intense atmosphere of prayer, prophetic insight, and a profound manifestation of signs and wonders.",
    "As the visionary leader of Charisword, he continues to pioneer global missions, structural training environments, and community outreach frameworks designed to establish the Body of Christ in the consciousness of the Super-Life.",
  ];

  return (
    <section className="bg-black text-zinc-100 border-t border-zinc-900 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Portrait Shot */}
        <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:col-span-5 bg-zinc-950 rounded-none overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
            alt="Apostle Stephen Pneuma"
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover rounded-none grayscale contrast-125 brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-black/10 md:to-black/80" />
        </div>

        {/* Right Column: Center-aligned Bio Snippet */}
        <div className="md:col-span-7 flex flex-col items-center text-center px-4 md:px-8 lg:px-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold mb-4">
            Our Lead Pastor
          </span>

          <h2 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-wide text-white sm:text-4xl md:text-5xl leading-tight">
            Meet Apostle <br className="sm:hidden" />
            <span className="text-white">Stephen Pneuma</span>
          </h2>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-xl">
            Through a Spirit-led ministry spanning over 8 years, Teacher, Pastor, 
            and Healing Minister Apostle Stephen Pneuma has raised able ministers of Grace worldwide.
          </p>

          {/* Action Trigger Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 px-8 py-3 rounded-full border border-zinc-700 text-xs font-bold uppercase tracking-widest text-white hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-pointer"
          >
            Read More
          </button>
        </div>

      </div>

      {/* Pop-up Overlay Modal Custom Wrapper */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fadeIn"
          onClick={() => setIsOpen(false)} // Closes if clicking outside the container content box
        >
          {/* Removed border utility classes completely here */}
          <div 
            className="bg-zinc-950 w-full max-w-2xl p-6 sm:p-10 text-left relative rounded-none flex flex-col gap-6 max-h-[90vh] overflow-y-auto shadow-2xl shadow-black"
            onClick={(e) => e.stopPropagation()} // Stop bubble events from shutting down container
          >
            {/* Header Identity Row inside pop-up (Removed bottom border line) */}
            <div className="flex justify-between items-start pb-2">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A227] font-semibold">
                  Complete Biography
                </span>
                <h3 className="font-[family-name:var(--font-anton)] text-2xl sm:text-3xl uppercase text-white mt-1">
                  Apostle Stephen Pneuma
                </h3>
              </div>
              
              {/* Manual Exit Close Button Trigger */}
              <button 
                onClick={() => setIsOpen(false)}
                className="text-zinc-500 hover:text-white transition-colors p-1 text-sm font-bold tracking-wider uppercase cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            {/* Complete Comprehensive Bio Text Flow Area */}
            <div className="space-y-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              {fullBiography.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
          </div>
        </div>
      )}
    </section>
  );
}