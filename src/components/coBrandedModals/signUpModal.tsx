import { FC, useState } from "react";
import { Input } from "components";

import GoogleLogin from "components/authentication/googleLogin";
import "./coBrandedModals.css";
import { defaultSignUpState, defaultSignUpError } from "utils";

export const SignUpModal: FC = () => {
  const [signUpState, setSignUpState] = useState(defaultSignUpState);
  const [signUpError, setSignUpError] = useState(defaultSignUpError);

  const updateState = (key: string, value: string): void => {
    setSignUpError((prev) => ({ ...prev, [key]: null }));
    setSignUpState((prev) => ({ ...prev, [key]: value }));
  };

  const commonProps = {
    handlers: { state: signUpState, error: signUpError, updateState },
  };

  return (
    <div className="modal-outer-container">
      <div className="modal-container">
        <div className="modal-title">Create Account</div>
        <div className="google-login signup-modal">
          <GoogleLogin />
        </div>
        <div className="modal-content-seperation">- OR -</div>
        <div className="form-fields">
          <Input {...commonProps} placeholder="Full Name" keyProp="name" />
          <Input {...commonProps} placeholder="Email Address" keyProp="email" />
          <Input
            {...commonProps}
            placeholder="Password"
            type="password"
            keyProp="password"
          />
        </div>
        <div className="modal-button">
          <span className="modal-button-text">Join</span>
        </div>
        <div className="existing-modal-account">
          Already have an account? <span>&nbsp;Login</span>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
