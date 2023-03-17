import { FC, Fragment, useMemo } from "react";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";
import BrandBody from "./brandBody";
import Meter from "./meter";
import { NoDataFound } from "./noData";
import * as S from "./styles";
import classNames from "classnames";

export const HomePage: FC<ProfileProps> = ({ profileState: { data } }) => {
  const brandExists = useMemo(() => data?.brand?.items?.[0], [data]);

  if (!data) return <Fragment key="no profie found" />;
  return (
    <>
      <div className="brand-table-label">Brand Profile</div>
      <S.BrandTopHead>
        <S.TopCanvas className={classNames({ noData: !brandExists })}>
          <S.TopWrapper className={classNames({ hasData: brandExists })}>
            <Meter />
            {!brandExists && <NoDataFound />}
          </S.TopWrapper>
          {brandExists && <BrandBody data={brandExists} />}
        </S.TopCanvas>
      </S.BrandTopHead>
    </>
  );
};

export default withProfile(HomePage);
