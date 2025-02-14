import React, { useContext, useEffect, useState } from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import { getBrandBriefList } from "hooks";
import { BrandBriefProps } from "./brandBrief.interface";
import { BrandBrief } from "API";
import { ProfileContext } from "state/profileSteps";
import { getSortedArray } from "components";

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

    const [brandBriefsState, setBrandBriefsState] =
      useState<Array<BrandBrief | null>>();

    useEffect(() => {
      if (brandId) getBrandBriefs({ variables: { brandId } });
    }, []);
    useEffect(() => {
      if (!brandBriefListLoading && brandBriefList)
        setBrandBriefsState(getSortedArray(brandBriefList, "createdAt"));
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
