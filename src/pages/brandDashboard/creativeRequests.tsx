import BrandCreativesTable from "components/brandCreativesTable/brandCreativesTable";
import "./brandDashboard.css";
import { FC, useState, useEffect } from "react";
import { BrandBrief } from "API";
import { ISelectredRequest } from "state/brandBrief";
import { useHistory } from "react-router-dom";
import { BrandRoutes } from "utils";
import Pagination from "components/pagination";

interface Props {
  data?: Array<BrandBrief | null>;
  openCreative: (data: ISelectredRequest) => void;
}

const CREATIVES = [
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_1.png",
      contact: "Alex@creatorhandle",
    },
    brief: "Summer campaign",
    stat: {
      value: "Approved",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_2.png",
      contact: "Julia@creatorhandle",
    },
    brief: "All - season campaign",
    stat: {
      value: "Rejected",
      color: "red",
    },
    view: "/images/doc_2.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_3.png",
      contact: "Amerald@creatorhandle",
    },
    brief: "The best in the segment campaign",
    stat: {
      value: "Rejected",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_4.png",
      contact: "Alexandr@creatorhandle",
    },
    brief: "All - season campaign",
    stat: {
      value: "Approved",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_5.png",
      contact: "Antonio@creatorhandle",
    },
    brief: "The best in the segment campaign",
    stat: {
      value: "Rejected",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_6.png",
      contact: "Lucia@creatorhandle",
    },
    brief: "All - season campaign",
    stat: {
      value: "Approved",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_7.png",
      contact: "Amerald@creatorhandle1",
    },
    brief: "Summer campaign",
    stat: {
      value: "Requested",
      color: "yellow",
    },
    view: "/images/doc_3.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator/video718123",
    handle: {
      avatar: "/images/creator_1.png",
      contact: "Alex@creatorhandle1",
    },
    brief: "The best in the segment campaign",
    stat: {
      value: "Rejected",
      color: "red",
    },
    view: "/images/doc_2.svg",
  },
];

const tableLimit = 8;
export const CreativeRequests: FC<Props> = (props) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(0);

  //const [windowSize, setWindowSize] = useState(window.innerWidth);
  /*const [linkLimit, setLinkLimit] = useState({
    full: 45,
    short: 35,
  });
  const [briefLimit, setBriefLimit] = useState({
    full: 27,
    short: 27,
  });
  const openedSidebar = false;*/

  useEffect(() => {
    const handleWindowResize = () => {
      //setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  /*useEffect(() => {
    console.log(windowSize);
    if (windowSize <= 1350) {
      setLinkLimit({ full: 40, short: 30 });
      setBriefLimit({ full: 22, short: 22 });
    } else {
      setLinkLimit({ full: 45, short: 35 });
      setBriefLimit({ full: 27, short: 27 });
    }
  }, [windowSize]);*/

  const goToCreatives = (): void => history.push(BrandRoutes.Creatives);

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
    <div className="brand-dashboard__item full mobile-list-item">
      <div className="brand-dashboard__top mobile-main-title">
        <div className="brand-dashboard__top-title">Creatives</div>
        <img
          className="brand-dashboard__top-icon"
          alt=""
          src="/images/dots.svg"
          onClick={goToCreatives}
        />
        <img
          className="brand-dashboard__top-icon-mobile"
          alt=""
          src="/images/dots-dark.svg"
          onClick={goToCreatives}
        />
      </div>
      <div className="brand-dashboard__list-mobile">
        {CREATIVES.map((item) => {
          return (
            <div
              onClick={handleClick}
              key={"mobile-" + item.handle.contact}
              className="brand-dashboard__list-mobile-wrap"
            >
              <div className="brand-dashboard__list-mobile-item">
                <span>
                  {item.brief.length > 22
                    ? item.brief.slice(0, 22) + "..."
                    : item.brief}
                </span>
                <img alt="" src="/images/arrow-down.svg" />
              </div>
              <div className="brand-dashboard__list-mobile-info">
                <div className="brand-dashboard__list-mobile-handle">
                  <div className="brand-dashboard__list-mobile-content">
                    <img alt="" src={item.handle.avatar} />
                    <div>{item.handle.contact}</div>
                  </div>
                </div>
                <div className="brand-dashboard__list-mobile-table">
                  <div className="brand-dashboard__list-mobile-keys">
                    <div className="brand-dashboard__list-mobile-key">
                      Creative Link
                    </div>
                    <div className="brand-dashboard__list-mobile-key">
                      Status
                    </div>
                    <div className="brand-dashboard__list-mobile-key">View</div>
                  </div>
                  <div className="brand-dashboard__list-mobile-values">
                    <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-link">
                      <div className="brand-dashboard__list-mobile-content">
                        {item.link.length > 22
                          ? item.link.slice(0, 22) + "..."
                          : item.link}
                      </div>
                    </div>
                    <div
                      className={`brand-dashboard__list-mobile-value ${item.stat.color}
                        brand-dashboard__list-mobile-status`}
                    >
                      <div className="brand-dashboard__list-mobile-content">
                        <div className="brand-dashboard__list-mobile-dot"></div>
                        <span>{item.stat.value}</span>
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
            <th className="creatives-column-1">Creative Link</th>
            <th className="creatives-column-2">Creator Handle</th>
            <th className="creatives-column-3">Brief Name</th>
            <th className="creatives-column-4">Status</th>
            <th className="creatives-column-5 centered">View</th>
          </tr>
        </thead>
        <tbody>
          <BrandCreativesTable
            {...props}
            limit={tableLimit}
            currentPage={currentPage}
          />
        </tbody>
      </table>
      <Pagination
        total={props?.data?.length || 0}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </div>
  );
};

export default CreativeRequests;
