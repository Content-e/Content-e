import CampaignConfirmationModal from "components/campaignConfirmationModal/campaignConfirmationModal";
import { FC, useEffect, useState } from "react";
import "./creativeTikTokApproval.css";
import { CreativeRequestStatus, UnknownType } from "utils";
import { CreativeRequest } from "API";
import { ViewRequestProps, withRequestView } from "state/requests";
import CreativeTikTokVideo from "./creativeTikTokVideo";
import { Storage } from "aws-amplify";

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

  const [awsURL, setAwsURL] = useState<any>(null);

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
    if (request?.id && request?.tiktokVideoCode)
      getVideoLink(request.tiktokVideoCode);
    else {
      Storage.get(`${request?.tiktokCreativeUrl}`)
        .then((data) => {
          console.log(data);
          setAwsURL(data);
        })
        .catch((err) => console.log(err));
    }
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
        <CreativeTikTokVideo awsURL={awsURL} {...tiktokVideo} />
      </div>
    </div>
  );
};

export default withRequestView(CreativeTikTokApproval);
