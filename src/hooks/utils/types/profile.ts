import { UnknownType } from "utils";

export type GetUserProfileProps = {
  getProfile: (unknown) => void;
  profileData?: UnknownType;
  loading: boolean;
  error?: Error;
  isProfileExists: boolean;
};

export type CreateUserProfileProps = {
  createProfile: (unknown) => void;
  profileData?: UnknownType;
  loading: boolean;
  error?: Error;
};
