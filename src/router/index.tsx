import {
    AuthProps,
    AuthRoutes,
    BrandRoutes,
    ErrorProps,
    UnAuthRoutes,
} from 'utils';
import {FullPageLoader, replaceSubPath} from 'components';
import {isValidRoute, ShouldRender} from 'components';
import {LogoutPage} from 'pages';
import React, {Fragment, useEffect, useState} from 'react';
import {
    Route,
    RouteProps,
    Switch,
    useHistory,
    useLocation,
} from 'react-router-dom';
import {withAuth} from 'state/auth';
import withError from 'state/error/withErrorHoc';
import {
    AuthRoutesArray,
    mainRoutes,
    UnAuthRoutesArray,
} from './RoutesConstants';
import ToastContainer from 'components/toast';
import {useAuth0} from "@auth0/auth0-react";

const MainRouter: React.FC<AuthProps & ErrorProps> = ({
                                                          authState: {isLoading, isLoggedIn, email},
                                                          ...rest
                                                      }) => {
    const [pathFound, handlePathFound] = useState(false);
    const history = useHistory();
    const {pathname} = useLocation();
    const {isAuthenticated} = useAuth0()

    const redirectToInValidRoute = (): void => {
        if (pathname.split('/').length === 3) {
            history.replace(replaceSubPath(UnAuthRoutes.SubLogin));
        } else history.replace(UnAuthRoutes.Landing);
    };

    useEffect(() => {
        const url = new URL(window.location.href);
        const code = url.searchParams.get('code')
        if (code) {
            localStorage.setItem('auth0accessCode', code)
            url.searchParams.delete('code');
            window.location.href = url.href;
            return;
        }

        if (pathname === BrandRoutes.LinkTiktokAccount) {
            const url = new URL(window.location.href);
            if (url.searchParams.get('code')) {
                url.searchParams.delete('code');
                window.location.href = url.href;
                return;
            }
        }
        if (typeof isLoggedIn === 'boolean' && !isLoading) {
            if (isLoggedIn && !isAuthenticated && !isValidRoute(AuthRoutesArray, pathname))
                history.replace(replaceSubPath(AuthRoutes.Redirector));
            else if (!isAuthenticated && !isLoggedIn && !isValidRoute(UnAuthRoutesArray, pathname))
                redirectToInValidRoute();
            handlePathFound(true);
        }
        if(isAuthenticated) {
            history.push('/dashboard')
        }

    }, [isLoading, isLoggedIn, email, isAuthenticated]);

    return (
        <Fragment>
            <ToastContainer {...rest} />
            <ShouldRender if={!pathFound}>
                <FullPageLoader/>
            </ShouldRender>

            <ShouldRender if={pathFound}>
                <Switch>
                    <Route path={AuthRoutes.Logout} component={LogoutPage}/>
                    {mainRoutes.map((route: RouteProps, index: number) => (
                        <Route key={`${index}`} {...route} />
                    ))}
                </Switch>
            </ShouldRender>
        </Fragment>
    );
};

export default withError(withAuth(MainRouter));
