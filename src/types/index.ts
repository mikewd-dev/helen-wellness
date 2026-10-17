export interface ServiceItem {
    id: string;
    title: string;
    description: string;
    durationMinutes: number;
    priceGBP: number;
    popular?: boolean;
    imageSrc: string;
  }
  
  export interface BookingPolicy {
    depositAmountGBP: number;
    cancellationNoticeHours: number;
  }