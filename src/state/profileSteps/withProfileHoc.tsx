import { createUserProfile, getUserProfile } from "hooks";
import withApolloProvider from "hooks/apollo/withApollo";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthContext } from "state/auth";
import { AuthContextType } from "state/types/authTypes";
import { initialProfileState, ProfileProps } from "utils";
import { ProfileContext } from "./profile.context";

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

    const { profileState, setProfileState } = useContext(ProfileContext);
    const {
      authState: { isLoggedIn, email, userId },
    } = useContext<AuthContextType>(AuthContext);
    const [createProfileApiCall, updateCreateProfileApiCall] = useState(false);
    const [isApiCalled, setIsApiCalled] = useState(false);

    const refetchProfile = useCallback((): void => {
      if (email && shouldCallApi) {
        setIsApiCalled(true);
        setProfileState({ isLoading: true });
        getProfile({ variables: { id: userId } });
      }
    }, [email, shouldCallApi]);

    const cleanProfileState = (): void => {
      setProfileState({ isLoading: false });
    };

    useEffect(() => {
      if (profileState.data === undefined) refetchProfile();
    }, [email]);

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
          const input = { name: "", userEmail: email, id: userId };
          createProfile({ variables: { input } });
          updateCreateProfileApiCall(true);
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
