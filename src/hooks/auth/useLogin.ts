import {Auth, CognitoUser} from '@aws-amplify/auth';
import {useCallback, useContext, useState} from 'react';
import {
    ApiCustomHookStateType,
    ApiHookReturnType,
    apiInitialState,
    LoginPayloadType,
    getSuccessResponse,
    getErrorResponse,
} from 'hooks/utils';
import {AuthContextType} from 'state/types';
import {AuthContext} from 'state/auth';
import {IErrorContextType, loginErrorHeading, unverifiedUser, userNotExists} from 'utils';
import ErrorContext from 'state/error/error.context';
import {updateErrorState} from 'components';
import {useAuth0} from "@auth0/auth0-react";

export const useLogin = (): ApiHookReturnType<
    CognitoUser,
    LoginPayloadType
> => {
    const [res, setRes] =
        useState<ApiCustomHookStateType<CognitoUser>>(apiInitialState);
    const {setAuthState} = useContext<AuthContextType>(AuthContext);
    const {setErrorState, errorState} =
        useContext<IErrorContextType>(ErrorContext);
    const {getIdTokenClaims} = useAuth0()

    const performLogin = useCallback(
        async (payload: LoginPayloadType): Promise<void> => {
            const {email, password, username} = payload;
            setRes({...apiInitialState, isLoading: true});
            try {
                const response: CognitoUser = await Auth.signIn(email, password);
                setRes(getSuccessResponse<CognitoUser>(response));
            } catch (error) {
                const {message} = error;
                if (error?.message === userNotExists && username) {
                   await Auth.signUp({
                        username: email,
                        password,
                        attributes: {email, name: username}, clientMetadata: {token: await getIdTokenClaims().then(res => res?.__raw || '')}
                    })
                    setAuthState((current) => ({
                        ...current,
                        email,
                        tempPasswd: password,
                    }));
                }
                if (error?.message === unverifiedUser) {
                    setAuthState((current) => ({
                        ...current,
                        email,
                        tempPasswd: password,
                    }));
                    await Auth.resendSignUp(email);
                } else {
                    updateErrorState(
                        {title: loginErrorHeading, message},
                        setErrorState
                    );
                }
                setRes(getErrorResponse(message));
            }
        },
        [errorState]
    );
    return {res, performAction: performLogin};
};

export default useLogin;
