import React, { FC, useEffect, useMemo, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import GoogleLogin from "./googleLogin";
import { defaultSignUpError, defaultSignUpState, UnAuthRoutes } from "utils";
import { useSignup } from "hooks";
import { validateEmail, validatePassword, withAuth } from "state/auth";

export const Reverify: FC = () => {
  const history = useHistory();
  const {
    performAction,
    res: { isLoading, success },
  } = useSignup();

  const [signUpState, setSignUpState] = useState(defaultSignUpState);
  const [signUpError, setSignUpError] = useState(defaultSignUpError);

  const updateState = (key: string, value: string): void => {
    setSignUpError((prev) => ({ ...prev, [key]: null }));
    setSignUpState((prev) => ({ ...prev, [key]: value }));
  };

  const validateSignUpForm = (): boolean => {
    const emailError = validateEmail(signUpState.email);
    const passwordError = validatePassword(signUpState.password);
    const notValidated = emailError || passwordError;
    if (notValidated)
      setSignUpError({ email: emailError, password: passwordError });
    return !!notValidated;
  };

  const onLogin = (): void => history.push(UnAuthRoutes.Login);
  const onSignUp = (): void => {
    if (!validateSignUpForm()) performAction(signUpState);
  };

  const isSubmittable = useMemo(
    () => Object.values(signUpError).every((item) => item === null),
    [signUpError]
  );

  useEffect(() => {
    if (success) {
      const { email } = signUpState;
      history.push(UnAuthRoutes.Login, { state: { email } });
    }
  }, [success]);

  const commonProps = {
    handlers: { state: signUpState, error: signUpError, updateState },
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
          <Input {...commonProps} placeholder="Password" keyProp="password" />
        </S.InputCanvas>

        <S.ButtonWrapper>
          <S.AuthButton
            onClick={onSignUp}
            disabled={isLoading || !isSubmittable}
          >
            Sign up {isLoading && <IconLoader />}
          </S.AuthButton>
          <S.AuthButtonWhite onClick={onLogin}>Login</S.AuthButtonWhite>
        </S.ButtonWrapper>

        <GoogleLogin />
      </S.LoginCanvas>
    </S.LoginWrapper>
  );
};

export default withAuth(Reverify);
