import { IconLoader } from "components/loader";
import { FC } from "react";
import "./campaignConfirmationModal.css";

interface Props {
  onOkay: () => void;
  isLoading?: boolean;
  errorMsg: string;
}
export const CampaignConfirmationModal: FC<Props> = ({
  onOkay,
  isLoading,
  errorMsg,
}) => {
  return (
    <div className="campaign-confirmation-modal">
      <div className="campaign-confirmation-modal-content-container">
        <div className="campaign-confirmation-modal-title">
          Please confirm to add this creative to your live campaign
        </div>
        <div className="campaign-confirmation-modal-description">
          Clicking confirm below will add this creative to your campaign and
          will start spending.
        </div>
        <div className="confirm-btn-container">
          <div className="confirm-btn" onClick={onOkay}>
            <span className="confirm-btn-title">
              <span style={{ marginRight: 12 }}>Confirm</span>{" "}
              {isLoading && <IconLoader />}
            </span>
          </div>
          <div className="confirm-btn-error-mesage">{errorMsg}</div>
        </div>
      </div>
    </div>
  );
};

export default CampaignConfirmationModal;
