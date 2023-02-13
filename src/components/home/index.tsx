import { FC } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import BrandHead from "./brandHead";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";

export const HomePage: FC<ProfileProps> = ({ profileState: { data } }) => {
  return (
    <S.TopWrapper>
      <Meter />
      {data && <NoDataFound />}
      {!data?.brand && <BrandHead data={data?.brand} />}
    </S.TopWrapper>
  );
};

export default withProfile(HomePage);
