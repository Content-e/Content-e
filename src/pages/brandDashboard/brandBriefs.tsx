import DashboardCampaignBriefTable from "components/dashboardCampaignBriefTable/dashboardCampaignBriefTable";
import { FC } from "react";
import { BrandBrief } from "API";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (briefId: string) => void;
}

export const BrandBriefs: FC<Props> = (props) => {
  return (
    <div className="dashboard-campaign-brief-container">
      <div className="brand-table-header">
        <div className="brand-table-label">Campaign briefs</div>
        <img src="/images/morevert.svg" />
      </div>
      <table>
        <tr className="table-header-bottom-border">
          <th className="dashboard-campaign-table-header-label">Brief Name</th>
          <th className="dashboard-campaign-table-header-label">Objective</th>
          <th className="dashboard-campaign-table-header-label">View</th>
        </tr>
        <DashboardCampaignBriefTable {...props} />
      </table>
    </div>
  );
};

export default BrandBriefs;
