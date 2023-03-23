import "./brandDashboard.css";
import { useHistory } from "react-router-dom";
import { BrandRoutes } from "utils";
import { FC } from "react";
import { BrandProfile } from "API";

interface Props {
  brand?: BrandProfile | null;
}
export const BrandInfo: FC<Props> = ({ brand }) => {
  const history = useHistory();

  const goToBrandPage = (): void => history.push(BrandRoutes.Brand);

  return (
    <div className="dashboard-campaign-brief-container">
      <div className="brand-table-header">
        <div className="brand-table-label">Brand Profile</div>
        <img src="/images/morevert.svg" onClick={goToBrandPage} />
      </div>
      <div className="brand-profile-container">
        {/* {brand?.name && ( */}
        <div className="brand-name capitalized">
          {brand?.name || "brand name"}
        </div>
        {/* )}
        {brand?.description && ( */}
        <div className="brand-description">
          {brand?.description || "brand description"}
        </div>
        {/* )} */}
        <div className="brand-profile-btn-container" onClick={goToBrandPage}>
          <div className="brand-profile-btn">
            <span className="brand-profile-text">Brand Profile</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;
