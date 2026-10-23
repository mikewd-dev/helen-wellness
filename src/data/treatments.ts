import type { Treatment } from "@/types/treatment";


export const featuredTreatments: Treatment[] = [
  {
    id: "swedish",
    name: "Swedish massage",
    options: [
      { durationMinutes: 45, priceGbp: 50 },
      { durationMinutes: 60, priceGbp: 60 },
      { durationMinutes: 90, priceGbp: 90 },
    ],
    summary: "Gentle, flowing strokes to ease tension and restore a sense of calm.",
    imageSrc: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',

  },
  {
    id: "combination-thai",
    name: "Combination thai massage",
    options: [
      { durationMinutes: 45, priceGbp: 55 },
      { durationMinutes: 60, priceGbp: 65 },
      { durationMinutes: 90, priceGbp: 90 },
    ],
    summary: "Focused work on stubborn tightness in the back, neck and shoulders.",
    imageSrc: 'https://plus.unsplash.com/premium_photo-1661407350987-9e9319ac11e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: "aroma-therapy",
    name: "Aroma therapy",
    options: [
      { durationMinutes: 30, priceGbp: 40 },
      { durationMinutes: 60, priceGbp: 60 },
      { durationMinutes: 90, priceGbp: 90 },
      { durationMinutes: 120, priceGbp: 120 },
    ],
    summary: "Warm stones and unhurried pressure for deep, lasting relaxation.",
    imageSrc: 'https://images.unsplash.com/photo-1636714507452-48716cfa1818?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'
  },
  {
    id: "deep-tissue",
    name: "Deep tissue massage",
    options: [
      { durationMinutes: 45, priceGbp: 55 },
      { durationMinutes: 60, priceGbp: 65 },
      { durationMinutes: 90, priceGbp: 90 },
      { durationMinutes: 120, priceGbp: 125 },
    ],
    summary: "Warm stones and unhurried pressure for deep, lasting relaxation.",
     imageSrc: 'https://plus.unsplash.com/premium_photo-1661505103296-a23f027f2dd1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  },

];
