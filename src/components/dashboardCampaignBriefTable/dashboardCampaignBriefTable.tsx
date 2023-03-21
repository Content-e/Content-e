import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import { FC } from "react";
import "./dashboardCampaignBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
  limit: number;
  currentPage: number;
}

export const DashboardCampaignBriefTable: FC<Props> = ({
  data,
  openBrief,
  limit,
  currentPage,
}) => {
  const showDetails = (brief?: BrandBrief | null): void => {
    if (brief) openBrief(brief);
  };

  return (
    <>
      {getSlicedArray(data || [], limit, currentPage).map((e, i) => (
        <tr key={`${e?.id}--brandBriefDashboard-${i}`}>
          <td className="dashboard-campaign-table-description capitalized">
            {e?.BriefName}
          </td>
          <td className="dashboard-campaign-table-description capitalized">
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
