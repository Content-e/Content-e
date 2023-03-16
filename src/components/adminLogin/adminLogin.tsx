/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

import { IconLoader, Input } from "components";
import Checkbox from "components/authentication/checkbox";

import { defaultLoginError, defaultLoginState } from "utils";

import "./adminLogin.css";

export const AdminLogin = () => {
  const [formState, setFormState] = useState(defaultLoginState);
  const [formError, setFormError] = useState(defaultLoginError);

  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const commonProps = {
    handlers: { state: formState, error: formError, updateState },
  };

  return (
    <div className="admin-login-container">
      <img src="/images/edc-squared-admin-logo.svg" />
      <div className="box-box">
        <div className="login_box">
          <div className="login_title">Login</div>
          <div className="login_fields">
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
          <div className="login_forgot-box">
            <div className="login_checkbox">
              <Checkbox />
              <span className="login_remember">Remember me.</span>{" "}
            </div>{" "}
            <div className="login_forgot">
              <span>Forgot Password?</span>{" "}
            </div>{" "}
          </div>
          {/* <button
            className="login_btn"
            onClick={onSignUp}
            disabled={isLoading || !isSubmittable}
          >
            <span style={{ marginRight: 12 }}>Sign up</span>
            {isLoading && <IconLoader />}
          </button>{" "} */}
          <button className="login_btn">
            <span style={{ marginRight: 12 }}>Login</span>
            {/* {isLoading && <IconLoader />} */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
