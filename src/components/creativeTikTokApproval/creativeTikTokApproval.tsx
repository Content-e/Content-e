import { updateBriefStatus } from "hooks";
import { FC, useEffect } from "react";
import "./creativeTikTokApproval.css";

interface Props {
  requestId: string;
  inspiration?: Array<string | null> | null;
  onClose: () => void;
}
export const CreativeTikTokApproval: FC<Props> = ({ requestId, onClose }) => {
  const { updateStatus, loading, response } = updateBriefStatus();

  const callApi = (status: string): void =>
    updateStatus({ variables: { input: { id: requestId, status } } });
  const onSuccess = (): void => {
    if (!loading) callApi("accept");
  };
  const onReject = (): void => {
    if (!loading) callApi("reject");
  };

  useEffect(() => {
    if (!loading && response) onClose();
  }, [response, loading]);

  return (
    <div className="creative-approval-container">
      <div className="creative-approval-box">
        <div className="creative-label">Creative</div>
        <div className="permission-container">
          <div className="permission-btn-container" onClick={onSuccess}>
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
