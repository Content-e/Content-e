import { useMutation } from "@apollo/client";
import {
  UpdateCreativeRequestMutation,
  UpdateCreativeRequestMutationVariables,
} from "API";
import { updateCreativeRequest } from "graphql/mutations";
import { IUpdateBriefResponse } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const updateBriefStatus = (): IUpdateBriefResponse => {
  const [updateStatus, { data, loading, error }] = useMutation<
    UpdateCreativeRequestMutation,
    UpdateCreativeRequestMutationVariables
  >(getQuery(updateCreativeRequest));
  const response = data?.updateCreativeRequest || null;

  return { loading, updateStatus, error, response };
};
