import { FC } from "react";
import { BrandSteps } from "components";
import * as S from "./styles";
import { useHistory } from "react-router-dom";

export const BrandStepsPage: FC = () => {
  const history = useHistory();
  const goToHome = (): void => history.goBack();

  return (
    <S.BrandPageWrapper>
      <S.CrossIcon onClick={goToHome}>
        <img src={"/images/circle-cross.svg"} alt="cross-icon" />
      </S.CrossIcon>
      <BrandSteps />
    </S.BrandPageWrapper>
  );
};

export default BrandStepsPage;
