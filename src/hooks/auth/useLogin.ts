import { Auth, CognitoUser } from '@aws-amplify/auth';
import { useCallback, useContext, useState } from 'react';
import {
  ApiCustomHookStateType,
  ApiHookReturnType,
  apiInitialState,
  LoginPayloadType,
  getSuccessResponse,
  getErrorResponse,
} from 'hooks/utils';
import { AuthContextType } from 'state/types';
import { AuthContext } from 'state/auth';
import { IErrorContextType, loginErrorHeading, unverifiedUser } from 'utils';
import ErrorContext from 'state/error/error.context';
import { updateErrorState } from 'components';

export const useLogin = (): ApiHookReturnType<
  CognitoUser,
  LoginPayloadType
> => {
  const [res, setRes] =
    useState<ApiCustomHookStateType<CognitoUser>>(apiInitialState);
  const { setAuthState } = useContext<AuthContextType>(AuthContext);
  const { setErrorState, errorState } =
    useContext<IErrorContextType>(ErrorContext);

  const performLogin = useCallback(
    async (payload: LoginPayloadType): Promise<void> => {
      const { email, password } = payload;
      setRes({ ...apiInitialState, isLoading: true });
      try {
        const response: CognitoUser = await Auth.signIn(email, password);
        setRes(getSuccessResponse<CognitoUser>(response));
      } catch (error) {
        const { message } = error;
        if (error?.message === unverifiedUser) {
          setAuthState((current) => ({
            ...current,
            email,
            tempPasswd: password,
          }));
          Auth.resendSignUp(email);
        } else {
          updateErrorState(
            { title: loginErrorHeading, message },
            setErrorState
          );
        }
        setRes(getErrorResponse(message));
      }
    },
    [errorState]
  );
  return { res, performAction: performLogin };
};

export default useLogin;
