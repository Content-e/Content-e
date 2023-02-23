import { FC, useEffect, useState, useContext } from "react";
import { IconLoader, Input, updateErrorState } from "components";
import { useHistory, useLocation } from "react-router-dom";
import ErrorContext from "state/error/error.context";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";

import { Auth } from "aws-amplify";
import {
  AuthProps,
  UnAuthRoutes,
  UnknownType,
  IErrorContextType,
  authFailedErrorHeading,
} from "utils";
import { useConfirmSignUp, useLogin } from "hooks";
import { validateVerificationCode, withAuth } from "state/auth";

import "./styles/login.css";

export const Reverify: FC<AuthProps> = ({ getAuth }) => {
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

  const [loading, setLoading] = useState(false);

  const { setErrorState } = useContext<IErrorContextType>(ErrorContext);

  const continueWithGoogle = async (): Promise<void> => {
    setLoading(true);
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      getAuth();
    } catch (loginError) {
      setLoading(false);
      const { message } = loginError;
      updateErrorState(
        { title: authFailedErrorHeading, message },
        setErrorState
      );
    }
  };

  const validateVerifyForm = (): boolean => {
    const notValidated = validateVerificationCode(code);
    if (notValidated) setCodeError("Code length is invalid");
    return !notValidated;
  };

  const onLogin = (): void => history.push(UnAuthRoutes.Login);
  const onVerification = (): void => {
    if (validateVerifyForm()) performAction(code);
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
    <div className="login">
      <div className="logo-container">
        <img src="/images/edc-squared.svg" alt="edc-squared" />
        <div className="subtitle">Everyday creatives, everyday creators.</div>
      </div>
      <div className="login-container">
        <div className="create-account-label">Account Verification</div>

        <div className="login-fields">
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

        <button
          className="login-btn"
          onClick={onVerification}
          disabled={isLoading || loginLoading}
        >
          <span>Verify {isLoading && <IconLoader />}</span>
        </button>

        <div className="google-btn" onClick={continueWithGoogle}>
          <img src="/images/googleLogo.svg" height={25} width={25} />
          <span className="google-continue">
            Continue with Google&nbsp; {loading && <IconLoader />}
          </span>
        </div>

        <div className="existing-account" onClick={onLogin}>
          Already have an account? <span>Login&nbsp;</span>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Reverify);
