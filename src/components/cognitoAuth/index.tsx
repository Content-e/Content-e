import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import AwsConfig from '../../hooks/apollo/awsConfig';
import { Amplify, Hub } from 'aws-amplify';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import CognitoForgotPassword from './ForgotPassord';
import CognitoLogin from './Login';
import { withProfile } from 'state/profileSteps';

Amplify.configure(AwsConfig);

type SignInParameters = {
  email: string;
  password: string;
};

export const CognitoAuth: FC = () => {
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('dsasad');
  const [code, setCode] = useState('');
  const [customState, setCustomState] = useState<string | null>(null);
  const [AuthType, setAuthType] = useState({ type: 'login', text: 'Login' });
  const [emailSended, setEmailSended] = useState(false);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInParameters>();

  const sendData: SubmitHandler<SignInParameters> = (data) => {
    console.log(data);
    if (AuthType.type === 'login') {
      signIn(data);
    } else if (AuthType.type === 'signup') {
      signUp(data);
    } else {
        if(emailSended){
            console.log(email, code);
            forgotPasswordSubmit(email, code, data.password);
        }
        else{
            forgotPassword(data.email);
        }
    }
  };

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data);
          break;
        case 'signOut':
          setUser(null);
          break;
        case 'customOAuthState':
          setCustomState(data);
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (pathname === '/signup') {
      setAuthType({ type: 'signup', text: 'Sign up' });
    } else if (pathname === '/login') {
      setAuthType({ type: 'login', text: 'Login' });
    } else {
      setAuthType({ type: 'resetPass', text: 'Forgot password' });
    }
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = async ({ email, password }: SignInParameters) => {
    try {
      const { user } = await Auth.signUp(email, password);
      console.log(user);
    } catch (error) {
        AuthError(error?.message);
    }
  };

  const signIn = async ({ email, password }: SignInParameters) => {
    try {
      const user = await Auth.signIn(email, password);
      
      console.log(user);
    } catch (error) {
        AuthError(error?.message);
    }
  };

  const changeAuthType = (type) => {
    if (type === 'signup') {
      setAuthType({ type: 'signup', text: 'Sign up' });
      history.push('/signup');
    } else if (type === 'login') {
      setAuthType({ type: 'login', text: 'Login' });
      history.push('/login');
    } else {
      setAuthType({ type: 'resetPass', text: 'Forgot password' });
      history.push('/forgot-password');
    }
  };

  const forgotPassword = async (email: string) => {
    try {
      const data = await Auth.forgotPassword(email);
      setEmail(email);
      setEmailSended(true);
      console.log(data);
    } catch (err) {
      AuthError(err?.message);
    }
  };

  async function forgotPasswordSubmit(
    email: string,
    code: string,
    newPassword: string
  ) {
    try {
      const data = await Auth.forgotPasswordSubmit(email, code, newPassword);
      console.log(data);
    } catch (err) {
      console.log(err);
      AuthError(err?.message);
    }
  }

  const sendForgotPassCode = (code: string) => {
    setCode(code);
    console.log(code);
  };

  const AuthError = (error) => {
    setError(error);
    setTimeout(() => {
        setError('')
    }, 4000);
  };

  return (
    <Wrapper onSubmit={handleSubmit(sendData)}>
      <AuthTypeText>{AuthType.text}</AuthTypeText>
      {AuthType.type !== 'resetPass' && (
        <>
          <SocialMedia>
            <img
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Facebook,
                })
              }
              className="socialSignIn"
              src={'/images/ContinuewithFacebook.png'}
            />
            <img
              onClick={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google,
                })
              }
              className="socialSignIn"
              src={'/images/ContinuewithGoogle.png'}
            />
          </SocialMedia>
          <LoginChoice className="col my-3 text-center">
            <p>OR</p>
          </LoginChoice>
        </>
      )}
        {AuthType.type !== 'resetPass' ? (
          <CognitoLogin {...{ register, callback: signIn }} />
        ) : (
          <CognitoForgotPassword
            {...{ register, callback: sendForgotPassCode, emailSended }}
          />
        )}
      {AuthType.type !== 'resetPass' && (
        <div className="my-3 d-flex justify-between align-items-center">
          <CheckForm>
            <input
              className="form-check-input"
              type="checkbox"
              id="rememberCheckbox"
            />
            <label className=" font-weight-normal" htmlFor="rememberCheckbox">
              Remember me
            </label>
          </CheckForm>
          <ForgotText onClick={() => changeAuthType('resetPass')}>
            Forgot your password?
          </ForgotText>
        </div>
      )}
      <LoginButton>{AuthType.text}</LoginButton>
      <SignUpText>
        {AuthType.type === 'login' ? (
          <> Don't have an account? </>
        ) : (
          <>Already have an account?</>
        )}
        <span
          onClick={() =>
            changeAuthType(AuthType.type === 'login' ? 'signup' : 'login')
          }
        >
          {' '}
          {AuthType.type === 'login' ? (
            <>Sign up here.</>
          ) : (
            <>Login here.</>
          )}{' '}
        </span>
        If you're a brand please get in touch{' '}
        <a href={process.env.REACT_APP_CLERK_LANDING_URL}>here.</a>
      </SignUpText>
      {errors.email || errors.password || error ? (
        <ErrorMessage>
          {errors.email?.message || errors.password?.message || error}
        </ErrorMessage>
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  max-width: 620px;
  width: 100%;
`;

const AuthTypeText = styled.h2`
  font-size: 46px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
  font-family: Oswald, sans-serif;
  text-transform: capitalize;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 522px) {
    flex-direction: column
  }
`;

const LoginChoice = styled.div`
  p {
    font-weight: 700;
  }
`;

const CheckForm = styled.div`
  display: flex;
  align-items: center;
  input {
    margin: 0 5px 0 0;
  }
  input:focuse {
    border-color: red;
  }
`;
const ForgotText = styled.h6`
  cursor: pointer;
`;

const LoginButton = styled.button`
  height: 56px;
  color: #fff;
  background-color: #101010;
  font-size: 16px;
  border-radius: 60px;
  width: 100%;
  margin-bottom: 10px;
  @media screen and (max-width: 635px) {
    height: 44px;
  }
`;

const SignUpText = styled.div`
  font-size: 14px;
  span,
  a {
    color: #007bff;
    cursor: pointer;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #ffdede;
  font-weight: 500;
`;

export default withProfile(CognitoAuth);
