"use client";

/**
 * VisionMission Section
 * -----------------------------------------------------------------------
 * Structure:
 * - Row 1: Top section featuring the core belief paragraph on the right.
 * - Row 2: Header on the left side, with Mission and Vision statements 
 *          falling cleanly below it in a left-and-right split configuration.
 * -----------------------------------------------------------------------
 */

export default function VisionMission() {
  return (
    <section className="bg-white text-zinc-900 border-t border-zinc-100">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
        
        {/* Row 1: Core Belief Narrative at Top Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16">
          <div className="lg:col-span-5 hidden lg:block" /> {/* Empty spacer to push content right */}
          <div className="lg:col-span-7">
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed max-w-2xl">
              At Charisword, we believe that the church should be a place full of life, 
              passion, and the transforming Presence of God. Our desire is to create an 
              atmosphere where everyone can encounter Him, experience His Word, and be 
              equipped to reveal His grace to the world.
            </p>
          </div>
        </div>

        {/* Row 2: Header Left, Statements Falling Below Left & Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-zinc-100 items-start">
          
          {/* Main Title Kicker on the Left */}
          <div className="lg:col-span-5">
            <h2 className="font-[family-name:var(--font-anton)] text-4xl uppercase leading-[1.05] sm:text-5xl md:text-6xl text-zinc-900">
              Our Vision <br />&amp; Mission
            </h2>
          </div>

          {/* Fall Below: Left & Right Split Data Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-10">
            
            {/* Left Column Stack - Mission */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#A6811D] font-bold mb-4">
                Mission Statement
              </h3>
              <ul className="space-y-3 text-sm sm:text-base font-medium text-zinc-900 border-l border-zinc-200 pl-4 leading-snug">
                <li>Demonstrating the power of God’s Word in our generation.</li>
                <li>Bringing the body of Christ to the consciousness of the supernatural.</li>
                <li>Raising a people of prayer.</li>
                <li>Taking the presence and power of God to every ethnos.</li>
              </ul>
            </div>

            {/* Right Column Stack - Vision */}
            <div>
              <h3 className="text-xs uppercase tracking-[0.2em] text-[#A6811D] font-bold mb-3">
                Vision Statement
              </h3>
              <p className="font-[family-name:var(--font-anton)] text-xl sm:text-2xl uppercase tracking-wide text-zinc-900">
                Raising Able Ministers of Grace Worldwide.
              </p>
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}