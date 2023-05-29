import { BrandBrief } from "API";
import { FC, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BrandRoutes } from "utils";
import "./brandBriefTable.css";

interface Props {
  data?: Array<BrandBrief | null>;
  openBrief: (brief: BrandBrief) => void;
}

export const BrandBriefTable: FC<Props> = ({ data, openBrief }) => {
  const history = useHistory();

  const onBriefSelection = (brief?: BrandBrief | null): void => {
    if (brief) openBrief(brief);
  };
  const onBriefEdit = (brief?: BrandBrief | null): void => {
    if (brief) history.push(BrandRoutes.EditBrief, { brief });
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [linkLimit, setLinkLimit] = useState({
    full: 34,
    short: 25,
  });
  const [briefLimit, setBriefLimit] = useState({
    full: 33,
    short: 25,
  });
  const [detailsLimit, setDetailsLimit] = useState({
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
      setLinkLimit({ full: 26, short: 17 });
      setBriefLimit({ full: 25, short: 17 });
      setDetailsLimit({ full: 18, short: 14 });
    } else {
      setLinkLimit({ full: 34, short: 25 });
      setBriefLimit({ full: 33, short: 25 });
      setDetailsLimit({ full: 26, short: 22 });
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
          <div className="table-actions-container">
            <button
              onClick={() => history.push(BrandRoutes.CreateBrief)}
              className="add-brief-button"
            >
              Create
            </button>
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
            switch (e?.active) {
              case true:
                statusColor = "green";
                break;
              case false:
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
                    {e?.BriefName
                      ? e.BriefName.length > 22
                        ? e.BriefName.slice(0, 22) + "..."
                        : e.BriefName
                      : ""}
                  </span>
                  <img alt="" src="/images/arrow-down.svg" />
                </div>
                <div className="brand-dashboard__list-mobile-info">
                  <div className="brand-dashboard__list-mobile-table">
                    <div className="brand-dashboard__list-mobile-keys">
                      <div className="brand-dashboard__list-mobile-key">
                        Brief details
                      </div>
                      <div className="brand-dashboard__list-mobile-key">
                        Creative Link
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
                      <div className="brand-dashboard__list-mobile-key">
                        Edit
                      </div>
                    </div>
                    <div className="brand-dashboard__list-mobile-values">
                      <div className="brand-dashboard__list-mobile-value">
                        <div className="brand-dashboard__list-mobile-content">
                          {e?.brandBriefDetails
                            ? e.brandBriefDetails.length > 22
                              ? e.brandBriefDetails.slice(0, 22) + "..."
                              : e.brandBriefDetails
                            : ""}
                        </div>
                      </div>
                      <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-link">
                        <div className="brand-dashboard__list-mobile-content">
                          {e?.creativeInspirations?.[0]
                            ? e.creativeInspirations?.[0].length > 22
                              ? e.creativeInspirations?.[0].slice(0, 22) + "..."
                              : e.creativeInspirations?.[0]
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
                          <span>{e?.active ? "Active" : "Inactive"}</span>
                        </div>
                      </div>
                      <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-view">
                        <div className="brand-dashboard__list-mobile-content">
                          <img alt="" src="/images/doc_1.svg" />
                        </div>
                      </div>
                      <div className="brand-dashboard__list-mobile-value brand-dashboard__list-mobile-view">
                        <div className="brand-dashboard__list-mobile-content">
                          <img alt="" src="/images/list-edit.svg" />
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
              <th>Brief details</th>
              <th>Linked TikTok campaign</th>
              <th>Objective</th>
              <th>Status</th>
              <th>Details</th>
              <th className="brand-dashboard__list-edit-th">Edit</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((e, index) => {
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
              switch (e?.active) {
                case true:
                  statusColor = "green";
                  break;
                case false:
                  statusColor = "red";
                  break;
              }
              return (
                <tr key={`${e?.id}-brandBrief--${index}`}>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      {e?.BriefName
                        ? openedSidebar
                          ? e?.BriefName.length > briefLimit.short
                            ? e?.BriefName.slice(0, briefLimit.short) + "..."
                            : e?.BriefName
                          : e?.BriefName.length > briefLimit.full
                          ? e?.BriefName.slice(0, briefLimit.full) + "..."
                          : e?.BriefName
                        : ""}
                    </div>
                  </td>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      {e?.brandBriefDetails
                        ? openedSidebar
                          ? e?.brandBriefDetails.length > detailsLimit.short
                            ? e?.brandBriefDetails.slice(
                                0,
                                detailsLimit.short
                              ) + "..."
                            : e?.brandBriefDetails
                          : e?.brandBriefDetails.length > detailsLimit.full
                          ? e?.brandBriefDetails.slice(0, detailsLimit.full) +
                            "..."
                          : e?.brandBriefDetails
                        : ""}
                    </div>
                  </td>
                  <td className="brand-dashboard__list-link">
                    <div className="brand-dashboard__list-content">
                      <img alt="" src="/images/link-icon.svg" />
                      <span>
                        {e?.creativeInspirations?.[0]
                          ? openedSidebar
                            ? e?.creativeInspirations?.[0].length >
                              linkLimit.short
                              ? e?.creativeInspirations?.[0].slice(
                                  0,
                                  linkLimit.short
                                ) + "..."
                              : e?.creativeInspirations?.[0]
                            : e?.creativeInspirations?.[0].length >
                              linkLimit.full
                            ? e?.creativeInspirations?.[0].slice(
                                0,
                                linkLimit.full
                              ) + "..."
                            : e?.creativeInspirations?.[0]
                          : ""}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`${objectiveColor} brand-dashboard__list-status`}
                  >
                    <div className="brand-dashboard__list-content">
                      {objectiveColor === "red" && (
                        <img alt="" src="/images/list-cross.svg" />
                      )}
                      {objectiveColor === "green" && (
                        <img alt="" src="/images/list-tip.svg" />
                      )}
                      {e?.objective}
                    </div>
                  </td>
                  <td className={`${statusColor} brand-dashboard__list-status`}>
                    <div className="brand-dashboard__list-content">
                      <div className="brand-dashboard__list-dot"></div>
                      <span>{e?.active ? "Active" : "Inactive"}</span>
                    </div>
                  </td>
                  <td
                    className="brand-dashboard__list-view-brand-briefs"
                    onClick={(): void => onBriefSelection(e)}
                  >
                    <div className="brand-dashboard__list-content">
                      <img alt="" src="/images/doc_1.svg" />
                    </div>
                  </td>
                  <td
                    className="brand-dashboard__list-edit"
                    onClick={(): void => onBriefEdit(e)}
                  >
                    <div className="brand-dashboard__list-content">
                      <img
                        alt=""
                        src="/images/list-edit.svg"
                        className="brand-dashboard__edit-button"
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrandBriefTable;
