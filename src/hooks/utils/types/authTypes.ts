import { CognitoUser } from "@aws-amplify/auth";

export type SignPayloadType = {
  email: string;
  password: string;
};

export type ApiCustomHookStateType<T> = {
  isLoading: boolean;
  data: T | null;
  error: string | null;
  success: boolean;
};

export type SignUpResponse = {
  user: CognitoUser;
  userConfirmed: boolean;
  userSub: string;
};

export type GetSuccessResponseType<T> = {
  data: T;
  success: boolean;
  isLoading: boolean;
  error: string | null;
};

export type ConfirmPayloadType = {
  code: string;
};

export type ApiHookReturnType<R, A> = {
  res: ApiCustomHookStateType<R>;
  performAction: (payload: A) => Promise<void>;
};

export type ApiHookReturnTypeWithoutParams<R> = {
  res: ApiCustomHookStateType<R>;
  performAction: () => Promise<void>;
};

export type ApiHookReturnActionType = {
  performAction: () => void;
};

export type AuthStateType = {
  isLoggedIn: boolean | null;
  email: string | null;
  isVerified: null | boolean;
  userId: string | null;
  isLoading: boolean;
};

export type ChangePassowrdPayloadType = {
  oldPassword: string;
  newPassword: string;
};

export type SubmitPassowrdPayloadType = {
  code: string;
  password: string;
};
