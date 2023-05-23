import { FC, Fragment /*, useMemo*/ } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
//import BrandBody from "./brandBody";
import Meter from "./meter";
//import { NoDataFound } from "./noData";
//import * as S from "./styles";
//import BrandForm from "./brandForm";

export const HomePage: FC<ProfileProps> = ({ profileState: { data } }) => {
  /*const brandExists = useMemo(() => {
    const brandItem = data?.brand?.items?.[0];
    const { name, description, toneVoice } = brandItem || {};
    return name || description || toneVoice ? brandItem : null;
  }, [data]);*/

  if (!data) return <Fragment key="no profie found" />;
  return <Meter />;
};

export default withProfile(HomePage);
