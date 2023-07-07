import { FC, useEffect, useState } from 'react';
import { IconLoader, Input, replaceSubPath } from 'components';

import GoogleLogin from 'components/authentication/googleLogin';
import './coBrandedModals.css';
import {
  defaultSignUpState,
  defaultSignUpError,
  UnAuthRoutes,
  AuthProps,
} from 'utils';
import { useHistory } from 'react-router-dom';
import {
  validateEmail,
  validatePassword,
  validateFullName,
  withAuth,
} from 'state/auth';
import { useSignup } from 'hooks';

export const SignUpModal: FC<AuthProps> = () => {
  const history = useHistory();
  const {
    performAction,
    res: { isLoading, success },
  } = useSignup();

  const [signUpState, setSignUpState] = useState(defaultSignUpState);
  const [signUpError, setSignUpError] = useState(defaultSignUpError);

  const validateSignUpForm = (): boolean => {
    const emailError = validateEmail(signUpState.email);
    const passwordError = validatePassword(signUpState.password);
    const fullNameError = validateFullName(signUpState.name);
    const notValidated = emailError || passwordError || fullNameError;
    if (notValidated)
      setSignUpError({
        email: emailError,
        password: passwordError,
        name: fullNameError,
      });
    return !!notValidated;
  };
  const goToSignUp = (): void => {
    if (
      !isLoading &&
      Object.values(signUpError).every((item) => item === null) &&
      !validateSignUpForm()
    )
      performAction(signUpState);
  };

  const goToLogin = (): void =>
    history.push(replaceSubPath(UnAuthRoutes.SubLogin));
  const updateState = (key: string, value: string): void => {
    setSignUpError((prev) => ({ ...prev, [key]: null }));
    setSignUpState((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (success)
      history.push(replaceSubPath(UnAuthRoutes.SubReverify), {
        ...signUpState,
      });
  }, [success]);

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
        <div className="modal-button" onClick={goToSignUp}>
          <span className="modal-button-text">Join</span>
          {isLoading && <IconLoader />}
        </div>
        <div className="existing-modal-account">
          Already have an account? <span onClick={goToLogin}>&nbsp;Login</span>
        </div>
      </div>
    </div>
  );
};

export default withAuth(SignUpModal);
