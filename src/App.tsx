import React, { useState, useEffect } from "react";
import { Amplify } from "aws-amplify";
import "bootstrap/dist/css/bootstrap.min.css";
import config from "aws-exports";
import ErrorProvider from "state/error/error.provider";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "state/auth";
import MainRouter from "./router";
import { ProfileProvider } from "state/profileSteps";
import ScrollToTop from "./ScrollToTop";
import "./assets/css/index.scss";

Amplify.configure(config);

const App: React.FC = () => {
  const [allowCookies, setAllowCookies] = useState(
    localStorage.getItem("allowCookies")
  );

  return (
    <ErrorProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <AuthProvider>
            <ProfileProvider>
              <Route path="/" component={MainRouter} />
            </ProfileProvider>
          </AuthProvider>
          {!allowCookies && (
            <div className="cookies__banner">
              <p>
                We use cookies to help us offer you the best onlinee experience.
                By continuing to use our website and / or clocking OK, you agree
                to our use of cookies in accordance with our Privacy Policy.
              </p>
              <button
                onClick={() => {
                  localStorage.setItem("allowCookies", "true");
                  setAllowCookies("true");
                }}
              >
                Ok
              </button>
            </div>
          )}
        </div>
      </Router>
    </ErrorProvider>
  );
};

export default App;
