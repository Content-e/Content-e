import { FC, useEffect, useState } from "react";
import {
  IBriefListElems,
  ICreatorBriefListProps,
  withCreatorBriefList,
} from "state/dashboard";
import "./campaignBriefTable.css";

const withCreatorBriefListCampaignBriefTable: FC<ICreatorBriefListProps> = ({
  briefList,
  requestList,
  loading,
  error,
}) => {
  const [data, setData] = useState<Array<IBriefListElems>>([]);

  useEffect(() => {
    if (!loading && !error && requestList && briefList) {
      const output = [] as Array<IBriefListElems>;
      briefList.forEach((brief) => {
        if (brief) {
          const { BriefName, brandProfile, vertical, objective, id } = brief;
          const status = requestList.find(
            (e) => e?.brandBriefId === id
          )?.status;
          output.push({
            id,
            briefName: BriefName,
            brandName: brandProfile?.name,
            vertical,
            objective,
            status,
          });
        }
      });
      setData(output);
    }
  }, [briefList, requestList, loading, error]);

  return (
    <div className="campaign-table-container">
      <div className="campaign-table-header">
        <div className="campaign-table-label">Campaign briefs</div>
        <img src="/images/morevert.svg" />
      </div>

      <table>
        <tr className="table-header-bottom-border">
          <th className="table-header-label">Brief Name</th>
          <th className="table-header-label">Brand</th>
          <th className="table-header-label">Vertical</th>
          <th className="table-header-label">Objective</th>
          <th className="table-header-label">Status</th>
          <th className="table-header-label">Details</th>
        </tr>
        {data.map((brief, index) => (
          <tr key={`${brief?.id} -- ${index}`}>
            <td className="table-description">{brief?.briefName}</td>
            <td className="table-description">{brief?.brandName}</td>
            <td className="table-description">{brief?.vertical}</td>
            <td className="table-description">{brief?.objective}</td>
            <td className="table-description">{brief?.status}</td>
            <td>
              <img src="/images/table-search.svg" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default withCreatorBriefList(withCreatorBriefListCampaignBriefTable);
