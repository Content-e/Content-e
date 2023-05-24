import "./creatorStatsCard.css";
import { FC, Fragment } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { IDashboardValue } from "state/dashboard";

interface Props {
  type: IDashboardValue;
  value?: string;
}

export const CreatorStatsCard: FC<Props> = ({
  type: { label, tooltip, placement },
  value,
}) => {
  if (!value) return <Fragment />;
  return (
    <div className="creator-dashboard__item colored">
      <div className="creator-dashboard__bg"></div>
      <div className="creator-dashboard__item-block">
        <div className="creator-dashboard__item-block-key">{label}</div>
        <OverlayTrigger
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${label}`} className="custom-tooltip">
              {tooltip}.
            </Tooltip>
          }
        >
          <img
            className="creator-dashboard__item-block-icon"
            alt=""
            src="/images/info-icon.svg"
          />
        </OverlayTrigger>
        <div className="creator-dashboard__item-block-value">{value}</div>
      </div>
    </div>
  );
};

export default CreatorStatsCard;
