import { ICreateBriefError, ICreateBriefState } from "state/brandBrief";

export const initialCreateBriefState: ICreateBriefState = {
  BriefName: "",
  tiktokHandle: "",
  vertical: "",
  objective: "",
  brandBriefDetails: "",
  creativeInspirations: [] as Array<string>,
  active: true,
  campaignId: "",
  adgroupId: "",
};

export const initialCreateBriefError: ICreateBriefError = {
  BriefName: null,
  vertical: null,
  objective: null,
  brandBriefDetails: null,
  creativeInspirations: null,
  active: null,
  campaignId: null,
  adgroupId: null,
};
