import "./authorizeTikTok.css";

export default function AuthorizeTikTokStep2() {
  return (
    <div className="tik-tok-container">
      <div className="tik-tok-modal">
        <div className="tik-tok-header">
          <div className="tik-tok-label-policy">
            Authorize video for promotional use
          </div>
          <img src="/images/close-icon.svg" className="close-icon" />
        </div>
        <div className="policy-content">
          <div className="content-1">
            <div>
              To select and authorize a video for promotional use, from the
              TikTok app:
            </div>
            <div>&#x2022; {"​Select a TikTok post to authorize."}</div>
            <div>&#x2022; {"​Tap the three dots, then tap Ad settings."}</div>
            <div>
              &#x2022;{" "}
              {
                "​​Agree to Advertising Content Terms of Service and enable the Ad authorization toggle."
              }
            </div>
            <div>&#x2022; {"​​Generate a video code"}</div>
          </div>
        </div>

        <div className="creator-img">
          <img src="/images/creator-step2-ads.svg" />
        </div>

        <div className="next-btn-container">
          <div className="back-btn-sm">
            <span>Back</span>
          </div>
          <div className="next-btn-sm">
            <span>Next</span>
          </div>
        </div>
      </div>
    </div>
  );
}
