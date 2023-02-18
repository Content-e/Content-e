import { BrandProfile, CreateBrandProfileInput } from "API";

export interface BrandProps {
  updateData: (data: CreateBrandProfileInput) => void;
  data?: BrandProfile;
}

export interface IMeterValue {
  percentage: number;
  degree: number;
}
