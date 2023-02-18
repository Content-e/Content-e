import React, { FC } from "react";
import { SuggestionButton } from "./suggestionButton";
import * as S from "../styles";

interface ISuggestionBtn {
  disabled: boolean;
  onClick: () => void;
  className?: string;
}
interface Props {
  value?: string;
  updateValue: (text: string) => void;
  label?: string;
  editable?: boolean;
  suggestionBtn?: ISuggestionBtn;
}
export const TextArea: FC<Props> = ({
  value,
  updateValue,
  suggestionBtn,
  label,
  editable,
}) => {
  return (
    <S.TextAreaWrapper>
      <S.TextAreaCanvas className={suggestionBtn ? "small_box" : ""}>
        <S.TextAreaLabel>{label}</S.TextAreaLabel>
        <S.TextAreaBox>
          <S.TextArea
            disabled={editable === false}
            value={value || ""}
            onChange={(e): void => updateValue(e.target.value)}
            rows={4}
            className={suggestionBtn ? "small_box" : ""}
          />
          {editable === false && (
            <S.EditIcon>
              <img src="/images/edit-icon.svg" alt="edit-icon" />
            </S.EditIcon>
          )}
        </S.TextAreaBox>
      </S.TextAreaCanvas>
      {suggestionBtn && (
        <S.SuggestionBoxPanel className={suggestionBtn.className}>
          <SuggestionButton
            disableSuggestions={suggestionBtn.disabled}
            getSuggestions={suggestionBtn.onClick}
          />
        </S.SuggestionBoxPanel>
      )}
    </S.TextAreaWrapper>
  );
};
