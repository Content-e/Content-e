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
              <div className="brand-dashboard__top-name">
                {brand?.name || "brand name"}
              </div>
              <div className="brand-dashboard__top-profile">Brand Profile</div>
            </div>
          </div>
          <img
            onClick={goToBrandPage}
            className="brand-dashboard__top-icon"
            alt=""
            src="/images/dots-white.svg"
          />
        </div>
        <div className="brand-dashboard__text columns">
          {brand?.description || "brand description"}
        </div>
        <div className="brand-dashboard__item-bottom" onClick={goToBrandPage}>
          <button className="brand-dashboard__button">Brand Profile</button>
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;
