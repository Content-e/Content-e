import { FC } from "react";
import { IBrandFormState } from "state/brand";
import * as S from "./styles";

interface Props {
  title: string;
  keyProp: string;
  formState: IBrandFormState;
  onChange: (key: string, value: string) => void;
}
export const BrandInput: FC<Props> = ({
  title,
  keyProp,
  formState,
  onChange,
}) => {
  return (
    <S.BrandInputContainer>
      <S.BrandInputTitle>{title}</S.BrandInputTitle>
      <S.BrandInputPanel
        value={formState[keyProp]}
        onChange={(e): void => onChange(keyProp, e.target.value)}
      />
    </S.BrandInputContainer>
  );
};

export default BrandInput;
