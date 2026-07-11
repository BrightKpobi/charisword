"use client";

import { useState, useEffect } from "react";

interface FaithPoint {
  title: string;
  description: string;
}

/**
 * StatementOfFaith Slider Component
 * -----------------------------------------------------------------------
 * Structure:
 * - Background: Solid clean white (`bg-white`).
 * - Layout: Stacked architecture. Title stays on top, slide track sits below it.
 * - Grid Alignment: Each slide contains 2 statements shown side-by-side (2-column layout).
 * - Pagination: Circular navigation dots perfectly centered horizontally.
 * -----------------------------------------------------------------------
 */
export default function StatementOfFaith() {
  const [activeIndex, setActiveIndex] = useState(0);

  const statements: FaithPoint[] = [
    {
      title: "THE HOLY SPIRIT",
      description: "We believe that The Bible contains the Inspired and Infallible Word of God, Inerrant and Final in Authority. (2Tim 3:16, 2Peter 1:20-21)"
    },
    {
      title: "RESURRECTION OF THE JUST & THE UNJUST",
      description: "We believe in the final resurrection of both the just and the unjust. (Acts 24:15, Rev 20:12-13)."
    },
    {
      title: "MAN'S FALL & SALVATION",
      description: "We believe that by Adam, sin entered the world and death by sin. All Men were made sinners apart from their deeds. Much more also in Christ, all are made alive and Righteous through Faith apart from their deeds. (Rom 3:23, Rom 5:12-21, 1Cor 15:21-22, Rom 3:21-22, Gal 3:11). We believe in Salvation by Grace through Faith apart from works. It is obtained and maintained by Grace alone. God has made it available unto all men as a gift and must be received. (Eph 2:8-10, 2Tim 1:9, Titus 2:11)"
    },
    {
      title: "GODHEAD",
      description: "We believe that there is only one God, Eternally Existing in Three Persons - Father, Son and Holy Spirit - Coessential, yet distinct Persons. (Eph 4:5-6, Gen 1:1&26, Matt 3:16-17, Matt 28:19) We believe in the Deity of Christ (Jn 1:1-4, Jn 10:30, Heb 1:1-5), in His Virgin Birth (Matt 1:18-25, Luke 1:30-35), in His Sinless Life (1Peter 2:22, Heb 4:15), in His Atoning Death on the cross (Jn 19:30-35, 2Cor 5:14, 1Jhn 2:2), in His bodily Resurrection (Jn 20:25-29, Luke 24:36-40), in His Ascension into Heaven (Mark 16:19, Luke 24:51, Acts 1:9-10) and in His Rapture of the church (1Thes 4:16-17) and His Second Coming (Acts 1:11)"
    },
    {
      title: "DIVINE HEALTH & HEALING",
      description: "We believe that the redemptive work of Christ on the cross provides the legal basis for Divine Health and Healing. (Isa 53:4-5, 1Peter 2:24)"
    },
    {
      title: "ETERNAL LIFE & NEW BIRTH",
      description: "We believe that the Regeneration or Rebirth is by the agency of the Holy Spirit via the Word of God. The regenerated man is a New Creation and a possessor or a partaker of Eternal Life – The Very Nature of God. (Titus 3:5, Jn 3:3-5, Eph 5:25-27, 1Peter 1:23, James 1:18, 2Cor 5:17)"
    },
    {
      title: "JUSTIFICATION & SANCTIFICATION",
      description: "Justification is to be declared righteous and not guilty forever. It is solely the work of God, and it is received by faith in Christ apart from works. God justifies the sinner, whereas the new creation is referred to as \"the just one\". Christ is our Justification. (Rom 5:1, Rom 4:5, Gal 2:16, Gal 3:11, 1Cor 1:30, 1Cor 6:11, Acts 13:39). Sanctification is to be made holy, consecrated, set apart, or purified unto God for special use. It is our ultimate separation from the world unto God. Our sanctification began when we were justified. (Heb 10:10, 1Cor 1:12, 1Cor 6:11, Heb 2:11, Jude 1:1, 1Thes 5:23, Rom 12:1-2)"
    },
    {
      title: "WATER BAPTISM & COMMUNION",
      description: "We believe that water Baptism is by immersion and symbolizes the believer’s identification with Christ in His death, burial, and resurrection. (Matt 3:13-17, Rom 6:3-5). We believe in the Lord’s Supper (Holy Communion) as a memorial of Christ’s suffering and death. (1Cor 11:23-26)."
    }
  ];

  const groupedSlides: FaithPoint[][] = [];
  for (let i = 0; i < statements.length; i += 2) {
    groupedSlides.push(statements.slice(i, i + 2));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % groupedSlides.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [groupedSlides.length]);

  return (
    <section className="bg-white text-zinc-900 border-t border-zinc-100 w-full overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 flex flex-col gap-16">
        
        {/* Top Header Block */}
        <div className="w-full text-left select-none">
          <p className="text-xs uppercase tracking-[0.3em] text-[#A6811D] font-semibold mb-3">
            Core Convictions
          </p>
          <h2 className="font-[family-name:var(--font-anton)] text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-zinc-900 leading-none">
            Our Statement of Faith
          </h2>
        </div>

        {/* Bottom Slide Block */}
        <div className="w-full relative overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out will-change-transform"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {groupedSlides.map((slidePair, slideIdx) => (
              <div 
                key={slideIdx} 
                className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 box-border pr-2"
              >
                {slidePair.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col items-start justify-start">
                    <div className="w-full border-b border-zinc-100 pb-3 mb-4 flex justify-between items-baseline">
                      <h3 className="text-sm uppercase tracking-[0.2em] text-[#A6811D] font-bold">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Centered Circular Navigation Dots */}
          <div className="flex gap-2.5 mt-12 justify-center items-center w-full">
            {groupedSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveIndex(dotIdx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === dotIdx ? "bg-[#A6811D] scale-110" : "bg-zinc-200 hover:bg-zinc-300"
                }`}
                aria-label={`Show slide cluster ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}