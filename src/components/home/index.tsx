import { FC, Fragment, useMemo } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import BrandHead from "./brandHead";
import BrandBody from "./brandBody";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";

export const HomePage: FC<ProfileProps> = ({ profileState: { data } }) => {
  const brandExists = useMemo(() => data?.brand?.items?.[0], [data]);

  if (!data) return <Fragment key="no profie found" />;
  return (
    <Fragment key="home page">
      <S.TopWrapper>
        <Meter />
        {!brandExists && <NoDataFound />}
        {brandExists && <BrandHead data={brandExists} />}
      </S.TopWrapper>
      {brandExists && <BrandBody data={brandExists} />}
    </Fragment>
  );
};

export default withProfile(HomePage);
