import withApolloProvider from "hooks/apollo/withApollo";
import { SidebarLayout } from "layout";
import { BrandStepsPage, MainPage } from "pages";
import CreatorDashboard from "pages/creatorDashboard/creatorDashboard";
import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { AuthRoutes, ProfileProps } from "utils";

const AuthRouterPaths: FC<ProfileProps> = () => {
  return (
    <Switch>
      <SidebarLayout>
        <Route exact path={AuthRoutes.Home} component={MainPage} />
        <Route exact path={AuthRoutes.Brand} component={MainPage} />
        <Route exact path={AuthRoutes.EditBrand} component={BrandStepsPage} />
        <Route
          exact
          path={AuthRoutes.CreatorDashboard}
          component={CreatorDashboard}
        />
      </SidebarLayout>
    </Switch>
  );
};

export const AuthRouterWithProfile = withProfile(AuthRouterPaths);
const AuthRouter: FC = () => <AuthRouterWithProfile shouldCallApi />;
export default withApolloProvider(AuthRouter);
