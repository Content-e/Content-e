import withApolloProvider from "hooks/apollo/withApollo";
import { SidebarLayout } from "layout";
import { AuthorizeTikTokStep, BrandStepsPage, MainPage } from "pages";
import { FC } from "react";
import { Route, Switch } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { AuthRoutes, ProfileProps } from "utils";

const AuthRouterPaths: FC<ProfileProps> = () => {
  return (
    <Switch>
      <Route exact path={AuthRoutes.Tiktok} component={AuthorizeTikTokStep} />
      <SidebarLayout>
        <Route exact path={AuthRoutes.Home} component={MainPage} />
        <Route exact path={AuthRoutes.Brand} component={MainPage} />
        <Route exact path={AuthRoutes.EditBrand} component={BrandStepsPage} />
      </SidebarLayout>
    </Switch>
  );
};

export const AuthRouterWithProfile = withProfile(AuthRouterPaths);
const AuthRouter: FC = () => <AuthRouterWithProfile shouldCallApi />;
export default withApolloProvider(AuthRouter);
