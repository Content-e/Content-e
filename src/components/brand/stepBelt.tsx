import { FC } from "react";
import * as S from "./styles";

interface Props {
  step: number;
  onNext?: () => void;
  onPrev?: () => void;
}
export const StepBelt: FC<Props> = ({ step, onNext, onPrev }) => {
  return (
    <S.StepBeltWrapper>
      <S.StepBelt>
        <S.StepNumber className="active">1</S.StepNumber>
        <S.StepBar>
          <span className={step > 0 ? "active" : ""} />
        </S.StepBar>
        <S.StepNumber className={step > 0 ? "active" : ""}>2</S.StepNumber>
        <S.StepBar>
          {step > 0 && <span className={step > 1 ? "active" : ""} />}
        </S.StepBar>
        <S.StepNumber className={step > 1 ? "active" : ""}>3</S.StepNumber>
      </S.StepBelt>
      <S.StepBtnHandler>
        {onPrev && <S.PrimaryBtn onClick={onPrev}>Back</S.PrimaryBtn>}
        {onNext && <S.OutlineBtn onClick={onNext}>Next</S.OutlineBtn>}
      </S.StepBtnHandler>
    </S.StepBeltWrapper>
  );
};
