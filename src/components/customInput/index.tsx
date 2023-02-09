import React, { FC } from "react";
import * as S from "./styles";

interface Props {
  type?: string;
  value: string;
  onChange: (text: string) => void;
  placeholder?: string;
}
export const Input: FC<Props> = ({ type, value, onChange, placeholder }) => {
  return (
    <S.Input
      type={type || "string"}
      placeholder={placeholder}
      value={value}
      onChange={(e): void => onChange(e.target.value)}
    />
  );
};
