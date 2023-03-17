import DashboardCampaignBriefTable from "components/dashboardCampaignBriefTable/dashboardCampaignBriefTable";
import { FC } from "react";
import { BrandBrief } from "API";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
}

export const BrandBriefs: FC<Props> = (props) => {
  const history = useHistory();
  const goToBriefs = (): void => history.push(AuthRoutes.CampaignBrief);

  return (
    <div className="dashboard-campaign-brief-container">
      <div className="brand-table-header">
        <div className="brand-table-label">Campaign briefs</div>
        <img src="/images/morevert.svg" onClick={goToBriefs} />
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
