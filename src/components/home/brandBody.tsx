import { FC } from "react";
import { BrandProfile } from "API";
import { useHistory, useLocation } from "react-router-dom";
import { BrandRoutes } from "utils";
import * as S from "./styles";

interface Props {
  data?: BrandProfile;
}

export const BrandBody: FC<Props> = ({ data }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const goToEditBrand = (): void => history.push(BrandRoutes.EditBrand);

  return (
    <S.BrandWrapper>
      <S.BrandName className="firstChild">
        <S.BrandBoldTitle>Brand name:</S.BrandBoldTitle>
        {data?.name}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldTitle>Strap line:</S.BrandBoldTitle>
        {data?.strapLine}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldTitle>Mission Statement:</S.BrandBoldTitle>
        {data?.internalMission}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldHead>Brand Pillars:</S.BrandBoldHead>
        {data?.pillars?.map((e, i) => (
          <div key={i}>{e}</div>
        ))}
      </S.BrandName>
      <S.BrandName>
        <S.BrandBoldTitle>Brand tone of voice:</S.BrandBoldTitle>
        {data?.toneVoice}
      </S.BrandName>
      {pathname.includes(BrandRoutes.Brand) && (
        <S.EditBtnCanvas>
          <S.EditBrandButton onClick={goToEditBrand}>
            Edit Brand
          </S.EditBrandButton>
        </S.EditBtnCanvas>
      )}
    </S.BrandWrapper>
  );
};

export default BrandBody;
