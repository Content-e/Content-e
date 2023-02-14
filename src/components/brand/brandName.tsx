import { FC } from "react";
import * as S from "./styles";

interface Props {
  disableSuggestions: boolean;
  getSuggestions: () => void;
  brandName: string;
  updateBrandName: (name: string) => void;
}

export const BrandName: FC<Props> = ({
  disableSuggestions,
  getSuggestions,
  brandName,
  updateBrandName,
}) => {
  return (
    <S.BrandNameBox>
      <S.BrandInput
        value={brandName}
        onChange={(e): void => updateBrandName(e.target.value)}
        placeholder="Enter Brand Name"
      />
      <S.SuggestionButton
        disabled={disableSuggestions}
        onClick={getSuggestions}
      >
        Get Suggestions
      </S.SuggestionButton>
    </S.BrandNameBox>
  );
};

export default BrandName;
