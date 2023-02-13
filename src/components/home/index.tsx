import { FC, Fragment } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import BrandHead from "./brandHead";
import BrandBody from "./brandBody";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";

export const HomePage: FC<ProfileProps> = ({ profileState: { data } }) => {
  return (
    <Fragment key="home page">
      <S.TopWrapper>
        <Meter />
        {!data && <NoDataFound />}
        {data?.brand && <BrandHead data={data?.brand} />}
      </S.TopWrapper>
      {data?.brand && <BrandBody data={data?.brand} />}
    </Fragment>
  );
};

export default withProfile(HomePage);
