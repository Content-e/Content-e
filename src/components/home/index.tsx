import { FC, useState } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";

export const HomePage: FC<ProfileProps> = () => {
  const [data] = useState();
  return (
    <S.TopWrapper>
      <Meter />
      {!data && <NoDataFound />}
    </S.TopWrapper>
  );
};

export default withProfile(HomePage);
