import React from 'react';
import './style.css';
import { useHistory } from 'react-router-dom';
import { UnAuthRoutes } from 'utils';
import HeaderDesktop from 'components/authentication/components/header-desktop';
import HeaderMobile from 'components/authentication/components/header-mobile';
import Footer from 'components/authentication/components/footer';
import {useAuth0} from "@auth0/auth0-react";
import {USER_TYPES} from "../../API";

export const BrandsPage: React.FC = () => {
  const history = useHistory();
  const {loginWithPopup} = useAuth0()
  return (
    <div className="brands-page-wrapper">
      <HeaderMobile />
      <div className="brands-content-container-gradient">
        <div className="brands-page-container">
          <HeaderDesktop />
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
                onClick={() => {
                  localStorage.setItem('userType', USER_TYPES.BRAND_USER)
                  loginWithPopup()
                }}
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
            style={{
              marginLeft: '63px',
              width: '492px',
              height: '595px',
            }}
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
      <Footer />
    </div>
  );
};

export default BrandsPage;
