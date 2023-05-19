//import Pagination from "components/pagination";
import CreativeDetails from "pages/creativeDetails/creativeDetails";
import { FC, useState, useEffect } from "react";
import {
  BrandBriefProps,
  ISelectredRequest,
  withBrandBriefs,
} from "state/brandBrief";
//import CreativeEntries from "./creativeEntries";
import "./creativesTable.css";

//const tableLimit = 7;

const CREATIVES = [
  {
    name: "Summer campaign",
    handle: "SA Tourism",
    link: "https://www.tiktok.com/@name_creator/video7181231",
    count: 1284,
    engagement: 4.8,
    status: {
      value: "approved",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
  {
    name: "The best winter company that buys something",
    handle: "Scuba diving",
    link: "https://www.tiktok.com/@name_creator/video7181232",
    count: 1284,
    engagement: 5.6,
    status: {
      value: "requested",
      color: "yellow",
    },
    view: "/images/doc_3.svg",
  },
  {
    name: "Summer campaign",
    handle: "Children's summer holidays... text text",
    link: "https://www.tiktok.com/@name_creator/video7181233",
    count: 1284,
    engagement: 6.4,
    status: {
      value: "approved",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
  {
    name: "Muga cosmos is just fast",
    handle: "SA Tourism",
    link: "https://www.tiktok.com/@name_creator/video7181234",
    count: 1284,
    engagement: 4.8,
    status: {
      value: "rejected",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    name: "Summer campaign",
    handle: "Scuba diving",
    link: "https://www.tiktok.com/@name_creator/video7181235",
    count: 1284,
    engagement: 5.6,
    status: {
      value: "requested",
      color: "yellow",
    },
    view: "/images/doc_1.svg",
  },
  {
    name: "Muga cosmos is just fast",
    handle: "Children's summer holidays... text text",
    link: "https://www.tiktok.com/@name_creator/video7181236",
    count: 1284,
    engagement: 6.4,
    status: {
      value: "approved",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
  {
    name: "The best winter company that buys something",
    handle: "SA Tourism",
    link: "https://www.tiktok.com/@name_creator/video7181237",
    count: 1284,
    engagement: 4.8,
    status: {
      value: "rejected",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    name: "Muga cosmos is just fast",
    handle: "Scuba diving",
    link: "https://www.tiktok.com/@name_creator/video7181238",
    count: 1284,
    engagement: 5.6,
    status: {
      value: "approved",
      color: "green",
    },
    view: "/images/doc_2.svg",
  },
  {
    name: "Summer campaign",
    handle: "Children's summer holidays... text text",
    link: "https://www.tiktok.com/@name_creator/video7181239",
    count: 1284,
    engagement: 6.4,
    status: {
      value: "requested",
      color: "yellow",
    },
    view: "/images/doc_1.svg",
  },
  {
    name: "Muga cosmos is just fast",
    handle: "SA Tourism",
    link: "https://www.tiktok.com/@name_creator/video71812311",
    count: 1284,
    engagement: 4.8,
    status: {
      value: "rejected",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    name: "Summer campaign",
    handle: "Scuba diving",
    link: "https://www.tiktok.com/@name_creator/video71812312",
    count: 1284,
    engagement: 5.6,
    status: {
      value: "active",
      color: "green",
    },
    view: "/images/doc_2.svg",
  },
  {
    name: "The best winter company that buys something",
    handle: "Children's summer holidays text text",
    link: "https://www.tiktok.com/@name_creator/video71812313",
    count: 1284,
    engagement: 6.4,
    status: {
      value: "requested",
      color: "yellow",
    },
    view: "/images/doc_1.svg",
  },
  {
    name: "Summer campaign",
    handle: "Children's summer holidays text text",
    link: "https://www.tiktok.com/@name_creator/video71812314",
    count: 1284,
    engagement: 4.8,
    status: {
      value: "rejected",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    name: "Muga cosmos is just fast",
    handle: "SA Tourism",
    link: "https://www.tiktok.com/@name_creator/video71812315",
    count: 1284,
    engagement: 5.6,
    status: {
      value: "approved",
      color: "green",
    },
    view: "/images/doc_2.svg",
  },
  {
    name: "Summer campaign",
    handle: "Scuba diving",
    link: "https://www.tiktok.com/@name_creator/video71812316",
    count: 1284,
    engagement: 6.3,
    status: {
      value: "rejected",
      color: "red",
    },
    view: "/images/doc_1.svg",
  },
  {
    name: "Muga cosmos is just fast",
    handle: "Children's summer holidays text text",
    link: "https://www.tiktok.com/@name_creator/video71812317",
    count: 1284,
    engagement: 4.8,
    status: {
      value: "requested",
      color: "yellow",
    },
    view: "/images/doc_3.svg",
  },
  {
    name: "The best winter company that buys something",
    handle: "SA Tourism",
    link: "https://www.tiktok.com/@name_creator/video71812318",
    count: 1284,
    engagement: 5.6,
    status: {
      value: "approved",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
];

export const CreativesTable: FC<BrandBriefProps> = (props) => {
  //const [searchText, setSearchText] = useState("");
  //const [currentPage, setCurrentPage] = useState(0);
  const [selectedRequest, setSelectedRequest] = useState<ISelectredRequest>();
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
  const openedSidebar = false;

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

  if (selectedRequest)
    return (
      <CreativeDetails
        {...props}
        selectedRequest={selectedRequest}
        onBack={(): void => setSelectedRequest(undefined)}
      />
    );
  return (
    <div className="brand-dashboard__items brand-briefs-items">
      <div className="brand-dashboard__item search-item">
        <img
          className="brand-dashboard__item-search"
          alt=""
          src="/images/search.svg"
        />
      </div>
      <div className="brand-dashboard__item full mobile-list-item">
        <div className="brand-dashboard__top mobile-main-title">
          <div className="brand-dashboard__top-title">Campaign briefs</div>
          <img
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots.svg"
          />
          <img
            className="brand-dashboard__top-icon-mobile"
            alt=""
            src="/images/dots-dark.svg"
          />
        </div>
        <div className="brand-dashboard__list-mobile">
          {CREATIVES.map((item) => {
            return (
              <div
                onClick={handleClick}
                key={"mobile-" + item.link}
                className="brand-dashboard__list-mobile-wrap"
              >
                <div className="brand-dashboard__list-mobile-item">
                  <span>
                    {item.name.length > 22
                      ? item.name.slice(0, 22) + "..."
                      : item.name}
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
                          {item.handle.length > 22
                            ? item.handle.slice(0, 22) + "..."
                            : item.handle}
                        </div>
                      </div>
                      <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-link">
                        <div className="brand-dashboard__list-mobile-content">
                          {item.link.length > 22
                            ? item.link.slice(0, 22) + "..."
                            : item.link}
                        </div>
                      </div>
                      <div className="brand-dashboard__list-mobile-value">
                        <div className="brand-dashboard__list-mobile-content">
                          {item.count}
                        </div>
                      </div>
                      <div className="brand-dashboard__list-mobile-value">
                        <div className="brand-dashboard__list-mobile-content">
                          {item.engagement}
                        </div>
                      </div>
                      <div
                        className={`brand-dashboard__list-mobile-value ${item.status.color}
                         brand-dashboard__list-mobile-status`}
                      >
                        <div className="brand-dashboard__list-mobile-content">
                          <div className="brand-dashboard__list-mobile-dot"></div>
                          <span>{item.status.value}</span>
                        </div>
                      </div>
                      <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-view">
                        <div className="brand-dashboard__list-mobile-content">
                          <img alt="" src={item.view} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <table className="brand-dashboard__list">
          <thead>
            <tr>
              <th>Brief name</th>
              <th>Creator handle</th>
              <th>Creative link</th>
              <th>View count</th>
              <th>Engagement</th>
              <th>Status</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {CREATIVES.map((item) => {
              return (
                <tr key={item.link}>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      {openedSidebar
                        ? item.name.length > briefLimit.short
                          ? item.name.slice(0, briefLimit.short) + "..."
                          : item.name
                        : item.name.length > briefLimit.full
                        ? item.name.slice(0, briefLimit.full) + "..."
                        : item.name}
                    </div>
                  </td>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      {openedSidebar
                        ? item.handle.length > handleLimit.short
                          ? item.handle.slice(0, handleLimit.short) + "..."
                          : item.handle
                        : item.handle.length > handleLimit.full
                        ? item.handle.slice(0, handleLimit.full) + "..."
                        : item.handle}
                    </div>
                  </td>
                  <td className="brand-dashboard__list-link">
                    <div className="brand-dashboard__list-content">
                      <img alt="" src="/images/link-icon.svg" />
                      <span>
                        {openedSidebar
                          ? item.link.length > linkLimit.short
                            ? item.link.slice(0, linkLimit.short) + "..."
                            : item.link
                          : item.link.length > linkLimit.full
                          ? item.link.slice(0, linkLimit.full) + "..."
                          : item.link}
                      </span>
                    </div>
                  </td>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      {item.count
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    </div>
                  </td>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      {item.engagement}%
                    </div>
                  </td>
                  <td
                    className={`${item.status.color} brand-dashboard__list-status`}
                  >
                    <div className="brand-dashboard__list-content">
                      <div className="brand-dashboard__list-dot"></div>
                      <span>{item.status.value}</span>
                    </div>
                  </td>
                  <td className="brand-dashboard__list-view-brand-briefs">
                    <div className="brand-dashboard__list-content">
                      <img alt="" src={item.view} />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="brand-dashboard__pagination">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.3403 3.64645C10.5532 3.84171 10.5532 4.15829 10.3403 4.35355L6.75 7.64645C6.5371
                7.84171 6.5371 8.15829 6.75 8.35355L10.3403 11.6464C10.5532 11.8417 10.5532 12.1583
                10.3403 12.3536C10.1274 12.5488 9.78225 12.5488 9.56935 12.3536L5.97902 9.06066C5.34033
                8.47487 5.34032 7.52513 5.97902 6.93934L9.56935 3.64645C9.78225 3.45118 10.1274
                3.45118 10.3403 3.64645Z"
              fill="#125766"
              fillOpacity="0.37"
            />
          </svg>
          <ul className="brand-dashboard__pagination-numbers">
            <li>1</li>
            <li>2</li>
          </ul>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.65967 12.3536C5.44678 12.1583 5.44678 11.8417 5.65967 11.6464L9.25 8.35355C9.4629
                8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171
                5.65968 3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597
                7.52513 10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488
                5.65967 12.3536Z"
              fill="#0A9396"
            />
          </svg>
        </div>
      </div>
    </div>
  );
  /*return (
    <>
      <div className="creatives-table-label">Creatives</div>
      <div className="creatives-table-container">
        <div className="brand-table-wrapper">
          <input
            className="creatives-search"
            placeholder="Search..."
            value={searchText}
            onChange={(e): void => setSearchText(e.target.value)}
          />
          <table className="creatives-table">
            <tr className="creatives-table-header-bottom-border">
              <th className="creatives-table-header-label">Brief Name</th>
              <th className="creatives-table-header-label">Creator handle</th>
              <th className="creatives-table-header-label">Creative link</th>
              <th className="creatives-table-header-label centered">
                View count
              </th>
              <th className="creatives-table-header-label centered">
                Engagement
              </th>
              <th className="creatives-table-header-label centered">Status</th>
              <th className="creatives-table-header-label centered">Details</th>
            </tr>
            <CreativeEntries
              {...props}
              searchText={searchText}
              openCreative={setSelectedRequest}
              limit={tableLimit}
              currentPage={currentPage}
            />
          </table>
          <Pagination
            total={props?.data?.length || 0}
            limit={tableLimit}
            goToPage={setCurrentPage}
          />
        </div>
      </div>
    </>
  );*/
};
export default withBrandBriefs(CreativesTable);
