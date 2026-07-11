import { sermons } from "@/data/sermons";
import SermonCard from "./SermonCard";

export default function SermonCardGrid() {
  return (
    /* Expanded the width parameters to let the grid breathe side-by-side with your navigation boundaries */
    <div className="w-full mx-auto px-6 lg:w-[92%] lg:max-w-7xl lg:px-0 py-12">
      <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {sermons.map((sermon) => (
          <SermonCard key={sermon.id} sermon={sermon} />
        ))}
      </div>
    </div>
  );
}