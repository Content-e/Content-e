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
import moment from "moment";

interface Props {
  onSelectRequest: (e: BrandBrief) => void;
}
const tableLimit = 8;
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

  const handleClick = (e: any) => {
    if (e.target.classList.contains("brand-dashboard__list-mobile-wrap")) {
      e.target.classList.toggle("opened");
    } else {
      if (
        e.target.parentElement.classList.contains(
          "brand-dashboard__list-mobile-wrap"
        )
      ) {
        e.target.parentElement.classList.toggle("opened");
      } else {
        e.target.parentElement.parentElement.classList.toggle("opened");
      }
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

  return (
    <div className="brand-dashboard__item mobile-list-item creator-dashboard-full">
      <div className="brand-dashboard__top mobile-main-title">
        <div className="brand-dashboard__top-title">Campaign briefs</div>
        <img
          className="brand-dashboard__top-icon"
          alt=""
          src="/images/dots-orange.svg"
          onClick={onCampaign}
        />
        <img
          className="brand-dashboard__top-icon-mobile"
          alt=""
          src="/images/dots-dark.svg"
          onClick={onCampaign}
        />
      </div>
      <div className="brand-dashboard__list-mobile">
        {data?.map((e, i) => {
          let objectiveColor = "";
          switch (e?.objective) {
            case "awareness":
              objectiveColor = "green";
              break;
            case "unawareness":
              objectiveColor = "red";
              break;
          }
          let statusColor = "";
          switch (e?.status) {
            case "new":
              statusColor = "green";
              break;
            case "rejected":
              statusColor = "red";
              break;
          }
          return (
            <div
              onClick={handleClick}
              key={`${e?.id}--${i}--mobile`}
              className="brand-dashboard__list-mobile-wrap"
            >
              <div className="brand-dashboard__list-mobile-item">
                <span>
                  {e?.briefName
                    ? e.briefName.length > 22
                      ? e.briefName.slice(0, 22) + "..."
                      : e.briefName
                    : ""}
                </span>
                <img alt="" src="/images/arrow-down-orange.svg" />
              </div>
              <div className="brand-dashboard__list-mobile-info">
                <div className="brand-dashboard__list-mobile-table">
                  <div className="brand-dashboard__list-mobile-keys">
                    <div className="brand-dashboard__list-mobile-key">
                      Brief Name
                    </div>
                    <div className="brand-dashboard__list-mobile-key">
                      Brand
                    </div>
                    <div className="brand-dashboard__list-mobile-key">
                      Vertical
                    </div>
                    <div className="brand-dashboard__list-mobile-key">
                      Objective
                    </div>
                    <div className="brand-dashboard__list-mobile-key">
                      Status
                    </div>
                    <div className="brand-dashboard__list-mobile-key">
                      Details
                    </div>
                  </div>
                  <div className="brand-dashboard__list-mobile-values">
                    <div className="brand-dashboard__list-mobile-value">
                      <div className="brand-dashboard__list-mobile-content">
                        {e?.briefName
                          ? e.briefName.length > 22
                            ? e.briefName.slice(0, 22) + "..."
                            : e.briefName
                          : ""}
                      </div>
                    </div>
                    <div className="brand-dashboard__list-mobile-value">
                      <div className="brand-dashboard__list-mobile-content">
                        {e?.brandName
                          ? e.brandName.length > 22
                            ? e.brandName.slice(0, 22) + "..."
                            : e.brandName
                          : ""}
                      </div>
                    </div>
                    <div className="brand-dashboard__list-mobile-value">
                      <div className="brand-dashboard__list-mobile-content">
                        {e?.vertical
                          ? e.vertical.length > 22
                            ? e.vertical.slice(0, 22) + "..."
                            : e.vertical
                          : ""}
                      </div>
                    </div>
                    <div
                      className={`brand-dashboard__list-mobile-value ${objectiveColor}
                        brand-dashboard__list-mobile-status`}
                    >
                      <div className="brand-dashboard__list-mobile-content">
                        {objectiveColor === "red" && (
                          <img alt="" src="/images/list-cross.svg" />
                        )}
                        {objectiveColor === "green" && (
                          <img alt="" src="/images/list-tip.svg" />
                        )}
                        {e?.objective}
                      </div>
                    </div>
                    <div
                      className={`brand-dashboard__list-mobile-value ${statusColor}
                        brand-dashboard__list-mobile-status`}
                    >
                      <div className="brand-dashboard__list-mobile-content">
                        <div className="brand-dashboard__list-mobile-dot"></div>
                        <span>{e?.status ? "Active" : "Inactive"}</span>
                      </div>
                    </div>
                    <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-view">
                      <div className="brand-dashboard__list-mobile-content">
                        <img alt="" src="/images/doc_red.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CampaignBriefTable
        data={data}
        limit={tableLimit}
        briefList={briefList}
        searchText=""
        currentPage={currentPage}
        onSingleSelect={onSelectRequest}
      />
      <Pagination
        total={data.length}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </div>
  );
};

export default withCreatorBriefList(CreativeRequests);
