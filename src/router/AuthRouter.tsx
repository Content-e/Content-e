import { FC, Fragment, useEffect } from "react";
import { BrandSteps, FullPageLoader, HomePage, isValidRoute } from "components";
import withApolloProvider from "hooks/apollo/withApollo";
import { SidebarLayout } from "layout";
import { AuthorizeTikTokStep, Brief, Dashboard, RedirectingStep } from "pages";

import EditProfile from "pages/editProfile";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { AuthRoutes, BrandRoutes, CreatorRoutes, ProfileProps } from "utils";
import Wallet from "pages/wallet/wallet";
import BestPractice from "pages/bestPractice/practice";
import CreativesTable from "components/creativesTable/creativesTable";
import CreateBrief from "components/createBrief/createBrief";
import { USER_TYPES } from "API";
import { BrandAuthArray, CreatorAuthArray } from "./RoutesConstants";

const AuthRouterPaths: FC<ProfileProps> = ({
  profileState: { data, isLoading },
}) => {
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname && data) {
      if (
        (data?.userType === USER_TYPES.CREATIVE_USER &&
          !isValidRoute(CreatorAuthArray, pathname)) ||
        (data?.userType === USER_TYPES.BRAND_USER &&
          !isValidRoute(BrandAuthArray, pathname)) ||
        (data.userType === USER_TYPES.ADMIN_USER &&
          !pathname.includes(AuthRoutes.Dashboard))
      )
        history.push(AuthRoutes.Dashboard);
    }
  }, [pathname, data]);

  if (!isLoading && data)
    return (
      <Switch>
        <Route exact path={AuthRoutes.Redirector} component={RedirectingStep} />
        <Route exact path={AuthRoutes.Tiktok} component={AuthorizeTikTokStep} />
        <SidebarLayout>
          <Route exact path={AuthRoutes.EditProfile} component={EditProfile} />
          <Route exact path={AuthRoutes.Dashboard} component={Dashboard} />
          <Route exact path={AuthRoutes.CampaignBrief} component={Brief} />

          {data.userType === USER_TYPES.BRAND_USER && (
            <Fragment key="brand user routes">
              <Route
                exact
                path={BrandRoutes.Creatives}
                component={CreativesTable}
              />
              <Route exact path={BrandRoutes.Brand} component={HomePage} />
              <Route
                exact
                path={BrandRoutes.EditBrand}
                component={BrandSteps}
              />
              <Route
                exact
                path={BrandRoutes.CreateBrief}
                component={CreateBrief}
              />
            </Fragment>
          )}

          {data.userType === USER_TYPES.CREATIVE_USER && (
            <Fragment key="creator user routes">
              <Route exact path={CreatorRoutes.Wallet} component={Wallet} />
              <Route
                exact
                path={CreatorRoutes.BestPractices}
                component={BestPractice}
              />
            </Fragment>
          )}

          <Route
            exact
            path="/"
            component={(): JSX.Element => (
              <Redirect to={AuthRoutes.Dashboard} />
            )}
          />
        </SidebarLayout>
      </Switch>
    );
  return <FullPageLoader />;
};

const AuthRouterWithProfile = withProfile(AuthRouterPaths);
const AuthRouter: FC = () => <AuthRouterWithProfile shouldCallApi />;
export default withApolloProvider(AuthRouter);
