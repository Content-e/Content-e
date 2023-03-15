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

export const BrandDashboard: FC<BrandBriefProps> = ({ loading, ...props }) => {
  const [selectedRequest, setSelectedRequest] = useState<ISelectredRequest>();

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
        <BrandBriefs {...props} openBrief={() => {}} />
        <BrandInfo {...props} />
      </div>
    </>
  );
};

export default withBrandBriefs(BrandDashboard);
