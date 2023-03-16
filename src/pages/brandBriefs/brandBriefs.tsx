import { BrandBrief } from "API";
import BrandBriefTable from "components/brandBriefTable/brandBriefTable";
// eslint-disable-next-line max-len
import BrandProfileConfirmationModal from "components/brandProfileConfirmationModal/brandProfileConfirmationModal";
import CampaignBriefDetails from "pages/campaignBriefDetails/campaignBriefDetails";
import { FC, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { BrandBriefProps, withBrandBriefs } from "state/brandBrief";
import { AuthRoutes } from "utils";
import "./brandBriefs.css";

export const BrandBriefs: FC<BrandBriefProps> = ({ data, brand }) => {
  const history = useHistory();
  const [input, setInput] = useState("");
  const [selectedBrief, setSelectedBrief] = useState<BrandBrief>();
  const [showAlert, setShowAlert] = useState(false);

  const goToBriefCreation = (): void => {
    if (brand) history.push(AuthRoutes.CreateBrief);
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
      <div className="brand-table-label">Brand briefs</div>
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
        <BrandBriefTable data={filteredData} openBrief={setSelectedBrief} />
      </div>
    </div>
  );
};

export default withBrandBriefs(BrandBriefs);
