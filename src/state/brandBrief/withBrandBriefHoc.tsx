import React, { useContext, useEffect, useState } from 'react';
import withApolloProvider from 'hooks/apollo/withApollo';
import { getBrandBriefList } from 'hooks';
import { BrandBriefProps } from './brandBrief.interface';
import { BrandBrief } from 'API';
import {ITiktokAccountAccess, ProfileContext} from 'state/profileSteps';

export function withBrandBriefs<T>(
  Component: React.FC<T & BrandBriefProps>
): React.FC<T> {
  return withApolloProvider((props: T) => {
    const {
      getBrandBriefs,
      loading: brandBriefListLoading,
      data: brandBriefList,
    } = getBrandBriefList();
    const {
      profileState: { data },
    } = useContext(ProfileContext);
    const brandId = data?.brand?.items?.[0]?.id;
    const {advertiser_id} = data?.tiktokAccountAccess as unknown as ITiktokAccountAccess;

    const [brandBriefsState, setBrandBriefsState] =
      useState<Array<BrandBrief | null>>();

    useEffect(() => {
      if (brandId && advertiser_id) getBrandBriefs({ variables: { brandId, tiktokAdvertiserId: advertiser_id } });
    }, []);
    useEffect(() => {
      if (!brandBriefListLoading && brandBriefList)
        setBrandBriefsState(brandBriefList);
    }, [brandBriefList, brandBriefListLoading]);

    const hocProps: BrandBriefProps = {
      data: brandBriefsState,
      loading: brandBriefListLoading,
      brand: data?.brand?.items?.[0],
      isTiktokLinked: !!data?.tiktokAccountAccess,
    };
    return <Component {...props} {...hocProps} />;
  });
}
export default withBrandBriefs;
