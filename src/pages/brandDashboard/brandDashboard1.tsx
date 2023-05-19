import "./brandDashboard.css";
import { FC, useState, useEffect } from "react";
import {
  BrandBriefProps,
  ISelectredRequest,
  withBrandBriefs,
} from "state/brandBrief";
//import CreativeRequests from "./creativeRequests";
//import BrandBriefs from "./brandBriefs";
//import BrandInfo from "./brandInfo";
import CreativeDetails from "pages/creativeDetails/creativeDetails";
import { BrandBrief } from "API";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";

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

export const BrandDashboard: FC<BrandBriefProps> = ({ loading, ...props }) => {
  const [selectedRequest, setSelectedRequest] = useState<ISelectredRequest>();
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [linkLimit, setLinkLimit] = useState({
    full: 45,
    short: 35,
  });
  const [briefLimit, setBriefLimit] = useState({
    full: 27,
    short: 27,
  });
  const [campaignBriefLimit, setCampaignBriefLimit] = useState({
    full: 34,
    short: 25,
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
      setLinkLimit({ full: 40, short: 30 });
      setBriefLimit({ full: 22, short: 22 });
      setCampaignBriefLimit({ full: 29, short: 20 });
    } else {
      setLinkLimit({ full: 45, short: 35 });
      setBriefLimit({ full: 27, short: 27 });
      setCampaignBriefLimit({ full: 34, short: 25 });
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

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );

  if (selectedRequest)
    return (
      <CreativeDetails
        {...props}
        selectedRequest={selectedRequest}
        onBack={(): void => setSelectedRequest(undefined)}
      />
    );
  return (
    <div className="brand-dashboard__items dashboard-items">
      <div className="brand-dashboard__item full mobile-list-item">
        <div className="brand-dashboard__top mobile-main-title">
          <div className="brand-dashboard__top-title">Creatives</div>
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
                      <div className="brand-dashboard__list-mobile-key">
                        View
                      </div>
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
              <th>Creative Link</th>
              <th>Creator Handle</th>
              <th>Brief Name</th>
              <th>Status</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {CREATIVES.map((item) => {
              return (
                <tr key={item.handle.contact}>
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
                  <td className="brand-dashboard__list-handle">
                    <div className="brand-dashboard__list-content">
                      <img alt="" src={item.handle.avatar} />
                      <div>{item.handle.contact}</div>
                    </div>
                  </td>
                  <td className="brand-dashboard__list-name">
                    {item.brief.length > briefLimit.full
                      ? item.brief.slice(0, briefLimit.full) + "..."
                      : item.brief}
                  </td>
                  <td
                    className={`${item.stat.color} brand-dashboard__list-status`}
                  >
                    <div className="brand-dashboard__list-content">
                      <div className="brand-dashboard__list-dot"></div>
                      <span>{item.stat.value}</span>
                    </div>
                  </td>
                  <td className="brand-dashboard__list-view">
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
              d="M10.3403 3.64645C10.5532 3.84171 10.5532 4.15829 10.3403 4.35355L6.75 7.64645C6.5371 7.84171
               6.5371 8.15829 6.75 8.35355L10.3403 11.6464C10.5532 11.8417 10.5532 12.1583 10.3403
               12.3536C10.1274 12.5488 9.78225 12.5488 9.56935 12.3536L5.97902 9.06066C5.34033 8.47487
               5.34032 7.52513 5.97902 6.93934L9.56935 3.64645C9.78225 3.45118 10.1274 3.45118
               10.3403 3.64645Z"
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
               8.15829 9.4629 7.84171 9.25 7.64645L5.65968 4.35355C5.44678 4.15829 5.44678 3.84171 5.65968
               3.64645C5.87257 3.45118 6.21775 3.45118 6.43065 3.64645L10.021 6.93934C10.6597 7.52513
               10.6597 8.47487 10.021 9.06066L6.43065 12.3536C6.21775 12.5488 5.87257 12.5488
               5.65967 12.3536Z"
              fill="#0A9396"
            />
          </svg>
        </div>
      </div>
      <div className="brand-dashboard__item mobile-list-item">
        <div className="brand-dashboard__top hidden-top">
          <div className="brand-dashboard__top-title">Campaign briefs</div>
          <img
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
                      <div className="brand-dashboard__list-mobile-key">
                        View
                      </div>
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
              <th>Campaign Brief Name</th>
              <th>Quantity</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {CAMPAIGN_BRIEFS.map((item) => {
              return (
                <tr key={item.link}>
                  <td className="brand-dashboard__list-link">
                    <div className="brand-dashboard__list-content">
                      <img alt="" src="/images/link-icon.svg" />
                      <span>
                        {openedSidebar
                          ? item.link.length > campaignBriefLimit.short
                            ? item.link.slice(0, campaignBriefLimit.short) +
                              "..."
                            : item.link
                          : item.link.length > campaignBriefLimit.full
                          ? item.link.slice(0, campaignBriefLimit.full) + "..."
                          : item.link}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`${item.quantity.color} brand-dashboard__list-status`}
                  >
                    <div className="brand-dashboard__list-content">
                      {item.quantity.color === "red" && (
                        <img alt="" src="/images/list-cross.svg" />
                      )}
                      {item.quantity.color === "green" && (
                        <img alt="" src="/images/list-tip.svg" />
                      )}
                      {item.quantity.value}
                    </div>
                  </td>
                  <td className="brand-dashboard__list-view">
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
      <div className="brand-dashboard__item colored">
        <div className="brand-dashboard__bg"></div>
        <div className="brand-dashboard__item-content">
          <div className="brand-dashboard__top">
            <div className="brand-dashboard__top-contact">
              <img
                alt=""
                src="/images/brand-photo.png"
                className="brand-dashboard__top-photo"
              />
              <div className="brand-dashboard__top-info">
                <div className="brand-dashboard__top-name">Brand Name</div>
                <div className="brand-dashboard__top-profile">
                  Brand Profile
                </div>
              </div>
            </div>
            <img
              className="brand-dashboard__top-icon"
              alt=""
              src="/images/dots-white.svg"
            />
          </div>
          <div className="brand-dashboard__text columns">
            <p>
              I am an aspiring game designer and I work primarily on free and
              open source game projects. I also try to contribute to the Open
              Source Games movement through my own projects here and on the Open
              Game Art site. You can see more of my games here:
              https://github.com/ezran/games My username on Sourceforge is
              ezran, and you can find more information about me in my profile.
            </p>
            <p>
              Currently working on a free-to-play game called Labyrinth of Lost
              Souls. Labyrinth is a very complex, nonlinear, story-driven
              fantasy RPG that has been designed to be a “game within a game”
              for a wide audience. The game is based on a fantasy world where a
              magical tree called The Tree of Souls lives and is able to bring
              people from all walks of life together. This tree has many
              different branches, each with their own unique story and
              character.
            </p>
          </div>
          <div className="brand-dashboard__item-bottom">
            <button className="brand-dashboard__button">Brand Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
  /*
  return (
    <>
      <CreativeRequests {...props} openCreative={setSelectedRequest} />
      <div className="dashboard-campaign-section">
        <BrandBriefs {...props} openBrief={setSelectedBrief} />
        <BrandInfo {...props} />
      </div>
    </>
  );
  */
};

export default withBrandBriefs(BrandDashboard);
