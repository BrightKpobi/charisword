import Image from "next/image";
import { Play } from "lucide-react";
import type { Sermon } from "@/data/sermons";

interface SermonCardProps {
  sermon: Sermon;
}

export default function SermonCard({ sermon }: SermonCardProps) {
  const formattedDate = new Date(sermon.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="group cursor-pointer flex flex-col w-full bg-transparent">
      {/* Cinematic Media Container */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-900 shadow-sm">
        <Image
          src={sermon.thumbnail}
          alt={sermon.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        
        {/* Soft dark vignette gradient always visible for better depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

        {/* Action Hover Layer */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[3px] transition-all duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C9A227] text-black shadow-xl transition-transform duration-300 scale-75 group-hover:scale-100">
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </div>
        </div>
      </div>

      {/* Info Details Panel */}
      <div className="flex flex-col pt-3.5 px-0.5 space-y-1">
        {/* Date Stamp */}
        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500">
          {formattedDate}
        </span>
        
        {/* Sermon Title */}
        <h3 className="line-clamp-2 text-[14px] font-semibold tracking-wide text-zinc-100 leading-snug transition-colors duration-200 group-hover:text-[#C9A227]">
          {sermon.title}
        </h3>
        
        {/* Preacher */}
        <p className="text-[13px] font-medium text-zinc-400">
          {sermon.preacher}
        </p>
      </div>
    </div>
  );
}