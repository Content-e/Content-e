import CreativeDetails from "pages/creativeDetails/creativeDetails";
import { FC, useState } from "react";
import {
  BrandBriefProps,
  ISelectredRequest,
  withBrandBriefs,
} from "state/brandBrief";
import CreativeEntries from "./creativeEntries";
import "./creativesTable.css";

export const CreativesTable: FC<BrandBriefProps> = (props) => {
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
      <div className="creatives-table-label">Creatives</div>
      <div className="creatives-table-container">
        <input className="creatives-search" placeholder="Search..." />
        <table className="creatives-table">
          <tr className="creatives-table-header-bottom-border">
            <th className="creatives-table-header-label">Brief Name</th>
            <th className="creatives-table-header-label">Creator handle</th>
            <th className="creatives-table-header-label">Creative link</th>
            <th className="creatives-table-header-label">View count</th>
            <th className="creatives-table-header-label">Engagement</th>
            <th className="creatives-table-header-label">Status</th>
            <th className="creatives-table-header-label">Details</th>
          </tr>
          <CreativeEntries {...props} openCreative={setSelectedRequest} />
        </table>
      </div>
    </>
  );
};
export default withBrandBriefs(CreativesTable);
