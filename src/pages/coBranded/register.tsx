import { FC, Fragment } from "react";
import { SignUpModal } from "components";
import CoBrandedMainPage from "./main";
import "./styles.css";

export const SubRegister: FC = () => {
  return (
    <Fragment key="login sub path">
      <CoBrandedMainPage />
      <SignUpModal />
    </Fragment>
  );
};

export default SubRegister;
