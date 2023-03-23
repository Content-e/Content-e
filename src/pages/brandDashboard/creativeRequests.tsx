import BrandCreativesTable from "components/brandCreativesTable/brandCreativesTable";
import "./brandDashboard.css";
import { FC, useState } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
import { useHistory } from "react-router-dom";
import { BrandRoutes } from "utils";
import Pagination from "components/pagination";

interface Props {
  data?: Array<BrandBrief | null>;
  openCreative: (data: ISelectredRequest) => void;
}

const tableLimit = 8;
export const CreativeRequests: FC<Props> = (props) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(0);

  const goToCreatives = (): void => history.push(BrandRoutes.Creatives);

  return (
    <div className="creative-table-container">
      <div className="brand-table-container">
        <div className="brand-table-wrapper">
          <div className="brand-table-header">
            <div className="brand-table-label">Creatives</div>
            <img src="/images/morevert.svg" onClick={goToCreatives} />
          </div>
          <table>
            <tr className="table-header-bottom-border">
              <th className="table-header-label">Creative link</th>
              <th className="table-header-label">Creator handle</th>
              <th className="table-header-label">Brief name</th>
              <th className="table-header-label centered">Status</th>
              <th className="table-header-label centered">View</th>
            </tr>
            <BrandCreativesTable
              {...props}
              limit={tableLimit}
              currentPage={currentPage}
            />
          </table>
          <Pagination
            total={props?.data?.length || 0}
            limit={tableLimit}
            goToPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default CreativeRequests;
