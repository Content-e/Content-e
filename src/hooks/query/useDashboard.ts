import { useLazyQuery } from "@apollo/client";
import {
  BrandBrief,
  CreativeRequestsByCreatorIdQuery,
  CreativeRequestsByCreatorIdQueryVariables,
  ListBrandBriefsQuery,
  ListBrandBriefsQueryVariables,
} from "API";
import { creativeRequestsByCreatorId, listBrandBriefs } from "graphql/queries";
import {
  GetCreatorBriefListProps,
  GetCreatorCreativeRequestsProps,
} from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";
import { UnknownType } from "utils";

export const getCreatorBriefList = (): GetCreatorBriefListProps => {
  const [getBriefList, { data, loading, error }] = useLazyQuery<
    ListBrandBriefsQuery,
    ListBrandBriefsQueryVariables
  >(getQuery(listBrandBriefs));

  const briefList = data?.listBrandBriefs?.items;
  return {
    loading,
    getBriefList,
    data: briefList as UnknownType as Array<BrandBrief>,
    nextToken: data?.listBrandBriefs?.nextToken,
    error,
  };
};

export const getCreatorRequests = (): GetCreatorCreativeRequestsProps => {
  const [listCreativeRequests, { data, loading, error }] = useLazyQuery<
    CreativeRequestsByCreatorIdQuery,
    CreativeRequestsByCreatorIdQueryVariables
  >(getQuery(creativeRequestsByCreatorId));

  return {
    loading,
    listCreativeRequests,
    data: data?.creativeRequestsByCreatorId?.items,
    nextToken: data?.creativeRequestsByCreatorId?.nextToken,
    error,
  };
};
