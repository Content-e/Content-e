import { FC } from "react";
import cn from "classnames";
import * as S from "../styles";

interface Props {
  disableSuggestions?: boolean;
  getSuggestions: () => void;
  isSeparateBtn?: boolean;
}

export const SuggestionButton: FC<Props> = ({
  disableSuggestions,
  getSuggestions,
  isSeparateBtn,
}) => {
  return (
    <S.SuggestionButton
      className={cn({
        disabled: disableSuggestions,
        separateBtn: isSeparateBtn,
      })}
      disabled={disableSuggestions}
      onClick={getSuggestions}
    >
      Suggestions
    </S.SuggestionButton>
  );
};

export default SuggestionButton;
