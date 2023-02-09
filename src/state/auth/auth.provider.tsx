import React, { ReactNode, useState } from "react";
import { AuthContext, UnAuthUserName } from "state/auth";
import { initialAuthContext } from "utils";
import { AuthStateType } from "../types/authTypes";

interface BaseLayoutProps {
  children?: ReactNode;
}

export const AuthProvider: React.FC<BaseLayoutProps> = (props) => {
  const [authState, setAuthState] = useState<AuthStateType>(initialAuthContext);
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export const UnAuthFullNameProvider: React.FC<BaseLayoutProps> = (props) => {
  const [fullName, setFullName] = useState<string>("");
  return (
    <UnAuthUserName.Provider value={{ fullName, setFullName }}>
      {props.children}
    </UnAuthUserName.Provider>
  );
};
