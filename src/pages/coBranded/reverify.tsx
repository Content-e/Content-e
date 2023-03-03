import { FC, Fragment } from "react";
import { ReverifyModal } from "components";
import CoBrandedMainPage from "./main";
import "./styles.css";

export const SubReverify: FC = () => {
  return (
    <Fragment key="login sub path">
      <CoBrandedMainPage />
      <ReverifyModal />
    </Fragment>
  );
};

export default SubReverify;
