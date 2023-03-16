import { ICreateBriefError, ICreateBriefState } from "state/brandBrief";

export const initialCreateBriefState: ICreateBriefState = {
  BriefName: "",
  vertical: "",
  objective: "",
  brandBriefDetails: "",
  creativeInspirations: [] as Array<string>,
  active: "",
};

export const initialCreateBriefError: ICreateBriefError = {
  BriefName: null,
  vertical: null,
  objective: null,
  brandBriefDetails: null,
  creativeInspirations: null,
  active: null,
};
