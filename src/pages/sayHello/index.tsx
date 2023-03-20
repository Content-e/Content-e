import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

export const SayHello: React.FC = () => {
  const history = useHistory();

  return (
    <div className="say-hello-page-wrapper">
      <div className="say-hello-content-container-gradient">
        <div className="say-hello-page-container">
          <div className="say-hello-page-navbar comingSoon">
            <div className="say-hello-page-logo">
              <img
                src="/images/edc-squared-landing-logo.svg"
                alt="edc-squared"
              />
            </div>
            <div className="say-hello-page-menu-header">
              <div className="say-hello-page-menu">
                <div
                  className="say-hello-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Landing)}
                >
                  Home
                </div>
                <div
                  className="say-hello-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Creators)}
                >
                  For Creators
                </div>
                <div
                  className="say-hello-page-menu-items"
                  onClick={() => history.push(UnAuthRoutes.Brands)}
                >
                  For Brands
                </div>
                <div
                  className="say-hello-page-menu-items"
                  style={{ color: "#D9D9D9" }}
                >
                  Say Hello
                </div>
                <div
                  className="login-signup"
                  onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
                >
                  Login / Sign up
                </div>

                <div className="say-hello-page-socials">
                  <div className="say-hello-page-socials-item">
                    <img src="/images/linkedin.png" alt="linkedin-icon" />
                  </div>
                  <div className="say-hello-page-socials-item">
                    <img src="/images/tiktok.png" alt="tiktok-icon" />
                  </div>
                  <div className="say-hello-page-socials-item">
                    <img src="/images/instagram.png" alt="instagram-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="say-hello-content-container">
            <div className="say-hello-page-body">
              <div className="say-hello-page-title">Let’s talk!</div>
              <div className="ask-us-anything">
                Ask us anything or just say hi...
              </div>
              <div className="hello-edc">hello@edcsquared.io</div>
            </div>
            <div className="say-hello-input-box">
              <div className="say-hello-input-container">
                <div className="say-hello-field-container">
                  <div className="say-hello-input-text">Name</div>
                  <input
                    placeholder="Name Surname"
                    className="say-hello-input name"
                  />
                </div>
                <div className="say-hello-field-container">
                  <div className="say-hello-input-text">Email</div>
                  <input
                    placeholder="email@address.co.za"
                    className="say-hello-input email"
                  />
                </div>
              </div>
              <div className="say-hello-field-container">
                <div className="say-hello-input-text">Message</div>
                <input
                  placeholder="Hi there..."
                  className="say-hello-input message"
                />
              </div>
              <div className="send-message-btn">Send Message</div>
            </div>
          </div>
        </div>
      </div>
      <div className="say-hello-footer">
        <div className="say-hello-footer-text-container">
          <div className="say-hello-footer-text">Home</div>
          <div className="say-hello-footer-text">For Creators</div>
          <div className="say-hello-footer-text">For Brands</div>
          <div className="say-hello-footer-text">Say Hello</div>
        </div>

        <div className="say-hello-footer-img-container">
          <img src="/images/landing-insta.svg" />
          <img src="/images/landing-twitter.svg" />
          <img src="/images/landing-tiktok.svg" />
        </div>

        <div className="say-hello-footer-text">
          © 2023 Copyright EDC Squared. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default SayHello;
