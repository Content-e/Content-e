import { FC, useState } from "react";
import { Input, replaceSubPath } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import "./coBrandedModals.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const ForgotPasswordModal: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");

  const goToSignUp = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubRegister));
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
          Don't have an account? <span onClick={goToSignUp}>&nbsp;Sign up</span>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
