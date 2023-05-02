import { UnknownType } from "utils";

export interface ViewRequestProps {
  approveRequest: (createAdPayload: UnknownType) => void;
  rejectRequest: () => void;
  getVideoLink: (id?: string) => void;
  loading: boolean;
  videoUrl?: string;
  errorMsg?: string;
  isSuccess: boolean;
}
