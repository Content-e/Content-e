import { FC } from 'react';
import withApolloProvider from 'hooks/apollo/withApollo';
import { Redirect, Route, Switch } from 'react-router-dom';
import { UnAuthFullNameProvider } from 'state/auth';
import { UnAuthRoutes as path, UnknownType } from 'utils';
import { LoginPage, RedirectClerk } from 'pages';
import AdminLogin from 'components/adminLogin/adminLogin';
import { TermsAndConditions } from '../pages/termsAndConditions';

const UnAuthRouter: FC = () => {
  return (
    <UnAuthFullNameProvider>
      <Switch>
        <Route exact path={path.ClerkRedirect} component={RedirectClerk} />
        <Route
          exact
          path={path.TermsAndConditions}
          component={TermsAndConditions}
        />
        <Route exact path={path.Login} component={LoginPage} />
        <Route exact path={path.SignUp} component={LoginPage} />
        <Route exact path={path.ForgotPass} component={LoginPage} />
        <Route exact path={path.AdminLogin} component={AdminLogin} />
        <Route component={(): UnknownType => <Redirect to={path.Login} />} />
      </Switch>
    </UnAuthFullNameProvider>
  );
};

export default withApolloProvider(UnAuthRouter);
