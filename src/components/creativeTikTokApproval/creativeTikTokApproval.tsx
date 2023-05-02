import CampaignConfirmationModal from "components/campaignConfirmationModal/campaignConfirmationModal";
import { updateBriefStatus, useCreateAd } from "hooks";
import { FC, useEffect, useMemo, useState } from "react";
import "./creativeTikTokApproval.css";
import { CreativeRequestStatus, ProfileProps, UnknownType } from "utils";
import { withProfile } from "state/profileSteps";
import { CreativeRequest } from "API";

interface Props {
  request?: CreativeRequest | null;
  createAdPayload: UnknownType;
  inspiration?: Array<string | null> | null;
  onClose: () => void;
}
export const CreativeTikTokApproval: FC<Props & ProfileProps> = ({
  request,
  onClose,
  createAdPayload,
  profileState: { data: profile },
}) => {
  const { updateStatus, loading, response } = updateBriefStatus();
  const {
    createAd,
    loading: createAdLoading,
    data: createAdResponse,
  } = useCreateAd();

  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const isLoading = useMemo(
    () => loading || createAdLoading,
    [loading, createAdLoading]
  );

  const callApi = (status: string): void => {
    if (request?.id)
      updateStatus({ variables: { input: { id: request?.id, status } } });
  };

  const onSuccess = (): void => {
    setErrorMsg("");
    if (
      !isLoading &&
      showConfirm &&
      profile?.tiktokAccountAccess &&
      createAdPayload.adgroupId &&
      createAdPayload.authCode
    ) {
      try {
        const { access_token: token, advertiser_id: advId } = JSON.parse(
          profile.tiktokAccountAccess
        );
        const input = { token, advId, ...createAdPayload };
        createAd({ variables: { ...input } });
      } catch (err) {
        setErrorMsg(err.message);
      }
    }
  };
  const onApprove = (): void => {
    if (!showConfirm && !isLoading) setShowConfirm(true);
  };
  const onReject = (): void => {
    if (!showConfirm && !isLoading) callApi("reject");
  };

  useEffect(() => {
    if (!isLoading && response) onClose();
  }, [isLoading, response]);

  useEffect(() => {
    if (showConfirm) {
      if (createAdResponse) callApi("accept");
      else setErrorMsg("Ad creation failed");
    }
  }, [createAdResponse]);

  return (
    <div className="creative-approval-container">
      {showConfirm && (
        <CampaignConfirmationModal
          isLoading={isLoading}
          onOkay={onSuccess}
          errorMsg={errorMsg}
        />
      )}
      <div className="creative-approval-box">
        <div className="creative-label">Creative</div>
        {request?.status === CreativeRequestStatus.New && (
          <div className="permission-container">
            <div className="permission-btn-container" onClick={onApprove}>
              <span className="permission-btn-label">Approve</span>
            </div>
            <div className="permission-btn-container" onClick={onReject}>
              <span className="permission-btn-label">Reject</span>
            </div>
          </div>
        )}
        <img src="/images/tikTokCarousel2.svg" />
      </div>
    </div>
  );
};

export default withProfile(CreativeTikTokApproval);
