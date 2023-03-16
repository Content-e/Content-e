import { FC } from "react";
import { FullPageLoader, HomePage } from "components";
import withApolloProvider from "hooks/apollo/withApollo";
import { SidebarLayout } from "layout";
import {
  AuthorizeTikTokStep,
  BrandStepsPage,
  Brief,
  Dashboard,
  RedirectingStep,
} from "pages";

import EditProfile from "pages/editProfile";
import { Route, Switch } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { AuthRoutes, ProfileProps } from "utils";
import Wallet from "pages/wallet/wallet";
import BestPractice from "pages/bestPractice/practice";
import CreativesTable from "components/creativesTable/creativesTable";
import AdminDashboard from "pages/adminDashboard/adminDashboard";
import CreateBrief from "components/createBrief/createBrief";

const AuthRouterPaths: FC<ProfileProps> = ({
  profileState: { data, isLoading },
}) => {
  if (!isLoading && data)
    return (
      <Switch>
        <Route exact path={AuthRoutes.Redirector} component={RedirectingStep} />
        <Route exact path={AuthRoutes.Tiktok} component={AuthorizeTikTokStep} />
        <SidebarLayout>
          <Route exact path={AuthRoutes.EditProfile} component={EditProfile} />
          <Route exact path={AuthRoutes.Dashboard} component={Dashboard} />
          <Route exact path={AuthRoutes.CampaignBrief} component={Brief} />
          <Route exact path={AuthRoutes.Creatives} component={CreativesTable} />
          <Route exact path={AuthRoutes.Brand} component={HomePage} />
          <Route exact path={AuthRoutes.EditBrand} component={BrandStepsPage} />
          <Route exact path={AuthRoutes.CreateBrief} component={CreateBrief} />
          <Route exact path={AuthRoutes.Wallet} component={Wallet} />
          <Route
            exact
            path={AuthRoutes.BestPractices}
            component={BestPractice}
          />
          <Route
            exact
            path={AuthRoutes.AdminDashboard}
            component={AdminDashboard}
          />
        </SidebarLayout>
      </Switch>
    );
  return <FullPageLoader />;
};

const AuthRouterWithProfile = withProfile(AuthRouterPaths);
const AuthRouter: FC = () => <AuthRouterWithProfile shouldCallApi />;
export default withApolloProvider(AuthRouter);
