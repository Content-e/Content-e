/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react';
import { IconLoader, Input } from 'components';
import { AuthProps, defaultLoginError, defaultLoginState } from 'utils';
import './adminLogin.css';
import { validateEmail, validatePassword, withAuth } from 'state/auth';
import { useLogin } from 'hooks';
import Checkbox from 'components/authentication/checkbox';

export const AdminLogin: FC<AuthProps> = ({ getAuth }) => {
  const {
    res: { isLoading, success },
    performAction,
  } = useLogin();

  const [formState, setFormState] = useState(defaultLoginState);
  const [formError, setFormError] = useState(defaultLoginError);

  const updateState = (key: string, value: string): void => {
    setFormError((prev) => ({ ...prev, [key]: null }));
    setFormState((prev) => ({ ...prev, [key]: value }));
  };

  const validateSignUpForm = (): boolean => {
    const email = validateEmail(formState.email);
    const password = validatePassword(formState.password);
    if (email || password) {
      setFormError({ email, password });
      return false;
    }
    return true;
  };

  const onLogin = (): void => {
    if (!isLoading && validateSignUpForm()) {
      performAction(formState);
    }
  };

  useEffect(() => {
    if (success) getAuth();
  }, [success]);

  const commonProps = {
    handlers: { state: formState, error: formError, updateState },
  };

  return (
    <div className="admin-login-container">
      <img src="/images/edc-squared-admin-logo.svg" />
      <div className="box-box">
        <div className="login_box">
          <div className="login_title">Login</div>
          <div className="login_fields">
            <Input
              {...commonProps}
              placeholder="Email Address"
              keyProp="email"
            />
            <Input
              {...commonProps}
              placeholder="Password"
              type="password"
              keyProp="password"
            />
          </div>
          <div className="login_forgot-box">
            <div className="login_checkbox">
              <Checkbox />
              <span className="login_remember">Remember me.</span>{' '}
            </div>{' '}
            <div className="login_forgot">
              <span>Forgot Password?</span>{' '}
            </div>{' '}
          </div>
          <button className="login_btn" onClick={onLogin}>
            <span style={{ marginRight: 12 }}>Login</span>
            {isLoading && <IconLoader />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withAuth(AdminLogin);
