import BrandCreativesTable from "components/brandCreativesTable/brandCreativesTable";
import "./brandDashboard.css";
import { FC } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
import { useHistory } from "react-router-dom";
import { BrandRoutes } from "utils";

interface Props {
  data?: Array<BrandBrief | null>;
  openCreative: (data: ISelectredRequest) => void;
}

export const CreativeRequests: FC<Props> = (props) => {
  const history = useHistory();
  const goToCreatives = (): void => history.push(BrandRoutes.Creatives);

  return (
    <div className="creative-table-container">
      <div className="brand-table-container">
        <div className="brand-table-header">
          <div className="brand-table-label">Creatives</div>
          <img src="/images/morevert.svg" onClick={goToCreatives} />
        </div>
        <table>
          <tr className="table-header-bottom-border">
            <th className="table-header-label">Creative link</th>
            <th className="table-header-label">Creator handle</th>
            <th className="table-header-label">Brief name</th>
            <th className="table-header-label">Status</th>
            <th className="table-header-label">View</th>
          </tr>
          <BrandCreativesTable {...props} />
        </table>
      </div>
    </div>
  );
};

export default CreativeRequests;
