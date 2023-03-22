import { BrandBrief } from "API";
import { getSlicedArray } from "components";
import BrandBriefTable from "components/brandBriefTable/brandBriefTable";
// eslint-disable-next-line max-len
import BrandProfileConfirmationModal from "components/brandProfileConfirmationModal/brandProfileConfirmationModal";
import Pagination from "components/pagination";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { FC, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrandBriefProps, withBrandBriefs } from "state/brandBrief";
import { BrandRoutes } from "utils";
import "./brandBriefs.css";

const tableLimit = 8;
export const BrandBriefs: FC<BrandBriefProps> = ({ data, brand }) => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [showAlert, setShowAlert] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const goToBriefCreation = (): void => {
    if (brand) history.push(BrandRoutes.CreateBrief);
    else setShowAlert(true);
  };

  useEffect(() => {
    if (data) setInput("");
  }, [data]);

  const filteredData = useMemo(
    () => data?.filter((e) => e?.BriefName?.toLowerCase().includes(input)),
    [data, input]
  );

  if (selectedBrief)
    return (
      <CampaignBriefDetails
        data={selectedBrief}
        onBack={(): void => setSelectedBrief(undefined)}
      />
    );
  return (
    <div>
      {showAlert && <BrandProfileConfirmationModal />}
      <div className="brand-table-label">Campaign briefs</div>
      <div className="brand-table-container">
        <div className="brand-brief-label-container">
          <input
            className="brand-search"
            placeholder="Search..."
            value={input}
            onChange={(e): void => setInput(e.target.value)}
          />
          <img src="/images/add-brief.svg" onClick={goToBriefCreation} />
        </div>
        <BrandBriefTable
          data={getSlicedArray(filteredData || [], tableLimit, currentPage)}
          openBrief={setSelectedBrief}
        />
      </div>
      <Pagination
        total={data?.length || 0}
        limit={tableLimit}
        goToPage={setCurrentPage}
      />
    </div>
  );
};

export default withBrandBriefs(BrandBriefs);
