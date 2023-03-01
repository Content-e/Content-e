import { FC, Fragment } from "react";
import { ResetPassModal } from "./coBrandedModals";
import CoBrandedMainPage from "./main";
import "./styles.css";

export const SubReverify: FC = () => {
  return (
    <Fragment key="login sub path">
      <CoBrandedMainPage />
      <ResetPassModal />
    </Fragment>
  );
};

export default SubReverify;
