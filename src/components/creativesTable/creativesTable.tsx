import Pagination from "components/pagination";
import CreativeDetails from "pages/creativeDetails/creativeDetails";
import { FC, useState } from "react";
import {
  BrandBriefProps,
  ISelectredRequest,
  withBrandBriefs,
} from "state/brandBrief";
import CreativeEntries from "./creativeEntries";
import CreativeEntriesMobile from "./creativeEntriesMobile";
import "./creativesTable.css";

const tableLimit = 7;
export const CreativesTable: FC<BrandBriefProps> = (props) => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
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
    <div className="brand-dashboard__items brand-briefs-items">
      <div className="brand-dashboard__item search-item">
        <img
          className="brand-dashboard__item-search"
          alt=""
          src="/images/search.svg"
        />
        <input
          className="creatives-search"
          placeholder="Search..."
          value={searchText}
          onChange={(e): void => setSearchText(e.target.value)}
        />
      </div>
      <div className="brand-dashboard__item full mobile-list-item">
        <div className="brand-dashboard__top mobile-main-title">
          <div className="brand-dashboard__top-title">Creatives</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg"
          />
          <img
            className="brand-dashboard__top-icon-mobile"
            alt=""
            src="/images/dots-dark.svg"
          />
        </div>
        <div className="brand-dashboard__list-mobile">
          <CreativeEntriesMobile
            {...props}
            searchText={searchText}
            openCreative={setSelectedRequest}
            limit={tableLimit}
            currentPage={currentPage}
          />
        </div>
        <table className="brand-dashboard__list">
          <thead>
            <tr>
              <th>Brief name</th>
              <th>Creator handle</th>
              <th>Creative link</th>
              <th>View count</th>
              <th>Engagement</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <CreativeEntries
              {...props}
              searchText={searchText}
              openCreative={setSelectedRequest}
              limit={tableLimit}
              currentPage={currentPage}
            />
          </tbody>
        </table>
        <Pagination
          total={props?.data?.length || 0}
          limit={tableLimit}
          goToPage={setCurrentPage}
        />
      </div>
    </div>
  );
};
export default withBrandBriefs(CreativesTable);
