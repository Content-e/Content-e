import { FC } from "react";
import withApolloProvider from "hooks/apollo/withApollo";
import { Redirect, Route, Switch } from "react-router-dom";
import { UnAuthFullNameProvider } from "state/auth";
import { UnAuthRoutes as path, UnknownType } from "utils";
import {
  LandingPage,
  ForgetPasswordPage,
  LoginPage,
  RegisterPage,
  ResetPasswordPage,
  ReverifyPage,
  SubForgetPass,
  SubLanding,
  SubLogin,
  SubRegister,
  SubResetPass,
  SubReverify,
} from "pages";

const UnAuthRouter: FC = () => {
  return (
    <UnAuthFullNameProvider>
      <Switch>
        <Route exact path={path.Landing} component={LandingPage} />
        <Route exact path={path.SubLanding} component={SubLanding} />

        <Route exact path={path.Login} component={LoginPage} />
        <Route exact path={path.SubLogin} component={SubLogin} />

        <Route exact path={path.Register} component={RegisterPage} />
        <Route exact path={path.SubRegister} component={SubRegister} />

        <Route exact path={path.Reverify} component={ReverifyPage} />
        <Route exact path={path.SubReverify} component={SubReverify} />

        <Route exact path={path.ResetPassword} component={ResetPasswordPage} />
        <Route exact path={path.SubResetPassword} component={SubResetPass} />

        <Route
          exact
          path={path.ForgetPassword}
          component={ForgetPasswordPage}
        />
        <Route exact path={path.SubForgetPassword} component={SubForgetPass} />

        <Route component={(): UnknownType => <Redirect to={path.Login} />} />
      </Switch>
    </UnAuthFullNameProvider>
  );
};

export default withApolloProvider(UnAuthRouter);
