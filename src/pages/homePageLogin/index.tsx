import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const HomePageLogin: React.FC = () => {
  const history = useHistory();

  return (
    <div className="home-page-login-page-wrapper">
      <div className="home-page-login-content-container-gradient">
        <div className="home-page-login-page-container">
          <div className="home-page-login-page-navbar comingSoon">
            <div className="home-page-login-page-logo">
              <img
                src="/images/edc-squared-landing-logo.svg"
                alt="edc-squared"
              />
            </div>
            <div className="home-page-login-page-menu-header">
              <div className="home-page-login-page-menu">
                <div
                  className="home-page-login-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Landing)}
                >
                  Home
                </div>
                <div
                  className="home-page-login-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Creators)}
                >
                  For Creators
                </div>
                <div
                  className="home-page-login-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Brands)}
                >
                  For Brands
                </div>
                <div className="home-page-login-page-menu-items">Say Hello</div>
                <div className="login-signup" style={{ color: "#FFFFFF" }}>
                  Login / Sign up
                </div>

                <div className="home-page-login-page-socials">
                  <div className="home-page-login-page-socials-item">
                    <img src="/images/linkedin.png" alt="linkedin-icon" />
                  </div>
                  <div className="home-page-login-page-socials-item">
                    <img src="/images/tiktok.png" alt="tiktok-icon" />
                  </div>
                  <div className="home-page-login-page-socials-item">
                    <img src="/images/instagram.png" alt="instagram-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-page-login-content-container">
            <div className="home-page-login-page-body">
              <div className="home-page-login-page-title">EDCsquared</div>
              <div className="home-page-login-page-title">
                is coming very soon....
              </div>
              <div className="home-page-login-page-subtitle">
                In the meantime, why not say hi...
              </div>
            </div>
            <div className="say-hello-btn-container">
              <div className="say-hello-btn">Say Hello</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-login-footer">
        <div className="home-page-login-footer-text-container">
          <div className="home-page-login-footer-text">Home</div>
          <div className="home-page-login-footer-text">For Creators</div>
          <div className="home-page-login-footer-text">For Brands</div>
          <div className="home-page-login-footer-text">Say Hello</div>
        </div>

        <div className="home-page-login-footer-img-container">
          <img src="/images/landing-insta.svg" />
          <img src="/images/landing-twitter.svg" />
          <img src="/images/landing-tiktok.svg" />
        </div>

        <div className="home-page-login-footer-text">
          © 2023 Copyright EDC Squared. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default HomePageLogin;
