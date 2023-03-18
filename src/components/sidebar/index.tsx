import { FC, Fragment, useMemo } from "react";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import {
  AuthRoutes,
  BrandRoutes,
  CreatorRoutes,
  ProfileProps,
  UnknownType,
} from "utils";
import * as S from "./styles";
import { getPageTitle } from "components";
import { withProfile } from "state/profileSteps";
import { USER_TYPES } from "API";

interface ISidebar {
  showMenu: boolean;
  toggleMenu: () => void;
}

export const Sidebar: FC<ProfileProps & ISidebar> = ({
  profileState: { data },
  showMenu,
  toggleMenu,
}) => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onLogout = (): void => history.push(AuthRoutes.Logout);
  const onBrand = (): void => history.push(BrandRoutes.Brand);
  const onCampaignBrief = (): void => history.push(AuthRoutes.CampaignBrief);
  const onEditProfile = (): void => history.push(AuthRoutes.EditProfile);
  const onWallet = (): void => history.push(CreatorRoutes.Wallet);
  const onBestPractice = (): void => history.push(CreatorRoutes.BestPractices);
  const onDashboard = (): void => history.push(AuthRoutes.Dashboard);
  const onCreatives = (): void => history.push(BrandRoutes.Creatives);

  const getOption = (
    icon: string,
    route: AuthRoutes | CreatorRoutes | BrandRoutes,
    onClick: UnknownType
  ): JSX.Element => {
    const classes = classNames({ isActive: pathname.includes(route) });

    return (
      <S.SidebarMenuItem className={classes} onClick={onClick}>
        <S.SelectedLine className={classes} />
        <S.ArrowIcon>
          <img src="/images/arrow-right.svg" />
        </S.ArrowIcon>
        <S.MenuIcon>
          <img src={`/images/${icon}.svg`} />
        </S.MenuIcon>
        {getPageTitle(route)}
      </S.SidebarMenuItem>
    );
  };

  const userName = useMemo(() => {
    if (!data?.name?.length) return "Username";
    else {
      let name = data.name.slice(0, 14);
      if (data.name.length > 14) name += "...";
      return name;
    }
  }, [data]);

  return (
    <S.SidebarWrapper className={classNames({ show: showMenu })}>
      <S.CrossIcon onClick={toggleMenu}>
        <img src="/images/circle-cross.svg" alt="cross-icon" />
      </S.CrossIcon>
      <S.SidebarPanel>
        <S.TopHeader>
          <img src="/images/sidebar-logo.svg" />
        </S.TopHeader>
        <S.ProfilePanel>
          <S.Image>
            <img src="/images/default-image.png" />
          </S.Image>
          <S.Username onClick={onEditProfile}>{userName}</S.Username>
        </S.ProfilePanel>
        <S.SidebarMenu>
          {data?.userType === USER_TYPES.CREATIVE_USER && (
            <Fragment key="creator menu options">
              {getOption("chat", AuthRoutes.Dashboard, onDashboard)}
              {getOption("bag", AuthRoutes.CampaignBrief, onCampaignBrief)}
              {getOption("wallet", CreatorRoutes.Wallet, onWallet)}
              {getOption("book", CreatorRoutes.BestPractices, onBestPractice)}
            </Fragment>
          )}
          {data?.userType === USER_TYPES.BRAND_USER && (
            <Fragment key="creator menu options">
              {getOption("chat", AuthRoutes.Dashboard, onDashboard)}
              {getOption("notes", BrandRoutes.Creatives, onCreatives)}
              {getOption("bag", AuthRoutes.CampaignBrief, onCampaignBrief)}
              {getOption("bookOpen", BrandRoutes.Brand, onBrand)}
            </Fragment>
          )}
        </S.SidebarMenu>

        <S.LogoutBtn onClick={onLogout}>
          <img src="/images/logout.svg" />
          Logout
        </S.LogoutBtn>
      </S.SidebarPanel>
    </S.SidebarWrapper>
  );
};

export default withProfile(Sidebar);
