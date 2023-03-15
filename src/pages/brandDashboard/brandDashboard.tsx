import "./brandDashboard.css";
import { FC } from "react";
import { BrandBriefProps, withBrandBriefs } from "state/brandBrief";
import CreativeRequests from "./creativeRequests";
import BrandBriefs from "./brandBriefs";
import BrandInfo from "./brandInfo";

export const BrandDashboard: FC<BrandBriefProps> = ({ loading, ...props }) => {
  return (
    <>
      <div className="dashboard-label">Dashboard</div>
      <CreativeRequests {...props} openCreative={() => {}} />
      <div className="dashboard-campaign-section">
        <BrandBriefs {...props} openBrief={() => {}} />
        <BrandInfo {...props} />
      </div>
    </>
  );
};

export default withBrandBriefs(BrandDashboard);
