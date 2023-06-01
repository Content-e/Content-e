import { BrandBrief } from "API";
import BrandBriefTable from "components/brandBriefTable/brandBriefTable";
// eslint-disable-next-line max-len
//import BrandProfileConfirmationModal from "components/brandProfileConfirmationModal/brandProfileConfirmationModal";
//import Pagination from "components/pagination";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { FC, useEffect, useMemo, useState } from "react";
//import { useHistory } from "react-router-dom";
import { BrandBriefProps, withBrandBriefs } from "state/brandBrief";
//import { BrandErrorModal, BrandRoutes } from "utils";
import "./brandBriefs.css";

export const BrandBriefs: FC<BrandBriefProps> = ({
  data,
  //brand,
  //isTiktokLinked,
}) => {
  //const history = useHistory();
  const [input, setInput] = useState("");
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  //const [showAlert, setShowAlert] = useState<BrandErrorModal>();
  //const [currentPage, setCurrentPage] = useState(0);

  /*const goToBriefCreation = (): void => {
    if (!brand) setShowAlert(BrandErrorModal.NO_BRAND);
    else if (!isTiktokLinked) setShowAlert(BrandErrorModal.NO_TIKTOK_LINK);
    else history.push(BrandRoutes.CreateBrief);
  };*/

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
  return <BrandBriefTable data={filteredData} openBrief={setSelectedBrief} />;
  /*return (
    <div>
      {showAlert && <BrandProfileConfirmationModal errorType={showAlert} />}
      <div className="brand-table-label">Campaign briefs</div>
      <div className="brand-table-container">
        <div className="brand-table-wrapper">
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
          <Pagination
            total={data?.length || 0}
            limit={tableLimit}
            goToPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );*/
};

export default withBrandBriefs(BrandBriefs);
