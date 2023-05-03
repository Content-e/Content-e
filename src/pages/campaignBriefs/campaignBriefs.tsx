import { FC, useEffect, useState } from "react";
import { BrandBrief } from "API";
import CampaignBriefTable from "components/campaignBriefTable/campaignBriefTable";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import "./campaignBriefs.css";
import {
  IBriefListElems,
  ICreatorBriefListProps,
  withCreatorBriefList,
} from "state/dashboard";
import Pagination from "components/pagination";
import moment from "moment";
import { CreativeRequestStatus } from "utils";

const tableLimit = 7;
export const CampaignBriefs: FC<ICreatorBriefListProps> = ({
  briefList,
  requestList,
  loading,
  error,
}) => {
  const [data, setData] = useState<Array<IBriefListElems>>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();

  useEffect(() => {
    if (!loading && !error && requestList && briefList) {
      const output = [] as Array<IBriefListElems>;
      briefList.forEach((brief) => {
        if (brief) {
          const { BriefName, brandProfile, vertical, objective, id } = brief;
          const status =
            requestList.find((e) => e?.brandBriefId === id)?.status ||
            CreativeRequestStatus.New;
          output.push({
            id,
            briefName: BriefName,
            brandName: brandProfile?.name,
            vertical,
            objective,
            status,
            date: brief.createdAt,
          });
        }
      });
      output.sort(
        (a, b) => moment(b.date).valueOf() - moment(a.date).valueOf()
      );

      setData(output);
    }
  }, [briefList, requestList, loading, error]);

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );
  return (
    <>
      <div>
        <div className="campaign-table-label campaign-table-bold-label">
          Campaign briefs
        </div>
        <div className="campaign-table-container">
          <div className="campaign-table-wrapper">
            <input
              className="campaign-search"
              placeholder="Search..."
              value={searchText}
              onChange={(e): void => setSearchText(e.target.value)}
            />
            <CampaignBriefTable
              data={data}
              limit={tableLimit}
              briefList={briefList}
              currentPage={currentPage}
              searchText={searchText}
              onSingleSelect={setSelectedBrief}
            />
            <Pagination
              total={data.length}
              limit={tableLimit}
              goToPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default withCreatorBriefList(CampaignBriefs);
