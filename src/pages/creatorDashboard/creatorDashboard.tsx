import BestPractices from "components/bestPractices/bestPractices";
import CreativeRequests from "./requests";
import CreatorNotifications from "components/creatorNotifications/creatorNotifications";
import CreatorStatsCard from "components/creatorStatsCard/creatorStatsCard";
import "./creatorDashboard.css";
import { CreatorDashboardBoxes } from "utils";
import { BrandBrief } from "API";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { useState } from "react";

export default function CreatorDashboard({ data }) {
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [selectedBriefStatus, setSelectedBriefStatus] = useState("");

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
        status={selectedBriefStatus}
      />
    );

  console.log(data);

  return (
    <div className="creator-dashboard__items creator-dashboard-items">
      <div className="creator-dashboard__item statistics-item">
        <div className="statistics-cards-container">
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Wallet}
            value={`$${data.userWallet ? data.userWallet.currentBalance : "0"}`}
          />
          <CreatorStatsCard type={CreatorDashboardBoxes.Approval} value={"0"} />
          <CreatorStatsCard
            type={CreatorDashboardBoxes.Conversion}
            value={"0"}
          />
          <CreatorStatsCard
            type={CreatorDashboardBoxes.ClickThrough}
            value={"0"}
          />
        </div>
      </div>
      <CreativeRequests
        onSelectRequest={setSelectedBrief}
        setSelectedBriefStatus={setSelectedBriefStatus}
      />
      <CreatorNotifications />
      <BestPractices />
    </div>
  );
}
