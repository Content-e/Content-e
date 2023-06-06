import { USER_TYPES } from "API";
import CampaignSlider from "components/campaignSlider/campaignSlider";
import Button from "components/ui/button";
import AuthorizeTikTokHandler from "pages/authorizeTikTok/authorizeTikTokHandler";
import { FC, useMemo, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import "./brandDescription.css";

interface Props {
  detail?: string | null;
  id: string;
  videoUrls?: Array<string | null> | null;
  isVideoLinked?: boolean;
  showSuccessModal: () => void;
  status: string | undefined;
}
export const BrandDesciption: FC<Props & ProfileProps> = ({
  detail,
  id,
  isVideoLinked,
  profileState: { data },
  videoUrls,
  status,
}) => {
  const [showPopup, setPopupVisibility] = useState(false);
  const [showInspiration, setShowInspiration] = useState(false);

  const authenticatedUrls = useMemo(() => {
    if (!videoUrls) return [];
    return videoUrls.filter((e) => e?.length) as Array<string>;
  }, [videoUrls]);

  return (
    <div className="paper w-full min-h-[60vh] flex flex-col justify-between">
      <section>
        <div className="text-xl text-primary font-bold">
          Campaign brief details
        </div>
        <p className="text-gray-500 prose my-8">{detail}</p>
      </section>
      <div className="w-full flex justify-center gap-4">
        <Button
          onClick={() => setShowInspiration(true)}
          disabled={authenticatedUrls.length <= 0}
        >
          CREATIVE INSPIRATION
        </Button>
        <Button
          className="creator-dashboard__creative-btn link"
          onClick={(): void => setPopupVisibility(true)}
          disabled={!(data?.userType === USER_TYPES.CREATIVE_USER &&
            isVideoLinked &&
            status === "new")}
        >
          Link Creative
        </Button>
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
