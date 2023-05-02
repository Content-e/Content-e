import CampaignConfirmationModal from "components/campaignConfirmationModal/campaignConfirmationModal";
import { FC, useEffect, useState } from "react";
import "./creativeTikTokApproval.css";
import { CreativeRequestStatus, UnknownType } from "utils";
import { CreativeRequest } from "API";
import { ViewRequestProps, withRequestView } from "state/requests";
import { isValidUrl } from "components/helpers";

interface Props {
  request?: CreativeRequest | null;
  createAdPayload: UnknownType;
  inspiration?: Array<string | null> | null;
  onClose: () => void;
}
export const CreativeTikTokApproval: FC<Props & ViewRequestProps> = ({
  request,
  onClose,
  createAdPayload,
  approveRequest,
  rejectRequest,
  getVideoLink,
  errorMsg,
  loading,
  isSuccess,
  videoUrl,
}) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const onOkay = (): void => {
    if (showConfirm) approveRequest(createAdPayload);
  };
  const onApprove = (): void => {
    if (!showConfirm) setShowConfirm(true);
  };
  const onReject = (): void => {
    if (!showConfirm) rejectRequest();
  };

  useEffect(() => {
    if (request?.id) getVideoLink(request.tiktokVideoCode);
  }, [request]);
  useEffect(() => {
    if (!loading && isSuccess) onClose();
  }, [loading, isSuccess]);

  return (
    <div className="creative-approval-container">
      {showConfirm && (
        <CampaignConfirmationModal
          isLoading={loading}
          onOkay={onOkay}
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
        {isValidUrl(videoUrl || "") && (
          <iframe
            className="request-video-iframe"
            src={videoUrl}
            width="172px"
            height="305px"
            name={"creative-video"}
            // eslint-disable-next-line max-len
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-scripts allow-top-navigation allow-same-origin"
          />
        )}
      </div>
    </div>
  );
};

export default withRequestView(CreativeTikTokApproval);
