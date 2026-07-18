import { Children } from "react";
import type { ReactNode } from "react";


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