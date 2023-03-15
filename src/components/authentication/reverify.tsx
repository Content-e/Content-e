import { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory, useLocation } from "react-router-dom";

import GoogleLogin from "./googleLogin";

import { AuthProps, UnAuthRoutes, UnknownType } from "utils";
import { useConfirmSignUp, useLogin } from "hooks";
import { validateVerificationCode, withAuth } from "state/auth";

import "./styles/login.css";
import Navbar from "components/navbar/navbar";

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
      <div className="login__landing">
        <img src="/images/edc-logo.svg" alt="edc-squared" />
        <div className="login__landing-container">
          <span>
            Everyday creators, <br />
            everyday creative.
          </span>
          <div>Your content, your story, your impact.</div>
        </div>
      </div>
      <div className="login__container">
        <Navbar />
        <div className="login__box">
          <div className="login__title" style={{ marginBottom: 16 }}>
            Account verification
          </div>
          <div className="login__fields">
            <Input
              value={code}
              errorVal={codeError}
              placeholder="Verification code"
              keyProp=""
              handlers={{
                updateState: (_, value: string): void => setCode(value),
              }}
            />
          </div>
          <button
            className="login__btn"
            onClick={onVerification}
            disabled={isLoading || loginLoading}
          >
            <span style={{ marginRight: 12 }}>Verify</span>
            {isLoading && <IconLoader />}
          </button>
          <GoogleLogin />
          <div className="login__already">
            Already have an account? <span onClick={onLogin}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Reverify);
