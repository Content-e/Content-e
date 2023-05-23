/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, FC } from "react";

import { IconLoader, Input } from "components";
import { Link, useHistory } from "react-router-dom";
import Checkbox from "./checkbox";
import GoogleLogin from "./googleLogin";

import { validateEmail, validatePassword, withAuth } from "state/auth";
import {
  AuthProps,
  defaultLoginError,
  defaultLoginState,
  UnAuthRoutes,
  unverifiedUser,
} from "utils";
import { useLogin } from "hooks";

import "./styles/login.scss";
import Navbar from "components/navbar/navbar";
import AuthFooter from "./authFooter";

export const Login: FC<AuthProps> = ({ getAuth }) => {
  const history = useHistory();
  const {
    res: { isLoading, error, success },
    performAction,
  } = useLogin();
  const openContactUs = (): void => {
    window.location.href = "mailto:hello@edcsquared.io";
  };

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

  const [showMenu, setShowMenu] = useState(false);
  const [allowCookies, setAllowCookies] = useState(
    localStorage.getItem("allowCookies")
  );
  const toggleMenu = (): void => setShowMenu(!showMenu);

  const burgerIcon = "/images/hamburger.svg";
  const crossIcon = "/images/cross.svg";

  return (
    <>
      <div className="login">
        <div className="mobile-header">
          <div className="mobile-header-top">
            <img
              src="/images/edc-logo.svg"
              alt="edc-squared"
              className="mobile-header__logo"
            />
            <img
              className="mobile-header__burger"
              src={showMenu ? crossIcon : burgerIcon}
              alt="edc-squared"
              onClick={toggleMenu}
            />
          </div>
          {showMenu && (
            <div className="mobile-header-menu">
              <Link to={"#"}>HOME</Link>
              <Link to={"#"}>FOR CREATORS</Link>
              <Link to={"#"}>FOR BRANDS</Link>
              <Link to={"#"}>SAY HELLO</Link>
              <Link className="button" onClick={onSignUp} to={"#"}>
                LOGIN / SIGN UP
              </Link>
              <div className="login__social-links mobile-menu-links">
                <li>
                  <img src="images/linkedin-mobile.svg" alt="" />
                </li>
                <li>
                  <img src="images/instagram-mobile.svg" alt="" />
                </li>
                <li>
                  <img src="images/tiktok-mobile.svg" alt="" />
                </li>
              </div>
            </div>
          )}
        </div>
        <div className="login__wrap">
          <div className="login__top">
            <img
              src="/images/edc-logo.svg"
              alt="edc-squared"
              className="login__logo"
            />
            <ul className="navbar">
              <li>
                <Link to={"#"}>HOME</Link>
              </li>
              <li>
                <Link to={"#"}>FOR CREATORS</Link>
              </li>
              <li>
                <Link to={"#"}>FOR BRANDS</Link>
              </li>
              <li>
                <Link onClick={openContactUs} to={"#"}>
                  Say hello
                </Link>
              </li>
              <li>
                <Link className="button" onClick={onSignUp} to={"#"}>
                  LOGIN / SIGN UP
                </Link>
              </li>
              <div className="social-links">
                <li>
                  <img src="images/tiktok.svg" alt="" />
                </li>
                <li>
                  <img src="images/linkedin.svg" alt="" />
                </li>
                <li>
                  <img src="images/instagram.svg" alt="" />
                </li>
              </div>
            </ul>
          </div>
          <div className="login__container">
            <div className="login__box">
              <div className="login__title">Login</div>
              {/*<GoogleLogin />*/}
              {/*<div className="login__or">- OR -</div>*/}
              <div className="login__fields">
                <div className="login__label">email</div>
                <Input
                  {...commonProps}
                  placeholder="Email Address"
                  keyProp="email"
                />
                <div className="login__label">password</div>
                <Input
                  {...commonProps}
                  placeholder="Password"
                  type="password"
                  keyProp="password"
                />
              </div>
              <div className="login__forgot-box">
                {" "}
                <div className="login__checkbox">
                  <Checkbox />
                  <span className="login__remember">Remember me.</span>{" "}
                </div>{" "}
                <div className="login__forgot" onClick={onForget}>
                  <span>Forgot Password?</span>{" "}
                </div>{" "}
              </div>
              {/* <button
                className="login__btn"
                onClick={onSignUp}
                disabled={isLoading || !isSubmittable}
              >
                <span style={{ marginRight: 12 }}>Sign up</span>
                {isLoading && <IconLoader />}
              </button>{" "} */}
              <div className="login__bottom">
                <button
                  className="login__btn"
                  onClick={onLogin}
                  disabled={isLoading}
                >
                  <span style={isLoading ? { marginRight: 12 } : {}}>
                    Login
                  </span>
                  {isLoading && <IconLoader />}
                </button>
                <div className="login__already">
                  Don’t have an account? <span onClick={onSignUp}>Sign up</span>
                </div>
              </div>
            </div>
            {/*<AuthFooter />*/}
          </div>
          <div className="login__landing">
            <img src="/images/login-image.png" />
          </div>
        </div>
        <div className="login__footer">
          <ul className="login__navbar">
            <li>
              <Link to={"#"}>HOME</Link>
            </li>
            <li>
              <Link to={"#"}>FOR CREATORS</Link>
            </li>
            <li>
              <Link to={"#"}>FOR BRANDS</Link>
            </li>
            <li>
              <Link onClick={openContactUs} to={"#"}>
                Say hello
              </Link>
            </li>
          </ul>
          <div className="login__social-links">
            <li>
              <img src="images/linkedin.svg" alt="" />
            </li>
            <li>
              <img src="images/instagram.svg" alt="" />
            </li>
            <li>
              <img src="images/tiktok.svg" alt="" />
            </li>
          </div>
          <div className="login__copyright">© 2023 Copyright EDC Squared.</div>
        </div>
      </div>
      {!allowCookies && (
        <div className="cookie-message">
          <span>
            We use cookies to help us offer you the best onlinee experience. By
            continuing to use our website and / or clocking OK, you agree to our
            use of cookies in accordance with our Privacy Policy.
          </span>
          <button
            onClick={() => {
              localStorage.setItem("allowCookies", "true");
              setAllowCookies("true");
            }}
          >
            OK
          </button>
        </div>
      )}
    </>
  );
};

export default withAuth(Login);
