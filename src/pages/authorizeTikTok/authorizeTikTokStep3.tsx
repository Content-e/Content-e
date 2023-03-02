import { FC, useState } from "react";
import { IconLoader, Input } from "components";
import "./authorizeTikTok.css";

interface Props {
  loading: boolean;
  goToNext: (link: string) => void;
  goToPrev: () => void;
}
export const AuthorizeTikTokStep3: FC<Props> = ({
  loading,
  goToPrev,
  goToNext,
}) => {
  const [tikTokCode, setTikTokCode] = useState<string>("");
  const [codeError, setCodeError] = useState<string | null>(null);

  const updateState = (_: string, value: string): void => {
    setTikTokCode(value);
    setCodeError(null);
  };

  const validateVerifyForm = (): boolean => {
    try {
      const { hostname, pathname } = new URL(tikTokCode);
      return !!(hostname && pathname);
    } catch (err) {
      return false;
    }
  };

  const onSubmit = (): void => {
    if (validateVerifyForm()) goToNext(tikTokCode);
    else setCodeError("Kindly provide valid URL");
  };

  return (
    <div className="tik-tok-container">
      <div className="tik-tok-modal">
        <div className="tik-tok-header">
          <div className="tik-tok-label-policy">Generate video code</div>
          <img src="/images/close-icon.svg" className="close-icon" />
        </div>
        <div className="policy-content">
          <div className="content-1">
            <div>
              You will need to generate a video code and paste that code below:
            </div>
            <div>From the post's Ad settings module:</div>
            <div>
              &#x2022;{" "}
              {
                "Tap Generate Code, then select the authorization duration. Choose 60 days."
              }
            </div>
            <div>
              &#x2022;{" "}
              {"Next, tap Copy Code to share the code with the advertiser."}
            </div>
          </div>
        </div>

        <div className="creator-img">
          <img src="/images/creator-step3-ads.svg" />
        </div>

        <div className="authorization-code-input">
          <Input
            keyProp={tikTokCode}
            value={tikTokCode}
            errorVal={codeError}
            placeholder="Paste TikTok video code here"
            handlers={{ updateState }}
          />
        </div>

        <div className="next-btn-container">
          <div className="back-btn-sm" onClick={goToPrev}>
            <span>Back</span>
          </div>
          <div className="next-btn-sm" onClick={onSubmit}>
            <span>Next</span>
            {loading && <IconLoader />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorizeTikTokStep3;
