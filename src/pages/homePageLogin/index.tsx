import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const HomePageLogin: React.FC = () => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);

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
            <img
              src="/images/responsive-menu.svg"
              alt="responsive-menu"
              className="responsive-menu"
              onClick={() => setMenu(!menu)}
            />
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
                <div
                  className="home-page-login-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.SayHello)}
                >
                  Say Hello
                </div>
                <div className="login-signup" style={{ color: "#FFFFFF" }}>
                  Login / Sign up
                </div>

                <div className="home-page-login-page-socials">
                  <div className="home-page-login-page-socials-item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/edcsquared/"
                    >
                      <img src="/images/linkedin.png" alt="linkedin-icon" />
                    </a>
                  </div>
                  <div className="home-page-login-page-socials-item">
                    <a target="_blank" href="https://www.instagram.com/edcsq/">
                      <img src="/images/instagram.png" alt="instagram-icon" />
                    </a>
                  </div>
                  <div className="home-page-login-page-socials-item">
                    <a
                      target="_blank"
                      href="https://www.tiktok.com/@edcsquared"
                    >
                      <img src="/images/tiktok.png" alt="tiktok-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {menu && (
              <div className="home-page-login-menu">
                <div className="home-page-login-menu-option-container">
                  <div
                    className="home-page-login-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Landing)}
                  >
                    Home
                  </div>
                  <div
                    className="home-page-login-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Creators)}
                  >
                    For Creators
                  </div>
                  <div
                    className="home-page-login-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Brands)}
                  >
                    For Brands
                  </div>
                  <div
                    className="home-page-login-menu-option"
                    onClick={() => history.push(UnAuthRoutes.SayHello)}
                  >
                    Say Hello
                  </div>
                  <div
                    className="login-signup"
                    onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
                    style={{ color: "white" }}
                  >
                    Login / Sign UP
                  </div>
                  <div className="home-page-login-menu-img-container">
                    <div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/edcsquared/"
                      >
                        <img
                          src="/images/linkedin.png"
                          alt="linkedin-icon"
                          className="home-page-login-menu-img"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.instagram.com/edcsq/"
                      >
                        <img
                          src="/images/instagram.png"
                          alt="instagram-icon"
                          className="home-page-login-menu-img"
                        />
                      </a>
                    </div>
                    <div>
                      <a
                        target="_blank"
                        href="https://www.tiktok.com/@edcsquared"
                      >
                        <img
                          src="/images/tiktok.png"
                          alt="tiktok-icon"
                          className="home-page-login-menu-img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
