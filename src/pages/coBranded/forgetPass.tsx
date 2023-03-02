import { FC, Fragment } from "react";
import { ForgotPasswordModal } from "components";
import CoBrandedMainPage from "./main";
import "./styles.css";

export const SubForgetPass: FC = () => {
  return (
    <Fragment key="login sub path">
      <CoBrandedMainPage />
      <ForgotPasswordModal />
    </Fragment>
  );
};

export default SubForgetPass;
