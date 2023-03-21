import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import Pagination from "components/pagination";
import { FC, Fragment, useState } from "react";
import "./brandBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null> | null;
  openBrief: (brief: BrandBrief) => void;
}

const tableLimit = 7;
export const BrandBriefTable: FC<Props> = ({ data, openBrief }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const onBriefSelection = (brief?: BrandBrief | null): void => {
    if (brief) openBrief(brief);
  };

  return (
    <Fragment key="brief table">
      <table className="brand-table">
        <tr className="brand-table-header-bottom-border">
          <th className="brand-table-header-label">Brief Name</th>
          <th className="brand-table-header-label">Brief details</th>
          <th className="brand-table-header-label">Linked TikTok campaign</th>
          <th className="brand-table-header-label">Objective</th>
          <th className="brand-table-header-label">Status</th>
          <th className="brand-table-header-label">Details</th>
        </tr>
        {getSlicedArray(data || [], tableLimit, currentPage)?.map(
          (e, index) => (
            <tr key={`${e?.id}-brandBrief--${index}`}>
              <td className="brand-table-description capitalized">
                {e?.BriefName}
              </td>
              <td className="brand-table-description capitalized">
                {e?.brandBriefDetails}
              </td>
              <td className="brand-table-description capitalized"></td>
              <td className="brand-table-description capitalized">
                {e?.objective}
              </td>
              <td className="brand-table-description capitalized">
                {e?.active ? "Active" : "Inactive"}
              </td>
              <td onClick={(): void => onBriefSelection(e)}>
                <img src="/images/table-search.svg" />
              </td>
            </tr>
          )
        )}
      </table>
      <Pagination
        total={data?.length || 0}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </Fragment>
  );
};

export default BrandBriefTable;
