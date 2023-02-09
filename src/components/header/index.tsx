import { FC } from "react";
import * as S from "./styles";

interface IHeader {
  toggleMenu: () => void;
}

export const Header: FC<IHeader> = ({ toggleMenu }) => {
  return (
    <S.DashboardHeaderWrapper>
      <S.ToggleIcon onClick={toggleMenu}>
        <i className="icon-hamburger" />
      </S.ToggleIcon>
      <S.DashboardHeaderRight>{/* make menu here */}</S.DashboardHeaderRight>
    </S.DashboardHeaderWrapper>
  );
};

export default Header;
