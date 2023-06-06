import { Sidebar } from 'components';
//import AuthFooter from "components/authentication/authFooter";
// import MobileFooter from "components/mobileFooter";
// import MobileHeader from "components/mobileHeader";
import { FC, ReactNode } from 'react';
import * as S from './styles';

interface Props {
  children?: ReactNode;
  data: any;
}

export const SidebarLayout: FC<Props> = ({ children, data }) => {
  if (data.userType === 'BRAND_USER') {
    return (
      <>
        <S.MainWrapperBrand>
          <Sidebar />
          <S.ParentWrapper>
            <S.AppMain>{children}</S.AppMain>
          </S.ParentWrapper>
        </S.MainWrapperBrand>
      </>
    );
  } else {
    return (
      <>
        <S.MainWrapperCreator>
          <Sidebar />
          <S.ParentWrapper>
            <S.AppMain>{children}</S.AppMain>
          </S.ParentWrapper>
        </S.MainWrapperCreator>
      </>
    );
  }
};

export default SidebarLayout;
