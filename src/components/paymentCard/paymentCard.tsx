import "./paymentCard.css";
import Pagination from "components/pagination";
import { useState } from "react";

const IS_EMPTY = true;
const HISTORY = [
  {
    id: 0,
    date: "12/1/2023",
    amount: "234.78",
    status: "approved",
  },
  {
    id: 1,
    date: "26/2/2023",
    amount: "234.78",
    status: "requested",
  },
  {
    id: 2,
    date: "03/2/2023",
    amount: "234.78",
    status: "rejected",
  },
  {
    id: 3,
    date: "10/3/2023",
    amount: "234.78",
    status: "requested",
  },
  {
    id: 4,
    date: "14/3/2023",
    amount: "234.78",
    status: "approved",
  },
  {
    id: 5,
    date: "29/4/2023",
    amount: "234.78",
    status: "requested",
  },
  {
    id: 6,
    date: "17/4/2023",
    amount: "234.78",
    status: "rejected",
  },
  {
    id: 7,
    date: "26/2/2023",
    amount: "234.78",
    status: "requested",
  },
  {
    id: 8,
    date: "03/2/2023",
    amount: "234.78",
    status: "rejected",
  },
  {
    id: 9,
    date: "10/3/2023",
    amount: "234.78",
    status: "requested",
  },
  {
    id: 10,
    date: "14/3/2023",
    amount: "234.78",
    status: "approved",
  },
  {
    id: 11,
    date: "29/4/2023",
    amount: "234.78",
    status: "requested",
  },
  {
    id: 12,
    date: "17/4/2023",
    amount: "234.78",
    status: "rejected",
  },
];

export default function PaymentCard() {
  const tableLimit = 7;
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
    console.log(currentPage);
  };

  return (
    <div className="brand-dashboard__item full mobile-list-item creator-dashboard-full">
      <div className="brand-dashboard__top mobile-main-title">
        <div className="brand-dashboard__top-title">Payment history</div>
        <img
          className="brand-dashboard__top-icon"
          alt=""
          src="/images/dots-orange.svg"
        />
        <img
          className="brand-dashboard__top-icon-mobile"
          alt=""
          src="/images/dots-orange.svg"
        />
      </div>
      <div className="brand-dashboard__list-mobile">
        {!IS_EMPTY &&
          HISTORY.map((e, i) => {
            let statusColor = "";
            switch (e?.status) {
              case "approved":
                statusColor = "green";
                break;
              case "requested":
                statusColor = "yellow";
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
                  <span>{e?.date}</span>
                  <img alt="" src="/images/arrow-down-orange.svg" />
                </div>
                <div className="brand-dashboard__list-mobile-info">
                  <div className="brand-dashboard__list-mobile-table">
                    <div className="brand-dashboard__list-mobile-keys">
                      <div className="brand-dashboard__list-mobile-key">
                        Payment amount
                      </div>
                      <div className="brand-dashboard__list-mobile-key">
                        Status
                      </div>
                    </div>
                    <div className="brand-dashboard__list-mobile-values">
                      <div className="brand-dashboard__list-mobile-value">
                        <div className="brand-dashboard__list-mobile-content">
                          ${e?.amount}
                        </div>
                      </div>
                      <div
                        className={`brand-dashboard__list-mobile-value ${statusColor}
                        brand-dashboard__list-mobile-status`}
                      >
                        <div className="brand-dashboard__list-mobile-content">
                          <div className="brand-dashboard__list-mobile-dot"></div>
                          <span>{e?.status}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <table className="creator-dashboard__list history-list">
        <thead>
          <tr>
            <th>Date</th>
            <th>Payment amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {!IS_EMPTY &&
            HISTORY.map((e, index) => {
              let statusColor = "";
              switch (e?.status) {
                case "approved":
                  statusColor = "green";
                  break;
                case "requested":
                  statusColor = "yellow";
                  break;
                case "rejected":
                  statusColor = "red";
                  break;
              }
              return (
                <tr key={`${e?.id}-brandBrief--${index}`}>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      {e?.date}
                    </div>
                  </td>
                  <td className="brand-dashboard__list-name">
                    <div className="brand-dashboard__list-content">
                      ${e?.amount}
                    </div>
                  </td>
                  <td className={`${statusColor} brand-dashboard__list-status`}>
                    <div className="brand-dashboard__list-content">
                      <div className="brand-dashboard__list-dot"></div>
                      <span>{e?.status}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {!IS_EMPTY && (
        <Pagination
          total={HISTORY?.length || 0}
          limit={tableLimit}
          goToPage={setCurrentPage}
        />
      )}
    </div>
  );
}
