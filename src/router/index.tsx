import {
  AuthProps,
  AuthRoutes,
  ErrorProps,
  ProfileProps,
  UnAuthRoutes,
} from "utils";
import { FullPageLoader, replaceSubPath } from "components";
import { isValidRoute, ShouldRender, ToastContainer } from "components";
import { LogoutPage } from "pages";
import React, { FC, Fragment, useEffect, useState } from "react";
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
import { withProfile } from "state/profileSteps";
import withApolloProvider from "hooks/apollo/withApollo";
import { USER_TYPES } from "API";

const MainRouter: React.FC<AuthProps & ErrorProps & ProfileProps> = ({
  authState: { isLoading, isLoggedIn, email },
  profileState: { data },
  ...rest
}) => {
  const [pathFound, handlePathFound] = useState(false);
  const history = useHistory();
  const { pathname, search } = useLocation();

  const redirectToValidRoute = (): void => {
    const queryParams = new URLSearchParams(search);
    const term = queryParams.get("redirectUrl");
    if (term) history.replace(term);
    else {
      if (
        pathname.split("/").length === 3 &&
        data?.userType === USER_TYPES.CREATIVE_USER
      )
        history.replace(replaceSubPath(AuthRoutes.Tiktok));
      else history.replace(AuthRoutes.Home);
    }
  };

  const redirectToInValidRoute = (): void => {
    if (pathname.includes("self-schedule"))
      history.replace({
        pathname: UnAuthRoutes.Login,
        search: `?redirectUrl=${pathname}`,
      });
    else {
      if (pathname.split("/").length === 3)
        history.replace(replaceSubPath(UnAuthRoutes.SubLogin));
      else history.replace(UnAuthRoutes.Login);
    }
  };

  useEffect(() => {
    if (typeof isLoggedIn === "boolean" && !isLoading) {
      if (isLoggedIn && !isValidRoute(AuthRoutesArray, pathname) && data)
        redirectToValidRoute();
      else if (!isLoggedIn && !isValidRoute(UnAuthRoutesArray, pathname))
        redirectToInValidRoute();
      handlePathFound(true);
    }
  }, [isLoading, isLoggedIn, email, data]);

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

export const MainRouterWithProfile = withError(
  withProfile(withAuth(MainRouter))
);
const CompleteMainRouter: FC = () => <MainRouterWithProfile shouldCallApi />;
export default withApolloProvider(CompleteMainRouter);
