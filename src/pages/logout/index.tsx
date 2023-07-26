import { Auth } from 'aws-amplify';
import { AuthProps, initialAuthContext, ProfileProps } from 'utils';
import { FC, Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { withProfile } from 'state/profileSteps';
import { withAuth } from '../../state/auth';
import {useAuth0} from "@auth0/auth0-react";

export const LogoutPage: FC<ProfileProps & AuthProps> = ({
  cleanProfileState,
  setAuthState,
}) => {
  // const history = useHistory();
  const {logout, isAuthenticated, } = useAuth0()
  const logUserOut = async (): Promise<void> => {
    await Auth.signOut();
    setAuthState({ ...initialAuthContext });
    cleanProfileState();
    if(isAuthenticated){
      await logout({ logoutParams: { returnTo: window.location.origin } })
    }
    // history.push('/login');
  };
  useEffect(() => {
    logUserOut();
  }, []);
  return <Fragment />;
};

export default withAuth(withProfile(LogoutPage));
