import { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";
import { useForgetPass } from "hooks";
import { validateEmail, withAuth } from "state/auth";
import GoogleLogin from "./googleLogin";

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
    <div className="login">
      <div className="logo-container">
        <img src="/images/edc-squared.svg" alt="edc-squared" />
        <div className="subtitle">Everyday creatives, everyday creators.</div>
      </div>
      <div className="login-container">
        <div className="create-account-label">Forgot Password</div>

        <div className="login-fields">
          <Input
            keyProp={email}
            value={email}
            errorVal={emailError}
            placeholder="Email"
            handlers={{ updateState }}
          />
        </div>
        <button
          className="login-btn"
          onClick={onForget}
          disabled={isLoading || !!emailError}
        >
          <span style={{ marginRight: 12 }}>Submit</span>
          {isLoading && <IconLoader />}
        </button>
        <GoogleLogin />
        <div className="existing-account" onClick={onSignUp}>
          Don't have an account? <span>Sign up&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default withAuth(ForgetPassword);
