import React, { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import GoogleLogin from "./googleLogin";
import { UnAuthRoutes } from "utils";
import { useForgetPass } from "hooks";
import { validateEmail, withAuth } from "state/auth";

export const ForgetPassword: FC = () => {
  const history = useHistory();
  const {
    performAction,
    res: { isLoading, success },
  } = useForgetPass();

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const updateState = (_: string, value: string): void => {
    setEmail(value);
  };

  const validateSignUpForm = (): boolean => {
    const error = validateEmail(email);
    setEmailError(error);
    return !!error;
  };

  const onSignUp = (): void => history.push(UnAuthRoutes.Register);
  const onForget = (): void => {
    if (!validateSignUpForm()) performAction(email);
  };

  useEffect(() => {
    if (success) history.push(UnAuthRoutes.ResetPassword, { email });
  }, [success]);

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
          <Input
            keyProp={email}
            value={email}
            errorVal={emailError}
            label="Username"
            handlers={{ updateState }}
          />
        </S.InputCanvas>

        <S.AuthButton onClick={onForget} disabled={isLoading || !!emailError}>
          Submit {isLoading && <IconLoader />}
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

export default withAuth(ForgetPassword);
