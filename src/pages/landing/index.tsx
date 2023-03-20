import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const LandingPage: React.FC = () => {
  const history = useHistory();

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
                <div className="landing-page-menu-items">Say Hello</div>
                <div className="login-signup">Login / Sign up</div>

                <div className="landing-page-socials">
                  <div className="landing-page-socials-item">
                    <img src="/images/linkedin.png" alt="linkedin-icon" />
                  </div>
                  <div className="landing-page-socials-item">
                    <img src="/images/tiktok.png" alt="tiktok-icon" />
                  </div>
                  <div className="landing-page-socials-item">
                    <img src="/images/instagram.png" alt="instagram-icon" />
                  </div>
                </div>
              </div>
            </div>
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
                  creator..
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
                  <span className="for-content-btn-text">FOR BRANDS</span>
                </div>
                <div className="for-creators-btn">
                  <span className="for-content-btn-text">FOR CREATORS</span>
                </div>
              </div>
            </div>
            <img src="/images/landing-union.svg" />
          </div>
        </div>

        <div className="how-it-works-container">
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
                Creators earn from their content. Brands get authentic content
                at scale.
              </div>
            </div>
          </div>
        </div>

        <div className="landing-footer">
          <div className="landing-footer-text-container">
            <div className="landing-footer-text">Home</div>
            <div className="landing-footer-text">For Creators</div>
            <div className="landing-footer-text">For Brands</div>
            <div className="landing-footer-text">Say Hello</div>
          </div>

          <div className="landing-footer-img-container">
            <img src="/images/landing-insta.svg" />
            <img src="/images/landing-twitter.svg" />
            <img src="/images/landing-tiktok.svg" />
          </div>

          <div className="landing-footer-text">
            © 2023 Copyright EDC Squared. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
