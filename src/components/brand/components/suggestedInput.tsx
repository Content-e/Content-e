import classNames from "classnames";
import { FC } from "react";
import * as S from "../styles";
import SuggestionButton from "./suggestionButton";

interface Props {
  small?: boolean;
  placeholder?: string;
  disableSuggestions?: boolean;
  getSuggestions: () => void;
  value: string;
  setValue: (name: string) => void;
}

export const SuggestedInput: FC<Props> = (props) => {
  const { value, setValue, small, placeholder } = props;
  return (
    <S.BrandNameBox>
      <S.BrandInput
        className={classNames({ small: small })}
        value={value}
        onChange={(e): void => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <SuggestionButton {...props} />
    </S.BrandNameBox>
  );
};

export default SuggestedInput;
