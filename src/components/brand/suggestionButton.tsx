import { FC } from "react";
import * as S from "./styles";

interface Props {
  disableSuggestions: boolean;
  getSuggestions: () => void;
}

export const SuggestionButton: FC<Props> = ({
  disableSuggestions,
  getSuggestions,
}) => {
  return (
    <S.SuggestionButton
      className={disableSuggestions ? "disabled" : ""}
      disabled={disableSuggestions}
      onClick={getSuggestions}
    >
      Get Suggestions
    </S.SuggestionButton>
  );
};

export default SuggestionButton;
