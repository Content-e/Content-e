import { UnknownType } from "utils";

export type GetUserProfileProps = {
  getProfile: (unknown) => void;
  profileData?: UnknownType;
  loading: boolean;
  error?: Error;
};

export type CreateUserProfileProps = {
  createProfile: (unknown) => void;
  profileData?: UnknownType;
  loading: boolean;
  error?: Error;
};
