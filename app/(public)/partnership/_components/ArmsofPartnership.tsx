"use client";

/**
 * ArmsOfPartnership Component
 * -----------------------------------------------------------------------
 * A clean, structured component highlighting the impact and benefits 
 * of ministry partnership.
 * -----------------------------------------------------------------------
 */

const benefits = [
  {
    title: "Anointing & Grace",
    description: "As a partner, you become a partaker of the mighty anointing and the grace of God that functions in our ministry. We are committed to praying daily for you."
  },
  {
    title: "Prosperity & Multiplication",
    description: "You activate the prosperity button of God in your life. Whatever you give shall be multiplied in your life in multiple folds (Luke 6:38)."
  },
  {
    title: "Eternal Impact",
    description: "The greatest blessing is knowing that through your prayers and financial participation, lives are being changed worldwide, sowing seeds that will last for all eternity (Phi. 4:17)."
  }
];

export default function ArmsOfPartnership() {
  return (
    <section className="bg-white text-zinc-900 w-full py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Header Section */}
        <div className="mb-16 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold">
            Arms of Partnership
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-anton)] text-3xl uppercase leading-[1.1] sm:text-4xl md:text-5xl text-zinc-900">
            Making a Global Impact
          </h2>
          <p className="mt-8 text-zinc-600 text-lg leading-relaxed">
            As a Global Ministry, our goal is to reach the unsaved where there is an established need and to facilitate the missionary work of the Gospel without limitations. Through your support, hundreds have come into their inheritance in Christ and have been empowered to live better lives.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((item, index) => (
            <div key={index} className="border border-zinc-100 p-8 rounded-3xl bg-zinc-50/50">
              <h3 className="font-[family-name:var(--font-anton)] text-xl uppercase tracking-wide text-zinc-900 mb-4">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-16 p-8 border-l-4 border-[#A6811D] bg-zinc-50">
          <p className="text-zinc-700 italic">
            You may also make a designated offering towards specific purposes (e.g., outreach efforts, mission trips, etc.) or individuals that are directly affiliated with or supported by our ministry.
          </p>
        </div>

      </div>
    </section>
  );
}