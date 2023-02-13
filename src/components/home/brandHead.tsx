import { FC } from "react";
import { BrandType } from "hooks/utils";
import * as S from "./styles";

interface Props {
  data?: BrandType;
}
export const BrandHead: FC<Props> = ({ data }) => {
  const { items } = data || {};
  return (
    <S.BrandTopWrapper>
      <S.BrandName>
        <S.BrandBoldTitle>Brand name:</S.BrandBoldTitle>{" "}
        {items?.name || "Brain-e"}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldTitle>Strap line:</S.BrandBoldTitle>{" "}
        {items?.strapLine || "Human and AI Intelligence - Unlocking potential"}.
      </S.BrandName>
    </S.BrandTopWrapper>
  );
};

export default BrandHead;
