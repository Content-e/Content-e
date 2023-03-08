import { Sidebar } from "components";
import { FC, ReactNode, useState } from "react";
import * as S from "./styles";

interface Props {
  children?: ReactNode;
}
export const SidebarLayout: FC<Props> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = (): void => setShowMenu(!showMenu);
  return (
    <S.MainWrapper>
      <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />

      <S.AppMain>
        <S.TitleMenu>
          <S.MenuIcon onClick={toggleMenu}>
            <img src="/images/menu-icon.png" alt="menu-icon" />
          </S.MenuIcon>
        </S.TitleMenu>
        {children}
      </S.AppMain>
    </S.MainWrapper>
  );
};

export default SidebarLayout;
