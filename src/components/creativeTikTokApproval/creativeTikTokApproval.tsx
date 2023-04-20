import CampaignConfirmationModal from "components/campaignConfirmationModal/campaignConfirmationModal";
import { updateBriefStatus } from "hooks";
import { FC, useEffect, useState } from "react";
import "./creativeTikTokApproval.css";
import { UnknownType } from "utils";

interface Props {
  requestId: string;
  inspiration?: Array<string | null> | null;
  onClose: (response?: UnknownType) => void;
}
export const CreativeTikTokApproval: FC<Props> = ({ requestId, onClose }) => {
  const { updateStatus, loading, response } = updateBriefStatus();
  const [showConfirm, setShowConfirm] = useState(false);
  const [sendResponse, setSendResponse] = useState(false);

  const callApi = (status: string): void =>
    updateStatus({ variables: { input: { id: requestId, status } } });
  const onApprove = (): void => setShowConfirm(true);
  const onSuccess = (): void => {
    if (!loading) {
      callApi("accept");
      setSendResponse(true);
    }
  };
  const onReject = (): void => {
    if (!loading) {
      callApi("reject");
      setSendResponse(false);
    }
  };

  useEffect(() => {
    if (!loading && response) onClose(sendResponse ? response : undefined);
  }, [response, loading]);

  return (
    <div className="creative-approval-container">
      {showConfirm && (
        <CampaignConfirmationModal isLoading={loading} onOkay={onSuccess} />
      )}
      <div className="creative-approval-box">
        <div className="creative-label">Creative</div>
        <div className="permission-container">
          <div className="permission-btn-container" onClick={onApprove}>
            <span className="permission-btn-label">Approve</span>
          </div>
          <div className="permission-btn-container" onClick={onReject}>
            <span className="permission-btn-label">Reject</span>
          </div>
        </div>
        <img src="/images/tikTokCarousel2.svg" />
      </div>
    </div>
  );
};

export default CreativeTikTokApproval;
