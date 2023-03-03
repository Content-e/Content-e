import BestPractices from "components/bestPractices/bestPractices";
import CampaignBriefTable from "components/campaignBriefTable/campaignBriefTable";
import CreatorNotifications from "components/creatorNotifications/creatorNotifications";
import CreatorStatsCard from "components/creatorStatsCard/creatorStatsCard";

import "./creatorDashboard.css";

export default function CreatorDashboard() {
  return (
    <>
      <div>
        <div className="creator-dashboard-label">Creator Dashboard</div>
        <div className="stats-container">
          <CreatorStatsCard label="Wallet" count="8" />
          <CreatorStatsCard label="Wallet" count="8" />
          <CreatorStatsCard label="Wallet" count="8" />
          <CreatorStatsCard label="Wallet" count="8" />
        </div>
      </div>
      <div className="campaign-briefs-dashboard-container ">
        <CampaignBriefTable />
      </div>

      <div className="notification-dashboard-container">
        <CreatorNotifications />
        <BestPractices />
      </div>
    </>
  );
}
