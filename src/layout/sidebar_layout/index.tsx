import { Sidebar } from "components";
import { FC, ReactNode, useContext, useState } from "react";
import { TitleContext } from "state/auth";
import * as S from "./styles";

interface Props {
  children?: ReactNode;
}
export const SidebarLayout: FC<Props> = ({ children }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { title } = useContext(TitleContext);
  const toggleMenu = (): void => setShowMenu(!showMenu);
  return (
    <S.MainWrapper>
      <Sidebar showMenu={showMenu} toggleMenu={toggleMenu} />

      <S.AppMain>
        <S.PageTitle>{title}</S.PageTitle>
        {children}
      </S.AppMain>
    </S.MainWrapper>
  );
};

export default SidebarLayout;
