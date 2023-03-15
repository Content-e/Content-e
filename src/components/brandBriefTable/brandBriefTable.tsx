import { BrandBrief } from "API";
import { FC } from "react";
import "./brandBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null> | null;
}
export const BrandBriefTable: FC<Props> = ({ data }) => {
  return (
    <table className="brand-table">
      <tr className="brand-table-header-bottom-border">
        <th className="brand-table-header-label">Brief Name</th>
        <th className="brand-table-header-label">Brief details</th>
        <th className="brand-table-header-label">Linked TikTok campaign</th>
        <th className="brand-table-header-label">Objective</th>
        <th className="brand-table-header-label">Status</th>
        <th className="brand-table-header-label">Details</th>
      </tr>
      {data?.map((e) => (
        <tr>
          <td className="brand-table-description">{e?.BriefName}</td>
          <td className="brand-table-description">{e?.brandBriefDetails}</td>
          <td className="brand-table-description">
            {e?.creativeInspirations?.[0]}
          </td>
          <td className="brand-table-description">{e?.objective}</td>
          <td className="brand-table-description">Active</td>
          <td>
            <img src="/images/table-search.svg" />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default BrandBriefTable;
