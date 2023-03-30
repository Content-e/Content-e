import {
  ICreateBestPractice,
  ICreateBestPracticeError,
} from "state/bestPractice";

export const initialCreatePracticeState: ICreateBestPractice = {
  headLine: "",
  description: "",
  urlPath: "",
  active: "true",
  id: "",
};

export const initialCreatePracticeError: ICreateBestPracticeError = {
  headLine: null,
  description: null,
  urlPath: null,
};
