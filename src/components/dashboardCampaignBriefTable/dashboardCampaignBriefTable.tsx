import { BrandBrief } from "API";
import { FC } from "react";
import "./dashboardCampaignBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
}

export const DashboardCampaignBriefTable: FC<Props> = ({ data, openBrief }) => {
  const showDetails = (brief?: BrandBrief | null): void => {
    if (brief) openBrief(brief);
  };

  return (
    <>
      {data?.map((e) => (
        <tr key={e?.id}>
          <td className="dashboard-campaign-table-description ">
            {e?.BriefName}
          </td>
          <td className="dashboard-campaign-table-description ">
            {e?.objective}
          </td>
          <td onClick={(): void => showDetails(e)}>
            <img src="/images/table-search.svg" />
          </td>
        </tr>
      ))}
    </>
  );
};

export default DashboardCampaignBriefTable;
