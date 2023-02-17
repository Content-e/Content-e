import { useLazyQuery, useMutation } from "@apollo/client";
import {
  GetUserProfileQuery,
  GetUserProfileQueryVariables,
  CreateUserProfileMutation,
  CreateUserProfileMutationVariables,
} from "API";
import { createUserProfile as createUserQuery } from "graphql/mutations";
import { getUserProfile as getUserProfileQuery } from "graphql/queries";
import { CreateUserProfileProps, GetUserProfileProps } from "hooks/utils";
import { getQuery } from "hooks/utils/helpers";

export const getUserProfile = (): GetUserProfileProps => {
  const [getProfile, { data, loading, error }] = useLazyQuery<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >(getQuery(getUserProfileQuery));
  const profileData = data?.getUserProfile || null;
  const errorData =
    error || (profileData ? undefined : new Error("No User Found"));
  return {
    loading,
    getProfile,
    profileData,
    isProfileExists: !!profileData,
    error: errorData,
  };
};

export const createUserProfile = (): CreateUserProfileProps => {
  const [createProfile, { data, loading, error }] = useMutation<
    CreateUserProfileMutation,
    CreateUserProfileMutationVariables
  >(getQuery(createUserQuery));
  const profileData = data?.createUserProfile || null;
  const errorData =
    error || (profileData ? undefined : new Error("No User Found"));
  return { loading, createProfile, profileData, error: errorData };
};
