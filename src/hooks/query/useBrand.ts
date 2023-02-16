import { useMutation } from "@apollo/client";
import {
  CreateBrandProfileMutation,
  CreateBrandProfileMutationVariables,
  UpdateBrandProfileMutation,
  UpdateBrandProfileMutationVariables,
} from "API";
import { createUserProfile as createUserQuery } from "graphql/mutations";
import { CreateBrandProps, UpdateBrandProps } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const createUserProfile = (): CreateBrandProps => {
  const [createBrand, { data, loading, error }] = useMutation<
    CreateBrandProfileMutation,
    CreateBrandProfileMutationVariables
  >(getQuery(createUserQuery));
  const brand = data?.createBrandProfile || null;
  const errorData =
    error || (brand ? undefined : new Error("No Brand Created"));
  return { loading, createBrand, brand, error: errorData };
};

export const updateUserProfile = (): UpdateBrandProps => {
  const [updateBrand, { data, loading, error }] = useMutation<
    UpdateBrandProfileMutation,
    UpdateBrandProfileMutationVariables
  >(getQuery(createUserQuery));
  const brand = data?.updateBrandProfile || null;
  const errorData = error || (brand ? undefined : new Error("No User Found"));
  return { loading, updateBrand, brand, error: errorData };
};
