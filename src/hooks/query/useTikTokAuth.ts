import { useMutation } from "@apollo/client";
import { CreateCreativeRequestInput, CreateCreativeRequestMutation } from "API";
import { createCreativeRequest } from "graphql/mutations";
import { HandleCreativeRequestReturn } from "hooks/utils";
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
