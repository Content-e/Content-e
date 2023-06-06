import {
  AuthProps,
  AuthRoutes,
  BrandRoutes,
  ErrorProps,
  UnAuthRoutes,
} from 'utils';
import { FullPageLoader, replaceSubPath } from 'components';
import { isValidRoute, ShouldRender } from 'components';
import { LogoutPage } from 'pages';
import React, { Fragment, useEffect, useState } from 'react';
import {
  Route,
  RouteProps,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { withAuth } from 'state/auth';
import withError from 'state/error/withErrorHoc';
import {
  AuthRoutesArray,
  mainRoutes,
  UnAuthRoutesArray,
} from './RoutesConstants';

const MainRouter: React.FC<AuthProps & ErrorProps> = ({
  authState: { isLoading, isLoggedIn, email },
}) => {
  const [pathFound, handlePathFound] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const redirectToInValidRoute = (): void => {
    if (pathname.split('/').length === 3)
      history.replace(replaceSubPath(UnAuthRoutes.SubLogin));
    else history.replace(UnAuthRoutes.Landing);
  };

  useEffect(() => {
    if (pathname === BrandRoutes.LinkTiktokAccount) {
      const url = new URL(window.location.href);
      if (url.searchParams.get('code')) {
        url.searchParams.delete('code');
        window.location.href = url.href;
        return;
      }
    }
    if (typeof isLoggedIn === 'boolean' && !isLoading) {
      if (isLoggedIn && !isValidRoute(AuthRoutesArray, pathname))
        history.replace(replaceSubPath(AuthRoutes.Redirector));
      else if (!isLoggedIn && !isValidRoute(UnAuthRoutesArray, pathname))
        redirectToInValidRoute();
      handlePathFound(true);
    }
  }, [isLoading, isLoggedIn, email]);

  return (
    <Fragment>
      <ShouldRender if={!pathFound}>
        <FullPageLoader />
      </ShouldRender>

      <ShouldRender if={pathFound}>
        <Switch>
          <Route path={AuthRoutes.Logout} component={LogoutPage} />
          {mainRoutes.map((route: RouteProps, index: number) => (
            <Route key={`${index}`} {...route} />
          ))}
        </Switch>
      </ShouldRender>
    </Fragment>
  );
};

export default withError(withAuth(MainRouter));
