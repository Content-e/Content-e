import { Auth } from 'aws-amplify';
import { AuthProps, initialAuthContext, ProfileProps } from 'utils';
import { FC, Fragment, useEffect } from 'react';
import { withProfile } from 'state/profileSteps';
import { withAuth } from '../../state/auth';
import { useAuth, useClerk } from '@clerk/clerk-react';
import { useHistory } from 'react-router-dom';

export const LogoutPage: FC<ProfileProps & AuthProps> = ({
  cleanProfileState,
  setAuthState,
}) => {
  const history = useHistory();
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  const logUserOut = async (): Promise<void> => {
    await Auth.signOut();
    setAuthState({ ...initialAuthContext });
    cleanProfileState();
    if (isSignedIn) {
      await signOut();
    }
    window.location.href = process.env.REACT_APP_CLERK_LANDING_URL || process.env.REACT_APP_URL  || '/';
  };
  useEffect(() => {
    logUserOut();
  }, []);
  return <Fragment />;
};

export default withAuth(withProfile(LogoutPage));
