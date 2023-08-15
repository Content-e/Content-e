import { useLazyQuery, useMutation } from '@apollo/client';
import {
  GetUserProfileQuery,
  GetUserProfileQueryVariables,
  CreateUserProfileMutation,
  CreateUserProfileMutationVariables,
  UpdateUserProfileMutation,
  UpdateUserProfileMutationVariables,
  LinkUserTypeMutation,
  LinkUserTypeMutationVariables,
  LinkTiktokAccountMutation,
  LinkTiktokAccountMutationVariables,
  GetTikTokAdvertisersMutationVariables,
  GetTikTokAdvertisersMutation,
  ValidateTiktokAccessMutationVariables,
  ValidateTiktokAccessMutation,
} from 'API';
import {
  createUserProfile as createUserQuery,
  getTikTokAdvertisers,
  linkTiktokAccount,
  linkUserType,
  updateUserProfile as updateUserQuery,
  validateTiktokAccess,
} from 'graphql/mutations';
import { getUserProfile as getUserProfileQuery } from 'graphql/queries';
import {
  CreateUserProfileProps,
  GetUserProfileProps,
  ILinkTiktokAccountResponse,
  IValidateTiktokAccessTokenResponse,
  UpdateUserProfileProps,
  UserTypeSetterProps,
} from 'hooks/utils';
import { getQuery } from 'hooks/utils/helpers';

export const getUserProfile = (): GetUserProfileProps => {
  const [getProfile, { data, loading, error }] = useLazyQuery<
    GetUserProfileQuery,
    GetUserProfileQueryVariables
  >(getQuery(getUserProfileQuery));
  const profileData = data?.getUserProfile || null;
  const errorData =
    error || (profileData ? undefined : new Error('No User Found'));
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
    error || (profileData ? undefined : new Error('No User Found'));
  return { loading, createProfile, profileData, error: errorData };
};

export const useUserTypeSetter = (): UserTypeSetterProps => {
  const [setUserType, { data, loading, error }] = useMutation<
    LinkUserTypeMutation,
    LinkUserTypeMutationVariables
  >(getQuery(linkUserType));
  return { loading, setUserType, data, error };
};

export const updateUserProfile = (): UpdateUserProfileProps => {
  const [updateProfile, { data, loading, error }] = useMutation<
    UpdateUserProfileMutation,
    UpdateUserProfileMutationVariables
  >(getQuery(updateUserQuery));
  const profileData = data?.updateUserProfile || null;
  const errorData =
    error || (profileData ? undefined : new Error('No User Found'));
  return { loading, updateProfile, profileData, error: errorData };
};

export const useLinkTiktokAccount = (): ILinkTiktokAccountResponse => {
  const [linkTiktok, { data, loading, error }] = useMutation<
    LinkTiktokAccountMutation,
    LinkTiktokAccountMutationVariables
  >(getQuery(linkTiktokAccount));
  return {
    loading,
    linkTiktok,
    data: data?.linkTiktokAccount,
    error,
  };
};

export const useValidateTiktokAccessToken =
  (): IValidateTiktokAccessTokenResponse => {
    const [validateTiktokAccessToken, { data, loading, error }] = useMutation<
      ValidateTiktokAccessMutation,
      ValidateTiktokAccessMutationVariables
    >(getQuery(validateTiktokAccess));
    return {
      loading,
      validateTiktokAccessToken,
      data: data?.validateTiktokAccess,
      error,
    };
  };

export const useGetTiktokAdvertisers = (): ILinkTiktokAccountResponse => {
  const [linkTiktok, { data, loading, error }] = useMutation<
    GetTikTokAdvertisersMutation,
    GetTikTokAdvertisersMutationVariables
  >(getQuery(getTikTokAdvertisers));
  return { loading, linkTiktok, data: data?.getTikTokAdvertisers, error };
};
