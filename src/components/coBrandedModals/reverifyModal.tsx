import { FC, useState } from "react";
import { Input, replaceSubPath } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import "./coBrandedModals.css";
import ResetPassModal from "./resetPassModal";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const ReverifyModal: FC = () => {
  const history = useHistory();

  const [code, setCode] = useState("");

  const goToLogin = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubLogin));

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
          Already have an account? <span onClick={goToLogin}>&nbsp;Login</span>
        </div>
      </div>
    </div>
  );
};

export default ResetPassModal;
