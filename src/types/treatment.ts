export interface TreatmentOption {
  durationMinutes: number;
  priceGbp: number;
}
export interface Treatment {
  id: string;
  name: string;
  options: TreatmentOption[];
  summary: string;
  imageSrc: string
}
