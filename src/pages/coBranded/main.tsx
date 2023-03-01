import { FC } from "react";
import "./styles.css";

export const CoBrandedMainPage: FC = () => {
  return (
    <div className="cobranded-container">
      <div className="cobranded-logo-container">
        <div className="cobranded-title">Introducing EDCSquared and</div>
        <img src="/images/inspiring-ways.svg" alt="inspring-ways" />
      </div>
      <div className="cobranded-description-container">
        <div className="cobranded-description">
          Want to become a content creator? Share your TikToks showcasing why
          people should visit South Africa and be rewarded
        </div>
        <div className="cobranded-link-btn">
          <span className="cobranded-link-btn-text">Link creative</span>
        </div>
      </div>
    </div>
  );
};

export default CoBrandedMainPage;
