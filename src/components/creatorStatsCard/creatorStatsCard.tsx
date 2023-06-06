import './creatorStatsCard.css';
import { FC, Fragment } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { IDashboardValue } from 'state/dashboard';

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
    <div className="creator-dashboard__item colored text-white">
      <div className="creator-dashboard__bg"></div>
      <div className="creator-dashboard__item-block grow-mobile">
        <div className="creator-dashboard__item-block-key shrink-mobile">
          {label}
        </div>
        <OverlayTrigger
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${label}`} className="custom-tooltip mx-3">
              {tooltip}.
            </Tooltip>
          }
        >
          <img
            className="absolute right-4 top-4"
            alt="tooltip icon"
            src="/images/info-icon.svg"
          />
        </OverlayTrigger>
        <div className="creator-dashboard__item-block-value">{value}</div>
      </div>
    </div>
  );
};

export default CreatorStatsCard;
