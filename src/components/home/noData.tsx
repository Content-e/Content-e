import { FC } from "react";
import { useHistory } from "react-router-dom";
import { AuthRoutes } from "utils";
import * as S from "./styles";

export const NoDataFound: FC = () => {
  const history = useHistory();
  const goToBrand = (): void => history.push(AuthRoutes.EditBrand);

  return (
    <S.NoDataWrapper>
      <S.NoDataTitle>
        You do not currently have a brand setup, build your brand now.{" "}
      </S.NoDataTitle>
      <S.NoDataButton onClick={goToBrand}>Create Brand</S.NoDataButton>
    </S.NoDataWrapper>
  );
};

export default NoDataFound;
