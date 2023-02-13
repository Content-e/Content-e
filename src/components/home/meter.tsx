import { FC } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import * as S from "./styles";

export const Meter: FC<ProfileProps> = () => {
  return (
    <S.MeterWrapper>
      <S.Heading>Brand Profile</S.Heading>
    </S.MeterWrapper>
  );
};

export default withProfile(Meter);
