import { FC, Fragment, useEffect, useMemo } from "react";
import { withProfile } from "state/profileSteps";
import { useHistory, useLocation } from "react-router-dom";
import { AuthRoutes, ProfileProps } from "utils";
import BrandHead from "./brandHead";
import BrandBody from "./brandBody";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";

export const HomePage: FC<ProfileProps> = ({
  profileState: { data, isLoading },
}) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const brandExists = useMemo(() => data?.brand?.items?.[10], [data]);

  useEffect(() => {
    if (!isLoading && !brandExists && AuthRoutes.Brand === pathname)
      history.push(AuthRoutes.EditBrand);
  }, [brandExists, isLoading]);

  if (!data) return <Fragment key="no profie found" />;
  return (
    <S.TopCanvas>
      <S.TopWrapper>
        <Meter />
        {!brandExists && <NoDataFound />}
        {brandExists && <BrandHead data={brandExists} />}
      </S.TopWrapper>
      {brandExists && <BrandBody data={brandExists} />}
    </S.TopCanvas>
  );
};

export default withProfile(HomePage);
