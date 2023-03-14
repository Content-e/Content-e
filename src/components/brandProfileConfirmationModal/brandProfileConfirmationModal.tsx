import "./brandProfileConfirmationModal.css";

export default function BrandProfileConfirmationModal() {
  return (
    <div className="brand-confirmation-modal">
      <div className="brand-confirmation-modal-content-container">
        <div className="brand-confirmation-modal-title">
          Brand profile not complete
        </div>
        <div className="brand-confirmation-modal-description">
          Before you can add a Campaign Brief please complete your Brand
          profile, you can complete this by clicking Brand Profile in the
          navigation.
        </div>
        <div className="brand-confirm-btn-container">
          <div className="brand-confirm-btn">
            <span className="brand-confirm-btn-title">Ok</span>
          </div>
        </div>
      </div>
    </div>
  );
}
