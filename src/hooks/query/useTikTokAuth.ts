import { useMutation } from "@apollo/client";
import {
  CreateCreativeRequestInput,
  CreateCreativeRequestMutation,
  UpdateCreativeRequestInput,
  UpdateCreativeRequestMutation,
} from "API";
import {
  createCreativeRequest,
  updateCreativeRequest,
} from "graphql/mutations";
import {
  HandleCreativeRequestReturn,
  UpdateCreativeRequestReturn,
} from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const handleCreativeRequest = (): HandleCreativeRequestReturn => {
  const [createTiktokRequest, { data, loading, error }] = useMutation<
    CreateCreativeRequestMutation,
    CreateCreativeRequestInput
  >(getQuery(createCreativeRequest));
  const errorData = error || (data ? undefined : new Error("No Data created"));
  return {
    loading,
    createTiktokRequest,
    data: data?.createCreativeRequest?.brandBriefId || null,
    error: errorData,
  };
};

export const handleUpdateCreativeRequest = (): UpdateCreativeRequestReturn => {
  const [updateTiktokRequest, { data, loading, error }] = useMutation<
    UpdateCreativeRequestMutation,
    UpdateCreativeRequestInput
  >(getQuery(updateCreativeRequest));
  const errorData = error || (data ? undefined : new Error("No Data created"));
  return {
    loading,
    updateTiktokRequest,
    data: data?.updateCreativeRequest?.brandBriefId || null,
    error: errorData,
  };
};
