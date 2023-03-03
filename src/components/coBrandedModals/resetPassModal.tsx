import { FC, useEffect, useState } from "react";
import { IconLoader, Input, replaceSubPath } from "components";
import GoogleLogin from "components/authentication/googleLogin";
import {
  defaultResetError,
  defaultResetState,
  UnAuthRoutes,
  UnknownType,
  unverifiedUser,
} from "utils";

import "./coBrandedModals.css";
import { useHistory, useLocation } from "react-router-dom";
import { useResetPass } from "hooks";
import { validateVerificationCode, validatePassword } from "state/auth";

export const ResetPassModal: FC = () => {
  const history = useHistory();
  const { state } = useLocation();

  const {
    res: { isLoading, error, success },
    performAction,
  } = useResetPass();

  const [formState, setFormState] = useState(defaultResetState);
  const [formError, setFormError] = useState(defaultResetError);

  const validateResetForm = (): boolean => {
    const code = validateVerificationCode(formState.code);
    const password = validatePassword(formState.password);
    if (code || password) {
      setFormError({ code, password });
      return false;
    }
    return true;
  };

  const goToSignUp = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubRegister));

  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const onReset = (): void => {
    if (!isLoading && validateResetForm()) performAction(formState);
  };

  useEffect(() => {
    if (error === unverifiedUser)
      history.push(replaceSubPath(UnAuthRoutes.SubReverify), { ...formState });
    else if (success) history.push(replaceSubPath(UnAuthRoutes.SubLogin));
  }, [success, error]);

  useEffect(() => {
    const { email } = (state as UnknownType) || {};
    if (!email) history.push(replaceSubPath(UnAuthRoutes.SubLogin));
  }, [state]);

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

        <div className="modal-button" onClick={onReset}>
          <span className="modal-button-text">Reset Password</span>
          {isLoading && <IconLoader />}
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
