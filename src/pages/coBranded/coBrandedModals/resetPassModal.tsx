import { useState } from "react";
import { Input } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import { defaultResetError, defaultResetState } from "utils";

import "./coBrandedModals.css";

export default function ResetPassModal() {
  const [formState, setFormState] = useState(defaultResetState);
  const [formError, setFormError] = useState(defaultResetError);

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
          Don't have an account? <span>&nbsp;Sign up</span>
        </div>
      </div>
    </div>
  );
}
