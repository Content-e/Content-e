import { FC, useEffect, useState } from 'react';
import { IconLoader, Input } from 'components';
import { useHistory } from 'react-router-dom';
import { UnAuthRoutes } from 'utils';
import { useForgetPass } from 'hooks';
import { validateEmail, withAuth } from 'state/auth';
import HeaderDesktop from './components/header-desktop';
import HeaderMobile from './components/header-mobile';
import Footer from './components/footer';

export const ForgetPassword: FC = () => {
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

  const onLogin = (): void => history.push(UnAuthRoutes.Login);
  const onForget = (): void => {
    if (!validateSignUpForm()) performAction(email);
  };

  useEffect(() => {
    if (success) history.push(UnAuthRoutes.ResetPassword, { email });
  }, [success]);

  return (
    <div className="login">
      <HeaderMobile />
      <div className="login__wrap">
        <HeaderDesktop />
        <div className="login__content">
          <div className="w-full flex justify-around">
            <div className="login__container">
              <div className="login__box">
                <div className="login__title" style={{ marginBottom: 54 }}>
                  Forgot password
                </div>
                <div className="login__fields">
                  <Input
                    keyProp={email}
                    value={email}
                    errorVal={emailError}
                    placeholder="Email address"
                    handlers={{ updateState }}
                  />
                </div>
                <button
                  className="login__btn forget-btn"
                  onClick={onForget}
                  disabled={isLoading || !!emailError}
                >
                  <span style={{ marginRight: 12 }}>Submit</span>
                  {isLoading && <IconLoader />}
                </button>
                <div className="login__already">
                  Already have an account? <span onClick={onLogin}>Login</span>
                </div>
              </div>
            </div>
          </div>
          <div className="login__landing">
            <img src="/images/login-image.png" alt="picture of a landscape" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default withAuth(ForgetPassword);
