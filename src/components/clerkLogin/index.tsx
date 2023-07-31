import { FC, useEffect } from 'react';
import { useLogin } from '../../hooks';
import { Auth, CognitoUser } from '@aws-amplify/auth';
import withApolloProvider from '../../hooks/apollo/withApollo';
import useAuthSwapListener from '../../hooks/apollo/useApollo';
import AwsConfig from '../../hooks/apollo/awsConfig';
import { useHistory } from 'react-router-dom';
import { AuthRoutes } from '../../utils';
import { useAuth, useUser } from '@clerk/clerk-react';

const Auto0Login: FC = withApolloProvider(() => {
  const { res, performAction } = useLogin();
  const { user } = useUser();
  const history = useHistory();
  const { isApolloInitialized } = useAuthSwapListener(AwsConfig);
  const { isSignedIn, userId } = useAuth();

  const getEmail = () =>
    user?.emailAddresses.length && user.emailAddresses[0]?.emailAddress
      ? user.emailAddresses[0].emailAddress
      : `${userId}${process.env.REACT_APP_FAKE_MAIL || '@fakemail.com'}`;
  const signInOrSignUp = async () => {
    if (userId && isSignedIn) {
      const isUserSignedIn = await Auth.currentUserCredentials().then(
        (data) => data.authenticated
      );
      if (!isUserSignedIn) {
        await performAction({
          email: getEmail(),
          password: process.env.REACT_APP_FAKE_PASSWORD || '12345678',
          username:
            user?.fullName || user?.username || user?.firstName || userId, // || user.nickname || ''
        });
      }
    }
  };
  useEffect(() => {
    signInOrSignUp();
  }, [userId, isSignedIn]);
  useEffect(() => {
    const redirect = async () => {
      let user: CognitoUser | null = null;
      if (!res?.data) {
        user = await Auth.currentAuthenticatedUser().catch((err) =>
          console.error(err)
        );
      }
      const isUser = user?.getUsername() || res.data?.getUsername();
      if (isUser && isApolloInitialized && isSignedIn) {
        history.replace(AuthRoutes.Dashboard);
      }
    };
    redirect();
  }, [res, isApolloInitialized, isSignedIn, userId]);
  return <></>;
});
export default Auto0Login;
