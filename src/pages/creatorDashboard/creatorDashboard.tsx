import { BrandBrief } from "API";
import BestPractices from "components/bestPractices/bestPractices";
import CampaignBriefTable from "components/campaignBriefTable/campaignBriefTable";
import CreatorNotifications from "components/creatorNotifications/creatorNotifications";
import CreatorStatsCard from "components/creatorStatsCard/creatorStatsCard";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { useState } from "react";

import "./creatorDashboard.css";
import { AuthRoutes } from "utils";
import { useHistory } from "react-router-dom";

export default function CreatorDashboard() {
  const history = useHistory();

  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  const onCampaign = (): void => history.push(AuthRoutes.CampaignBrief);

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
          <CreatorStatsCard label="Wallet" count="8" />
          <CreatorStatsCard label="Approval rate" count="8" />
          <CreatorStatsCard label="Conversion rate" count="8" />
          <CreatorStatsCard label="Click through rate" count="8" />
        </div>
      </div>
      <div className="campaign-briefs-dashboard-container ">
        <div className="campaign-table-container">
          <div className="campaign-table-header">
            <div className="campaign-table-label">Campaign briefs</div>
            <img onClick={onCampaign} src="/images/morevert.svg" />
          </div>
          <CampaignBriefTable searchText="" onSingleSelect={setSelectedBrief} />
        </div>
      </div>

      <div className="notification-dashboard-container">
        <CreatorNotifications />
        <BestPractices />
      </div>
    </>
  );
}
