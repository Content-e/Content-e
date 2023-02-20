import React, { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory, useLocation } from "react-router-dom";
import * as S from "./styles";
import GoogleLogin from "./googleLogin";
import {
  defaultResetError,
  defaultResetState,
  UnAuthRoutes,
  UnknownType,
  unverifiedUser,
} from "utils";
import { validateVerificationCode, validatePassword } from "state/auth";
import { useResetPass } from "hooks";

export const ResetPassword: FC = () => {
  const history = useHistory();
  const { state } = useLocation();

  const {
    res: { isLoading, error, success },
    performAction,
  } = useResetPass();

  const [formState, setFormState] = useState(defaultResetState);
  const [formError, setFormError] = useState(defaultResetError);

  const validateResetForm = (): boolean => {
    const code = validateVerificationCode(formState.code);
    const password = validatePassword(formState.password);
    if (code || password) {
      setFormError({ code, password });
      return false;
    }
    return true;
  };

  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const onSignUp = (): void => history.push(UnAuthRoutes.Register);
  const onReset = (): void => {
    if (validateResetForm()) performAction(formState);
  };

  useEffect(() => {
    if (error === unverifiedUser)
      history.push(UnAuthRoutes.Reverify, { ...formState });
    else if (success) history.push(UnAuthRoutes.Login);
  }, [success, error]);

  useEffect(() => {
    const { email } = (state as UnknownType) || {};
    if (!email) history.push(UnAuthRoutes.Login);
  }, [state]);

  const commonProps = {
    handlers: { state: formState, error: formError, updateState },
  };

  return (
    <S.LoginWrapper>
      <S.LoginBanner>
        <img src="/images/background.png" />
      </S.LoginBanner>
      <S.LoginCanvas>
        <S.TopHeading>Content-e</S.TopHeading>
        <S.SmHeading>Powered by Brain-e</S.SmHeading>
        <S.Title>
          Welcome to Content-e, use the form below to login or sign up.
        </S.Title>
        <S.InputCanvas>
          <Input {...commonProps} keyProp="code" label="Verification Code" />
          <Input
            {...commonProps}
            type="password"
            keyProp="password"
            label="Password"
          />
        </S.InputCanvas>

        <S.AuthButton onClick={onReset} disabled={isLoading}>
          Reset Password {isLoading && <IconLoader />}
        </S.AuthButton>
        <GoogleLogin />
        <S.AuthOtherOption>
          Don't have an account?
          <S.AuthButtonWhite onClick={onSignUp}>Sign up</S.AuthButtonWhite>
        </S.AuthOtherOption>
      </S.LoginCanvas>
    </S.LoginWrapper>
  );
};

export default ResetPassword;
