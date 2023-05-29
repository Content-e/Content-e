import { FC, useEffect, useState } from "react";
import { IconLoader, Input } from "components";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";
import { useForgetPass } from "hooks";
import { validateEmail, withAuth } from "state/auth";
import HeaderDesktop from "./components/header-desktop";
import HeaderMobile from "./components/header-mobile";

export const ForgetPassword: FC = () => {
  const history = useHistory();
  const {
    performAction,
    res: { isLoading, success },
  } = useForgetPass();

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);

  const path = window.location.pathname;

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
      <HeaderMobile />
      <div className="login__wrap">
        <HeaderDesktop />
        <div className="login__container">
          <div className="login__box">
            <div className="login__title" style={{ marginBottom: 54 }}>
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
              className="login__btn forget-btn"
              onClick={onForget}
              disabled={isLoading || !!emailError}
            >
              <span style={{ marginRight: 12 }}>Submit</span>
              {isLoading && <IconLoader />}
            </button>
            <div className="login__already">
              Already have an account? <span onClick={onLogin}>Login</span>
            </div>
          </div>
        </div>
        <div className="login__landing">
          <img src="/images/login-image.png" alt="picture of a landscape" />
        </div>
      </div>
      <div className="landing-footer">
        <div className="landing-footer-text-container">
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Landing)}
          >
            Home
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Creators)}
          >
            For Creators
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Brands)}
          >
            For Brands
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.SayHello)}
          >
            Say Hello
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.SayHello)}
          >
            Say Hello
          </div>
          <div
            className="landing-footer-text"
            onClick={() =>
              path === "/homePageLogin"
                ? history.push(UnAuthRoutes.Register)
                : history.push(UnAuthRoutes.Login)
            }
          >
            Login / Sign up
          </div>
        </div>

        <div className="landing-footer-img-container">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/edcsquared/"
          >
            <img src="/images/landing-linkedin.svg" />
          </a>
          <a target="_blank" href="https://www.instagram.com/edcsq/">
            <img src="/images/landing-insta.svg" />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@edcsquared">
            <img src="/images/landing-tiktok.svg" />
          </a>
        </div>

        <div className="landing-footer-text">
          © 2023 Copyright EDC Squared. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default withAuth(ForgetPassword);
