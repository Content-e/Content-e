import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const BrandsPage: React.FC = () => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);

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
            <img
              src="/images/responsive-menu.svg"
              alt="responsive-menu"
              className="responsive-menu"
              onClick={() => setMenu(!menu)}
            />
            <div className="brands-page-menu-header">
              <div className="brands-page-menu">
                <div
                  className="brands-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Landing)}
                >
                  Home
                </div>
                <div
                  className="brands-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Creators)}
                >
                  For Creators
                </div>
                <div
                  className="brands-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Brands)}
                  style={{ color: "#D9D9D9" }}
                >
                  For Brands
                </div>
                <div
                  className="brands-page-menu-items"
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

                <div className="brands-page-socials">
                  <div className="brands-page-socials-item">
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/company/edcsquared/"
                    >
                      <img src="/images/linkedin.png" alt="linkedin-icon" />
                    </a>
                  </div>
                  <div className="brands-page-socials-item">
                    <a target="_blank" href="https://www.instagram.com/edcsq/">
                      <img src="/images/instagram.png" alt="instagram-icon" />
                    </a>
                  </div>
                  <div className="brands-page-socials-item">
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
              <div className="brands-menu">
                <div className="brands-menu-option-container">
                  <div
                    className="brands-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Landing)}
                  >
                    Home
                  </div>
                  <div
                    className="brands-menu-option"
                    onClick={() => history.push(UnAuthRoutes.Creators)}
                  >
                    For Creators
                  </div>
                  <div
                    className="brands-menu-option"
                    style={{ color: "#D9D9D9" }}
                    onClick={() => history.push(UnAuthRoutes.Brands)}
                  >
                    For Brands
                  </div>
                  <div
                    className="brands-menu-option"
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
                  <div className="brands-menu-img-container">
                    <div>
                      <a
                        target="_blank"
                        href="https://www.linkedin.com/company/edcsquared/"
                      >
                        <img
                          src="/images/linkedin.png"
                          alt="linkedin-icon"
                          className="brands-menu-img"
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
                          className="brands-menu-img"
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
                          className="brands-menu-img"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="brands-content-container">
          <div className="brands-page-body">
            <div className="brands-page-title">
              Solve for authentic content at scale.
            </div>
            <div className="brands-page-subtitle">
              Your content, your story, your impact.
            </div>

            <div className="brands-page-detailed-content-container">
              <div className="brands-page-detailed-content">
                EDC squared is reinventing the way brands collaborate with
                creators. The platform enables brands to build and nurture
                relationships with an authentic and engaged community of
                everyday creators, while providing a positive social impact.
              </div>
              <div className="brands-page-detailed-content">
                Driving impact and influence amongst your audience is one of the
                biggest challenges in marketing today. The cost to produce
                content at scale, and the decreasing levels of authenticity
                within macro influencer content make this challenge even more
                demanding.
              </div>
              <div className="brands-page-detailed-content">
                EDC squared empowers everyday creators to produce authentic
                content for your brand. You only promote the content you
                approve, so there’s no risk and full control.
              </div>
            </div>

            <div className="brands-points">
              <div className="brands-single-point">
                <img src="/images/brands-polygon.svg" />
                <div className="brands-main-points">
                  Authentic content at scale.
                </div>
              </div>
              <div className="brands-single-point">
                <img src="/images/brands-polygon.svg" />
                <div className="brands-main-points">
                  Regional, cultural and demographic relevance.
                </div>
              </div>
              <div className="brands-single-point">
                <img src="/images/brands-polygon.svg" />
                <div className="brands-main-points">
                  Jump on trends quicker than your competitors.
                </div>
              </div>
              <div className="brands-single-point">
                <img src="/images/brands-polygon.svg" />
                <div className="brands-main-points">
                  You don’t approve content, you don’t pay. No risk.
                </div>
              </div>
            </div>

            <div className="for-brands-content-btn-container">
              <div
                className="login-signup brands-btn"
                onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
              >
                Login / Sign up
              </div>
              <div
                className="login-signup brands-btn"
                onClick={() => history.push(UnAuthRoutes.SayHello)}
              >
                Say Hello
              </div>
            </div>
          </div>
          <img
            src="/images/brands-union.png"
            className="brands-union"
            style={{ marginLeft: "63px", marginBottom: "-32px" }}
          />
        </div>
      </div>

      <div className="how-it-works-container-brands">
        <div className="brands-page-workBtn">How it works</div>
        <div className="brands-page-steps-wrapper">
          <div className="brands-page-single-steps">
            <div className="brands-page-step-number-circle">
              <div className="brands-page-step-number-text">1</div>
            </div>
            <div className="brands-page-step-text">
              Setup a brand, category or product specific campaign.
            </div>
          </div>
          <div className="brands-page-single-steps">
            <div className="brands-page-step-number-circle">
              <div className="brands-page-step-number-text">2</div>
            </div>
            <div className="brands-page-step-text">
              Approve or reject UGC content from creators as it comes in.
            </div>
          </div>
          <div className="brands-page-single-steps">
            <div className="brands-page-step-number-circle">
              <div className="brands-page-step-number-text">3</div>
            </div>
            <div className="brands-page-step-text">
              Approved content goes into an ad campaign and gets promoted.
            </div>
          </div>
          <div className="brands-page-single-steps">
            <div className="brands-page-step-number-circle">
              <div className="brands-page-step-number-text">4</div>
            </div>
            <div className="brands-page-step-text">
              Real time analysis and optimisation of campaign gives you full
              control.
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

export default BrandsPage;
