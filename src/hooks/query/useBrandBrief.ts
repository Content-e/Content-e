import { useMutation } from "@apollo/client";
import {
  CreateBrandBriefMutation,
  CreateBrandBriefMutationVariables,
  UpdateCreativeRequestMutation,
  UpdateCreativeRequestMutationVariables,
} from "API";
import { createBrandBrief, updateCreativeRequest } from "graphql/mutations";
import { ICreateBriefResponse, IUpdateBriefResponse } from "hooks/utils";
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
