import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { UnAuthRoutes } from 'utils';
import HeaderDesktop from 'components/authentication/components/header-desktop';
import HeaderMobile from 'components/authentication/components/header-mobile';

export const HomePageLogin: React.FC = () => {
  const history = useHistory();

  return (
    <div className="home-page-login-page-wrapper">
      <div className="home-page-login-content-container-gradient">
        <div className="home-page-login-page-container">
          <HeaderDesktop />
          <HeaderMobile />
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
            <div className="home-page-login-btn-container">
              <div
                className="home-page-login-btn"
                onClick={() => history.push(UnAuthRoutes.SayHello)}
              >
                Say Hello
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-page-login-footer">
        <div className="home-page-login-footer-text-container">
          <div
            className="home-page-login-footer-text"
            onClick={() => history.push(UnAuthRoutes.Landing)}
          >
            Home
          </div>
          <div
            className="home-page-login-footer-text"
            onClick={() => history.push(UnAuthRoutes.Creators)}
          >
            For Creators
          </div>
          <div
            className="home-page-login-footer-text"
            onClick={() => history.push(UnAuthRoutes.Brands)}
          >
            For Brands
          </div>
          <div
            className="home-page-login-footer-text"
            onClick={() => history.push(UnAuthRoutes.SayHello)}
          >
            Say Hello
          </div>
        </div>

        <div className="home-page-login-footer-img-container">
          <a
            target="_blank"
            href="https://www.linkedin.com/company/edcsquared/"
          >
            <img src="/images/landing-linkedin.svg" />
          </a>
          <a target="_blank" href="https://www.instagram.com/edcsq/">
            <img src="/images/landing-insta.svg" />
          </a>
          <a target="_blank" href="https://www.tiktok.com/@edcsquared">
            <img src="/images/landing-tiktok.svg" />
          </a>
        </div>

        <div className="home-page-login-footer-text">
          © 2023 Copyright EDC Squared. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default HomePageLogin;
