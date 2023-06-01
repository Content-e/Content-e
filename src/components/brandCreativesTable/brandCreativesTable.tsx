import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import { FC, useMemo, useState, useEffect } from "react";
import { ICreativeEntry, ISelectredRequest } from "state/brandBrief";
import { CreativeRequestStatus } from "utils";
import "./brandCreativesTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  limit: number;
  currentPage: number;
  openCreative: (data: ISelectredRequest) => void;
}
export const BrandCreativesTable: FC<Props> = ({
  data,
  limit,
  currentPage,
  openCreative,
}) => {
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
            briefId: brief.id,
          });
      });
    });
    return getSlicedArray(rqArray, limit, currentPage);
  }, [data, currentPage]);

  const openedSidebar = false;
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [linkLimit, setLinkLimit] = useState({
    full: 40,
    short: 30,
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
      setLinkLimit({ full: 35, short: 25 });
    } else {
      setLinkLimit({ full: 40, short: 30 });
    }
  }, [windowSize]);

  return (
    <>
      {requests.map((e, index) => {
        let color = "";
        let statusLabel = e.status;
        switch (e.status) {
          case CreativeRequestStatus.Accept:
            color = "green";
            statusLabel = "accepted";
            break;
          case "submitted":
            color = "yellow";
            statusLabel = "new";
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
          <tr key={`${e.id}-creatives-${index}`}>
            <td className="brand-dashboard__list-link">
              <div className="brand-dashboard__list-content">
                <img alt="" src="/images/link-icon.svg" />
                <span>
                  {e.creativeLink
                    ? openedSidebar
                      ? e.creativeLink.length > linkLimit.short
                        ? e.creativeLink.slice(0, linkLimit.short) + "..."
                        : e.creativeLink
                      : e.creativeLink.length > linkLimit.full
                      ? e.creativeLink.slice(0, linkLimit.full) + "..."
                      : e.creativeLink
                    : ""}
                </span>
              </div>
            </td>
            <td className="brand-dashboard__list-handle">
              <div className="brand-dashboard__list-content">
                <img alt="" src="/images/default-image.png" />
                <div>{e.creatorHandle ? e.creatorHandle : ""}</div>
              </div>
            </td>
            <td className="brand-dashboard__list-name">{e.briefName}</td>
            <td className={`${color} brand-dashboard__list-status`}>
              <div className="brand-dashboard__list-content">
                <div className="brand-dashboard__list-dot"></div>
                <span>{statusLabel}</span>
              </div>
            </td>
            <td
              className="brand-dashboard__list-view centered"
              onClick={(): void =>
                openCreative({
                  briefId: e.briefId,
                  requestId: e.id,
                  authCode: e.creativeLink || "",
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

export default BrandCreativesTable;
