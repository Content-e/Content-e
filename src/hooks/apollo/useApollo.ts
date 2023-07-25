/* eslint-disable @typescript-eslint/explicit-function-return-type */
import {ApolloClient, ApolloLink} from '@apollo/client';
import Auth from '@aws-amplify/auth';
import {Hub} from '@aws-amplify/core';
import {createAuthLink} from 'aws-appsync-auth-link';
import {createSubscriptionHandshakeLink} from 'aws-appsync-subscription-link';
import {useEffect, useRef, useState} from 'react';
import {setupApolloCache} from './apollo';
import {useAuth0} from "@auth0/auth0-react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const useApollo = (config) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [isApolloInitialized, setIsApolloInitialized] = useState(false);
    const [loading, setLoading] = useState(false);
    const {awsPublic, awsPrivate} = config;
    const apolloClientRef = useRef<ApolloClient<unknown> | undefined>();
    const isLoggedInRef = useRef(loggedIn);

    isLoggedInRef.current = loggedIn;

    const isUserLoggedIn = async () => {
        try {
            await Auth.currentAuthenticatedUser();
            return true;
        } catch {
            return false;
        }
    };


    const {user, isAuthenticated, getIdTokenClaims} = useAuth0();
    const connectAuth0 = async () => {

        const claim = await getIdTokenClaims()

        await Auth.federatedSignIn(
            process.env.REACT_APP_AUTH_DOMAIN || '', // The Auth0 Domain,
            {
                token: claim?.__raw || '', // The id token from Auth0
                expires_at: claim?.exp ? claim.exp * 1000 : new Date().getTime() + 900000 // the expiration timestamp
            },
            {
                name: user?.nickname || user?.name || '',
                email: user?.email || user?.nickname ? `${user?.nickname}@fake_mail.com` : `${user?.given_name}@fake_mail.com`, // Optional, the email address
            }
        ).then(cred => {
            console.log(cred);
        }).catch(err => console.error(err));
        setLoading(false)

    }


    useEffect(() => {
        if (isAuthenticated && !loggedIn && !loading) {
            connectAuth0()
            setLoading(true)
        }
    }, [isAuthenticated])

    const reconfigure = async () => {
        const isLogin = await isUserLoggedIn();
        const {endpoint, authenticationType} = awsPublic;

        const loggedOutConfig = {
            aws_appsync_graphqlEndpoint: endpoint,
            aws_appsync_authenticationType: authenticationType,
        };

        Auth.configure({
            ...config.awsAmplifyConfig,
            ...(isLogin ? {} : loggedOutConfig),
        });
        setLoggedIn(isLogin);
    };

    const apolloInit = async () => {
        // const jwtToken = await Auth.currentCredentials().then(creds => creds.sessionToken)
        const jwtToken = await getIdTokenClaims().then(res => res?.__raw)
        console.log(33333333333333, await Auth.currentCredentials())
        const privateConfig = {
            url: awsPrivate.endpoint,
            region: awsPrivate.region,
            auth: {
                type: awsPrivate.authenticationType,
                credentials: async () => await Auth.currentCredentials(),
                token: jwtToken,
            },
            disableOffline: true,
        };
        const publicConfig = {
            url: awsPublic.endpoint,
            region: awsPublic.region,
            auth: {
                type: awsPublic.authenticationType,
                credentials: async () => await Auth.currentCredentials(),
                token: jwtToken,
            },
            disableOffline: true,
        };

        // // overwrite authorization header
        let jwt;
        try {
            jwt = await getIdTokenClaims().then(res => res?.__raw);
        } catch {
            jwt = null;
        }
        const headerMiddleware = new ApolloLink((operation, forward) => {
            operation.setContext(({headers = {}}) => ({
                headers: {
                    ...headers,
                    authorization: jwt,
                },
            }));
            return forward(operation);
        });

        const mainLink = ApolloLink.split(
            () => isLoggedInRef.current,
            ApolloLink.from([
                createAuthLink(privateConfig),
                headerMiddleware,
                createSubscriptionHandshakeLink(privateConfig),
            ]),
            ApolloLink.from([
                createAuthLink(publicConfig),
                headerMiddleware,
                createSubscriptionHandshakeLink(publicConfig),
            ])
        );

        const cache = await setupApolloCache();

        apolloClientRef.current = new ApolloClient({
            link: mainLink,
            cache,
            defaultOptions: {
                watchQuery: {
                    fetchPolicy: 'cache-and-network',
                    nextFetchPolicy: 'cache-first',
                },
                query: {
                    fetchPolicy: 'cache-first',
                },
            },
        });
        setIsApolloInitialized(true);
    };

    useEffect(() => {
        apolloInit();
        // Hub will fire every time Amplify.configure is called.
        // However, since we are later reconfiguring, this can cause an infinite loop.
        let firstConfigure = true;
        const listener = async (data) => {
            // const userC = await Auth.currentAuthenticatedUser().catch(err => console.log('auth', err))
            // console.log(userC)
            const {payload} = data;
            if (
                (firstConfigure || payload.event !== 'configured') &&
                payload.event !== 'tokenRefresh_failure' &&
                payload.event !== 'parsingCallbackUrl'
            ) {
                firstConfigure = false;
                reconfigure();

                if (payload.event === 'signOut') apolloClientRef?.current?.resetStore();
            }
        };

        Hub.listen('auth', listener);
        // Amplify.configure trigger the callback
        Auth.configure(config.awsAmplifyConfig);

        return () => {
            Hub.remove('auth', listener);
        };
    }, []);

    const {current: client} = apolloClientRef;

    return {
        isApolloInitialized,
        client,
    };
};

export default useApollo;
