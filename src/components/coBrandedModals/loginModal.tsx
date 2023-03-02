import { FC, useState } from "react";
import { Input } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import { defaultLoginError, defaultLoginState, UnAuthRoutes } from "utils";
import Checkbox from "components/authentication/checkbox";

import "./coBrandedModals.css";
import { useHistory } from "react-router-dom";

export const LoginModal: FC = () => {
  const history = useHistory();

  const [formState, setFormState] = useState(defaultLoginState);
  const [formError, setFormError] = useState(defaultLoginError);

  const goToSignUp = (): void => history.push(UnAuthRoutes.SubRegister);
  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

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

          <div className="existing-account">
            <span>Forgot Password?</span>
          </div>
        </div>

        <div className="modal-button">
          <span className="modal-button-text">Login</span>
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

export default LoginModal;
