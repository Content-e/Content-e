import { Auth, CognitoUser } from "@aws-amplify/auth";
import { AuthContext } from "state/auth";
import { AuthContextType } from "state/types";
import { useCallback, useContext, useState } from "react";
import {
  ApiCustomHookStateType,
  apiInitialState,
  SignPayloadType,
  ApiHookReturnType,
  SignUpResponse,
  getSuccessResponse,
  getErrorResponse,
} from "hooks/utils";
import ErrorContext from "state/error/error.context";
import { IErrorContextType, signUpErrorHeading } from "utils";
import { updateErrorState } from "components";

export const useSignup = (): ApiHookReturnType<
  CognitoUser,
  SignPayloadType
> => {
  const [res, setRes] =
    useState<ApiCustomHookStateType<CognitoUser>>(apiInitialState);
  const { setAuthState } = useContext<AuthContextType>(AuthContext);
  const { setErrorState, errorState } =
    useContext<IErrorContextType>(ErrorContext);

  const performSignUp = useCallback(
    async (payload: SignPayloadType): Promise<void> => {
      const { email, password } = payload;
      setRes({ ...apiInitialState, isLoading: true });
      try {
        const response: SignUpResponse = await Auth.signUp({
          username: email,
          password,
          attributes: {
            email,
            "custom:role": "CLIENT_BASIC",
          },
        });
        setRes(getSuccessResponse<CognitoUser>(response.user));
        setAuthState((current) => ({
          ...current,
          email: response.user.getUsername(),
          isVerified: false,
          isLoggedIn: false,
          tempPasswd: password,
        }));
      } catch (error) {
        const { message } = error;
        setRes(getErrorResponse(message));
        updateErrorState({ title: signUpErrorHeading, message }, setErrorState);
      }
    },
    [errorState]
  );
  return { res, performAction: performSignUp };
};

export default useSignup;
