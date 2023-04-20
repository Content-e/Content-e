import { useMutation } from "@apollo/client";
import {
  CreateAdsMutation,
  CreateAdsMutationVariables,
  CreateBrandBriefMutation,
  CreateBrandBriefMutationVariables,
  ListAdGroupsMutation,
  ListAdGroupsMutationVariables,
  ListCampaignsMutation,
  ListCampaignsMutationVariables,
  UpdateBrandBriefMutation,
  UpdateBrandBriefMutationVariables,
  UpdateCreativeRequestMutation,
  UpdateCreativeRequestMutationVariables,
} from "API";
import {
  createAds,
  createBrandBrief,
  listAdGroups,
  listCampaigns,
  updateBrandBrief,
  updateCreativeRequest,
} from "graphql/mutations";
import {
  ICreateBriefResponse,
  IEditBriefResponse,
  IGetAdGroupsListResponse,
  IGetCampaignsListResponse,
  IUpdateBriefResponse,
  IUseCreateAdResponse,
} from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const updateBriefStatus = (): IUpdateBriefResponse => {
  const [updateStatus, { data, loading, error }] = useMutation<
    UpdateCreativeRequestMutation,
    UpdateCreativeRequestMutationVariables
  >(getQuery(updateCreativeRequest));
  const response = data?.updateCreativeRequest || null;

  return { loading, updateStatus, error, response };
};

export const getlistCampaigns = (): IGetCampaignsListResponse => {
  const [getCampaignList, { data, loading, error }] = useMutation<
    ListCampaignsMutation,
    ListCampaignsMutationVariables
  >(getQuery(listCampaigns));
  return { loading, getCampaignList, error, data: data?.listCampaigns };
};

export const getlistAdGroups = (): IGetAdGroupsListResponse => {
  const [getAdGroupList, { data, loading, error }] = useMutation<
    ListAdGroupsMutation,
    ListAdGroupsMutationVariables
  >(getQuery(listAdGroups));
  return { loading, getAdGroupList, error, data: data?.listAdGroups };
};

export const createCampaignBrief = (): ICreateBriefResponse => {
  const [createBrief, { data, loading, error }] = useMutation<
    CreateBrandBriefMutation,
    CreateBrandBriefMutationVariables
  >(getQuery(createBrandBrief));
  return { loading, createBrief, error, data: data?.createBrandBrief };
};

export const editCampaignBrief = (): IEditBriefResponse => {
  const [editBrief, { data, loading, error }] = useMutation<
    UpdateBrandBriefMutation,
    UpdateBrandBriefMutationVariables
  >(getQuery(updateBrandBrief));
  return { loading, editBrief, error, data: data?.updateBrandBrief };
};

export const useCreateAd = (): IUseCreateAdResponse => {
  const [createAd, { data, loading, error }] = useMutation<
    CreateAdsMutation,
    CreateAdsMutationVariables
  >(getQuery(createAds));
  return { loading, createAd, error, data: data?.createAds };
};
