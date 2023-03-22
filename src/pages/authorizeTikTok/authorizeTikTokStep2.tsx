import { FC } from "react";
import "./authorizeTikTok.css";
import AuthorizeTikTokHeader from "./authorizeTikTokHeader";

interface Props {
  goToPrev: () => void;
  goToNext: () => void;
  onCross: () => void;
}
export const AuthorizeTikTokStep2: FC<Props> = ({
  goToPrev,
  goToNext,
  ...props
}) => {
  return (
    <div className="tik-tok-modal">
      <AuthorizeTikTokHeader
        {...props}
        title="Authorize video for promotional use"
      />
      <div className="policy-content">
        <div className="content-1">
          <div>
            To select and authorize a video for promotional use, from the TikTok
            app:
          </div>
          <div>&#x2022; {"Select a TikTok post to authorize."}</div>
          <div>&#x2022; {"Tap the three dots, then tap Ad settings."}</div>
          <div>
            &#x2022;{" "}
            {
              "Agree to Advertising Content Terms of Service and enable the Ad authorization toggle."
            }
          </div>
          <div>&#x2022; {"Generate a video code"}</div>
        </div>
      </div>

      <div className="creator-img">
        <img src="/images/creator-step2-ads.png" />
      </div>

      <div className="next-btn-container">
        <div className="back-btn-sm" onClick={goToPrev}>
          <span>Back</span>
        </div>
        <div className="next-btn-sm" onClick={goToNext}>
          <span>Next</span>
        </div>
      </div>
    </div>
  );
};

export default AuthorizeTikTokStep2;
