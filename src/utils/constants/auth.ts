export const initialAuthContext = {
  isLoggedIn: null,
  email: null,
  isVerified: null,
  userId: null,
  isLoading: false,
  tempPasswd: null,
};

export const defaultSignUpState = {
  fullName: "",
  email: "",
  password: "",
};

export const defaultSignUpError: { [key: string]: null | string } = {
  fullName: null,
  email: null,
  password: null,
};

export const defaultInfoState = {
  companyName: "",
  companyIndustry: "",
  address: "",
  city: "",
  country: "",
  phone: "",
};

export const defaultInfoError: { [key: string]: string | null } = {
  companyName: null,
  companyIndustry: null,
  address: null,
  city: null,
  country: null,
  phone: null,
};

export const defaultLoginState = {
  email: "",
  password: "",
};

export const defaultLoginError: { [key: string]: null | string } = {
  email: null,
  password: null,
};

export const companyDetailsKey = "companyDetails";
export const personalDetailsKey = "personalDetails";
export const MIN_NAME_LENGTH = 3;

export type UnAuthUserNameProps = {
  fullName: string;
  setFullName: React.Dispatch<React.SetStateAction<string>>;
};
