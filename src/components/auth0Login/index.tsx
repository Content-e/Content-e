import {FC, useEffect} from "react";
import {useLogin} from "../../hooks";
import {useAuth0} from "@auth0/auth0-react";
import {Auth, CognitoUser} from "@aws-amplify/auth";
import withApolloProvider from "../../hooks/apollo/withApollo";
import useAuthSwapListener from "../../hooks/apollo/useApollo";
import AwsConfig from "../../hooks/apollo/awsConfig";
import {useHistory} from "react-router-dom";
import {AuthRoutes} from "../../utils";

const Auto0Login: FC = withApolloProvider(() => {
    const {res, performAction} = useLogin()
    const {user, isAuthenticated} = useAuth0()
    const history = useHistory()
    const {isApolloInitialized} = useAuthSwapListener(AwsConfig);
    const signInOrSignUp = async () => {
        if (user && isAuthenticated) {
            const isUserSignedIn = await Auth.currentUserCredentials().then(data => data.authenticated)
            if (!isUserSignedIn) {
                await performAction({
                    email: user.email || `${user.sub?.replace('|', '.')}${process.env.REACT_APP_FAKE_MAIL || '@fakemail.com' }`,
                    password: process.env.REACT_APP_FAKE_PASSWORD || '12345678',
                    username: user.given_name || user.nickname || ''
                })
            }
        }
    }
    useEffect(() => {
        signInOrSignUp()
    }, [user, isAuthenticated])
    useEffect(() => {

        const redirect = async () => {
            let user: CognitoUser | null = null;
            if (!res?.data) {
                user = await Auth.currentAuthenticatedUser().catch(err => console.error(err))
            }
            const isUser = user?.getUsername() || res.data?.getUsername()
            if (isUser && isApolloInitialized && isAuthenticated) {
                history.replace(AuthRoutes.Dashboard)
            }
        }
        redirect();

    }, [res, isApolloInitialized, isAuthenticated, user])
    return <></>
})
export default Auto0Login