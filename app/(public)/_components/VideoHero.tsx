"use client";

import { useEffect, useRef } from "react";

const MEDIA = {
  video: "https://assets.mixkit.co/videos/1514/1514-720.mp4",
};

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (query.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={MEDIA.video} type="video/mp4" />
      </video>

      {/* Dark Overlay Scrim */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

      {/* Centered Typography - Adjusted positioning to sit slightly lower */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6">
        <div className="w-full max-w-3xl select-none mx-auto pt-28">
          <h1 className="font-[family-name:var(--font-anton)] text-4xl tracking-normal uppercase text-zinc-100 sm:text-5xl md:text-6xl drop-shadow-xl">
            The Supernatural Community
          </h1>
        </div>
      </div>
    </section>
  );
}