import classNames from "classnames";
import { times } from "lodash";
import { FC, Fragment, useEffect, useMemo, useState } from "react";
import "./style.css";

interface Props {
  total: number;
  limit: number;
  goToPage: (e: number) => void;
}

export const Pagination: FC<Props> = ({ total, limit, goToPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);

  const goToPrev = (): void => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };
  const goToNext = (): void => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };
  const goToPageNo = (e: number): void => setCurrentPage(e);

  useEffect(() => {
    goToPage(currentPage);
  }, [currentPage]);

  if (totalPages <= 1) return <Fragment />;
  return (
    <div className="pagination-panel">
      <div
        className={classNames("pagination-box", {
          disabled: currentPage <= 0,
        })}
        onClick={goToPrev}
      >
        &lt;
      </div>
      {times(totalPages, (i) => (
        <div
          className={classNames("pagination-box", {
            "active-page": currentPage === i,
          })}
          onClick={(): void => goToPageNo(i)}
        >
          {i + 1}
        </div>
      ))}
      <div
        className={classNames("pagination-box", {
          disabled: currentPage >= totalPages - 1,
        })}
        onClick={goToNext}
      >
        &gt;
      </div>
    </div>
  );
};
export default Pagination;
