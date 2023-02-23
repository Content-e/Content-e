import React, { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory, useLocation } from "react-router-dom";
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
    <div className="login">
      <div className="logo-container">
        <img src="/images/edc-squared.svg" alt="edc-squared" />
        <div className="subtitle">Everyday creatives, everyday creators.</div>
      </div>
      <div className="login-container">
        <div className="create-account-label">Reset Password</div>

        <div className="login-fields">
          <Input
            {...commonProps}
            keyProp="code"
            placeholder="Verification Code"
          />
          <Input
            {...commonProps}
            type="password"
            keyProp="password"
            placeholder="Password"
          />
        </div>
        <button className="login-btn" onClick={onReset} disabled={isLoading}>
          <span>Reset Password {isLoading && <IconLoader />}</span>
        </button>
        <GoogleLogin />
        <div className="existing-account" onClick={onSignUp}>
          Don't have an account? <span>Sign up&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
