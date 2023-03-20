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
  videoLink?: string | null;
  creatorHandle?: string | null;
  briefName?: string | null;
  status?: string | null;
  briefId: string;
  id: string;
}

export interface ISelectredRequest {
  requestId: string;
  briefId: string;
}

export interface ICreateBriefState {
  BriefName: string;
  tiktokHandle: string;
  vertical: string;
  objective: string;
  brandBriefDetails: string;
  creativeInspirations: Array<string>;
  active: boolean;
}
export interface ICreateBriefError {
  BriefName: string | null;
  vertical: string | null;
  objective: string | null;
  brandBriefDetails: string | null;
  creativeInspirations: string | null;
  active: string | null;
}
