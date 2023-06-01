import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import { FC, useMemo } from "react";
import { ICreativeEntry, ISelectredRequest } from "state/brandBrief";
import "./creativesTable.css";
import { CreativeRequestStatus } from "utils";

interface Props {
  data?: Array<BrandBrief | null>;
  searchText: string;
  openCreative: (data: ISelectredRequest) => void;
  limit: number;
  currentPage: number;
}

export const creativeEntriesMobile: FC<Props> = ({
  data,
  searchText,
  openCreative,
  limit,
  currentPage,
}) => {
  //const openedSidebar = false;
  const requests = useMemo(() => {
    const rqArray = [] as Array<ICreativeEntry>;
    data?.forEach((brief) => {
      brief?.creativeRequests?.items.forEach((req) => {
        if (req)
          rqArray.push({
            creativeLink: req?.tiktokCreativeUrl,
            creatorHandle: req?.creativeTiktokHandle,
            briefName: brief.BriefName,
            status: req?.status,
            id: req.id,
            videoLink: req.tiktokVideoCode,
            briefId: brief.id,
          });
      });
    });
    return getSlicedArray(
      rqArray.filter((e) => e.briefName?.includes(searchText)),
      limit,
      currentPage
    );
  }, [data, currentPage]);

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

  return (
    <>
      {requests.map((e, i) => {
        let color = "";
        let statusLabel = e.status;
        switch (e.status) {
          case CreativeRequestStatus.Accept:
            color = "green";
            statusLabel = "accepted";
            break;
          case "new":
            color = "yellow";
            break;
          case CreativeRequestStatus.Reject:
            color = "red";
            statusLabel = "rejected";
            break;
        }
        return (
          <div
            onClick={handleClick}
            key={`${e.id}--${i}--mobile`}
            className="brand-dashboard__list-mobile-wrap"
          >
            <div className="brand-dashboard__list-mobile-item">
              <span>
                {e.briefName
                  ? e.briefName.length > 22
                    ? e.briefName.slice(0, 22) + "..."
                    : e.briefName
                  : ""}
              </span>
              <img alt="" src="/images/arrow-down.svg" />
            </div>
            <div className="brand-dashboard__list-mobile-info">
              <div className="brand-dashboard__list-mobile-table">
                <div className="brand-dashboard__list-mobile-keys">
                  <div className="brand-dashboard__list-mobile-key">
                    Creator handle
                  </div>
                  <div className="brand-dashboard__list-mobile-key">
                    Creative Link
                  </div>
                  <div className="brand-dashboard__list-mobile-key">
                    View count
                  </div>
                  <div className="brand-dashboard__list-mobile-key">
                    Engagement
                  </div>
                  <div className="brand-dashboard__list-mobile-key">Status</div>
                  <div className="brand-dashboard__list-mobile-key">
                    Details
                  </div>
                </div>
                <div className="brand-dashboard__list-mobile-values">
                  <div className="brand-dashboard__list-mobile-value">
                    <div className="brand-dashboard__list-mobile-content">
                      {e.creatorHandle
                        ? e.creatorHandle.length > 22
                          ? e.creatorHandle.slice(0, 22) + "..."
                          : e.creatorHandle
                        : ""}
                    </div>
                  </div>
                  <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-link">
                    <div className="brand-dashboard__list-mobile-content">
                      {e.videoLink
                        ? e.videoLink.length > 22
                          ? e.videoLink.slice(0, 22) + "..."
                          : e.videoLink
                        : ""}
                    </div>
                  </div>
                  <div className="brand-dashboard__list-mobile-value">
                    <div className="brand-dashboard__list-mobile-content">
                      0
                    </div>
                  </div>
                  <div className="brand-dashboard__list-mobile-value">
                    <div className="brand-dashboard__list-mobile-content">
                      0%
                    </div>
                  </div>
                  <div
                    className={`brand-dashboard__list-mobile-value ${color}
                      brand-dashboard__list-mobile-status`}
                  >
                    <div className="brand-dashboard__list-mobile-content">
                      <div className="brand-dashboard__list-mobile-dot"></div>
                      <span>{statusLabel}</span>
                    </div>
                  </div>
                  <div
                    className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-view"
                    onClick={(): void =>
                      openCreative({
                        briefId: e.briefId,
                        requestId: e.id,
                        authCode: e.videoLink || "",
                      })
                    }
                  >
                    <div className="brand-dashboard__list-mobile-content">
                      <img alt="" src="/images/doc_1.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default creativeEntriesMobile;
