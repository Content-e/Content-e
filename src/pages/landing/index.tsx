import React from "react";
import "./style.css";

export const LandingPage: React.FC = () => {
  return (
    <div className="landing-page-wrapper">
      <div className="landing-page-bg_image">
        <img src="/images/bg-landing.png" alt="cover-image" />
      </div>
      <div className="landing-page-menu-header">
        <div className="landing-page-menu">
          <div className="landing-page-menu-items">For Creators</div>
          <div className="landing-page-menu-items">For Brands</div>
          <div className="landing-page-menu-items">Contact us</div>
          <div className="landing-page-menu-items btn-item">
            Login / Sign Up
          </div>
        </div>
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
      <div className="landing-page-body">
        <div className="landing-page-title">
          Everyday creators, everyday creative.
        </div>
        <div className="landing-page-subtitle">Driving change and impact.</div>
        <div className="landing-page-workBtn">How it works</div>
        <div className="landing-page-steps-wrapper">
          <div className="landing-page-single-steps">
            <div className="landing-page-step-number-circle">
              <div className="landing-page-step-number-text">1</div>
            </div>
            <div className="landing-page-step-text">
              Creators post their content about a brand or topic and shares it
              with the brand.
            </div>
          </div>
          <div className="landing-page-single-steps">
            <div className="landing-page-step-number-circle">
              <div className="landing-page-step-number-text">2</div>
            </div>
            <div className="landing-page-step-text">
              Brands reviews the content, if they like the content, they promote
              it.
            </div>
          </div>
          <div className="landing-page-single-steps">
            <div className="landing-page-step-number-circle">
              <div className="landing-page-step-number-text">3</div>
            </div>
            <div className="landing-page-step-text">
              Creators earn money for their content. Brands get authentic
              content at scale.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
