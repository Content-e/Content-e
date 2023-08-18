import { Auth } from 'aws-amplify';
import { AuthProps, initialAuthContext, ProfileProps } from 'utils';
import { FC, Fragment, useEffect } from 'react';
import { withProfile } from 'state/profileSteps';
import { withAuth } from '../../state/auth';

export const LogoutPage: FC<ProfileProps & AuthProps> = ({
  cleanProfileState,
  setAuthState,
}) => {
  const logUserOut = async (): Promise<void> => {
    await Auth.signOut();
    setAuthState({ ...initialAuthContext });
    cleanProfileState();
    window.location.href =
      process.env.REACT_APP_CLERK_LANDING_URL ||
      process.env.REACT_APP_URL ||
      '/';
  };
  useEffect(() => {
    logUserOut();
  }, []);
  return <Fragment />;
};

export default withAuth(withProfile(LogoutPage));
