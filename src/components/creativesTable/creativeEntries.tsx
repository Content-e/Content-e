import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import { FC, useMemo, useState, useEffect } from "react";
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

export const CreativeEntries: FC<Props> = ({
  data,
  searchText,
  openCreative,
  limit,
  currentPage,
}) => {
  const openedSidebar = false;
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
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [linkLimit, setLinkLimit] = useState({
    full: 45,
    short: 36,
  });
  const [briefLimit, setBriefLimit] = useState({
    full: 33,
    short: 25,
  });
  const [handleLimit, setHandleLimit] = useState({
    full: 26,
    short: 22,
  });
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    console.log(windowSize);
    if (windowSize <= 1350) {
      setLinkLimit({ full: 37, short: 28 });
      setBriefLimit({ full: 25, short: 17 });
      setHandleLimit({ full: 18, short: 14 });
    } else {
      setLinkLimit({ full: 45, short: 36 });
      setBriefLimit({ full: 33, short: 25 });
      setHandleLimit({ full: 26, short: 22 });
    }
  }, [windowSize]);

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
          case "submitted":
            color = "yellow";
            statusLabel = "new";
            break;
          case CreativeRequestStatus.Reject:
            color = "red";
            statusLabel = "rejected";
            break;
        }
        return (
          <tr key={`${e.id}--${i}`}>
            <td className="brand-dashboard__list-name">
              <div className="brand-dashboard__list-content">
                {e.briefName
                  ? openedSidebar
                    ? e.briefName.length > briefLimit.short
                      ? e.briefName.slice(0, briefLimit.short) + "..."
                      : e.briefName
                    : e.briefName.length > briefLimit.full
                    ? e.briefName.slice(0, briefLimit.full) + "..."
                    : e.briefName
                  : ""}
              </div>
            </td>
            <td className="brand-dashboard__list-name">
              <div className="brand-dashboard__list-content">
                {e.creatorHandle
                  ? openedSidebar
                    ? e.creatorHandle.length > handleLimit.short
                      ? e.creatorHandle.slice(0, handleLimit.short) + "..."
                      : e.creatorHandle
                    : e.creatorHandle.length > handleLimit.full
                    ? e.creatorHandle.slice(0, handleLimit.full) + "..."
                    : e.creatorHandle
                  : ""}
              </div>
            </td>
            <td className="brand-dashboard__list-link">
              <div className="brand-dashboard__list-content">
                <img alt="" src="/images/link-icon.svg" />
                <span>
                  {e.videoLink
                    ? openedSidebar
                      ? e.videoLink.length > linkLimit.short
                        ? e.videoLink.slice(0, linkLimit.short) + "..."
                        : e.videoLink
                      : e.videoLink.length > linkLimit.full
                      ? e.videoLink.slice(0, linkLimit.full) + "..."
                      : e.videoLink
                    : ""}
                </span>
              </div>
            </td>
            <td className="brand-dashboard__list-name">
              <div className="brand-dashboard__list-content">0</div>
            </td>
            <td className="brand-dashboard__list-name">
              <div className="brand-dashboard__list-content">0%</div>
            </td>
            <td className={`${color} brand-dashboard__list-status`}>
              <div className="brand-dashboard__list-content">
                <div className="brand-dashboard__list-dot"></div>
                <span>{statusLabel}</span>
              </div>
            </td>
            <td
              className="brand-dashboard__list-view-brand-briefs"
              onClick={(): void =>
                openCreative({
                  briefId: e.briefId,
                  requestId: e.id,
                  authCode: e.videoLink || "",
                })
              }
            >
              <div className="brand-dashboard__list-content">
                <img alt="" src="/images/doc_1.svg" />
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default CreativeEntries;
