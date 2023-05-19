import { BrandBrief } from "API";
import { getSlicedArray } from "components/helpers";
import { FC, useEffect, useState } from "react";
import "./dashboardCampaignBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
  limit: number;
  currentPage: number;
}

export const DashboardCampaignBriefTable: FC<Props> = ({
  data,
  openBrief,
  limit,
  currentPage,
}) => {
  const showDetails = (brief?: BrandBrief | null): void => {
    if (brief) openBrief(brief);
  };
  const openedSidebar = false;
  const [campaignBriefLimit, setCampaignBriefLimit] = useState({
    full: 34,
    short: 25,
  });
  const [windowSize, setWindowSize] = useState(window.innerWidth);
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
      setCampaignBriefLimit({ full: 29, short: 20 });
    } else {
      setCampaignBriefLimit({ full: 34, short: 25 });
    }
  }, [windowSize]);

  /*<tr key={`${e?.id}--brandBriefDashboard-${i}`}>
    <td className="dashboard-campaign-table-description capitalized">
      {e?.BriefName}
    </td>
    <td className="dashboard-campaign-table-description capitalized">
      {e?.objective}
    </td>
    <td onClick={(): void => showDetails(e)}>
      <img src="/images/table-search.svg" />
    </td>
  </tr>*/

  return (
    <>
      {getSlicedArray(data || [], limit, currentPage).map((e, i) => {
        return (
          <tr key={`${e?.id}--brandBriefDashboard-${i}`}>
            <td className="brand-dashboard__list-link">
              <div className="brand-dashboard__list-content">
                <img alt="" src="/images/link-icon.svg" />
                <span>
                  {e?.BriefName
                    ? openedSidebar
                      ? e?.BriefName?.length > campaignBriefLimit.short
                        ? e?.BriefName.slice(0, campaignBriefLimit.short) +
                          "..."
                        : e?.BriefName
                      : e?.BriefName.length > campaignBriefLimit.full
                      ? e?.BriefName.slice(0, campaignBriefLimit.full) + "..."
                      : e?.BriefName
                    : ""}
                </span>
              </div>
            </td>
            <td className="brand-dashboard__list-status">
              <div className="brand-dashboard__list-content">
                {e?.objective}
              </div>
            </td>
            <td
              className="centered brand-dashboard__list-view"
              onClick={(): void => showDetails(e)}
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

export default DashboardCampaignBriefTable;
