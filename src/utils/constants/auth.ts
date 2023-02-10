export const initialAuthContext = {
  isLoggedIn: null,
  email: null,
  isVerified: null,
  userId: null,
  isLoading: false,
  tempPasswd: null,
};

export const defaultSignUpState = {
  email: "",
  password: "",
};

export const defaultSignUpError: { [key: string]: null | string } = {
  email: null,
  password: null,
};

export const defaultLoginState = {
  email: "",
  password: "",
};

export const defaultLoginError: { [key: string]: null | string } = {
  email: null,
  password: null,
};

export type UnAuthUserNameProps = {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
};
