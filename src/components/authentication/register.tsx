/* eslint-disable max-len */
import { useState, useEffect, FC, useMemo } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import { defaultSignUpError, defaultSignUpState, UnAuthRoutes } from "utils";
import { useSignup } from "hooks";
import {
  validateEmail,
  validateFullName,
  validatePassword,
  withAuth,
} from "state/auth";

import "./styles/login.css";
import GoogleLogin from "./googleLogin";

export const Register: FC = () => {
  const [creator, setCreator] = useState(false);

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
    const fullNameError = validateFullName(signUpState.name);
    const notValidated = emailError || passwordError || fullNameError;
    if (notValidated)
      setSignUpError({
        email: emailError,
        password: passwordError,
        name: fullNameError,
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
    <div className="login">
      <div className="logo-container">
        <img src="/images/edc-squared.svg" alt="edc-squared" />
        <div className="subtitle">Everyday creatives, everyday creators.</div>
      </div>
      <div className="login-container">
        <div className="create-account-label">Create Account</div>
        <div className="btns-container">
          <div
            className={`${!creator ? "active" : false}`}
            onClick={() => setCreator(false)}
          >
            Join as a brand
          </div>
          <div
            className={`${creator ? "active" : false}`}
            onClick={() => setCreator(true)}
          >
            Join as a creator
          </div>
        </div>
        {!creator && <GoogleLogin />}
        <div
          className="content-seperation"
          style={{ marginTop: `${!creator ? "0px" : "20px"}` }}
        >
          {!creator
            ? "- OR -"
            : "If you're an aspiring creator and keen to work with brands and be rewarded, be sure to get on our waiting list and be the first to get access to our platform"}
        </div>

        {!creator && (
          <>
            <div className="login-fields">
              <Input {...commonProps} placeholder="Full Name" keyProp="name" />
              <Input
                {...commonProps}
                placeholder="Email Address"
                keyProp="email"
              />
              <Input
                {...commonProps}
                placeholder="Password"
                type="password"
                keyProp="password"
              />
            </div>

            <button
              className="login-btn"
              onClick={onSignUp}
              disabled={isLoading || !isSubmittable}
            >
              <span>Join {isLoading && <IconLoader />}</span>
            </button>

            <div className="existing-account">
              Already have an account?&nbsp;
              <span onClick={onLogin}>Login&nbsp;</span>
            </div>
          </>
        )}

        {creator && (
          <>
            <div className="login-fields">
              <Input {...commonProps} placeholder="Full Name" keyProp="name" />
              <Input
                {...commonProps}
                placeholder="Email Address"
                keyProp="email"
              />
              <Input
                {...commonProps}
                placeholder="TikTok Handle"
                type="tiktok"
                keyProp="tiktok"
              />
            </div>

            <button className="login-btn" disabled={isLoading}>
              <span>Register {isLoading && <IconLoader />}</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default withAuth(Register);
