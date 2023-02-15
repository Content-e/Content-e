import React, { FC, Fragment } from "react";
import { ShouldRender } from "components";
import * as S from "./styles";

interface Props {
  value?: string;
  updateValue: (text: string) => void;
  placeholder?: string;
  error?: string | null;
  small?: boolean;
}
export const TextArea: FC<Props> = ({
  value,
  placeholder,
  error,
  updateValue,
  small,
}) => {
  return (
    <Fragment key="custom input">
      <S.TextArea
        placeholder={placeholder}
        value={value || ""}
        onChange={(e): void => updateValue(e.target.value)}
        rows={4}
        className={small ? "small_box" : ""}
      />
      <ShouldRender if={error}>
        <S.ParagraphError>{error}</S.ParagraphError>
      </ShouldRender>
    </Fragment>
  );
};
