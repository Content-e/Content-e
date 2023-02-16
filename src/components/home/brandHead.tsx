import { FC } from "react";
import { BrandProfile } from "API";
import * as S from "./styles";

interface Props {
  data?: BrandProfile;
}
export const BrandHead: FC<Props> = ({ data }) => {
  return (
    <S.BrandTopWrapper>
      <S.BrandName>
        <S.BrandBoldTitle>Brand name:</S.BrandBoldTitle>
        {data?.name}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldTitle>Strap line:</S.BrandBoldTitle>
        {data?.strapLine}
      </S.BrandName>
    </S.BrandTopWrapper>
  );
};

export default BrandHead;
