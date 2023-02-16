import { FC } from "react";
import { BrandProfile } from "API";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";
import * as S from "./styles";

interface Props {
  data?: BrandProfile;
}

export const BrandBody: FC<Props> = ({ data }) => {
  const history = useHistory();
  const goToBrand = (): void => history.push(AuthRoutes.Brand);

  return (
    <S.BrandWrapper>
      <S.BrandName>
        <S.BrandBoldTitle>Mission Statement:</S.BrandBoldTitle>
        {data?.internalMission}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldHead>Brand Pillars:</S.BrandBoldHead>
        {data?.pillars}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldTitle>Brand tone of voice:</S.BrandBoldTitle>
        {data?.toneVoice}
      </S.BrandName>
      <S.EditBtnCanvas>
        <S.EditBrandButton onClick={goToBrand}>Edit Brand</S.EditBrandButton>
      </S.EditBtnCanvas>
    </S.BrandWrapper>
  );
};

export default BrandBody;
