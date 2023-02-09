import { Auth } from "aws-amplify";
import { AuthProps, initialAuthContext, ProfileProps } from "utils";
import { FC, Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { withProfile } from "state/profileSteps";
import { withAuth } from "../../state/auth";

export const LogoutPage: FC<ProfileProps & AuthProps> = ({
  cleanProfileState,
  setAuthState,
}) => {
  const history = useHistory();
  const logUserOut = async (): Promise<void> => {
    await Auth.signOut();
    setAuthState({ ...initialAuthContext });
    cleanProfileState();
    history.push("/login");
  };
  useEffect(() => {
    logUserOut();
  }, []);
  return <Fragment />;
};

export default withAuth(withProfile(LogoutPage));
