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
    <div className="creator-stats-card-container">
      <div className="stats-header">
        <div className="stats-label">{label}</div>
        <OverlayTrigger
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${label}`} className="custom-tooltip">
              {tooltip}.
            </Tooltip>
          }
        >
          <img src="/images/tooltip-icon.svg" />
        </OverlayTrigger>
      </div>
      <div className="stats-count">{value}</div>
    </div>
  );
};

export default CreatorStatsCard;
