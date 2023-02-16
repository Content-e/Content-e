import { FC, Fragment, useMemo } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import BrandHead from "./brandHead";
import BrandBody from "./brandBody";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";

export const HomePage: FC<ProfileProps> = ({ profileState: { data } }) => {
  const brandExists = useMemo(() => data?.brand?.[0], [data]);
  return (
    <Fragment key="home page">
      <S.TopWrapper>
        <Meter />
        {!brandExists && <NoDataFound />}
        {brandExists && <BrandHead data={data?.brand?.[0]} />}
      </S.TopWrapper>
      {brandExists && <BrandBody data={data?.brand?.[0]} />}
    </Fragment>
  );
};

export default withProfile(HomePage);
