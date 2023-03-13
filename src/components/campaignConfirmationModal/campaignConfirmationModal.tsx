import "./campaignConfirmationModal.css";

export default function CampaignConfirmationModal() {
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
          <div className="confirm-btn">
            <span className="confirm-btn-title">Confirm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
