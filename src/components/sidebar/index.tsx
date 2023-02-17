import { FC } from "react";
import classNames from "classnames";
import { startCase } from "lodash";
import { useHistory, useLocation } from "react-router-dom";
import { AuthRoutes, UnknownType } from "utils";
import * as S from "./styles";

interface ISidebar {
  showMenu: boolean;
  toggleMenu: () => void;
}

export const Sidebar: FC<ISidebar> = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const onLogout = (): void => history.push(AuthRoutes.Logout);
  const onHome = (): void => history.push(AuthRoutes.Home);
  const onBrand = (): void => history.push(AuthRoutes.Brand);

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
        {startCase(route.split("/")?.[1])}
      </S.SidebarMenuItem>
    );
  };

  return (
    <S.SidebarWrapper>
      <S.SidebarPanel>
        <S.TopHeader>
          <S.Heading>Content-e</S.Heading>
          <S.SubHeading>Powered by Brain-e.io</S.SubHeading>
          <S.UnderLineCanvas>
            <S.UnderLine />
          </S.UnderLineCanvas>
        </S.TopHeader>
        <S.ProfilePanel>
          <S.Image>
            <img src="/images/default-image.png" />
          </S.Image>
          <S.Username>Username</S.Username>
        </S.ProfilePanel>
        <S.SidebarMenu>
          {getOption("chat", AuthRoutes.Home, onHome)}
          {getOption("bag", AuthRoutes.Brand, onBrand)}
        </S.SidebarMenu>

        <S.LogoutBtn onClick={onLogout}>
          <S.LogoutIcon>
            <img src="/images/logout.svg" />
          </S.LogoutIcon>
          Logout
        </S.LogoutBtn>
      </S.SidebarPanel>
    </S.SidebarWrapper>
  );
};

export default Sidebar;
