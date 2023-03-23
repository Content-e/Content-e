import { BrandBrief } from "API";
import CampaignBriefTable from "components/campaignBriefTable/campaignBriefTable";
import Pagination from "components/pagination";
import { FC, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  IBriefListElems,
  ICreatorBriefListProps,
  withCreatorBriefList,
} from "state/dashboard";
import { AuthRoutes } from "utils";
import "./creatorDashboard.css";

interface Props {
  onSelectRequest: (e: BrandBrief) => void;
}
const tableLimit = 9;
const CreativeRequests: FC<Props & ICreatorBriefListProps> = ({
  briefList,
  onSelectRequest,
  requestList,
  loading,
  error,
}) => {
  const history = useHistory();
  const [data, setData] = useState<Array<IBriefListElems>>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const onCampaign = (): void => history.push(AuthRoutes.CampaignBrief);

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

  return (
    <>
      <div className="campaign-briefs-dashboard-container ">
        <div className="campaign-table-container">
          <div className="campaign-table-header">
            <div className="campaign-table-label">Campaign briefs</div>
            <img onClick={onCampaign} src="/images/morevert.svg" />
          </div>
          <CampaignBriefTable
            data={data}
            limit={tableLimit}
            briefList={briefList}
            searchText=""
            currentPage={currentPage}
            onSingleSelect={onSelectRequest}
          />
        </div>
      </div>
      <Pagination
        total={data.length}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </>
  );
};

export default withCreatorBriefList(CreativeRequests);
