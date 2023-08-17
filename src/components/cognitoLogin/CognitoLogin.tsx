import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Auth, CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import AwsConfig from '../../hooks/apollo/awsConfig';
import { Amplify, Hub } from 'aws-amplify';

Amplify.configure(AwsConfig);
type SignInParameters = {
  email: string;
  password: string;
};
export async function signUp({ password, email }: SignInParameters) {
  try {
    const { user } = await Auth.signUp(email, password);
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}

export async function signIn({ email, password }: SignInParameters) {
  try {
    const user = await Auth.signIn(email, password);
    console.log(user);
  } catch (error) {
    console.log('error signing in', error);
  }
}

export const QognitoLogin = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [customState, setCustomState] = useState<string | null>(null);
  const [AuthType, setAuthType] = useState('Login');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (AuthType === 'Login') {
      signIn({ email, password });
    } else {
      signUp({ email, password });
    }
    console.log(email, password);
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

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await Auth.currentAuthenticatedUser();
      setUser(currentUser);
    } catch (error) {
      console.error(error);
      console.log('Not signed in');
    }
  };

  return (
    <Wrapper>
      <AuthTypeText>{AuthType}</AuthTypeText>
      <SocialMedia>
        <div
          className="facebookSignIn"
          onClick={() =>
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Facebook,
            })
          }
        ></div>
        <div
          className="googleSignIn"
          onClick={() =>
            Auth.federatedSignIn({
              provider: CognitoHostedUIIdentityProvider.Google,
            })
          }
        ></div>
      </SocialMedia>
      <LoginChoice className="col my-3 text-center">
        <p>OR</p>
      </LoginChoice>
      <IputWrap>
        <FormInput
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
        />
      </IputWrap>
      <IputWrap1>
        <FormInput
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </IputWrap1>
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
        <ForgotText>Forgot your password?</ForgotText>
      </div>
      <LoginButton
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        {AuthType}
      </LoginButton>
      {AuthType === 'Login' ? (
        <SignUpText>
          Don't have an account?
          <span
            onClick={() =>
              setAuthType((prev) => (prev === 'Login' ? 'Sign up' : 'Login'))
            }
          >
            {' '}Sign up here.{' '}
          </span>
          If you're a brand please get in touch{' '}
          <a href={process.env.REACT_APP_CLERK_LANDING_URL}>here.</a>
        </SignUpText>
      ) : (
        <SignUpText>
          Are you a brand please get in touch{' '}
          <a href={process.env.REACT_APP_CLERK_LANDING_URL}>here.</a>
        </SignUpText>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.form`
  min-width: 620px;
`;

const AuthTypeText = styled.h2`
  font-size: 46px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
  font-family: Oswald, sans-serif;
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormInput = styled.input`
  width: 100%;
  min-height: 64px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 6px;
  margin-bottom: 0;
  padding: 16px;
  font-size: 18px;
  line-height: 32px;
`;

const LoginChoice = styled.div`
  p {
    font-weight: 700;
  }
`;

const IputWrap = styled.div`
  position: relative;
  margin-bottom: 26px;
`;

const IputWrap1 = styled.div`
  position: relative;
  margin-bottom: 16px;
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
`;

const SignUpText = styled.div`
  font-size: 14px;
  span,
  a {
    color: #007bff;
    cursor: pointer;
  }
`;

export default QognitoLogin;
