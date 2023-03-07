import { FC } from "react";
import "./brandDescription.css";

interface Props {
  detail?: string | null;
}
export const BrandDesciption: FC<Props> = ({ detail }) => {
  return (
    <div className="brand-brief-details-container">
      <div className="brand-brief-title brand-sub-description-margin">
        Brand brief details
      </div>
      <div className="brand-sub-description brand-sub-description-margin">
        {detail}
      </div>
      <div className="link-creative-btn-container">
        <div className="link-creative-btn">
          <span className="link-creative-text">Link Creative</span>
        </div>
      </div>
    </div>
  );
};

export default BrandDesciption;
