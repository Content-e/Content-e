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
  firstName: "",
  lastName: "",
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

export type UnAuthUserNameProps = {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
};
