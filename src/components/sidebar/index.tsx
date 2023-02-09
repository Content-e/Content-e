import { FC } from "react";
import * as S from "./styles";

interface ISidebar {
  showMenu: boolean;
  toggleMenu: () => void;
}

export const Sidebar: FC<ISidebar> = () => {
  return <S.SidebarWrapper></S.SidebarWrapper>;
};

export default Sidebar;
