import { FC, useEffect, useLayoutEffect } from 'react';
import { useLogin } from '../../hooks';
import { Auth, CognitoUser } from '@aws-amplify/auth';
import withApolloProvider from '../../hooks/apollo/withApollo';
import useAuthSwapListener from '../../hooks/apollo/useApollo';
import AwsConfig from '../../hooks/apollo/awsConfig';
import { useHistory } from 'react-router-dom';
import { AuthRoutes, UnAuthRoutes } from '../../utils';
import { useAuth, useUser } from '@clerk/clerk-react';

const ClerkLogin: FC = withApolloProvider(() => {
  const { res, performAction } = useLogin();
  const { user } = useUser();
  const history = useHistory();
  const { isApolloInitialized } = useAuthSwapListener(AwsConfig);
  const { isSignedIn, userId } = useAuth();
  const changeClerkTitles = async () => {
    let headerTitle;
    let headerSubTitle;
    let modal;
    while (!headerTitle && !headerSubTitle) {
      const title = document.getElementsByClassName('clerkHeaderTitle');
      const subTitle = document.getElementsByClassName('cl-headerSubtitle');
      const modalContent = document.getElementsByClassName('cl-modalContent');
      if (title?.item(0) && subTitle?.item(0) && modalContent.item(0)) {
        headerTitle = title.item(0);
        headerSubTitle = subTitle.item(0);
        modal = modalContent.item(0);
        break;
      }
      await new Promise((res) => setTimeout(() => res(null), 100));
    }

    if (headerTitle && headerSubTitle) {
      if ('innerHTML' in headerTitle && 'innerHTML' in headerSubTitle) {
        headerTitle.innerHTML = `CREATOR SIGN IN`;
        headerSubTitle.innerHTML = `Are you a brand? Get in touch <a href="${
          process.env.REACT_APP_CLERK_LANDING_URL || ''
        }connect">here</a> or drop us a mail hello@edcsquared.io.`;
      }
      const config = { attributes: true, childList: true, subtree: true };
      const callback = async (mutationList) => {
        for (const mutation of mutationList) {
          if (mutation.type === 'childList') {
            const isSignUpModal = document
              .getElementsByClassName('cl-signUp-root')
              .item(0);
            if (isSignUpModal) {
              const title = isSignUpModal
                .querySelectorAll(
                  "h1[data-localization-key='signUp.start.title']"
                )
                .item(0);
              if (
                title &&
                'innerHTML' in title &&
                (title?.textContent?.includes('Create') ||
                  title?.textContent?.includes('IN'))
              ) {
                title.innerHTML = 'CREATOR SIGN UP';
              }
              const subTitle = isSignUpModal
                .getElementsByClassName('cl-headerSubtitle')
                .item(0);
              if (
                subTitle &&
                'innerHTML' in subTitle &&
                subTitle?.textContent?.includes('continue')
              ) {
                subTitle.innerHTML = `Are you a brand? Get in touch <a href="${
                  process.env.REACT_APP_URL || ''
                }/register">here</a> or drop us a mail hello@edcsquared.io.`;
              }
            }
            if (!isSignUpModal) {
              const signIn = document
                .getElementsByClassName('cl-signIn-root')
                .item(0);
              if (signIn) {
                const title = signIn
                  .querySelectorAll(
                    "h1[data-localization-key='signIn.start.title']"
                  )
                  .item(0);
                if (
                  title &&
                  'innerHTML' in title &&
                  (title?.textContent?.includes('Sign') ||
                    title?.textContent?.includes('UP'))
                ) {
                  title.innerHTML = 'CREATOR SIGN IN';
                }
                const subTitle = signIn
                  .getElementsByClassName('cl-headerSubtitle')
                  .item(0);
                if (
                  subTitle &&
                  'innerHTML' in subTitle &&
                  subTitle?.textContent?.includes('continue')
                ) {
                  subTitle.innerHTML = `Are you a brand? Get in touch <a href="${
                    process.env.REACT_APP_URL || ''
                  }/register">here</a> or drop us a mail hello@edcsquared.io.`;
                }
              }
            }
          }
        }
      };

      const observer = new MutationObserver(callback);
      observer.observe(modal, config);
    }
  };

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
            user?.fullName || user?.username || user?.firstName || userId,
        });
      }
    }
  };
  useEffect(() => {
    signInOrSignUp();
  }, [userId, isSignedIn]);
  useLayoutEffect(() => {
    changeClerkTitles();
  }, []);
  useEffect(() => {
    const redirect = async () => {
      let user: CognitoUser | null = null;
      if (!res?.data) {
        user = await Auth.currentAuthenticatedUser().catch((err) =>
          console.error(err)
        );
      }
      const isUser = user?.getUsername() || res.data?.getUsername();
      const url = new URL(window.location.href);
      const authCode = url.searchParams.get('auth_code');
      if (
        isUser &&
        isApolloInitialized &&
        isSignedIn &&
        !authCode &&
        !url.href.includes(UnAuthRoutes.TermsAndConditions)
      ) {
        history.replace(AuthRoutes.Dashboard);
      }
    };
    redirect();
  }, [res, isApolloInitialized, isSignedIn, userId]);
  return <></>;
});
export default ClerkLogin;
