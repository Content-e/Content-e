import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import { FC, useMemo } from "react";
import { IBriefListElems } from "state/dashboard";
import "./campaignBriefTable.css";

interface Props {
  limit: number;
  searchText: string;
  currentPage: number;
  onSingleSelect: (e: BrandBrief) => void;
  data: Array<IBriefListElems>;
  briefList?: Array<BrandBrief | null> | null;
  setSelectedBriefStatus: any;
}

const withCreatorBriefListCampaignBriefTable: FC<Props> = ({
  data,
  limit,
  briefList,
  searchText,
  currentPage,
  onSingleSelect,
  setSelectedBriefStatus,
}) => {
  const onSelectBrief = (id?: string, status?: string): void => {
    if (id) {
      const selectedBrief = briefList?.find((e) => e?.id === id);
      if (selectedBrief) onSingleSelect(selectedBrief);
      setSelectedBriefStatus(status);
    }
  };

  const filteredData = useMemo(
    () =>
      data.filter((e) =>
        e.briefName?.toLowerCase().includes(searchText.toLowerCase())
      ),
    [data, searchText]
  );

  const truncatedData = useMemo(
    () => getSlicedArray(filteredData, limit, currentPage),
    [filteredData, currentPage]
  );

  return (
    <table className="creator-dashboard__list">
      <thead>
        <tr>
          <th>Brief name</th>
          <th>Brand</th>
          <th>Vertical</th>
          <th>Objective</th>
          <th>Status</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {truncatedData.map((brief, index) => {
          let objectiveColor = "";
          switch (brief?.objective) {
            case "awareness":
              objectiveColor = "green";
              break;
            case "unawareness":
              objectiveColor = "red";
              break;
          }
          let statusColor = "";
          switch (brief?.status) {
            case "new":
              statusColor = "green";
              break;
            case "submitted":
              statusColor = "yellow";
              break;
            case "accept":
              statusColor = "green";
              break;
            case "accepted":
              statusColor = "green";
              break;
            case "reject":
              statusColor = "red";
              break;
            case "rejected":
              statusColor = "red";
              break;
          }
          return (
            <tr key={`${brief?.id}-brandBrief--${index}`}>
              <td className="brand-dashboard__list-name">
                <div className="brand-dashboard__list-content">
                  {brief?.briefName
                    ? brief.briefName.length > 22
                      ? brief.briefName.slice(0, 22) + "..."
                      : brief.briefName
                    : ""}
                </div>
              </td>
              <td className="brand-dashboard__list-name">
                <div className="brand-dashboard__list-content">
                  {brief?.brandName
                    ? brief.brandName.length > 22
                      ? brief.brandName.slice(0, 22) + "..."
                      : brief.brandName
                    : ""}
                </div>
              </td>
              <td className="brand-dashboard__list-name">
                <div className="brand-dashboard__list-content">
                  {brief?.vertical
                    ? brief.vertical.length > 22
                      ? brief.vertical.slice(0, 22) + "..."
                      : brief.vertical
                    : ""}
                </div>
              </td>
              <td className={`${objectiveColor} brand-dashboard__list-status`}>
                <div className="brand-dashboard__list-content">
                  {objectiveColor === "red" && (
                    <img alt="" src="/images/list-cross.svg" />
                  )}
                  {objectiveColor === "green" && (
                    <img alt="" src="/images/list-tip.svg" />
                  )}
                  {brief?.objective}
                </div>
              </td>
              <td className={`${statusColor} brand-dashboard__list-status`}>
                <div className="brand-dashboard__list-content">
                  {statusColor && (
                    <div className="brand-dashboard__list-dot"></div>
                  )}
                  <span>{brief?.status}</span>
                </div>
              </td>
              <td
                className="centered"
                onClick={(): void => onSelectBrief(brief?.id, brief?.status)}
              >
                <img src="/images/doc_red.svg" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default withCreatorBriefListCampaignBriefTable;
