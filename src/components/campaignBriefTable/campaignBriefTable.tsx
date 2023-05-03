import { BrandBrief } from "API";
import { getSlicedArray, getStatusName } from "components/helpers";
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
}

const withCreatorBriefListCampaignBriefTable: FC<Props> = ({
  data,
  limit,
  briefList,
  searchText,
  currentPage,
  onSingleSelect,
}) => {
  const onSelectBrief = (id?: string): void => {
    if (id) {
      const selectedBrief = briefList?.find((e) => e?.id === id);
      if (selectedBrief) onSingleSelect(selectedBrief);
    }
  };

  const filteredData = useMemo(
    () => data.filter((e) => e.briefName?.toLowerCase().includes(searchText)),
    [data, searchText]
  );

  const truncatedData = useMemo(
    () => getSlicedArray(filteredData, limit, currentPage),
    [filteredData, currentPage]
  );

  return (
    <table>
      <tr className="table-header-bottom-border">
        <th className="campaign table-header-label">Brief Name</th>
        <th className="campaign table-header-label">Brand</th>
        <th className="campaign table-header-label hide-on-mobile">Vertical</th>
        <th className="campaign table-header-label hide-on-mobile">
          Objective
        </th>
        <th className="campaign table-header-label hide-on-mobile centered">
          Status
        </th>
        <th className="campaign table-header-label centered">Details</th>
      </tr>
      {truncatedData.map((brief, index) => (
        <tr key={`${brief?.id} -- ${index}`}>
          <td className="campaign table-description capitalized">
            {brief?.briefName}
          </td>
          <td className="campaign table-description capitalized">
            {brief?.brandName}
          </td>
          <td className="campaign table-description capitalized hide-on-mobile">
            {brief?.vertical}
          </td>
          <td className="campaign table-description capitalized hide-on-mobile">
            {brief?.objective}
          </td>
          <td className="campaign table-description centered capitalized hide-on-mobile">
            {getStatusName(brief?.status, true)}
          </td>
          <td
            className="centered"
            onClick={(): void => onSelectBrief(brief?.id)}
          >
            <img src="/images/table-search.svg" />
          </td>
        </tr>
      ))}
    </table>
  );
};

export default withCreatorBriefListCampaignBriefTable;
