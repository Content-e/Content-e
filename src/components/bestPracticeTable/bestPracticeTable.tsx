import { BestPractices } from "API";
import { FC } from "react";
import { useHistory } from "react-router-dom";
import { AdminRoutes } from "utils";
import "./bestPracticeTable.css";

interface Props {
  data?: Array<BestPractices | null>;
  openPractice: (practice: BestPractices) => void;
}

export const AdminPracticeTableDetails: FC<Props> = ({
  data,
  openPractice,
}) => {
  const history = useHistory();

  const onBriefSelection = (brief?: BestPractices | null): void => {
    if (brief) openPractice(brief);
  };
  const onBriefEdit = (brief?: BestPractices | null): void => {
    if (brief) history.push(AdminRoutes.EditPractice, { brief });
  };

  return (
    <table className="brand-table">
      <tr className="brand-table-header-bottom-border">
        <th className="brand-table-header-label">Heading</th>
        <th className="brand-table-header-label">Short description</th>
        <th className="brand-table-header-label centered">Status</th>
        <th className="brand-table-header-label centered">Details</th>
        <th className="brand-table-header-label centered">Edit</th>
      </tr>
      {data?.map((e, index) => (
        <tr key={`${e?.id}-brandBrief--${index}`}>
          <td className="brand-table-description break-entry capitalized best-practice-headline">
            {e?.headLine}
          </td>
          <td className="brand-table-description break-entry capitalized best-practice-description">
            {e?.description}
          </td>
          <td className="brand-table-description centered capitalized best-practice-status">
            {e?.active ? "Active" : "Inactive"}
          </td>
          <td
            className="centered best-practice-icon"
            onClick={(): void => onBriefSelection(e)}
          >
            <img src="/images/table-search.svg" />
          </td>
          <td
            className="centered best-practice-icon"
            onClick={(): void => onBriefEdit(e)}
          >
            <img src="/images/edit-icon.svg" />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default AdminPracticeTableDetails;
