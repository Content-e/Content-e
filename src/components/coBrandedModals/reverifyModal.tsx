import { FC, useEffect, useState } from "react";
import { IconLoader, Input, replaceSubPath } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import "./coBrandedModals.css";
import { useHistory, useLocation } from "react-router-dom";
import { AuthProps, UnAuthRoutes, UnknownType } from "utils";
import { useConfirmSignUp, useLogin } from "hooks";
import { validateVerificationCode, withAuth } from "state/auth";

export const ReverifyModal: FC<AuthProps> = ({ getAuth }) => {
  const history = useHistory();
  const { state } = useLocation();
  const {
    performAction,
    res: { isLoading, success },
  } = useConfirmSignUp();
  const {
    res: { isLoading: loginLoading, success: loginSuccess },
    performAction: autoLogin,
  } = useLogin();

  const [code, setCode] = useState("");
  const [codeError, setCodeError] = useState("");

  const validateVerifyForm = (): boolean => {
    const notValidated = validateVerificationCode(code);
    if (notValidated) setCodeError("Code length is invalid");
    return !notValidated;
  };

  const goToLogin = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.Login));
  const goToVerification = (): void => {
    if (!loginLoading && !isLoading && validateVerifyForm())
      performAction(code);
  };

  useEffect(() => {
    if (success) {
      const { email, password } = (state as UnknownType) || {};
      autoLogin({ email, password });
    }
  }, [success]);

  useEffect(() => {
    const { email, password } = (state as UnknownType) || {};
    if (!email || !password) history.goBack();
  }, [state]);

  useEffect(() => {
    if (loginSuccess) getAuth();
  }, [loginSuccess]);

  return (
    <div className="modal-outer-container">
      <div className="modal-container">
        <div className="modal-title">Account Verification</div>
        <div className="forgot-password-form-fields">
          <Input
            value={code}
            errorVal={codeError}
            placeholder="Verification Code"
            keyProp=""
            handlers={{
              updateState: (_, value: string): void => setCode(value),
            }}
          />
        </div>
        <div className="modal-button" onClick={goToVerification}>
          <span className="modal-button-text">Verify</span>
          {isLoading && <IconLoader />}
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

export default withAuth(ReverifyModal);
