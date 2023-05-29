import React from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
import { UnAuthRoutes } from "utils";
import HeaderDesktop from "components/authentication/components/header-desktop";
import HeaderMobile from "components/authentication/components/header-mobile";
import Footer from "components/authentication/components/footer";

export const CreatorsPage: React.FC = () => {
  const history = useHistory();

  return (
    <div className="creators-page-wrapper">
      <div className="creators-content-container-gradient">
        <div className="creators-page-container">
          <HeaderDesktop />
          <HeaderMobile />
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
                <div
                  className="login-signup creators-btn"
                  onClick={() => history.push(UnAuthRoutes.HomePageLogin)}
                >
                  Login / Sign up
                </div>
                <div
                  className="login-signup creators-btn"
                  onClick={() => history.push(UnAuthRoutes.SayHello)}
                >
                  Say Hello
                </div>
              </div>
            </div>
            <img
              src="/images/creators-union.png"
              className="creators-union"
              style={{ marginLeft: "63px", marginBottom: "-32px" }}
            />
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

      <Footer />
    </div>
  );
};

export default CreatorsPage;
