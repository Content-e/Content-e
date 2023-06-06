import { FC, useEffect, useState } from 'react';
import { IconLoader, Input, replaceSubPath } from 'components';
import GoogleLogin from 'components/authentication/googleLogin';
import './coBrandedModals.css';
import { useHistory } from 'react-router-dom';
import { UnAuthRoutes } from 'utils';
import { useForgetPass } from 'hooks';
import { validateEmail } from 'state/auth';

export const ForgotPasswordModal: FC = () => {
  const history = useHistory();
  const {
    performAction,
    res: { isLoading, success },
  } = useForgetPass();

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const updateState = (_: string, value: string): void => {
    setEmail(value);
  };

  const validateSignUpForm = (): boolean => {
    const error = validateEmail(email);
    setEmailError(error);
    return !!error;
  };

  const goToSignUp = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubRegister));
  const goToForgetPass = (): void => {
    if (!emailError && !validateSignUpForm()) performAction(email);
  };

  useEffect(() => {
    if (success)
      history.push(replaceSubPath(UnAuthRoutes.SubResetPassword), { email });
  }, [success]);

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
        <div className="modal-button" onClick={goToForgetPass}>
          <span className="modal-button-text">Submit</span>
          {isLoading && <IconLoader />}
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
