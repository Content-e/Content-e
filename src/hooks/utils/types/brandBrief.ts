import { BrandBrief } from 'API';

export type IUpdateBriefResponse = {
  updateStatus: (unknown) => void;
  response?: any;
  loading: boolean;
  error?: Error;
};

export type ICreateBriefResponse = {
  createBrief: (unknown) => void;
  data?: BrandBrief | null;
  loading: boolean;
  error?: Error;
};

export type IGetCampaignsListResponse = {
  getCampaignList: (unknown) => void;
  data?: string | null;
  loading: boolean;
  error?: Error;
};

export type IGetAdGroupsListResponse = {
  getAdGroupList: (unknown) => void;
  data?: string | null;
  loading: boolean;
  error?: Error;
};

export type IEditBriefResponse = {
  editBrief: (unknown) => void;
  data?: BrandBrief | null;
  loading: boolean;
  error?: Error;
};

export type IUseCreateAdResponse = {
  createAd: (unknown) => void;
  data?: boolean | null;
  loading: boolean;
  error?: Error;
};

export type IUseGetVideoUrlResponse = {
  getVideoUrl: (unknown) => void;
  url?: string | null;
  loading: boolean;
  error?: Error;
};
