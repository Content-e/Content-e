import { FC, useState } from "react";
import { Input } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import "./coBrandedModals.css";

export const ForgotPasswordModal: FC = () => {
  const [email, setEmail] = useState<string>("");

  const updateState = (_: string, value: string): void => {
    setEmail(value);
  };

  return (
    <div className="modal-outer-container">
      <div className="modal-container">
        <div className="modal-title">Forgot Password</div>
        <div className="forgot-password-form-fields">
          <Input
            keyProp={email}
            value={email}
            placeholder="Email"
            handlers={{ updateState }}
          />
        </div>
        <div className="modal-button">
          <span className="modal-button-text">Submit</span>
        </div>

        <div className="google-login forgot-password-modal">
          <GoogleLogin />
        </div>
        <div className="existing-modal-account">
          Don't have an account? <span>&nbsp;Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
