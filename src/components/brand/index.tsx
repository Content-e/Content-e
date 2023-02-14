import { FC } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import * as S from "./styles";

export const BrandSteps: FC<ProfileProps> = ({ profileState: { data } }) => {
  console.log(data);
  return <S.TopWrapper></S.TopWrapper>;
};

export default withProfile(BrandSteps);
