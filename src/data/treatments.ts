import type { Treatment } from "@/types/treatment";

export const featuredTreatments: Treatment[] = [
  {
    id: "swedish",
    name: "Swedish massage",
    durationMinutes: 60,
    priceGbp: 65,
    summary: "Gentle, flowing strokes to ease tension and restore a sense of calm.",
  },
  {
    id: "deep-tissue",
    name: "Deep tissue",
    durationMinutes: 60,
    priceGbp: 75,
    summary: "Focused work on stubborn tightness in the back, neck and shoulders.",
  },
  {
    id: "hot-stones",
    name: "Hot stone therapy",
    durationMinutes: 75,
    priceGbp: 90,
    summary: "Warm stones and unhurried pressure for deep, lasting relaxation.",
  },
];
