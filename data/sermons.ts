// sermons.ts
// This file contains the data for the sermons page

export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  thumbnail: string;
}

export const sermons: Sermon[] = [
  {
    id: "1",
    title: "Walking in Faith Through Uncertainty",
    preacher: "Pastor John Mensah",
    date: "2026-06-07",
    thumbnail:
      "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "The Power of Surrendered Worship",
    preacher: "Pastor John Mensah",
    date: "2026-05-31",
    thumbnail:
      "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Grace That Sustains",
    preacher: "Rev. Abena Owusu",
    date: "2026-05-24",
    thumbnail:
      "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Living a Life of Purpose",
    preacher: "Pastor John Mensah",
    date: "2026-05-17",
    thumbnail:
      "https://images.unsplash.com/photo-1522158637959-30385a09e0da?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "5",
    title: "Renewed Strength in the Spirit",
    preacher: "Rev. Abena Owusu",
    date: "2026-05-10",
    thumbnail:
      "https://images.unsplash.com/photo-1579975096649-e773152b04cb?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "6",
    title: "The Heart of True Discipleship",
    preacher: "Elder Kwame Asante",
    date: "2026-05-03",
    thumbnail:
      "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "7",
    title: "Standing Firm in the Word",
    preacher: "Pastor John Mensah",
    date: "2026-04-26",
    thumbnail:
      "https://images.unsplash.com/photo-1508829040592-72f179f8a73f?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "8",
    title: "Prayer That Moves Mountains",
    preacher: "Rev. Abena Owusu",
    date: "2026-04-19",
    thumbnail:
      "https://images.unsplash.com/photo-1543702404-38c2035462ad?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "9",
    title: "Community, Covenant, and Calling",
    preacher: "Elder Kwame Asante",
    date: "2026-04-12",
    thumbnail:
      "https://images.unsplash.com/photo-1528828085966-aff4e01c5f2b?w=800&q=80&auto=format&fit=crop",
  },
  {
    id: "10",
    title: "A Song of Restoration",
    preacher: "Pastor John Mensah",
    date: "2026-04-05",
    thumbnail:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&q=80&auto=format&fit=crop",
  },
];