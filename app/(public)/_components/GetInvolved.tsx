"use client";

/**
 * GetInvolved Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Row 1: Main Title Left, Unconditional Love message on the Right
 * - Cleaned up to show strictly the core devotion copy.
 * -----------------------------------------------------------------------
 */

export default function GetInvolved() {
  return (
    <section className="bg-black text-zinc-100 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        
        {/* Top Section: Title Left, Opening Devotional Copy Right */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20 items-start">
          {/* Left Column - Heading */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              Unconditional Grace
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl text-zinc-100">
              Get <br />Involved
            </h2>
          </div>

          {/* Right Column - Heart of the message */}
          <div className="space-y-6 text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed max-w-xl">
            <p>
              You are the object of God&apos;s Love. His Love-heart yearns for you dearly. 
              You are the very reason why he delivered His beloved son, Jesus, to be tortured 
              and crucified on the cross. This is a clear showcase of how precious you are to God.
            </p>
            <p className="text-zinc-400">
              Amazingly, His love for you is independent of your actions and deeds; 
              it is the very essence of His nature. God displayed his unconditional love for 
              humanity through the death of Jesus on the cross. Greater love has no one than this, 
              than to lay down one&apos;s life for his friends. God laid down his own life for us 
              in the person of his son Jesus.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}