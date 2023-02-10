import { FC } from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import { Redirect, Route, Switch } from "react-router-dom";
import { UnAuthFullNameProvider } from "state/auth";
import { UnAuthRoutes as path, UnknownType } from "utils";
import { LoginPage, RegisterPage } from "pages";
import ReverifyPage from "pages/reverify";

const UnAuthRouter: FC = () => {
  return (
    <UnAuthFullNameProvider>
      <Switch>
        <Route exact path={path.Login} component={LoginPage} />
        <Route exact path={path.Register} component={RegisterPage} />
        <Route exact path={path.Reverify} component={ReverifyPage} />
        <Route component={(): UnknownType => <Redirect to={path.Login} />} />
      </Switch>
    </UnAuthFullNameProvider>
  );
};

export default withApolloProvider(UnAuthRouter);
