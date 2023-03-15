import { USER_TYPES } from "API";
import AuthorizeTikTokHandler from "pages/authorizeTikTok/authorizeTikTokHandler";
import { FC, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import "./brandDescription.css";

interface Props {
  detail?: string | null;
  id: string;
}
export const BrandDesciption: FC<Props & ProfileProps> = ({
  detail,
  id,
  profileState: { data },
}) => {
  const [showPopup, setPopupVisibility] = useState(false);

  return (
    <div className="brand-brief-details-container">
      <div className="brand-brief-title brand-sub-description-margin">
        Brand brief details
      </div>
      <div className="brand-sub-description brand-sub-description-margin">
        {detail}
      </div>
      {data?.userType === USER_TYPES.CREATIVE_USER && (
        <div className="link-creative-btn-container">
          <div
            className="link-creative-btn"
            onClick={(): void => setPopupVisibility(true)}
          >
            <span className="link-creative-text">Link Creative</span>
          </div>
        </div>
      )}
      {showPopup && (
        <AuthorizeTikTokHandler
          briefId={id}
          onCross={(): void => setPopupVisibility(false)}
          disableBackground
        />
      )}
    </div>
  );
};

export default withProfile(BrandDesciption);
