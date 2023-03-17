import { USER_TYPES } from "API";
import CampaignSlider from "components/campaignSlider/campaignSlider";
import AuthorizeTikTokHandler from "pages/authorizeTikTok/authorizeTikTokHandler";
import { FC, useMemo, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import "./brandDescription.css";

interface Props {
  detail?: string | null;
  id: string;
  videoUrls?: Array<string | null> | null;
}
export const BrandDesciption: FC<Props & ProfileProps> = ({
  detail,
  id,
  profileState: { data },
  videoUrls,
}) => {
  const [showPopup, setPopupVisibility] = useState(false);
  const [showInspiration, setShowInspiration] = useState(false);

  const authenticatedUrls = useMemo(() => {
    if (!videoUrls) return [];
    return videoUrls.filter((e) => e?.length) as Array<string>;
  }, [videoUrls]);

  return (
    <div className="brand-brief-details-container">
      <div className="brand-brief-title brand-sub-description-margin">
        Brand brief details
      </div>
      <div className="brand-sub-description brand-sub-description-margin">
        {detail}
      </div>
      <div className="link-creative-btn-container">
        {authenticatedUrls.length > 0 && (
          <div
            className="link-creative-btn"
            onClick={(): void => setShowInspiration(true)}
          >
            <span className="link-creative-text">Creative inspiration</span>
          </div>
        )}
        {data?.userType === USER_TYPES.CREATIVE_USER && (
          <div
            className="link-creative-btn"
            onClick={(): void => setPopupVisibility(true)}
          >
            <span className="link-creative-text">Link Creative</span>
          </div>
        )}
      </div>
      {showPopup && (
        <AuthorizeTikTokHandler
          briefId={id}
          onCross={(): void => setPopupVisibility(false)}
          disableBackground
        />
      )}
      {showInspiration && (
        <div className="inspiration-panel">
          <CampaignSlider
            videoUrls={authenticatedUrls}
            onClose={(): void => setShowInspiration(false)}
          />
        </div>
      )}
    </div>
  );
};

export default withProfile(BrandDesciption);
