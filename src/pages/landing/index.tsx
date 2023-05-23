import React, { useState } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const LandingPage: React.FC = () => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const [allowCookies, setAllowCookies] = useState(
    localStorage.getItem("allowCookies")
  );

  return (
    <>
      <div className="landing-page-wrapper">
        <div className="landing-page-wrapper-container">
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
                        <a
                          target="_blank"
                          href="https://www.instagram.com/edcsq/"
                        >
                          <img
                            src="/images/instagram.png"
                            alt="instagram-icon"
                          />
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
                    Unlocking the power of brand communities
                  </div>
                  <div className="landing-page-subtitle">
                    We solve for authentic creator led content at scale on a
                    results based payment model.
                  </div>
                  <ul className="landing-page-detailed-content-list">
                    <li className="landing-page-detailed-content-item detailed-list-item-1">
                      Authentic content at scale
                    </li>
                    <li className="landing-page-detailed-content-item detailed-list-item-2">
                      A better way of doing things for creators and brands.
                    </li>
                    <li className="landing-page-detailed-content-item detailed-list-item-3">
                      A Performance based payment model
                    </li>
                  </ul>

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
        </div>

        <div className="how-it-works-container-landing">
          <div className="landing-page-workBtn">Our Purpose</div>
          <div className="landing-page-steps-wrapper">
            <div className="landing-page-steps-row">
              <div className="landing-page-steps-item steps-item-1">
                <div className="landing-page-steps-item-content">
                  <div className="landing-page-steps-item-title">
                    Social Impact
                  </div>
                  <div className="landing-page-steps-item-text">
                    <p>
                      We are passionate about creating positive social impact by
                      unlocking the power of Brand communities across the globe.
                    </p>
                    <p>
                      We believe in providing opportunities for individuals and
                      communities as well as enabling brands to market in a
                      morally responsible way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="landing-page-steps-item steps-item-2">
                <div className="landing-page-steps-item-content">
                  <img
                    className="landing-photo"
                    alt=""
                    src="/images/landing-photo.png"
                  />
                </div>
              </div>
            </div>
            <div className="landing-page-steps-row">
              <div className="landing-page-steps-item steps-item-3"></div>
              <div className="landing-page-steps-item steps-item-4">
                <div className="landing-page-steps-item-content">
                  <div className="landing-page-steps-item-title">
                    The Industry
                  </div>
                  <div className="landing-page-steps-item-text">
                    <p>
                      We believe there is a better way to do things.
                      Inefficient, inauthentic advertising on a cost per
                      creative pricing model should be a thing of the past.
                    </p>
                    <p>
                      We believe in a more seamless connection between brands
                      and creators, enabling an always on collaboration.
                    </p>
                  </div>
                </div>
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
      {!allowCookies && (
        <div className="cookie-message">
          <span>
            We use cookies to help us offer you the best onlinee experience. By
            continuing to use our website and / or clocking OK, you agree to our
            use of cookies in accordance with our Privacy Policy.
          </span>
          <button
            onClick={() => {
              localStorage.setItem("allowCookies", "true");
              setAllowCookies("true");
            }}
          >
            OK
          </button>
        </div>
      )}
    </>
  );
};

export default LandingPage;
