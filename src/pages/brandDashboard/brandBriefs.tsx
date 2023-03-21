import DashboardCampaignBriefTable from "components/dashboardCampaignBriefTable/dashboardCampaignBriefTable";
import { FC, useState } from "react";
import { BrandBrief } from "API";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";
import Pagination from "components/pagination";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
}

const tableLimit = 3;
export const BrandBriefs: FC<Props> = (props) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(0);

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
        <DashboardCampaignBriefTable
          {...props}
          limit={tableLimit}
          currentPage={currentPage}
        />
      </table>
      <Pagination
        total={props.data?.length || 0}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </div>
  );
};

export default BrandBriefs;
