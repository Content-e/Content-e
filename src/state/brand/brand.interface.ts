import { BrandProfile, CreateBrandProfileInput } from "API";

export interface BrandProps {
  updateData: (data: CreateBrandProfileInput) => void;
  data?: BrandProfile | null;
  loading: boolean;
}

export interface IMeterValue {
  percentage: number;
  degree: number;
}
