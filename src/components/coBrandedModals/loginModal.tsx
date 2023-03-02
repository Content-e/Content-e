import { FC, useEffect, useState } from "react";
import { IconLoader, Input, replaceSubPath } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import {
  AuthProps,
  defaultLoginError,
  defaultLoginState,
  UnAuthRoutes,
  unverifiedUser,
} from "utils";
import Checkbox from "components/authentication/checkbox";

import "./coBrandedModals.css";
import { useHistory } from "react-router-dom";
import { validateEmail, validatePassword, withAuth } from "state/auth";
import { useLogin } from "hooks";

export const LoginModal: FC<AuthProps> = ({ getAuth }) => {
  const history = useHistory();
  const {
    res: { isLoading, error, success },
    performAction,
  } = useLogin();

  const [formState, setFormState] = useState(defaultLoginState);
  const [formError, setFormError] = useState(defaultLoginError);

  const goToSignUp = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubRegister));
  const goToForget = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubForgetPass));
  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const validateSignUpForm = (): boolean => {
    const email = validateEmail(formState.email);
    const password = validatePassword(formState.password);
    if (email || password) {
      setFormError({ email, password });
      return false;
    }
    return true;
  };

  const onLogin = (): void => {
    if (!isLoading && validateSignUpForm()) {
      performAction(formState);
    }
  };

  useEffect(() => {
    if (error === unverifiedUser)
      history.push(replaceSubPath(UnAuthRoutes.SubReverify), { ...formState });
    else if (success) getAuth();
  }, [success, error]);

  const commonProps = {
    handlers: { state: formState, error: formError, updateState },
  };

  return (
    <div className="modal-outer-container">
      <div className="modal-container">
        <div className="modal-title">Login</div>
        <div className="login-form-fields">
          <Input {...commonProps} placeholder="Email Address" keyProp="email" />
          <Input
            {...commonProps}
            placeholder="Password"
            type="password"
            keyProp="password"
          />
        </div>

        <div className="forgot-container">
          <div className="checkbox-container">
            <Checkbox />
            <span className="existing-account">Remember me</span>
          </div>

          <div className="existing-account" onClick={goToForget}>
            <span>Forgot Password?</span>
          </div>
        </div>

        <div className="modal-button" onClick={onLogin}>
          <span className="modal-button-text">Login</span>
          {isLoading && <IconLoader />}
        </div>

        <div className="google-login login-modal">
          <GoogleLogin />
        </div>
        <div className="existing-modal-account">
          Don't have an account? <span onClick={goToSignUp}>&nbsp;Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default withAuth(LoginModal);
