import React, { useState } from 'react';
import { Amplify } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.min.css';
import config from 'aws-exports';
import ErrorProvider from 'state/error/error.provider';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AuthProvider } from 'state/auth';
import MainRouter from './router';
import { ProfileProvider } from 'state/profileSteps';
import ScrollToTop from './ScrollToTop';
import './assets/css/index.scss';
import { Auth0Provider } from '@auth0/auth0-react';
import Auto0Login from "./components/auth0Login";

Amplify.configure(config);

const App: React.FC = () => {
  const [allowCookies, setAllowCookies] = useState(
    localStorage.getItem('allowCookies')
  );

  return (
    <ErrorProvider>
      <Auth0Provider
          domain={process.env.REACT_APP_AUTH_DOMAIN || ''}
          clientId={process.env.REACT_APP_AUTH_CLIENT_ID || ''}
          authorizationParams={{
            redirect_uri: process.env.REACT_APP_URL || '',// window.location.origin
          }}
      >
      <Router>
        <ScrollToTop />
        <div className="App text-gray-600">
          <AuthProvider>
            <ProfileProvider>
                <Auto0Login/>
              <Route path="/" component={MainRouter} />
            </ProfileProvider>
          </AuthProvider>
          {!allowCookies && (
            <div className="cookies__banner">
              <p>
                We use cookies to help us offer you the best online experience.
                By continuing to use our website and / or clicking OK, you agree
                to our use of cookies in accordance with our Privacy Policy.
              </p>
              <button
                onClick={() => {
                  localStorage.setItem('allowCookies', 'true');
                  setAllowCookies('true');
                }}
              >
                Ok
              </button>
            </div>
          )}
        </div>
      </Router>
      </Auth0Provider>
    </ErrorProvider>
  );
};

export default App;
