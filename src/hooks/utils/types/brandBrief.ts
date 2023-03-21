import { BrandBrief } from "API";

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

export type IEditBriefResponse = {
  editBrief: (unknown) => void;
  data?: BrandBrief | null;
  loading: boolean;
  error?: Error;
};
