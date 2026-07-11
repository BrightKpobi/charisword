import { Children } from "react";
import type { ReactNode } from "react";

/**
 * StickyStack
 * -----------------------------------------------------------------------
 * Wrap page sections in this to get the "next section rises up and
 * slides over the current one" scroll effect (seen on sites like Apple
 * and Stripe). Each direct child becomes `position: sticky; top: 0`
 * with an increasing z-index, so as the person scrolls:
 *
 *   1. The current section stays pinned to the top of the viewport.
 *   2. The next section, further down in normal document flow, keeps
 *      scrolling up underneath it...
 *   3. ...until it reaches the top, at which point its higher z-index
 *      makes it slide over and cover the previous section completely.
 *
 * Usage on the homepage:
 *
 *   import StickyStack from "@/components/StickyStack";
 *   import Hero from "@/components/Hero";
 *   import Welcome from "@/components/Welcome";
 *   import Footer from "@/components/Footer";
 *
 *   export default function Page() {
 *     return (
 *       <>
 *         <MegaNavbar />
 *         <StickyStack>
 *           <Hero />
 *           <Welcome />
 *           {/* add more sections here — order = stacking order *\/}
 *         </StickyStack>
 *         <Footer />
 *       </>
 *     );
 *   }
 *
 * Notes:
 * - Only wrap sections you want part of the stacking effect. Footer
 *   usually sits outside it, in normal flow, so it doesn't get pinned.
 * - Each child needs its own opaque background (Hero and Welcome
 *   already do) — sticky only looks right if the incoming section
 *   fully covers the one behind it.
 * - Don't wrap this in a parent with `overflow: hidden` / `overflow:
 *   auto` — that breaks `position: sticky` in most browsers.
 * - No JavaScript, no scroll listeners — this is CSS-driven, so it
 *   stays smooth and respects the person's normal scroll behavior
 *   (including reduced-motion setups, since nothing animates on a
 *   timer — it only moves in step with the scroll itself).
 * -----------------------------------------------------------------------
 */

export default function StickyStack({ children }: { children: ReactNode }) {
  const sections = Children.toArray(children);

  return (
    <div className="relative">
      {sections.map((section, index) => (
        <div
          key={index}
          className="sticky top-0"
          style={{ zIndex: index + 1 }}
        >
          {section}
        </div>
      ))}
    </div>
  );
}