import DashboardCampaignBriefTable from "components/dashboardCampaignBriefTable/dashboardCampaignBriefTable";
import { FC, useState } from "react";
import { BrandBrief } from "API";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";
import Pagination from "components/pagination";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
}

const CAMPAIGN_BRIEFS = [
  {
    link: "https://www.tiktok.com/@name_creator1",
    quantity: {
      value: "awareness",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator2",
    quantity: {
      value: "unawareness",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator3",
    quantity: {
      value: "unawareness",
      color: "red",
    },
    view: "/images/doc_2.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator4",
    quantity: {
      value: "awareness",
      color: "green",
    },
    view: "/images/doc_2.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator5",
    quantity: {
      value: "unawareness",
      color: "red",
    },
    view: "/images/doc_1.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator6",
    quantity: {
      value: "unawareness",
      color: "red",
    },
    view: "/images/doc_3.svg",
  },
  {
    link: "https://www.tiktok.com/@name_creator7",
    quantity: {
      value: "awareness",
      color: "green",
    },
    view: "/images/doc_1.svg",
  },
];

const tableLimit = 4;
export const BrandBriefs: FC<Props> = (props) => {
  const history = useHistory();
  const [currentPage, setCurrentPage] = useState(0);

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

  const goToBriefs = (): void => history.push(AuthRoutes.CampaignBrief);

  return (
    <div className="brand-dashboard__item mobile-list-item">
      <div className="brand-dashboard__top hidden-top">
        <div className="brand-dashboard__top-title">Campaign briefs</div>
        <img
          onClick={goToBriefs}
          className="brand-dashboard__top-icon"
          alt=""
          src="/images/dots.svg"
        />
      </div>
      <div className="brand-dashboard__list-mobile">
        {CAMPAIGN_BRIEFS.map((item) => {
          return (
            <div
              onClick={handleClick}
              key={"mobile-" + item.link}
              className="brand-dashboard__list-mobile-wrap"
            >
              <div className="brand-dashboard__list-mobile-item">
                <span>
                  {item.link.length > 22
                    ? item.link.slice(0, 22) + "..."
                    : item.link}
                </span>
                <img alt="" src="/images/arrow-down.svg" />
              </div>
              <div className="brand-dashboard__list-mobile-info">
                <div className="brand-dashboard__list-mobile-table">
                  <div className="brand-dashboard__list-mobile-keys">
                    <div className="brand-dashboard__list-mobile-key">
                      Status
                    </div>
                    <div className="brand-dashboard__list-mobile-key">View</div>
                  </div>
                  <div className="brand-dashboard__list-mobile-values">
                    <div
                      className={`brand-dashboard__list-mobile-value ${item.quantity.color}
                        brand-dashboard__list-mobile-status`}
                    >
                      <div className="brand-dashboard__list-mobile-content">
                        {item.quantity.color === "red" && (
                          <img alt="" src="/images/list-cross.svg" />
                        )}
                        {item.quantity.color === "green" && (
                          <img alt="" src="/images/list-tip.svg" />
                        )}
                        {item.quantity.value}
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
            <th>Brief Name</th>
            <th>Objective</th>
            <th className="centered">View</th>
          </tr>
        </thead>
        <tbody>
          <DashboardCampaignBriefTable
            {...props}
            limit={tableLimit}
            currentPage={currentPage}
          />
        </tbody>
      </table>
      <Pagination
        total={props.data?.length || 0}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </div>
  );
};

export default BrandBriefs;
