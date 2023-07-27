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
import {AuthRoutes, IErrorContextType, loginErrorHeading, unverifiedUser, userNotExists} from 'utils';
import ErrorContext from 'state/error/error.context';
import {updateErrorState} from 'components';
import {useAuth0} from "@auth0/auth0-react";
import {useHistory} from "react-router-dom";

export const useLogin = (): ApiHookReturnType<
    CognitoUser,
    LoginPayloadType
> => {
    const [res, setRes] =
        useState<ApiCustomHookStateType<CognitoUser>>(apiInitialState);
    const {setAuthState} = useContext<AuthContextType>(AuthContext);
    const {setErrorState, errorState} =
        useContext<IErrorContextType>(ErrorContext);
    const history = useHistory()
    const {getIdTokenClaims} = useAuth0()

    const performLogin = useCallback(
        async (payload: LoginPayloadType): Promise<void> => {
            let error: Error | null = null;
            const {email, password, username} = payload;
            setRes({...apiInitialState, isLoading: true});
            let response: CognitoUser | null = null;
            try {
                response = await Auth.signIn(email, password);
            } catch (err) {
                error = err;
            }
            if (error) {
                const {message} = error;
                try {
                    if (error?.message === userNotExists && username) {
                        const token = await getIdTokenClaims().then(res => res?.__raw || '')
                        await Auth.signUp({
                            username: email,
                            password,
                            attributes: {email, name: username},
                            clientMetadata: {token},
                            autoSignIn: {enabled: true, validationData: {token}}
                        })
                        response = await Auth.signIn(email, password);
                    } else {
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
                } catch (e) {
                    setRes(getErrorResponse(`${e.message} | ${message}`));
                }
            }

            if (response) {
                setRes(getSuccessResponse<CognitoUser>(response));
                history.replace(AuthRoutes.Dashboard)
                window.location.reload()
            }
        },
        [errorState]
    );
    return {res, performAction: performLogin};
};

export default useLogin;
