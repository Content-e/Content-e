import { FC, Fragment } from "react";
import { LoginModal } from "./coBrandedModals";
import CoBrandedMainPage from "./main";
import "./styles.css";

export const SubLogin: FC = () => {
  return (
    <Fragment key="login sub path">
      <CoBrandedMainPage />
      <LoginModal />
    </Fragment>
  );
};

export default SubLogin;
