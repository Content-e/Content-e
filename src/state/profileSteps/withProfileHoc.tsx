// import { getClientJob, getClientProfile } from "hooks";
import withApolloProvider from "hooks/apollo/withApollo";
import React, { useCallback, useContext, useEffect } from "react";
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
    const { profileState, setProfileState } =
      useContext<ProfileContextType>(ProfileContext);
    const {
      authState: { userId, isLoggedIn },
    } = useContext<AuthContextType>(AuthContext);

    const refetchProfile = useCallback((): void => {
      if (userId && shouldCallApi) {
        setProfileState({ isLoading: true });
        // getProfile({
        //   variables: { id: userId },
        //   onCompleted: (res) => fetchClientJob(res?.getClient?.companyID),
        // });
      }
    }, [userId, shouldCallApi]);

    const cleanProfileState = (): void => {
      setProfileState({ isLoading: false });
    };

    useEffect(() => {
      if (profileState.data === undefined) refetchProfile();
    }, [userId]);

    // useEffect(() => {
    //   if (!loading && shouldUpdate) {
    //     if (profileData)
    //       setProfileState({
    //         data: profileData,
    //         isLoading: false,
    //         error: undefined,
    //       });
    //     else if (error)
    //       setProfileState({ isLoading: false, error, data: null });
    //     setShouldUpdate(false);
    //   }
    // }, [profileData, loading, error]);

    useEffect(() => {
      if (!isLoggedIn) {
        setProfileState(initialProfileState);
      }
    }, [isLoggedIn]);

    const profileProps: ProfileProps = {
      // profileState: { ...profileState },
      refetchProfile,
      cleanProfileState,
    };
    return <Component {...props} {...profileProps} />;
  });
}
export default withProfile;
