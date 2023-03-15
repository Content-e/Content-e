import { BrandBrief } from "API";
import { FC } from "react";
import "./dashboardCampaignBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (briefId: string) => void;
}

export const DashboardCampaignBriefTable: FC<Props> = ({ data, openBrief }) => {
  const showDetails = (id?: string): void => {
    if (id) openBrief(id);
  };

  return (
    <>
      {data?.map((e) => (
        <tr>
          <td className="dashboard-campaign-table-description ">
            {e?.BriefName}
          </td>
          <td className="dashboard-campaign-table-description ">
            {e?.objective}
          </td>
          <td onClick={(): void => showDetails(e?.id)}>
            <img src="/images/table-search.svg" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default DashboardCampaignBriefTable;
