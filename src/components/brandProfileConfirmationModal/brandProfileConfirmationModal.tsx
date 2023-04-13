import { FC, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { BrandErrorData, BrandErrorModal } from "utils";
import "./brandProfileConfirmationModal.css";

interface Props {
  errorType: BrandErrorModal;
}
export const BrandProfileConfirmationModal: FC<Props> = ({ errorType }) => {
  const history = useHistory();
  const errorData = useMemo(() => BrandErrorData[errorType], [errorType]);
  const goToBrand = (): void => history.push(errorData.link);

  return (
    <div className="brand-confirmation-modal">
      <div className="brand-confirmation-modal-content-container">
        <div className="brand-confirmation-modal-title">
          {errorData.heading}
        </div>
        <div className="brand-confirmation-modal-description">
          {errorData.body}
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
