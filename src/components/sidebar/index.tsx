import { FC } from "react";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";
import * as S from "./styles";

interface ISidebar {
  showMenu: boolean;
  toggleMenu: () => void;
}

export const Sidebar: FC<ISidebar> = () => {
  const history = useHistory();

  const onLogout = (): void => history.push(AuthRoutes.Logout);
  const onHome = (): void => history.push(AuthRoutes.Home);
  const onBrand = (): void => history.push(AuthRoutes.Brand);

  return (
    <S.SidebarWrapper>
      <S.SidebarPanel>
        <S.TopHeader>
          <S.Heading>Content-e</S.Heading>
          <S.SubHeading>Powered by Brain-e</S.SubHeading>
        </S.TopHeader>
        <S.ProfilePanel>
          <S.Username>John Doe</S.Username>
          <S.Image>
            <img src="/images/johnDoe.png" />
          </S.Image>
        </S.ProfilePanel>
        <S.SidebarMenu>
          <S.SidebarMenuItem className="white" onClick={onHome}>
            <S.MenuIcon>
              <img src="/images/home.svg" />
            </S.MenuIcon>
            Home
          </S.SidebarMenuItem>
          <S.SidebarMenuItem className="green" onClick={onBrand}>
            <S.MenuIcon>
              <img src="/images/ticket.svg" />
            </S.MenuIcon>
            Brand
          </S.SidebarMenuItem>
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
