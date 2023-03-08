import { FC } from "react";
import { BrandSteps } from "components";
import * as S from "./styles";
import { AuthRoutes } from "utils";
import { useHistory } from "react-router-dom";

export const BrandStepsPage: FC = () => {
  const history = useHistory();
  const goToHome = (): void => history.push(AuthRoutes.Redirector);

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
