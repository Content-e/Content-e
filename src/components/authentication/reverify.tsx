import { FC, useEffect, useState } from 'react';
import { IconLoader, Input } from 'components';
import { useHistory, useLocation } from 'react-router-dom';

import { AuthProps, UnAuthRoutes, UnknownType } from 'utils';
import { useConfirmSignUp, useLogin } from 'hooks';
import { validateVerificationCode, withAuth } from 'state/auth';

import './styles/login.scss';
import Footer from './components/footer';
import HeaderDesktop from './components/header-desktop';
import HeaderMobile from './components/header-mobile';

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

  const [code, setCode] = useState('');
  const [codeError, setCodeError] = useState('');

  const validateVerifyForm = (): boolean => {
    const notValidated = validateVerificationCode(code);
    if (notValidated) setCodeError('Code length is invalid');
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
      <HeaderMobile />
      <div className="login__wrap">
        <HeaderDesktop />
        <div className="login__container">
          <div className="login__box">
            <div className="login__title" style={{ marginBottom: 54 }}>
              Account verification
            </div>
            <div className="login__fields">
              <Input
                keyProp=""
                value={code}
                errorVal={codeError}
                placeholder="Verification code"
                handlers={{
                  updateState: (_, value: string): void => setCode(value),
                }}
              />
            </div>
            <button
              className="login__btn forget-btn"
              onClick={onVerification}
              disabled={isLoading || loginLoading}
            >
              <span style={{ marginRight: 12 }}>Verify</span>
              {isLoading && <IconLoader />}
            </button>
            <div className="login__already">
              Already have an account? <span onClick={onLogin}>Login</span>
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

export default withAuth(Reverify);
