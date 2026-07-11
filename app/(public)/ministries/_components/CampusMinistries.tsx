"use client";

import Image from "next/image";

/**
 * CampusMinistries Component
 * -----------------------------------------------------------------------
 * A directory grid displaying campus chapters with integrated social links.
 * -----------------------------------------------------------------------
 */

const chapters = [
  {
    name: "Charisword KNUST",
    location: "KNUST Campus",
    contact: "0598122605 / 0530598109",
    email: "chariswordknust@gmail.com",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Instagram", url: "#", icon: "/icons/instagram.svg" },
      { name: "Facebook", url: "#", icon: "/icons/facebook.svg" },
    ],
  },
  {
    name: "Charisword UEW",
    location: "University of Education Winneba, North campus (Olympic arena)",
    contact: "0599382262",
    email: "chariswordcampusministryuew@gmail.com",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Instagram", url: "#", icon: "/icons/instagram.svg" },
      { name: "Facebook", url: "#", icon: "/icons/facebook.svg" },
    ],
  },
  {
    name: "Charisword UPSA",
    location: "UPSA Campus",
    contact: "+233503588978",
    email: "chariswordupsa@gmail.com",
    image: "https://images.unsplash.com/photo-1592280771172-766e8f42013f?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Instagram", url: "#", icon: "/icons/instagram.svg" },
      { name: "Facebook", url: "#", icon: "/icons/facebook.svg" },
    ],
  },
  {
    name: "Charisword UCC",
    location: "University Of Cape Coast",
    contact: "+233503588978",
    email: "chariswordupsa@gmail.com",
    image: "https://images.unsplash.com/photo-1562774053-701939883568?auto=format&fit=crop&w=800&q=80",
    socials: [
      { name: "Instagram", url: "#", icon: "/icons/instagram.svg" },
      { name: "Facebook", url: "#", icon: "/icons/facebook.svg" },
    ],
  },
];

export default function CampusMinistries() {
  return (
    <section className="bg-white text-zinc-900 w-full py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold">
            Our Reach
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl text-zinc-900">
            Campus Ministries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {chapters.map((chapter, index) => (
            <div key={index} className="bg-white border border-zinc-100 p-4 flex flex-col rounded-3xl shadow-sm">
              <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                <Image src={chapter.image} alt={chapter.name} fill className="object-cover" />
              </div>

              <div className="px-2 pb-4 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-[family-name:var(--font-anton)] text-lg uppercase tracking-wide text-zinc-900 mb-2">
                    {chapter.name}
                  </h3>
                  <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                    {chapter.location}
                  </p>
                </div>

                <div className="space-y-4 border-t border-zinc-100 pt-4">
                  <p className="text-xs font-bold text-zinc-900 uppercase">
                    {chapter.contact}
                  </p>
                  <p className="text-xs text-[#A6811D] break-words mb-4">
                    {chapter.email}
                  </p>
                  
                  {/* Social Handles */}
                  <div className="flex gap-4">
                    {chapter.socials.map((social, sIdx) => (
                      <a key={sIdx} href={social.url} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity">
                        <Image 
                          src={social.icon} 
                          alt={social.name} 
                          width={20} 
                          height={20} 
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}