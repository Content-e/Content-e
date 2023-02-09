import { createContext } from "react";
import { initialAuthContext } from "utils";
import { AuthContextType, IUnAuthUserName } from "../types/authTypes";

export const AuthContext = createContext<AuthContextType>({
  authState: initialAuthContext,
  setAuthState: () => {},
});

export const UnAuthUserName = createContext<IUnAuthUserName>({
  fullName: "",
  setFullName: () => {},
});

export default AuthContext;
