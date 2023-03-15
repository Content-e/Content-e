import "./brandDashboard.css";
import { FC, useState } from "react";
import {
  BrandBriefProps,
  ISelectredRequest,
  withBrandBriefs,
} from "state/brandBrief";
import CreativeRequests from "./creativeRequests";
import BrandBriefs from "./brandBriefs";
import BrandInfo from "./brandInfo";
import CreativeDetails from "pages/creativeDetails/creativeDetails";
import { BrandBrief } from "API";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";

export const BrandDashboard: FC<BrandBriefProps> = ({ loading, ...props }) => {
  const [selectedRequest, setSelectedRequest] = useState<ISelectredRequest>();
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );

  if (selectedRequest)
    return (
      <CreativeDetails
        {...props}
        selectedRequest={selectedRequest}
        onBack={(): void => setSelectedRequest(undefined)}
      />
    );
  return (
    <>
      <div className="dashboard-label">Dashboard</div>
      <CreativeRequests {...props} openCreative={setSelectedRequest} />
      <div className="dashboard-campaign-section">
        <BrandBriefs {...props} openBrief={setSelectedBrief} />
        <BrandInfo {...props} />
      </div>
    </>
  );
};

export default withBrandBriefs(BrandDashboard);
