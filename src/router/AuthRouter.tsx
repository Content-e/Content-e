import { FC, Fragment, useEffect } from 'react';
import { BrandSteps, FullPageLoader, HomePage, isValidRoute } from 'components';
import withApolloProvider from 'hooks/apollo/withApollo';
import { SidebarLayout } from 'layout';
import { AuthorizeTikTokStep, Brief, Dashboard, RedirectingStep } from 'pages';

import EditProfile from 'pages/editProfile';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { withProfile } from 'state/profileSteps';
import {
  AdminRoutes,
  AuthRoutes,
  BrandRoutes,
  CreatorRoutes,
  ProfileProps,
  UnAuthRoutes,
} from 'utils';
import Wallet from 'pages/wallet/wallet';
import BestPractice from 'pages/bestPractice';
import CreativesTable from 'components/creativesTable/creativesTable';
import CreateBrief from 'components/briefForm/briefForm';
import { USER_TYPES } from 'API';
import {
  AdminAuthArray,
  BrandAuthArray,
  CreatorAuthArray,
} from './RoutesConstants';
import CreatePractice from 'components/createPractice';
import linkTiktokAccount from 'pages/linkTiktokAccount';
import { TermsAndConditions } from '../pages/termsAndConditions';

const AuthRouterPaths: FC<ProfileProps> = ({
  profileState: { data, isLoading },
}) => {
  const history = useHistory();
  const { pathname } = useLocation();

  useEffect(() => {
    if (data?.userType === USER_TYPES.CREATIVE_USER) {
      document.documentElement.setAttribute('data-theme', 'creator');
    } else {
      document.documentElement.setAttribute('data-theme', 'brand');
    }

    if (pathname && data) {
      if (pathname.includes(UnAuthRoutes.TermsAndConditions)) {
        return;
      }
      if (
        (data?.userType === USER_TYPES.CREATIVE_USER &&
          !isValidRoute(CreatorAuthArray, pathname)) ||
        (data?.userType === USER_TYPES.BRAND_USER &&
          !isValidRoute(BrandAuthArray, pathname)) ||
        (data?.userType === USER_TYPES.ADMIN_USER &&
          !isValidRoute(AdminAuthArray, pathname))
      )
        history.push(AuthRoutes.Dashboard);
    }
  }, [pathname, data]);

  if (!isLoading && data)
    return (
      <Switch>
        <Route
          exact
          path={UnAuthRoutes.TermsAndConditions}
          component={TermsAndConditions}
        />
        <Route exact path={AuthRoutes.Redirector} component={RedirectingStep} />
        <Route exact path={AuthRoutes.Tiktok} component={AuthorizeTikTokStep} />
        <SidebarLayout data={data}>
          <Route exact path={AuthRoutes.EditProfile} component={EditProfile} />
          <Route exact path={AuthRoutes.Dashboard} component={Dashboard} />
          <Route exact path={AuthRoutes.CampaignBrief} component={Brief} />
          <Route
            exact
            path={AuthRoutes.BestPractices}
            component={BestPractice}
          />

          {data.userType === USER_TYPES.ADMIN_USER && (
            <Fragment key="admin user routes">
              <Route
                exact
                path={AdminRoutes.CreatePractice}
                component={CreatePractice}
              />
              <Route
                exact
                path={AdminRoutes.EditPractice}
                component={CreatePractice}
              />
            </Fragment>
          )}

          {data.userType === USER_TYPES.BRAND_USER && (
            <Fragment key="brand user routes">
              <Route
                exact
                path={BrandRoutes.LinkTiktokAccount}
                component={linkTiktokAccount}
              />
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
              <Route
                exact
                path={BrandRoutes.EditBrief}
                component={CreateBrief}
              />
            </Fragment>
          )}

          {data.userType === USER_TYPES.CREATIVE_USER && (
            <Route
              exact
              path={CreatorRoutes.Wallet}
              component={() => <Wallet data={data} />}
            />
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
