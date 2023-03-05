export const initialAuthContext = {
  isLoggedIn: null,
  email: null,
  isVerified: null,
  userId: null,
  isLoading: false,
  tempPasswd: null,
  name: null,
};

export const defaultSignUpState = {
  email: "",
  password: "",
  name: "",
};

export const defaultSignUpError: { [key: string]: null | string } = {
  email: null,
  password: null,
  firstName: null,
  lastName: null,
};

export const defaultLoginState = {
  email: "",
  password: "",
};

export const defaultLoginError: { [key: string]: null | string } = {
  email: null,
  password: null,
};

export const defaultProfileState = {
  name: "",
  description: "",
  tiktokHandler: "",
};

export const defaultProfileError = {
  name: null,
  description: null,
  tiktokHandler: null,
};

export const defaultResetState = {
  code: "",
  password: "",
};

export const defaultResetError: { [key: string]: null | string } = {
  code: null,
  password: null,
};

export type UnAuthUserNameProps = {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
};
