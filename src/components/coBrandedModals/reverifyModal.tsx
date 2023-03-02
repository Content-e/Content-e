import { FC, useState } from "react";
import { Input } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import "./coBrandedModals.css";
import ResetPassModal from "./resetPassModal";

export const ReverifyModal: FC = () => {
  const [code, setCode] = useState("");

  return (
    <div className="modal-outer-container">
      <div className="modal-container">
        <div className="modal-title">Account Verification</div>
        <div className="forgot-password-form-fields">
          <Input
            value={code}
            placeholder="Verification Code"
            keyProp=""
            handlers={{
              updateState: (_, value: string): void => setCode(value),
            }}
          />
        </div>
        <div className="modal-button">
          <span className="modal-button-text">Verify</span>
        </div>

        <div className="google-login forgot-password-modal">
          <GoogleLogin />
        </div>
        <div className="existing-modal-account">
          Already have an account? <span>&nbsp;Login</span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassModal;
