import { BrandBrief } from "API";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { BrandRoutes } from "utils";
import "./brandBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
}

export const BrandBriefTable: FC<Props> = ({ data, openBrief }) => {
  const history = useHistory();

  const onBriefSelection = (brief?: BrandBrief | null): void => {
    if (brief) openBrief(brief);
  };
  const onBriefEdit = (brief?: BrandBrief | null): void => {
    if (brief) history.push(BrandRoutes.EditBrief, { brief });
  };

  return (
    <table className="brand-table">
      <tr className="brand-table-header-bottom-border">
        <th className="brand-table-header-label">Brief Name</th>
        <th className="brand-table-header-label">Brief details</th>
        <th className="brand-table-header-label">Linked TikTok campaign</th>
        <th className="brand-table-header-label">Objective</th>
        <th className="brand-table-header-label centered">Status</th>
        <th className="brand-table-header-label centered">Details</th>
        <th className="brand-table-header-label centered">Edit</th>
      </tr>
      {data?.map((e, index) => (
        <tr key={`${e?.id}-brandBrief--${index}`}>
          <td className="brand-table-description break-entry capitalized">
            {e?.BriefName}
          </td>
          <td className="brand-table-description break-entry capitalized">
            {e?.brandBriefDetails}
          </td>
          <td className="brand-table-description break-entry  capitalized">
            {e?.creativeInspirations?.[0]}
          </td>
          <td className="brand-table-description break-entry capitalized">
            {e?.objective}
          </td>
          <td className="brand-table-description centered capitalized">
            {e?.active ? "Active" : "Inactive"}
          </td>
          <td className="centered" onClick={(): void => onBriefSelection(e)}>
            <img src="/images/table-search.svg" />
          </td>
          <td className="centered" onClick={(): void => onBriefEdit(e)}>
            <img src="/images/edit-icon.svg" />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default BrandBriefTable;
