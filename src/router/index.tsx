import { AuthProps, AuthRoutes, ErrorProps, UnAuthRoutes } from "utils";
import { FullPageLoader } from "components";
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
  const { pathname, search } = useLocation();

  const redirectToValidRoute = (): void => {
    const queryParams = new URLSearchParams(search);
    const term = queryParams.get("redirectUrl");
    if (term) history.replace(term);
    else history.replace(AuthRoutes.Explore);
  };

  const redirectToInValidRoute = (): void => {
    if (pathname.includes("self-schedule"))
      history.replace({
        pathname: UnAuthRoutes.Login,
        search: `?redirectUrl=${pathname}`,
      });
    else history.replace(UnAuthRoutes.Login);
  };

  useEffect(() => {
    if (typeof isLoggedIn === "boolean" && !isLoading) {
      if (isLoggedIn && !isValidRoute(AuthRoutesArray, pathname))
        redirectToValidRoute();
      else if (!isLoggedIn && !UnAuthRoutesArray.includes(pathname))
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
