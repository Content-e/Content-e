import { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory, useLocation } from "react-router-dom";

import GoogleLogin from "./googleLogin";

import { AuthProps, UnAuthRoutes, UnknownType } from "utils";
import { useConfirmSignUp, useLogin } from "hooks";
import { validateVerificationCode, withAuth } from "state/auth";

import "./styles/login.css";

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
    <div className="login">
      <div className="logo-container">
        <img src="/images/edc-squared.svg" alt="edc-squared" />
        <div className="subtitle">Everyday creatives, everyday creators.</div>
      </div>
      <div className="login-container">
        <div className="create-account-label">Account Verification</div>

        <div className="login-fields">
          <Input
            value={code}
            errorVal={codeError}
            placeholder="Verification Code"
            keyProp=""
            handlers={{
              updateState: (_, value: string): void => setCode(value),
            }}
          />
        </div>

        <button
          className="login-btn"
          onClick={onVerification}
          disabled={isLoading || loginLoading}
        >
          <span>Verify {isLoading && <IconLoader />}</span>
        </button>

        <GoogleLogin />

        <div className="existing-account" onClick={onLogin}>
          Already have an account? <span>Login&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Reverify);
