import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import Pagination from "components/pagination";
import { FC, useEffect, useMemo, useState } from "react";
import {
  IBriefListElems,
  ICreatorBriefListProps,
  withCreatorBriefList,
} from "state/dashboard";
import "./campaignBriefTable.css";

interface Props {
  searchText: string;
  onSingleSelect: (e: BrandBrief) => void;
}

const tableLimit = 9;
const withCreatorBriefListCampaignBriefTable: FC<
  Props & ICreatorBriefListProps
> = ({
  searchText,
  briefList,
  requestList,
  loading,
  error,
  onSingleSelect,
}) => {
  const [data, setData] = useState<Array<IBriefListElems>>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const onSelectBrief = (id?: string): void => {
    if (id) {
      const selectedBrief = briefList?.find((e) => e?.id === id);
      if (selectedBrief) onSingleSelect(selectedBrief);
    }
  };

  useEffect(() => {
    if (!loading && !error && requestList && briefList) {
      const output = [] as Array<IBriefListElems>;
      briefList.forEach((brief) => {
        if (brief) {
          const { BriefName, brandProfile, vertical, objective, id } = brief;
          const status =
            requestList.find((e) => e?.brandBriefId === id)?.status || "new";
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

  const filteredData = useMemo(
    () => data.filter((e) => e.briefName?.toLowerCase().includes(searchText)),
    [data, searchText]
  );

  const truncatedData = useMemo(
    () => getSlicedArray(filteredData, tableLimit, currentPage),
    [filteredData, currentPage]
  );

  return (
    <>
      <table>
        <tr className="table-header-bottom-border">
          <th className="campaign table-header-label">Brief Name</th>
          <th className="campaign table-header-label">Brand</th>
          <th className="campaign table-header-label">Vertical</th>
          <th className="campaign table-header-label">Objective</th>
          <th className="campaign table-header-label">Status</th>
          <th className="campaign table-header-label">Details</th>
        </tr>
        {truncatedData.map((brief, index) => (
          <tr key={`${brief?.id} -- ${index}`}>
            <td className="campaign table-description capitalized">
              {brief?.briefName}
            </td>
            <td className="campaign table-description capitalized">
              {brief?.brandName}
            </td>
            <td className="campaign table-description capitalized">
              {brief?.vertical}
            </td>
            <td className="campaign table-description capitalized">
              {brief?.objective}
            </td>
            <td className="campaign table-description capitalized">
              {brief?.status}
            </td>
            <td onClick={(): void => onSelectBrief(brief?.id)}>
              <img src="/images/table-search.svg" />
            </td>
          </tr>
        ))}
      </table>
      <Pagination
        total={filteredData.length}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </>
  );
};

export default withCreatorBriefList(withCreatorBriefListCampaignBriefTable);
