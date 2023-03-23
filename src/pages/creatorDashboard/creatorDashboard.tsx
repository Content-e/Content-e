import BestPractices from "components/bestPractices/bestPractices";
import CreativeRequests from "./requests";
import CreatorNotifications from "components/creatorNotifications/creatorNotifications";
import CreatorStatsCard from "components/creatorStatsCard/creatorStatsCard";
import "./creatorDashboard.css";
import { CreatorDashboardBoxes } from "utils";
import { BrandBrief } from "API";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { useState } from "react";

export default function CreatorDashboard() {
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );

  return (
    <>
      <div>
        <div className="creator-dashboard-label">Creator Dashboard</div>
        <div className="stats-container">
          <CreatorStatsCard type={CreatorDashboardBoxes.Wallet} value="0" />
          <CreatorStatsCard type={CreatorDashboardBoxes.Approval} value="0" />
          <CreatorStatsCard type={CreatorDashboardBoxes.Conversion} value="0" />
          <CreatorStatsCard
            type={CreatorDashboardBoxes.ClickThrough}
            value="0"
          />
        </div>
      </div>
      <CreativeRequests onSelectRequest={setSelectedBrief} />

      <div className="notification-dashboard-container">
        <CreatorNotifications />
        <BestPractices />
      </div>
    </>
  );
}
