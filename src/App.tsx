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
import Auto0Login from './components/clerkLogin';
import { ClerkProvider } from '@clerk/clerk-react';
import {UnAuthRoutes, UnknownType} from "./utils";
import {clerkStyles} from "./utils/constants/clerkStyles";

Amplify.configure(config);

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY || '';

const App: React.FC = () => {
  const [allowCookies, setAllowCookies] = useState(
    localStorage.getItem('allowCookies')
  );

  return (
    <ErrorProvider>
      <ClerkProvider
        publishableKey={clerkPubKey}
        afterSignInUrl={UnAuthRoutes.ClerkRedirect}
        afterSignUpUrl={UnAuthRoutes.ClerkRedirect}
        appearance={clerkStyles as UnknownType}
      >
        <Router>
          <ScrollToTop />
          <div className="App text-gray-600">
            <AuthProvider>
              <ProfileProvider>
                <Auto0Login />
                <Route path="/" component={MainRouter} />
              </ProfileProvider>
            </AuthProvider>
            {!allowCookies && (
              <div className="cookies__banner">
                <p>
                  We use cookies to help us offer you the best online
                  experience. By continuing to use our website and / or clicking
                  OK, you agree to our use of cookies in accordance with our
                  Privacy Policy.
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
      </ClerkProvider>
    </ErrorProvider>
  );
};

export default App;
