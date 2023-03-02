import { FC, useState } from "react";
import { Input, replaceSubPath } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import { defaultResetError, defaultResetState, UnAuthRoutes } from "utils";

import "./coBrandedModals.css";
import { useHistory } from "react-router-dom";

export const ResetPassModal: FC = () => {
  const history = useHistory();

  const [formState, setFormState] = useState(defaultResetState);
  const [formError, setFormError] = useState(defaultResetError);

  const goToSignUp = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubRegister));
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
        <div className="modal-title">Reset Password</div>
        <div className="reset-form-fields">
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

        <div className="modal-button">
          <span className="modal-button-text">Reset Password</span>
        </div>

        <div className="google-login reset-modal">
          <GoogleLogin />
        </div>
        <div className="existing-modal-account">
          Don't have an account? <span onClick={goToSignUp}>&nbsp;Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassModal;
