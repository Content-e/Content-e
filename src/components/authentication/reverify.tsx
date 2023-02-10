import React, { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory, useLocation } from "react-router-dom";
import * as S from "./styles";
import GoogleLogin from "./googleLogin";
import { AuthProps, UnAuthRoutes, UnknownType } from "utils";
import { useConfirmSignUp, useLogin } from "hooks";
import { validateVerificationCode, withAuth } from "state/auth";

export const Reverify: FC<AuthProps> = ({ getAuth }) => {
  const history = useHistory();
  const { state } = useLocation();
  const {
    performAction,
    res: { isLoading, success },
  } = useConfirmSignUp();
  const {
    res: { isLoading: loginLoading, success: loginSuccess },
    performAction: autoLogin,
  } = useLogin();

  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const validateVerifyForm = (): boolean => {
    const notValidated = validateVerificationCode(code);
    if (notValidated) setCodeError("Code length is invalid");
    return !notValidated;
  };

  const onLogin = (): void => history.push(UnAuthRoutes.Login);
  const onVerification = (): void => {
    if (validateVerifyForm()) performAction(code);
  };

  useEffect(() => {
    if (success) {
      const { email, password } = (state as UnknownType) || {};
      autoLogin({ email, password });
    }
  }, [success]);

  useEffect(() => {
    const { email, password } = (state as UnknownType) || {};
    if (!email || !password) history.goBack();
  }, [state]);

  useEffect(() => {
    if (loginSuccess) getAuth();
  }, [loginSuccess]);

  return (
    <S.LoginWrapper>
      <S.LoginCanvas>
        <S.TopHeading>Content-e</S.TopHeading>
        <S.SmHeading>Powered by Brain-e</S.SmHeading>
        <S.Title>
          Welcome to Content-e, use the form below <br /> to login or sign up.
        </S.Title>
        <S.InputCanvas>
          <Input
            placeholder="Veerification Code"
            value={code}
            errorVal={codeError}
            keyProp=""
            handlers={{
              updateState: (_, value: string): void => setCode(value),
            }}
          />
        </S.InputCanvas>

        <S.ButtonWrapper>
          <S.AuthButton
            onClick={onVerification}
            disabled={isLoading || loginLoading}
          >
            Verify {isLoading && <IconLoader />}
          </S.AuthButton>
          <S.AuthButtonWhite onClick={onLogin}>Login</S.AuthButtonWhite>
        </S.ButtonWrapper>

        <GoogleLogin />
      </S.LoginCanvas>
    </S.LoginWrapper>
  );
};

export default withAuth(Reverify);
