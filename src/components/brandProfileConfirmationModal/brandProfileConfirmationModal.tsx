import { FC } from "react";
import { useHistory } from "react-router-dom";
import { BrandRoutes } from "utils";
import "./brandProfileConfirmationModal.css";

export const BrandProfileConfirmationModal: FC = () => {
  const history = useHistory();
  const goToBrand = (): void => history.push(BrandRoutes.Brand);

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
          <div className="brand-confirm-btn" onClick={goToBrand}>
            <span className="brand-confirm-btn-title">Ok</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProfileConfirmationModal;
