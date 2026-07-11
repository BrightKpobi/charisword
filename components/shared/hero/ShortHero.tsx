import Image from "next/image";

interface ShortHeroProps {
  subheader?: string;
  header: string;
  backgroundImage?: string; // Made optional
  altText?: string;
}

export default function ShortHero({
  subheader,
  header,
  backgroundImage,
  altText = "Hero background image",
}: ShortHeroProps) {
  return (
    <section className="relative w-full h-[65vh] min-h-[420px] max-h-[600px] flex items-center overflow-hidden bg-black">
      
      {/* Conditional Background Image Container */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt={altText}
            fill
            priority
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
          {/* Consistent Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-black/50 to-black/30" />
        </div>
      )}

      {/* Typography Content Wrapper */}
      <div className="relative z-10 w-full px-6 mx-auto max-w-5xl lg:px-8">
        <div className="flex flex-col space-y-3 max-w-2xl">
          
          {/* Subheader */}
          {subheader && (
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A227] sm:text-xs">
              {subheader}
            </p>
          )}

          {/* Header */}
          <h1 className="font-[family-name:var(--font-anton)] text-3xl uppercase tracking-wide text-white sm:text-5xl md:text-6xl leading-tight">
            {header}
          </h1>
          
        </div>
      </div>
    </section>
  );
}