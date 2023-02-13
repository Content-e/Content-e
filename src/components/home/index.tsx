import { FC } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import BrandData from "./brandData";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";

export const HomePage: FC<ProfileProps> = ({ profileState: { data } }) => {
  return (
    <S.TopWrapper>
      <Meter />
      {!data && <NoDataFound />}
      {data?.brand && <BrandData data={data.brand} />}
    </S.TopWrapper>
  );
};

export default withProfile(HomePage);
