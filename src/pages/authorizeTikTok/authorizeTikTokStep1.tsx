import { FC } from "react";
import "./authorizeTikTok.css";

interface Props {
  goToNext: () => void;
}
export const AuthorizeTikTokStep1: FC<Props> = ({ goToNext }) => {
  return (
    <div className="tik-tok-container">
      <div className="tik-tok-modal">
        <div className="tik-tok-header">
          <div className="tik-tok-label-policy">
            Ensure that Authorised Posts are allowed
          </div>
          <img src="/images/close-icon.svg" className="close-icon" />
        </div>
        <div className="policy-content">
          <div className="content-1">
            <div>
              Note: Due to the difference in TikTok versions, to find Ad
              settings in the app, some users may need to tap:
            </div>
            <div>&#x2022; {"Me > Settings and privacy > Privacy."}</div>
            <div>&#x2022; {"or Me > Creator tools."}</div>
          </div>

          <div className="content-1">
            <div>
              To authorize a post, from the TikTok app (version 22.6 and above):
            </div>
            <div>
              &#x2022;{" "}
              {
                "Tap on Me to go to your personal profile page, then tap the 3 dots on the top-right corner."
              }
            </div>
            <div>
              &#x2022;{" "}
              {"From the Settings and privacy page, tap Creator tools."}
            </div>
            <div>&#x2022; {"Turn on the Ad settings toggle."}</div>
          </div>
        </div>

        <div className="creator-img">
          <img src="/images/creator-step1-ads.svg" />
        </div>

        <div className="next-btn-container" onClick={goToNext}>
          <div className="next-btn">
            <span>Next</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizeTikTokStep1;
