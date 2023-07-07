import { BrandBrief, BrandProfile } from 'API';

export interface BrandBriefProps {
  data?: Array<BrandBrief | null>;
  loading?: boolean;
  brand?: BrandProfile | null;
  isTiktokLinked: boolean;
}

export interface SaveBriefProps {
  saveData: (data: ICreateBriefState) => Promise<void>;
  getAdGroups: (campaignId: string) => void;
  briefState?: ICreateBriefState;
  loading: boolean;
  response?: BrandBrief | null;
  dataLoading: boolean;
  listAdGroups: Array<ISelectDropdown>;
  listCampaigns: Array<ISelectDropdown>;
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
  authCode: string;
}

export interface ICreateBriefState {
  BriefName: string;
  tiktokHandle: string;
  vertical: string;
  objective: string;
  brandBriefDetails: string;
  creativeInspirations: Array<string>;
  campaignId: string;
  adgroupId: string;
  active: boolean;
  id?: string;
}
export interface ICreateBriefError {
  BriefName: string | null;
  vertical: string | null;
  objective: string | null;
  brandBriefDetails: string | null;
  creativeInspirations: string | null;
  active: string | null;
  campaignId: string | null;
  adgroupId: string | null;
}

export interface ITikTokAccess {
  access_token: string;
  advertiser_id: string;
}

export interface ITikTokCreds {
  token: string;
  advertiser_id: string;
}

export interface ISelectDropdown {
  id: string;
  value: string;
}
