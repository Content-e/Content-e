import { FC } from "react";
import { BrandType } from "hooks/utils";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";
import * as S from "./styles";

interface Props {
  data?: BrandType;
}

export const BrandBody: FC<Props> = ({ data }) => {
  const history = useHistory();
  const { items } = data || {};
  const goToBrand = (): void => history.push(AuthRoutes.Brand);

  return (
    <S.BrandWrapper>
      <S.BrandName>
        <S.BrandBoldTitle>Mission Statement:</S.BrandBoldTitle>
        {items?.internalMission ||
          // eslint-disable-next-line max-len
          "Our mission is to empower businesses to reach new heights by leveraging the power of human and artificial intelligence."}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldHead>Brand Pillars:</S.BrandBoldHead>
        {items?.pillars ||
          // eslint-disable-next-line max-len
          "Curious - We are driven by the latest in technological and human advances and are constantly searching for a better way to do things.Human - We believe no matter how advanced the technology, its impact is determined by the human interaction with it.  We believe the advancement of ai technology will help facilitate the next stage of human evolution.Simplicity - Whilst new technology is complicated by nature, we believe the key lies in defining and communicating the opportunity in simplistic terms.Positive Impact - We care about how human and artificial intelligence can merge to create a positive impact to the world."}
        .
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldTitle>Brand tone of voice:</S.BrandBoldTitle>
        {items?.toneVoice || "Conversational"}
      </S.BrandName>
      <S.EditBtnCanvas>
        <S.EditBrandButton onClick={goToBrand}>Edit Brand</S.EditBrandButton>
      </S.EditBtnCanvas>
    </S.BrandWrapper>
  );
};

export default BrandBody;
