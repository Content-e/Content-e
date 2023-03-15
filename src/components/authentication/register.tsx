import { useState, useEffect, FC, useMemo } from "react";
// import { IconLoader, Input } from "components";
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
// import GoogleLogin from "./googleLogin";
import { USER_TYPES } from "API";
import Navbar from "components/navbar/navbar";
import GoogleLogin from "./googleLogin";
import { Input } from "components/customInput";
import { IconLoader } from "components/loader";

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
    localStorage.setItem(
      "userType",
      creator ? USER_TYPES.CREATIVE_USER : USER_TYPES.BRAND_USER
    );
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
    // <div className="login">
    //   <div className="logo-container">
    //     <img src="/images/edc-squared.svg" alt="edc-squared" />
    //     <div className="subtitle">Everyday creatives, everyday creators.</div>
    //   </div>
    //   <div className="login-container">
    //     <div className="create-account-label">
    //       Create a {creator ? "Creator" : "Brand"} Account
    //     </div>
    //     <div className="btns-container">
    //       <div
    //         className={`${!creator ? "active" : false}`}
    //         onClick={() => setCreator(false)}
    //       >
    //         Join as a brand
    //       </div>
    //       <div
    //         className={`${creator ? "active" : false}`}
    //         onClick={() => setCreator(true)}
    //       >
    //         Join as a creator
    //       </div>
    //     </div>
    //     <GoogleLogin />

    //     <div className="login-fields">
    //       <Input {...commonProps} placeholder="Full Name" keyProp="name" />
    //       <Input {...commonProps} placeholder="Email Address" keyProp="email" />
    //       <Input
    //         {...commonProps}
    //         placeholder="Password"
    //         type="password"
    //         keyProp="password"
    //       />
    //     </div>

    //     <button
    //       className="login-btn"
    //       onClick={onSignUp}
    //       disabled={isLoading || !isSubmittable}
    //     >
    //       <span style={{ marginRight: 12 }}>Join</span>
    //       {isLoading && <IconLoader />}
    //     </button>

    //     <div className="existing-account">
    //       Already have an account?&nbsp;
    //       <span onClick={onLogin}>Login&nbsp;</span>
    //     </div>
    //   </div>
    // </div>
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
          <div className="login__title">
            Create a {!creator ? "Brand" : "Creator"} account
          </div>
          <div className={`${creator ? "active" : false} btns-container`}>
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
          <GoogleLogin />
          <div className="login__or">- OR -</div>
          <div className="login__fields">
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
            className="login__btn"
            onClick={onSignUp}
            disabled={isLoading || !isSubmittable}
          >
            <span style={{ marginRight: 12 }}>Sign up</span>
            {isLoading && <IconLoader />}
          </button>{" "}
          <div className="login__already">
            Already have an account? <span onClick={onLogin}>Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Register);
