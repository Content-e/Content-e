import { useMutation } from "@apollo/client";
import {
  CreateCreativeRequestInput,
  CreateCreativeRequestMutationVariables,
} from "API";
import { createCreativeRequest } from "graphql/mutations";
import { HandleCreativeRequestReturn } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const handleCreativeRequest = (): HandleCreativeRequestReturn => {
  const [createTiktokRequest, { data, loading, error }] = useMutation<
    CreateCreativeRequestInput,
    CreateCreativeRequestMutationVariables
  >(getQuery(createCreativeRequest));
  const errorData = error || (data ? undefined : new Error("No Data created"));
  return {
    loading,
    createTiktokRequest,
    data: data?.brandBriefId || null,
    error: errorData,
  };
};
