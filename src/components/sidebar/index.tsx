import { FC, Fragment, useEffect, useMemo, useState } from "react";
import classNames from "classnames";
import { useHistory, useLocation } from "react-router-dom";
import {
  AuthRoutes,
  BrandRoutes,
  CreatorRoutes,
  ProfileProps,
  AdminRoutes,
} from "utils";
import * as S from "./styles";
import { getPageTitle } from "components";
import { withProfile } from "state/profileSteps";
import { USER_TYPES } from "API";
import { Storage } from "aws-amplify";

export const MobileHeader: FC<ProfileProps> = ({ profileState: { data } }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const [profilePic, setProfilePic] = useState<string>();

  const onLogout = (): void => history.push(AuthRoutes.Logout);
  const onEditProfile = (): void => history.push(AuthRoutes.EditProfile);

  const getImageFromS3 = async (id: string): Promise<void> => {
    try {
      const url = await Storage.get(`${id}/avatar/profile`);
      fetch(url).then((res) => {
        if (res.status === 200) setProfilePic(url);
      });
    } catch (err) {
      console.log("Error", err);
    }
  };
  const getOption = (
    icon: string,
    route: AuthRoutes | CreatorRoutes | BrandRoutes | AdminRoutes
  ): JSX.Element => {
    const classes = classNames({ isActive: pathname.includes(route) });

    return (
      <S.SidebarMenuItem
        className={classes}
        onClick={(): void => history.push(route)}
      >
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

  useEffect(() => {
    if (data?.id) getImageFromS3(data.id);
  }, [data]);

  return (
    <S.SidebarWrapper>
      <S.CrossIcon>
        <img src="/images/circle-cross.svg" alt="cross-icon" />
      </S.CrossIcon>
      <S.SidebarPanel>
        <S.TopHeader>
          <img src="/images/sidebar-logo.svg" />
        </S.TopHeader>
        <S.ProfilePanel>
          <S.Image>
            <img src={profilePic || "/images/default-image.png"} />
          </S.Image>
          <S.Username onClick={onEditProfile}>{userName}</S.Username>
        </S.ProfilePanel>
        <S.SidebarMenu>
          {data?.userType === USER_TYPES.CREATIVE_USER && (
            <Fragment key="creator menu options">
              {getOption("chat", AuthRoutes.Dashboard)}
              {getOption("bag", AuthRoutes.CampaignBrief)}
              {getOption("wallet", CreatorRoutes.Wallet)}
              {getOption("bookOpen", AuthRoutes.BestPractices)}
            </Fragment>
          )}
          {data?.userType === USER_TYPES.BRAND_USER && (
            <Fragment key="creator menu options">
              {getOption("chat", AuthRoutes.Dashboard)}
              {getOption("notes", BrandRoutes.Creatives)}
              {getOption("bag", AuthRoutes.CampaignBrief)}
              {getOption("bookOpen", BrandRoutes.Brand)}
            </Fragment>
          )}
          {data?.userType === USER_TYPES.ADMIN_USER && (
            <Fragment key="creator menu options">
              {getOption("chat", AuthRoutes.Dashboard)}
              {getOption("bag", AdminRoutes.Brands)}
              {getOption("wallet", AdminRoutes.Creators)}
              {getOption("bookOpen", AuthRoutes.BestPractices)}
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

export default withProfile(MobileHeader);
