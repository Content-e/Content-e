import { UnknownType } from 'utils';

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

export type UserTypeSetterProps = {
  setUserType: (unknown) => void;
  data?: UnknownType;
  loading: boolean;
  error?: Error;
};

export type UpdateUserProfileProps = {
  updateProfile: (unknown) => void;
  profileData?: UnknownType;
  loading: boolean;
  error?: Error;
};

export type ILinkTiktokAccountResponse = {
  linkTiktok: (unknown) => void;
  data?: UnknownType;
  loading: boolean;
  error?: Error;
};

export type IValidateTiktokAccessTokenResponse = {
  validateTiktokAccessToken: (unknown) => void;
  data?: UnknownType;
  loading: boolean;
  error?: Error;
};
