import { FC, Fragment, useMemo } from "react";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import { AuthRoutes, ProfileProps, UnknownType } from "utils";
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
  const onBrand = (): void => history.push(AuthRoutes.Brand);
  const onCampaignBrand = (): void => history.push(AuthRoutes.CampaignBrief);
  const onCreatorProfile = (): void => history.push(AuthRoutes.CreatorProfile);
  const onCreatorDashboaard = (): void =>
    history.push(AuthRoutes.CreatorDashboard);

  const getOption = (
    icon: string,
    route: AuthRoutes,
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
          <S.Username onClick={onCreatorProfile}>{userName}</S.Username>
        </S.ProfilePanel>
        <S.SidebarMenu>
          {data?.userType === USER_TYPES.CREATIVE_USER && (
            <Fragment key="creator menu options">
              {getOption(
                "chat",
                AuthRoutes.CreatorDashboard,
                onCreatorDashboaard
              )}
              {getOption("bag", AuthRoutes.CampaignBrief, onCampaignBrand)}
              {getOption("wallet", AuthRoutes.Wallet, onBrand)}
              {getOption("book", AuthRoutes.BestPractices, onBrand)}
            </Fragment>
          )}
          {data?.userType === USER_TYPES.BRAND_USER && (
            <Fragment key="creator menu options">
              {getOption("bag", AuthRoutes.BrandBrief, onBrand)}
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
