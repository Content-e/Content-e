import { USER_TYPES } from 'API';
import {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  useUserTypeSetter,
} from 'hooks';
import withApolloProvider from 'hooks/apollo/withApollo';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from 'state/auth';
import { AuthContextType } from 'state/types/authTypes';
import { initialProfileState, ProfileProps } from 'utils';
import { ProfileContext } from './profile.context';
import { IUpdateProfile } from './profile.interface';

interface HocProps {
  shouldCallApi?: boolean;
}

export function withProfile<T>(
  Component: React.FC<T & ProfileProps & HocProps>
): React.FC<T & HocProps> {
  return withApolloProvider((props: T & HocProps) => {
    const { shouldCallApi } = props;
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

    const { profileState, setProfileState } = useContext(ProfileContext);
    const { authState, setAuthState } =
      useContext<AuthContextType>(AuthContext);

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
      console.log('isProfileExistsHook')
      if (!loading && shouldCallApi && isApiCalled) {
        console.log(22222222222)
        setIsApiCalled(false);
        if (profileData && isProfileExists)
          setProfileState({
            data: profileData,
            isLoading: false,
            error: undefined,
          });
        else if (!isProfileExists && !createProfileApiCall) {
          console.log('isProfileExists', isProfileExists)
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
      if (userTypeData && !userTypeLoading) window.location.reload();
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
