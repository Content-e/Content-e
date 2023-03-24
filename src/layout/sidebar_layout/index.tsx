import { Sidebar } from "components";
import AuthFooter from "components/authentication/authFooter";
// import MobileFooter from "components/mobileFooter";
import MobileHeader from "components/mobileHeader";
import { FC, ReactNode } from "react";
import * as S from "./styles";

interface Props {
  children?: ReactNode;
}
export const SidebarLayout: FC<Props> = ({ children }) => {
  return (
    <S.MainWrapper>
      <Sidebar />

      <S.ParentWrapper>
        <S.AppMain>
          <S.TitleMenu>
            <MobileHeader />
          </S.TitleMenu>
          {children}
        </S.AppMain>
        <S.Footer>
          <AuthFooter />
        </S.Footer>
      </S.ParentWrapper>
    </S.MainWrapper>
  );
};

export default SidebarLayout;
