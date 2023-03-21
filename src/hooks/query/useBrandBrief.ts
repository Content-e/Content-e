import { useMutation } from "@apollo/client";
import {
  CreateBrandBriefMutation,
  CreateBrandBriefMutationVariables,
  UpdateBrandBriefMutation,
  UpdateBrandBriefMutationVariables,
  UpdateCreativeRequestMutation,
  UpdateCreativeRequestMutationVariables,
} from "API";
import {
  createBrandBrief,
  updateBrandBrief,
  updateCreativeRequest,
} from "graphql/mutations";
import {
  ICreateBriefResponse,
  IEditBriefResponse,
  IUpdateBriefResponse,
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
