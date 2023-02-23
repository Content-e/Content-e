import { useState, useEffect, FC, useContext } from "react";

import { IconLoader, Input, updateErrorState } from "components";
import { useHistory } from "react-router-dom";
import Checkbox from "./checkbox";

import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { validateEmail, validatePassword, withAuth } from "state/auth";
import ErrorContext from "state/error/error.context";
import {
  AuthProps,
  defaultLoginError,
  defaultLoginState,
  UnAuthRoutes,
  unverifiedUser,
  authFailedErrorHeading,
  IErrorContextType,
} from "utils";
import { useLogin } from "hooks";

import "./styles/login.css";

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
    if (validateSignUpForm()) {
      performAction(formState);
    }
  };

  const onSignUp = (): void => history.push(UnAuthRoutes.Register);
  const onForget = (): void => history.push(UnAuthRoutes.ForgetPassword);

  useEffect(() => {
    if (error === unverifiedUser)
      history.push(UnAuthRoutes.Reverify, { ...formState });
    else if (success) getAuth();
  }, [success, error]);

  const commonProps = {
    handlers: { state: formState, error: formError, updateState },
  };

  const [loading, setLoading] = useState(false);

  const { setErrorState } = useContext<IErrorContextType>(ErrorContext);

  const continueWithGoogle = async (): Promise<void> => {
    setLoading(true);
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      getAuth();
    } catch (loginError) {
      setLoading(false);
      const { message } = loginError;
      updateErrorState(
        { title: authFailedErrorHeading, message },
        setErrorState
      );
    }
  };

  return (
    <div className="login">
      <div className="logo-container">
        <img src="/images/edc-squared.svg" alt="edc-squared" />
        <div className="subtitle">Everyday creatives, everyday creators.</div>
      </div>
      <div className="login-container">
        <div className="create-account-label">Login</div>

        <div className="login-fields">
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

          <div className="existing-account" onClick={onForget}>
            <span>Forgot Password ?</span>
          </div>
        </div>

        <button className="login-btn" onClick={onLogin} disabled={isLoading}>
          <span>Login {isLoading && <IconLoader />}</span>
        </button>

        <div className="google-btn" onClick={continueWithGoogle}>
          <img src="/images/googleLogo.svg" height={25} width={25} />
          <span className="google-continue">
            Continue with Google&nbsp; {loading && <IconLoader />}
          </span>
        </div>

        <div className="existing-account" onClick={onSignUp}>
          Didn't have an account? <span>Sign up&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Login);
