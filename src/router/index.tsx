import { AuthProps, AuthRoutes, ErrorProps, UnAuthRoutes } from "utils";
import { FullPageLoader, replaceSubPath } from "components";
import { isValidRoute, ShouldRender, ToastContainer } from "components";
import { LogoutPage } from "pages";
import React, { Fragment, useEffect, useState } from "react";
import {
  Route,
  RouteProps,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { withAuth } from "state/auth";
import withError from "state/error/withErrorHoc";
import {
  AuthRoutesArray,
  mainRoutes,
  UnAuthRoutesArray,
} from "./RoutesConstants";

const MainRouter: React.FC<AuthProps & ErrorProps> = ({
  authState: { isLoading, isLoggedIn, email },
  ...rest
}) => {
  const [pathFound, handlePathFound] = useState(false);
  const history = useHistory();
  const { pathname } = useLocation();

  const redirectToInValidRoute = (): void => {
    if (pathname.split("/").length === 3)
      history.replace(replaceSubPath(UnAuthRoutes.SubLogin));
    else history.replace(UnAuthRoutes.Landing);
  };

  useEffect(() => {
    if (typeof isLoggedIn === "boolean" && !isLoading) {
      if (isLoggedIn && !isValidRoute(AuthRoutesArray, pathname))
        history.replace(replaceSubPath(AuthRoutes.Redirector));
      else if (!isLoggedIn && !isValidRoute(UnAuthRoutesArray, pathname))
        redirectToInValidRoute();
      handlePathFound(true);
    }
  }, [isLoading, isLoggedIn, email]);

  return (
    <Fragment>
      <ToastContainer {...rest} />
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
