import { FC } from "react";
import "./style.css";

interface Props {
  onClick: () => void;
}
export const TiktokHandlerAlertModal: FC<Props> = ({ onClick }) => {
  return (
    <div className="tiktok-handler-modal">
      <div className="tiktok-handler-modal-content-container">
        <div className="tiktok-handler-modal-title">Creative request alert</div>
        <div className="tiktok-handler-modal-description">
          Kindly complete your profile first and add tiktok handler into it.
        </div>
        <div className="tiktok-handler-btn-container">
          <div className="tiktok-handler-btn" onClick={onClick}>
            <span className="tiktok-handler-btn-title">Okay</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiktokHandlerAlertModal;
