import { FC, Fragment, useState } from "react";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import {
  AuthRoutes,
  BrandRoutes,
  CreatorRoutes,
  ProfileProps,
  UnknownType,
} from "utils";
import { getPageTitle } from "components";
import { withProfile } from "state/profileSteps";
import { USER_TYPES } from "API";
import "./style.css";

export const MobileHeader: FC<ProfileProps> = ({ profileState: { data } }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (): void => setShowMenu(!showMenu);
  const onLogout = (): void => history.push(AuthRoutes.Logout);
  const onBrand = (): void => history.push(BrandRoutes.Brand);
  const onCampaignBrief = (): void => history.push(AuthRoutes.CampaignBrief);
  const onEditProfile = (): void => history.push(AuthRoutes.EditProfile);
  const onWallet = (): void => history.push(CreatorRoutes.Wallet);
  const onBestPractice = (): void => history.push(CreatorRoutes.BestPractices);
  const onDashboard = (): void => history.push(AuthRoutes.Dashboard);
  const onCreatives = (): void => history.push(BrandRoutes.Creatives);

  const getOption = (
    route: AuthRoutes | CreatorRoutes | BrandRoutes,
    onClick: UnknownType
  ): JSX.Element => {
    const classes = classNames("menu-option", {
      isActive: pathname.includes(route),
    });

    return (
      <div className={classes} onClick={onClick}>
        {getPageTitle(route)}
      </div>
    );
  };

  return (
    <div className="mobile-header">
      <div className="mobile-header-top">
        <img
          className="mobile-header-top-image-size"
          src="/images/edc-logo.svg"
          alt="edc-squared"
        />
        <img
          className="mobile-header-top-extra-space"
          src="/images/hamburger.svg"
          alt="edc-squared"
          onClick={toggleMenu}
        />
      </div>
      {showMenu && (
        <div className="mobile-header-menu">
          {getOption(AuthRoutes.Dashboard, onDashboard)}
          {data?.userType === USER_TYPES.CREATIVE_USER && (
            <Fragment key="creator user">
              {getOption(AuthRoutes.CampaignBrief, onCampaignBrief)}
              {getOption(CreatorRoutes.Wallet, onWallet)}
              {getOption(CreatorRoutes.BestPractices, onBestPractice)}
            </Fragment>
          )}
          {data?.userType === USER_TYPES.BRAND_USER && (
            <Fragment key="creator user">
              {getOption(BrandRoutes.Creatives, onCreatives)}
              {getOption(AuthRoutes.CampaignBrief, onCampaignBrief)}
              {getOption(BrandRoutes.Brand, onBrand)}
            </Fragment>
          )}
          {getOption(AuthRoutes.EditProfile, onEditProfile)}
          {getOption(AuthRoutes.Logout, onLogout)}
        </div>
      )}
    </div>
  );
};

export default withProfile(MobileHeader);
