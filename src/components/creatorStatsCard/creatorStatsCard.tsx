import "./creatorStatsCard.css";
import { FC } from "react";

interface Props {
  label?: string;
  count?: string;
}

export const CreatorStatsCard: FC<Props> = ({ label, count }) => {
  return (
    <div className="creator-stats-card-container">
      <div className="stats-header">
        <div className="stats-label">{label}</div>
        <img src="/images/tooltip-icon.svg" />
      </div>
      <div className="stats-count">{count}</div>
    </div>
  );
};

export default CreatorStatsCard;
