import { useState } from "react";
import { BrandBrief } from "API";
import CampaignBriefTable from "components/campaignBriefTable/campaignBriefTable";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import "./campaignBriefs.css";

export default function CampaignBriefs() {
  const [searchText, setSearchText] = useState("");
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );
  return (
    <div>
      <div className="campaign-table-label">Campaign briefs</div>
      <div className="campaign-table-container">
        <input
          className="campaign-search"
          placeholder="Search..."
          value={searchText}
          onChange={(e): void => setSearchText(e.target.value)}
        />
        <CampaignBriefTable
          searchText={searchText}
          onSingleSelect={setSelectedBrief}
        />
      </div>
    </div>
  );
}
