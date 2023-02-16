import { useLazyQuery, useMutation } from "@apollo/client";
import {
  GetUserProfileQuery,
  GetUserProfileQueryVariables,
  CreateUserProfileMutation,
  CreateUserProfileMutationVariables,
} from "API";
import { createUserProfile as createUserQuery } from "graphql/mutations";
import { getUserProfile as getUserQuery } from "graphql/queries";
import { CreateUserProfileProps, GetUserProfileProps } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const getUserProfile = (): GetUserProfileProps => {
  const [getProfile, { data, loading, error }] = useLazyQuery<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >(getQuery(getUserQuery));
  const profileData = { ...data?.getUserProfile, brand: undefined } || null;
  const errorData =
    error || (profileData ? undefined : new Error("No Talent Found"));
  return {
    loading,
    getProfile,
    profileData,
    error: errorData,
  };
};

export const createsUserProfile = (): CreateUserProfileProps => {
  const [createProfile, { data, loading, error }] = useMutation<
    CreateUserProfileMutation,
    CreateUserProfileMutationVariables
  >(getQuery(createUserQuery));
  const profileData = data?.createUserProfile || null;
  const errorData =
    error || (profileData ? undefined : new Error("No Talent Found"));
  return { loading, createProfile, profileData, error: errorData };
};
