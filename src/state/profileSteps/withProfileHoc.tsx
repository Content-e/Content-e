import { USER_TYPES } from 'API';
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  useUserTypeSetter,
  useValidateTiktokAccessToken,
} from 'hooks';
import withApolloProvider from 'hooks/apollo/withApollo';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'state/auth';
import { AuthContextType } from 'state/types/authTypes';
import { initialProfileState, ProfileProps } from 'utils';
import { ProfileContext } from './profile.context';
import { IUpdateProfile } from './profile.interface';
import { isArray } from 'lodash';

interface HocProps {
  shouldCallApi?: boolean;
}

export function withProfile<T>(
  Component: React.FC<T & ProfileProps & HocProps>
): React.FC<T & HocProps> {
  return withApolloProvider((props: T & HocProps) => {
    const { shouldCallApi } = props;
    const { profileState, setProfileState } = useContext(ProfileContext);
    const { authState, setAuthState } =
      useContext<AuthContextType>(AuthContext);
    const { getProfile, profileData, isProfileExists, error, loading } =
      getUserProfile();
    const {
      createProfile,
      profileData: createProfileData,
      loading: createProfileLoading,
    } = createUserProfile();
    const {
      updateProfile,
      profileData: updateProfileData,
      loading: updateProfileLoading,
    } = updateUserProfile();
    const {
      setUserType,
      data: userTypeData,
      loading: userTypeLoading,
    } = useUserTypeSetter();

    const {
      validateTiktokAccessToken,
      data: tiktokAccountData,
    } = useValidateTiktokAccessToken();

    const { isLoggedIn, email, userId, name } = authState;
    const [createProfileApiCall, updateCreateProfileApiCall] = useState(false);
    const [isApiCalled, setIsApiCalled] = useState(false);

    const refetchProfile = (force?: boolean): void => {
      if (email && (shouldCallApi || force)) {
        setIsApiCalled(true);
        setProfileState({ isLoading: true });
        getProfile({ variables: { id: userId } });
      }
    };

    const editProfile = (input: IUpdateProfile): void => {
      if (profileState?.data?.id) {
        const { userEmail, description, tiktokHandler, id } = profileState.data;
        const prevInput = { id, userEmail, description, tiktokHandler };
        updateProfile({ variables: { input: { ...prevInput, ...input } } });
      }
    };

    const cleanProfileState = (): void => {
      setProfileState({ isLoading: false });
    };

    const validateTiktokAccessTokenHandler = async () => {
      const accessData = profileState.data?.tiktokAccountAccess;
      if (
        tiktokAccountData &&
        accessData &&
        accessData.advertisers_list?.length
      ) {
        localStorage.setItem(
          'validateTiktokAccessTokenTime',
          new Date().getTime().toString()
        );
        const { body: advListFromResponse } = JSON.parse(tiktokAccountData);
        const { advertisers_list, advertiser_id, access_token } = accessData;
        if (
          advertiser_id &&
          advertisers_list &&
          access_token &&
          isArray(advListFromResponse) &&
          advertisers_list.length !== advListFromResponse.length
        ) {
          await editProfile({
            tiktokAccountAccess: {
              advertisers_list: advListFromResponse,
              access_token,
              advertiser_id,
            },
          });
          await refetchProfile(true);
        }
      }
      if (tiktokAccountData === null && isLoggedIn) {
        await editProfile({
          tiktokAccountAccess: {
            advertisers_list: [],
            access_token: null,
            advertiser_id: null,
          },
        });
        await refetchProfile(true);
      }
    };

    useEffect(() => {
      if (
        email &&
        isLoggedIn &&
        userId &&
        profileState.data === undefined &&
        shouldCallApi
      )
        refetchProfile();
    }, [email, isLoggedIn, profileState.data, userId, shouldCallApi]);

    useEffect(() => {
      if (!loading && shouldCallApi && isApiCalled) {
        setIsApiCalled(false);
        if (profileData && isProfileExists)
          setProfileState({
            data: profileData,
            isLoading: false,
            error: undefined,
          });
        else if (!isProfileExists && !createProfileApiCall) {
          const input = {
            name: name ?? email?.split('@')[0],
            userEmail: email,
            id: userId,
          };
          createProfile({ variables: { input } });
          updateCreateProfileApiCall(true);
          setAuthState({ ...authState, name });
          setProfileState({ isLoading: false, error, data: null });
        }
      }
    }, [profileData, loading, error]);

    useEffect(() => {
      if (createProfileData && !createProfileLoading)
        setUserType({
          variables: {
            profileId: createProfileData.id,
            userType:
              localStorage.getItem('userType') || USER_TYPES.CREATIVE_USER,
          },
        });
    }, [createProfileLoading, createProfileData]);

    useEffect(() => {
      if (userTypeData && !userTypeLoading) {
        localStorage.removeItem('userType');
        window.location.reload();
      }
    }, [userTypeData, userTypeLoading]);

    useEffect(() => {
      if (updateProfileData && !updateProfileLoading)
        setProfileState({
          data: updateProfileData,
          isLoading: false,
          error: undefined,
        });
    }, [updateProfileLoading, updateProfileData]);

    useEffect(() => {
      if (!isLoggedIn) setProfileState(initialProfileState);
    }, [isLoggedIn]);

    useEffect(() => {
      validateTiktokAccessTokenHandler();
    }, [tiktokAccountData, isLoggedIn]);

    useEffect(() => {
      const accessToken = profileState.data?.tiktokAccountAccess?.access_token;
      const lastCheckTime = localStorage.getItem(
        'validateTiktokAccessTokenTime'
      );
      if (
        accessToken &&
        (!lastCheckTime ||
          new Date().getTime() - +lastCheckTime > 1000 * 60 * 60)
      ) {
        validateTiktokAccessToken({ variables: { accessToken } });
      }
    }, [profileState]);

    const profileProps: ProfileProps = {
      profileState: { ...profileState },
      refetchProfile,
      cleanProfileState,
      editProfile,
      updateProfileData,
    };
    return <Component {...props} {...profileProps} />;
  });
}
export default withProfile;
