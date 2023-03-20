import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const CreatorsPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="creators-page-wrapper">
      <div className="creators-content-container-gradient">
        <div className="creators-page-container">
          <div className="creators-page-navbar comingSoon">
            <div className="creators-page-logo">
              <img
                src="/images/edc-squared-landing-logo.svg"
                alt="edc-squared"
              />
            </div>
            <div className="creators-page-menu-header">
              <div className="creators-page-menu">
                <div
                  className="creators-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Landing)}
                >
                  Home
                </div>
                <div
                  className="creators-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Creators)}
                  style={{ color: "#D9D9D9" }}
                >
                  For Creators
                </div>
                <div
                  className="creators-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Brands)}
                >
                  For Brands
                </div>
                <div
                  className="creators-page-menu-items"
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

                <div className="creators-page-socials">
                  <div className="creators-page-socials-item">
                    <img src="/images/linkedin.png" alt="linkedin-icon" />
                  </div>
                  <div className="creators-page-socials-item">
                    <img src="/images/tiktok.png" alt="tiktok-icon" />
                  </div>
                  <div className="creators-page-socials-item">
                    <img src="/images/instagram.png" alt="instagram-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="creators-content-container">
            <div className="creators-page-body">
              <div className="creators-page-title">
                Monetise Your everyday content.
              </div>
              <div className="creators-page-subtitle">
                Your content, your story, your impact.
              </div>

              <div className="creators-page-detailed-content-container">
                <div className="creators-page-detailed-content">
                  EDC squared lets you monetise your everyday content. Simply
                  connect content from your social channels to brands via EDC
                  squared, and be rewarded within days.
                </div>
                <div className="creators-page-detailed-content">
                  Foster long term relationships with your favourite brands and
                  develop your content producing skills through our industry
                  experts. Our seamless payment process also means no more
                  waiting for payment.
                </div>
              </div>

              <div className="creators-points">
                <div className="creators-single-point">
                  <img src="/images/polygon.svg" />
                  <div className="creators-main-points">
                    Earn for your everyday social content.
                  </div>
                </div>
                <div className="creators-single-point">
                  <img src="/images/polygon.svg" />
                  <div className="creators-main-points">
                    Develop your content creation skills.
                  </div>
                </div>
                <div className="creators-single-point">
                  <img src="/images/polygon.svg" />
                  <div className="creators-main-points">
                    Work seamlessly with the best brands.
                  </div>
                </div>
              </div>

              <div className="for-creators-content-btn-container">
                <div className="login-signup creators-btn">Login / Sign up</div>
                <div className="login-signup creators-btn">Say Hello</div>
              </div>
            </div>
            <img src="/images/creators-union.svg" />
          </div>
        </div>
      </div>

      <div className="how-it-works-container-creators">
        <div className="creators-page-workBtn">How it works</div>
        <div className="creators-page-steps-wrapper">
          <div className="creators-page-single-steps">
            <div className="creators-page-step-number-circle">
              <div className="creators-page-step-number-text">1</div>
            </div>
            <div className="creators-page-step-text">
              Post your everyday content about brands and topics you love.
            </div>
          </div>
          <div className="creators-page-single-steps">
            <div className="creators-page-step-number-circle">
              <div className="creators-page-step-number-text">2</div>
            </div>
            <div className="creators-page-step-text">
              Link your content via EDC squared.
            </div>
          </div>
          <div className="creators-page-single-steps">
            <div className="creators-page-step-number-circle">
              <div className="creators-page-step-number-text">3</div>
            </div>
            <div className="creators-page-step-text">
              If a brand likes it, they will approve and promote it.
            </div>
          </div>
          <div className="creators-page-single-steps">
            <div className="creators-page-step-number-circle">
              <div className="creators-page-step-number-text">4</div>
            </div>
            <div className="creators-page-step-text">
              The better your content performs the more you earn.
            </div>
          </div>
          <div className="creators-page-single-steps">
            <div className="creators-page-step-number-circle">
              <div className="creators-page-step-number-text">5</div>
            </div>
            <div className="creators-page-step-text">
              Track your earnings in realtime.
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
  );
};

export default CreatorsPage;
