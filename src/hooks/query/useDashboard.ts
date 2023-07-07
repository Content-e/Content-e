import { useLazyQuery } from '@apollo/client';
import {
  BestPracticesByActiveQuery,
  BestPracticesByActiveQueryVariables,
  BrandBrief,
  BrandBriefsByBrandIdQuery,
  BrandBriefsByBrandIdQueryVariables,
  CreativeRequestsByCreatorIdQuery,
  CreativeRequestsByCreatorIdQueryVariables,
  CreativeRequestsByStatusQuery,
  CreativeRequestsByStatusQueryVariables,
  ListBrandBriefsQuery,
  ListBrandBriefsQueryVariables,
  ListCreativeRequestsQuery,
  ListCreativeRequestsQueryVariables,
} from 'API';
import {
  brandBriefsByBrandId,
  creativeRequestsByCreatorId,
  creativeRequestsByStatus,
  listBrandBriefs,
  listCreativeRequests as listAllRequestsQuery,
} from 'graphql/queries';
import {
  bestPracticesByStatus,
  GetBrandBriefListProps,
  GetCreatorBriefListProps,
  GetCreatorCreativeRequestsProps,
  ListActiveBestPracticeProps,
  ListAllRequestsProps,
  ListRequestsByStatusProps,
} from 'hooks/utils';
import { getQuery } from 'hooks/utils/helpers';
import { UnknownType } from 'utils';

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

export const getBrandBriefList = (): GetBrandBriefListProps => {
  const [getBrandBriefs, { data, loading, error }] = useLazyQuery<
    BrandBriefsByBrandIdQuery,
    BrandBriefsByBrandIdQueryVariables
  >(getQuery(brandBriefsByBrandId));

  const briefList = data?.brandBriefsByBrandId?.items;
  return {
    loading,
    getBrandBriefs,
    data: briefList as UnknownType as Array<BrandBrief>,
    nextToken: data?.brandBriefsByBrandId?.nextToken,
    error,
  };
};

export const listAllRequests = (): ListAllRequestsProps => {
  const [getAllRequests, { data, loading, error }] = useLazyQuery<
    ListCreativeRequestsQuery,
    ListCreativeRequestsQueryVariables
  >(getQuery(listAllRequestsQuery));

  const { items = [], nextToken } = data?.listCreativeRequests || {};
  return {
    loading,
    getAllRequests,
    data: items as UnknownType as Array<BrandBrief>,
    nextToken,
    error,
  };
};

export const listRequestsByStatus = (): ListRequestsByStatusProps => {
  const [getRequestsByStatus, { data, loading, error }] = useLazyQuery<
    CreativeRequestsByStatusQuery,
    CreativeRequestsByStatusQueryVariables
  >(getQuery(creativeRequestsByStatus));

  const { items = [], nextToken } = data?.creativeRequestsByStatus || {};
  return {
    loading,
    getRequestsByStatus,
    data: items as UnknownType as Array<BrandBrief>,
    nextToken,
    error,
  };
};

export const getActiveBestPractice = (): ListActiveBestPracticeProps => {
  const [getActivePractice, { data, loading, error }] = useLazyQuery<
    BestPracticesByActiveQuery,
    BestPracticesByActiveQueryVariables
  >(getQuery(bestPracticesByStatus));

  const { items = [], nextToken } = data?.bestPracticesByActive || {};
  return {
    loading,
    getActivePractice,
    data: items,
    nextToken,
    error,
  };
};
