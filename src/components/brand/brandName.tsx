import { FC } from "react";
import * as S from "./styles";
import SuggestionButton from "./suggestionButton";

interface Props {
  disableSuggestions: boolean;
  getSuggestions: () => void;
  brandName: string;
  updateBrandName: (name: string) => void;
}

export const BrandName: FC<Props> = (props) => {
  const { brandName, updateBrandName } = props;
  return (
    <S.BrandNameBox>
      <S.BrandInput
        value={brandName}
        onChange={(e): void => updateBrandName(e.target.value)}
        placeholder="Enter Brand Name"
      />
      <SuggestionButton {...props} />
    </S.BrandNameBox>
  );
};

export default BrandName;
