import React, { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import GoogleLogin from "./googleLogin";
import Checkbox from "./checkbox";
import {
  AuthProps,
  defaultLoginError,
  defaultLoginState,
  UnAuthRoutes,
  unverifiedUser,
} from "utils";
import { validateEmail, validatePassword, withAuth } from "state/auth";
import { useLogin } from "hooks";

export const Login: FC<AuthProps> = ({ getAuth }) => {
  const history = useHistory();
  const {
    res: { isLoading, error, success },
    performAction,
  } = useLogin();

  const [formState, setFormState] = useState(defaultLoginState);
  const [formError, setFormError] = useState(defaultLoginError);

  const validateSignUpForm = (): boolean => {
    const email = validateEmail(formState.email);
    const password = validatePassword(formState.password);
    if (email || password) {
      setFormError({ email, password });
      return false;
    }
    return true;
  };

  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const onLogin = (): void => {
    if (validateSignUpForm()) performAction(formState);
  };
  const onSignUp = (): void => history.push(UnAuthRoutes.Register);
  const onForget = (): void => {};

  useEffect(() => {
    if (error === unverifiedUser)
      history.push(UnAuthRoutes.Reverify, { ...formState });
    else if (success) getAuth();
  }, [success, error]);

  const commonProps = {
    handlers: { state: formState, error: formError, updateState },
  };

  return (
    <S.LoginWrapper>
      <S.LoginCanvas>
        <S.TopHeading>Content-e</S.TopHeading>
        <S.SmHeading>Powered by Brain-e</S.SmHeading>
        <S.Title>
          Welcome to Content-e, use the form below <br /> to login or sign up.
        </S.Title>
        <S.InputCanvas>
          <Input {...commonProps} placeholder="Email Address" keyProp="email" />
          <Input
            {...commonProps}
            type="password"
            placeholder="Password"
            keyProp="password"
          />
        </S.InputCanvas>
        <S.InfoBox>
          <S.InfoTextWrapper>
            <Checkbox />
            <S.InfoText>Remember me</S.InfoText>
          </S.InfoTextWrapper>
          <S.InfoTextLink onClick={onForget}>Forgot Password</S.InfoTextLink>
        </S.InfoBox>

        <S.ButtonWrapper>
          <S.AuthButton onClick={onLogin} disabled={isLoading}>
            Login {isLoading && <IconLoader />}
          </S.AuthButton>
          <S.AuthButtonWhite onClick={onSignUp}>Sign up</S.AuthButtonWhite>
        </S.ButtonWrapper>

        <GoogleLogin />
      </S.LoginCanvas>
    </S.LoginWrapper>
  );
};

export default withAuth(Login);
