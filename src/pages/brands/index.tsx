import React from "react";
import "./style.css";

export const BrandsPage: React.FC = () => {
  return (
    <div className="brands-page-wrapper">
      <div className="brands-content-container-gradient">
        <div className="brands-page-container">
          <div className="brands-page-navbar comingSoon">
            <div className="brands-page-logo">
              <img
                src="/images/edc-squared-landing-logo.svg"
                alt="edc-squared"
              />
            </div>
            <div className="brands-page-menu-header">
              <div className="brands-page-menu">
                <div className="brands-page-menu-items">Home</div>
                <div className="brands-page-menu-items">For Creators</div>
                <div className="brands-page-menu-items">For Brands</div>
                <div className="brands-page-menu-items">Say Hello</div>
                <div className="login-signup">Login / Sign up</div>

                <div className="brands-page-socials">
                  <div className="brands-page-socials-item">
                    <img src="/images/linkedin.png" alt="linkedin-icon" />
                  </div>
                  <div className="brands-page-socials-item">
                    <img src="/images/tiktok.png" alt="tiktok-icon" />
                  </div>
                  <div className="brands-page-socials-item">
                    <img src="/images/instagram.png" alt="instagram-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="brands-content-container">
            <div className="brands-page-body">
              <div className="brands-page-title">
                Monetise Your everyday content.
              </div>
              <div className="brands-page-subtitle">
                Your content, your story, your impact.
              </div>

              <div className="brands-page-detailed-content-container">
                <div className="brands-page-detailed-content">
                  EDC squared lets you monetise your everyday content. Simply
                  connect content from your social channels to brands via EDC
                  squared, and be rewarded within days.
                </div>
                <div className="brands-page-detailed-content">
                  Foster long term relationships with your favourite brands and
                  develop your content producing skills through our industry
                  experts. Our seamless payment process also means no more
                  waiting for payment.
                </div>
              </div>

              <div className="brand-points">
                <div className="brand-single-point">
                  <img src="/images/polygon.svg" />
                  <div className="brand-main-points">
                    Earn for your everyday social content.
                  </div>
                </div>
                <div className="brand-single-point">
                  <img src="/images/polygon.svg" />
                  <div className="brand-main-points">
                    Develop your content creation skills.
                  </div>
                </div>
                <div className="brand-single-point">
                  <img src="/images/polygon.svg" />
                  <div className="brand-main-points">
                    Work seamlessly with the best brands.
                  </div>
                </div>
              </div>

              <div className="for-brands-content-btn-container">
                <div className="login-signup brands-btn">Login / Sign up</div>
                <div className="login-signup brands-btn">Say Hello</div>
              </div>
            </div>
            <img src="/images/brands-union.svg" />
          </div>
        </div>

        <div className="how-it-works-container">
          <div className="brands-page-workBtn">How it works</div>
          <div className="brands-page-steps-wrapper">
            <div className="brands-page-single-steps">
              <div className="brands-page-step-number-circle">
                <div className="brands-page-step-number-text">1</div>
              </div>
              <div className="brands-page-step-text">
                Creators post content about the brands and topics they love.
              </div>
            </div>
            <div className="brands-page-single-steps">
              <div className="brands-page-step-number-circle">
                <div className="brands-page-step-number-text">2</div>
              </div>
              <div className="brands-page-step-text">
                Content is linked to brands via EDC squared
              </div>
            </div>
            <div className="brands-page-single-steps">
              <div className="brands-page-step-number-circle">
                <div className="brands-page-step-number-text">3</div>
              </div>
              <div className="brands-page-step-text">
                If brands like it, they promote it.
              </div>
            </div>
            <div className="brands-page-single-steps">
              <div className="brands-page-step-number-circle">
                <div className="brands-page-step-number-text">4</div>
              </div>
              <div className="brands-page-step-text">
                Creators earn from their content. Brands get authentic content
                at scale.
              </div>
            </div>
            <div className="brands-page-single-steps">
              <div className="brands-page-step-number-circle">
                <div className="brands-page-step-number-text">5</div>
              </div>
              <div className="brands-page-step-text">
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

export default BrandsPage;
