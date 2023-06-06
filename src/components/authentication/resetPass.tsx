import React, { FC, useEffect, useState } from 'react';
import { IconLoader, Input } from 'components';
import { useHistory, useLocation } from 'react-router-dom';
import {
  defaultResetError,
  defaultResetState,
  UnAuthRoutes,
  UnknownType,
  unverifiedUser,
} from 'utils';
import { validateVerificationCode, validatePassword } from 'state/auth';
import { useResetPass } from 'hooks';
import Footer from './components/footer';
import HeaderDesktop from './components/header-desktop';
import HeaderMobile from './components/header-mobile';

export const ResetPassword: FC = () => {
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

  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const onSignUp = (): void => history.push(UnAuthRoutes.Register);
  const onReset = (): void => {
    if (validateResetForm()) performAction(formState);
  };

  useEffect(() => {
    if (error === unverifiedUser)
      history.push(UnAuthRoutes.Reverify, { ...formState });
    else if (success) history.push(UnAuthRoutes.Login);
  }, [success, error]);

  useEffect(() => {
    const { email } = (state as UnknownType) || {};
    if (!email) history.push(UnAuthRoutes.Login);
  }, [state]);

  const commonProps = {
    handlers: { state: formState, error: formError, updateState },
  };

  return (
    <div className="login">
      <HeaderMobile />
      <div className="login__wrap">
        <HeaderDesktop />
        <div className="login__container">
          <div className="login__box">
            <div className="login__title" style={{ marginBottom: 54 }}>
              Reset Password
            </div>
            <div className="login__fields">
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
            <button
              className="login__btn forget-btn"
              onClick={onReset}
              disabled={isLoading}
            >
              <span style={{ marginRight: 12 }}>Reset Password</span>
              {isLoading && <IconLoader />}
            </button>
            <div className="login__already">
              Already have an account? <span onClick={onSignUp}>Login</span>
            </div>
          </div>
        </div>
        <div className="login__landing">
          <img src="/images/login-image.png" alt="picture of a landscape" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
