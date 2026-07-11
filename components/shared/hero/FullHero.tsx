import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface FullHeroProps {
  /** The small uppercase accent text above the main heading */
  subheader?: string;
  /** The primary core display title */
  header: string;
  /** Absolute route or URL path to the background image asset (Required) */
  backgroundImage: string;
  /** Show or hide the bottom bouncing scroll indicator arrow */
  showScrollIndicator?: boolean;
}

export default function FullHero({
  subheader,
  header,
  backgroundImage,
  showScrollIndicator = true,
}: FullHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={header}
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center transform scale-105 animate-[fade-in-zoom_1.5s_ease-out_forwards]"
        />
      </div>

      {/* Modern Directional Gradient Overlay Matrix */}
      <div className="absolute inset-0 z-10 bg-black/30" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content Layout Frame */}
      <div className="relative z-20 flex h-full w-full flex-col justify-end px-6 pb-24 lg:w-[92%] lg:max-w-7xl lg:mx-auto lg:px-0 lg:pb-32">
        <div className="max-w-4xl space-y-3">
          
          {/* Subheader Accent Label */}
          {subheader && (
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-[#C9A227] md:text-sm">
              {subheader}
            </span>
          )}

          {/* Core Big Title */}
          <h1 className="font-[family-name:var(--font-anton)] text-4xl uppercase tracking-wide sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-white">
            {header}
          </h1>
          
        </div>
      </div>

      {/* Bottom Subtle Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 animate-bounce opacity-40">
          <ChevronDown size={24} className="text-zinc-400" />
        </div>
      )}
    </section>
  );
}