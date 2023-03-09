import { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";
import { useForgetPass } from "hooks";
import { validateEmail, withAuth } from "state/auth";
import GoogleLogin from "./googleLogin";
import Navbar from "components/navbar/navbar";

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

  const onLogin = (): void => history.push(UnAuthRoutes.Login);
  const onForget = (): void => {
    if (!validateSignUpForm()) performAction(email);
  };

  useEffect(() => {
    if (success) history.push(UnAuthRoutes.ResetPassword, { email });
  }, [success]);

  return (
    <div className="login">
      <div className="login__landing">
        <img src="/images/edc-logo.png" alt="edc-squared" />
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
            Forgot password
          </div>
          <div className="login__fields">
            <Input
              keyProp={email}
              value={email}
              errorVal={emailError}
              placeholder="Email address"
              handlers={{ updateState }}
            />
          </div>
          <button
            className="login__btn"
            onClick={onForget}
            disabled={isLoading || !!emailError}
          >
            <span style={{ marginRight: 12 }}>Submit</span>
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

export default withAuth(ForgetPassword);
