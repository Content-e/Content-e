import { BrandBrief } from "API";
import { FC } from "react";
import "./brandBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null> | null;
  openBrief: (brief: BrandBrief) => void;
}
export const BrandBriefTable: FC<Props> = ({ data, openBrief }) => {
  const onBriefSelection = (brief?: BrandBrief | null): void => {
    if (brief) openBrief(brief);
  };

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
        <tr key={e?.id}>
          <td className="brand-table-description capitalized">
            {e?.BriefName}
          </td>
          <td className="brand-table-description capitalized">
            {e?.brandBriefDetails}
          </td>
          <td className="brand-table-description capitalized">{e?.vertical}</td>
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
      ))}
    </table>
  );
};

export default BrandBriefTable;
