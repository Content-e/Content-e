import withApolloProvider from "hooks/apollo/withApollo";
import { SidebarLayout } from "layout";
import { FC } from "react";
import { Switch } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { ProfileProps } from "utils";

const AuthRouterPaths: FC<ProfileProps> = () => {
  return (
    <Switch>
      <SidebarLayout>
        {/* <Route exact path={path.Explore} component={ExplorePage} /> */}
      </SidebarLayout>
    </Switch>
  );
};

export const AuthRouterWithProfile = withProfile(AuthRouterPaths);
const AuthRouter: FC = () => <AuthRouterWithProfile shouldCallApi />;
export default withApolloProvider(AuthRouter);
