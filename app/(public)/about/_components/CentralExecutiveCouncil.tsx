"use client";

import Image from "next/image";

interface Leader {
  name: string;
  position: string;
  image: string;
}

/**
 * CentralExecutiveCouncil Component (6 Members)
 * -----------------------------------------------------------------------
 * Structure:
 * - Clean white background (`bg-white`).
 * - Bold title top left.
 * - Grid configuration adapts to 3 columns on desktop for an even 6-pastor layout.
 * - Flat layout with absolute sharp rectangular edges (`rounded-none`).
 * -----------------------------------------------------------------------
 */
export default function CentralExecutiveCouncil() {
  const leaders: Leader[] = [
    {
      name: "Apostle Stephen Pneuma",
      position: "President & Lead Pastor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pastor David Praise",
      position: "Resident Pastor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pastor Emmanuel Grace",
      position: "Secretary General",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pastor Sarah Shalom",
      position: "Director of Administration",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pastor Joshua Truth",
      position: "Director of Missions",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Pastor Mary Faith",
      position: "Treasurer",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="bg-white text-zinc-900 border-t border-zinc-100 w-full">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 flex flex-col gap-16">
        
        {/* Section Header */}
        <div className="w-full text-left select-none">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold mb-3">
            Leadership Framework
          </p>
          <h2 className="font-[family-name:var(--font-anton)] text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-zinc-900 leading-none">
            Central Executive Council
          </h2>
        </div>

        {/* Team Grid Stack - 3 columns on desktop handles 6 cards beautifully */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
          {leaders.map((leader, index) => (
            <div key={index} className="group flex flex-col w-full">
              
              {/* Profile Image Container */}
              <div className="relative w-full aspect-[3/4] bg-zinc-100 overflow-hidden rounded-none mb-5">
                <Image
                  src={leader.image}
                  alt={`${leader.name} - ${leader.position}`}
                  fill
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover rounded-none grayscale contrast-[1.1] brightness-95 transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title and Position Meta */}
              <div className="text-left">
                <h3 className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-wide text-zinc-900 leading-tight transition-colors duration-300 group-hover:text-[#A6811D]">
                  {leader.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#A6811D] font-semibold mt-1.5">
                  {leader.position}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}