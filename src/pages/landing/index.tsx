import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";

import HeaderDesktop from "components/authentication/components/header-desktop";
import HeaderMobile from "components/authentication/components/header-mobile";
import Footer from "components/authentication/components/footer";

export const LandingPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <div className="landing-page-wrapper">
        <HeaderMobile />
        <div className="landing-page-wrapper-container">
          <div className="landing-content-container-gradient">
            <div className="landing-page-container">
              <HeaderDesktop />
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
                    <div
                      className="for-brands-btn"
                      onClick={() => history.push(UnAuthRoutes.Creators)}
                    >
                      FOR CREATORS
                    </div>
                    <div
                      className="for-creators-btn"
                      onClick={() => history.push(UnAuthRoutes.Brands)}
                    >
                      FOR BRANDS
                    </div>
                  </div>
                </div>
                <img
                  width={492}
                  style={{ width: "492px", height: "545px" }}
                  src="/images/landing-union.png"
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
                  <img
                    className="landing-photo-mobile"
                    alt=""
                    src="/images/landing-photo-mobile.png"
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
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
