import React, { FC, useEffect, useMemo, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import GoogleLogin from "./googleLogin";
import { defaultSignUpError, defaultSignUpState, UnAuthRoutes } from "utils";
import { useSignup } from "hooks";
import {
  validateEmail,
  validateFirstName,
  validateLastName,
  validatePassword,
  withAuth,
} from "state/auth";

export const Register: FC = () => {
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
    const firstNameError = validateFirstName(signUpState.firstName);
    const lastNameError = validateLastName(signUpState.lastName);
    const notValidated =
      emailError || passwordError || firstNameError || lastNameError;
    if (notValidated)
      setSignUpError({
        email: emailError,
        password: passwordError,
        firstName: firstNameError,
        lastName: lastNameError,
      });
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
    if (success) history.push(UnAuthRoutes.Reverify, { ...signUpState });
  }, [success]);

  const commonProps = {
    handlers: { state: signUpState, error: signUpError, updateState },
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
          <Input {...commonProps} keyProp="firstName" label="First Name" />
          <Input {...commonProps} keyProp="lastName" label="LastName" />
          <Input {...commonProps} keyProp="email" label="Username" />
          <Input
            {...commonProps}
            type="password"
            keyProp="password"
            label="Password"
          />
        </S.InputCanvas>

        <S.AuthButton onClick={onSignUp} disabled={isLoading || !isSubmittable}>
          Sign up {isLoading && <IconLoader />}
        </S.AuthButton>
        <GoogleLogin />
        <S.AuthOtherOption>
          Already have an account?
          <S.AuthButtonWhite onClick={onLogin}>Login</S.AuthButtonWhite>
        </S.AuthOtherOption>
      </S.LoginCanvas>
    </S.LoginWrapper>
  );
};

export default withAuth(Register);
