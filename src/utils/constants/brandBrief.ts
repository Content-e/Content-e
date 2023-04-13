import { ICreateBriefError, ICreateBriefState } from "state/brandBrief";
import { AuthRoutes, BrandRoutes } from "./routes";

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

export enum BrandErrorModal {
  NO_BRAND = "NO_BRAND",
  NO_TIKTOK_LINK = "NO_TIKTOK_LINK",
}

export const BrandErrorData = {
  [BrandErrorModal.NO_BRAND]: {
    heading: "Brand profile not complete",
    // eslint-disable-next-line max-len
    body: "Before you can add a Campaign Brief please complete your Brand profile, you can complete this by clicking Brand Profile in the navigation.",
    link: BrandRoutes.Brand,
  },
  [BrandErrorModal.NO_TIKTOK_LINK]: {
    heading: "Tiktok account not linked",
    body: "Before you can add a Campaign Brief please link your account with tiktok.",
    link: AuthRoutes.EditProfile,
  },
};
