import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const LandingPage: React.FC = () => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);

  return (
    <div className="landing-page-wrapper">
      <div className="landing-content-container-gradient">
        <div className="landing-page-container">
          <div className="landing-page-navbar comingSoon">
            <div className="landing-page-logo">
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
            <div className="landing-page-menu-header">
              <div className="landing-page-menu">
                <div
                  className="landing-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Landing)}
                  style={{ color: "#D9D9D9" }}
                >
                  Home
                </div>
                <div
                  className="landing-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Creators)}
                >
                  For Creators
                </div>
                <div
                  className="landing-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Brands)}
                >
                  For Brands
                </div>
                <div
                  className="landing-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.SayHello)}
                >
                  Say Hello
                </div>
                <div
                  className="login-signup"
                  onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
                >
                  Login / Sign up
                </div>

                <div className="landing-page-socials">
                  <div className="landing-page-socials-item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/edcsquared/"
                    >
                      <img src="/images/linkedin.png" alt="linkedin-icon" />
                    </a>
                  </div>
                  <div className="landing-page-socials-item">
                    <a target="_blank" href="https://www.instagram.com/edcsq/">
                      <img src="/images/instagram.png" alt="instagram-icon" />
                    </a>
                  </div>
                  <div className="landing-page-socials-item">
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
              <div className="landing-menu">
                <div className="landing-menu-option-container">
                  <div
                    className="landing-menu-option"
                    style={{ color: "#D9D9D9" }}
                    onClick={() => history.push(UnAuthRoutes.Landing)}
                  >
                    Home
                  </div>
                  <div
                    className="landing-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Creators)}
                  >
                    For Creators
                  </div>
                  <div
                    className="landing-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Brands)}
                  >
                    For Brands
                  </div>
                  <div
                    className="landing-menu-option"
                    onClick={() => history.push(UnAuthRoutes.SayHello)}
                  >
                    Say Hello
                  </div>
                  <div
                    className="login-signup"
                    onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
                  >
                    Login / Sign UP
                  </div>
                  <div className="landing-menu-img-container">
                    <div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/edcsquared/"
                      >
                        <img
                          src="/images/linkedin.png"
                          alt="linkedin-icon"
                          className="landing-menu-img"
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
                          className="landing-menu-img"
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
                          className="landing-menu-img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="landing-content-container">
            <div className="landing-page-body">
              <div className="landing-page-title">
                Everyday Creators, everyday Creative.
              </div>
              <div className="landing-page-subtitle">
                Your content, your story, your impact.
              </div>

              <div className="landing-page-detailed-content-container">
                <div className="landing-page-detailed-content">
                  We are passionate about creating positive social impact by
                  empowering anyone across the globe to become a content
                  creator.
                </div>
                <div className="landing-page-detailed-content">
                  One of the major challenges for brands is having to drive
                  influence and impact amongst their audience. An audience who
                  have an ever-decreasing attention span. Creating authentic
                  content at scale solves this challenge, but, until now has not
                  been a viable solution.
                </div>
                <div className="landing-page-detailed-content">
                  EDC squared is focused on solving this challenge by enabling
                  everyday creators and seamlessly connecting them with brands.
                  We create opportunities for individuals whilst solving major
                  industry challenges for brands.
                </div>
              </div>

              <div className="for-landing-content-btn-container">
                <div className="for-brands-btn">
                  <span
                    className="for-content-btn-text"
                    onClick={() => history.push(UnAuthRoutes.Creators)}
                  >
                    FOR CREATORS
                  </span>
                </div>
                <div className="for-creators-btn">
                  <span
                    className="for-content-btn-text"
                    onClick={() => history.push(UnAuthRoutes.Brands)}
                  >
                    FOR BRANDS
                  </span>
                </div>
              </div>
            </div>
            <img
              src="/images/landing-union.png"
              style={{ marginLeft: "63px", marginBottom: "-32px" }}
              className="landing-union"
            />
          </div>
        </div>
      </div>

      <div className="how-it-works-container-landing">
        <div className="landing-page-workBtn">How it works</div>
        <div className="landing-page-steps-wrapper">
          <div className="landing-page-single-steps">
            <div className="landing-page-step-number-circle">
              <div className="landing-page-step-number-text">1</div>
            </div>
            <div className="landing-page-step-text">
              Creators post content about the brands and topics they love.
            </div>
          </div>
          <div className="landing-page-single-steps">
            <div className="landing-page-step-number-circle">
              <div className="landing-page-step-number-text">2</div>
            </div>
            <div className="landing-page-step-text">
              Content is linked to brands via EDC squared
            </div>
          </div>
          <div className="landing-page-single-steps">
            <div className="landing-page-step-number-circle">
              <div className="landing-page-step-number-text">3</div>
            </div>
            <div className="landing-page-step-text">
              If brands like it, they promote it.
            </div>
          </div>
          <div className="landing-page-single-steps">
            <div className="landing-page-step-number-circle">
              <div className="landing-page-step-number-text">4</div>
            </div>
            <div className="landing-page-step-text">
              Creators earn from their content. Brands get authentic content at
              scale.
            </div>
          </div>
        </div>
      </div>

      <div className="landing-footer">
        <div className="landing-footer-text-container">
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Landing)}
          >
            Home
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Creators)}
          >
            For Creators
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.Brands)}
          >
            For Brands
          </div>
          <div
            className="landing-footer-text"
            onClick={() => history.push(UnAuthRoutes.SayHello)}
          >
            Say Hello
          </div>
        </div>

        <div className="landing-footer-img-container">
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

        <div className="landing-footer-text">
          © 2023 Copyright EDC Squared. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
