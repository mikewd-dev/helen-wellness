import { ServiceItem, BookingPolicy } from '@/types';

export const BOOKING_POLICY: BookingPolicy = {
  depositAmountGBP: 20,
  cancellationNoticeHours: 24,
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'deep-tissue',
    title: 'Deep Tissue Massage',
    description: 'Targeted pressure to relieve chronic muscle tension, tightness, and deep-seated strain.',
    durationMinutes: 60,
    priceGBP: 55,
    popular: true,
    imageSrc: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'swedish-relaxation',
    title: 'Swedish Relaxation Massage',
    description: 'A gentle, flowing full-body massage designed to soothe nervous tension and promote deep sleep.',
    durationMinutes: 60,
    priceGBP: 50,
    imageSrc: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'hot-stone',
    title: 'Hot Stone Therapy',
    description: 'Smooth heated basalt stones melt away stubborn stiffness, restoring circulatory flow.',
    durationMinutes: 75,
    priceGBP: 65,
    popular: true,
    imageSrc: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1200&auto=format&fit=crop',
  },
];