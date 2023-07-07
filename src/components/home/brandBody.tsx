import { FC } from 'react';
import { BrandProfile } from 'API';
import { useHistory, useLocation } from 'react-router-dom';
import { BrandRoutes } from 'utils';

interface Props {
  data?: BrandProfile;
}

export const BrandBody: FC<Props> = ({ data }) => {
  const history = useHistory();
  const { pathname } = useLocation();
  const goToEditBrand = (): void => history.push(BrandRoutes.EditBrand);

  return (
    <>
      <div className="brand-dashboard__text">
        <p>
          <span>Brand name:</span>&nbsp;
          {data?.name}
        </p>
        <p>
          <span>Strap line:</span>&nbsp;
          {data?.strapLine}
        </p>
        <p>
          <span>Mission Statement:</span>&nbsp;
          {data?.internalMission}
        </p>
        <p>
          <span>Brand Pillars:</span>&nbsp;
          {data?.pillars?.map((e, i) => (
            <div key={i}>{e}</div>
          ))}
        </p>
        <p>
          <span>Brand tone of voice:</span>&nbsp;
          {data?.toneVoice}
        </p>
      </div>
      {pathname.includes(BrandRoutes.Brand) && (
        <div className="brand-dashboard__item-button-wrap">
          <button
            className="brand-dashboard__item-button"
            onClick={goToEditBrand}
          >
            Edit Brand
          </button>
        </div>
      )}
    </>
  );
};

export default BrandBody;
