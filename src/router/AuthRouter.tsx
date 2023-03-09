import { FC } from "react";
import { FullPageLoader } from "components";
import withApolloProvider from "hooks/apollo/withApollo";
import { SidebarLayout } from "layout";
import {
  AuthorizeTikTokStep,
  BrandStepsPage,
  MainPage,
  RedirectingStep,
} from "pages";

import CampaignBriefs from "pages/campaignBriefs/campaignBriefs";
import CreatorDashboard from "pages/creatorDashboard/creatorDashboard";
import CreatorProfile from "pages/creatorProfile/creatorProfile";

import { Route, Switch } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { AuthRoutes, ProfileProps } from "utils";
import Wallet from "pages/wallet/wallet";
import BestPractice from "pages/bestPractice/practice";

const AuthRouterPaths: FC<ProfileProps> = ({
  profileState: { data, isLoading },
}) => {
  if (!isLoading && data)
    return (
      <Switch>
        <Route exact path={AuthRoutes.Redirector} component={RedirectingStep} />
        <Route exact path={AuthRoutes.Tiktok} component={AuthorizeTikTokStep} />
        <SidebarLayout>
          <Route exact path={AuthRoutes.Brand} component={MainPage} />
          <Route exact path={AuthRoutes.EditBrand} component={BrandStepsPage} />
          <Route
            exact
            path={AuthRoutes.CreatorDashboard}
            component={CreatorDashboard}
          />
          <Route
            exact
            path={AuthRoutes.CreatorProfile}
            component={CreatorProfile}
          />
          <Route
            exact
            path={AuthRoutes.CampaignBrief}
            component={CampaignBriefs}
          />
          <Route exact path={AuthRoutes.Wallet} component={Wallet} />
          <Route
            exact
            path={AuthRoutes.BestPractices}
            component={BestPractice}
          />
        </SidebarLayout>
      </Switch>
    );
  return <FullPageLoader />;
};

const AuthRouterWithProfile = withProfile(AuthRouterPaths);
const AuthRouter: FC = () => <AuthRouterWithProfile shouldCallApi />;
export default withApolloProvider(AuthRouter);
