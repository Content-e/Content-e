import { createUserProfile, getUserProfile } from "hooks";
import withApolloProvider from "hooks/apollo/withApollo";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "state/auth";
import { AuthContextType } from "state/types/authTypes";
import { initialProfileState, ProfileProps } from "utils";
import { ProfileContextType } from "./profile.interface";
import { ProfileContext } from "./profile.context";

interface HocProps {
  shouldCallApi?: boolean;
}

export function withProfile<T>(
  Component: React.FC<T & ProfileProps & HocProps>
): React.FC<T & HocProps> {
  return withApolloProvider((props: T & HocProps) => {
    const { shouldCallApi } = props;
    const { getProfile, profileData, error, loading } = getUserProfile();
    const {
      createProfile,
      profileData: createProfileData,
      loading: createProfileLoading,
    } = createUserProfile();

    const { profileState, setProfileState } =
      useContext<ProfileContextType>(ProfileContext);
    const {
      authState: { userId, isLoggedIn, email },
    } = useContext<AuthContextType>(AuthContext);
    const [createProfileApiCall, updateCreateProfileApiCall] = useState(false);
    const [isApiCalled, setIsApiCalled] = useState(false);

    const refetchProfile = useCallback((): void => {
      if (userId && shouldCallApi) {
        setIsApiCalled(true);
        setProfileState({ isLoading: true });
        getProfile({ variables: { id: userId } });
      }
    }, [userId, shouldCallApi]);

    const cleanProfileState = (): void => {
      setProfileState({ isLoading: false });
    };

    useEffect(() => {
      if (profileState.data === undefined) refetchProfile();
    }, [userId]);

    useEffect(() => {
      if (!loading && shouldCallApi && isApiCalled) {
        setIsApiCalled(false);
        if (profileData)
          setProfileState({
            data: profileData,
            isLoading: false,
            error: undefined,
          });
        else if (error) {
          if (profileData === null && !createProfileApiCall) {
            const input = { name: "", userEmail: email };
            createProfile({ variables: { input } });
            updateCreateProfileApiCall(true);
          }
          setProfileState({ isLoading: false, error, data: null });
        }
      }
    }, [profileData, loading, error]);

    useEffect(() => {
      if (createProfileData && !createProfileLoading) refetchProfile();
    }, [createProfileLoading, createProfileData]);

    useEffect(() => {
      if (!isLoggedIn) setProfileState(initialProfileState);
    }, [isLoggedIn]);

    const profileProps: ProfileProps = {
      profileState: { ...profileState },
      refetchProfile,
      cleanProfileState,
    };
    return <Component {...props} {...profileProps} />;
  });
}
export default withProfile;
