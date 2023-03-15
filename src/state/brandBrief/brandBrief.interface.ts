import { BrandBrief, BrandProfile } from "API";

export interface BrandBriefProps {
  data?: Array<BrandBrief | null>;
  loading?: boolean;
  brand?: BrandProfile | null;
}

export interface IMeterValue {
  percentage: number;
  degree: number;
}

export interface ICreativeEntry {
  creativeLink?: string | null;
  creatorHandle?: string | null;
  briefName?: string | null;
  status?: string | null;
  id: string;
}
