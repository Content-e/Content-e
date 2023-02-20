import React, { FC, useContext, useState } from "react";
import { Auth } from "aws-amplify";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { IconLoader, updateErrorState } from "components";
import * as S from "./styles";
import { withAuth } from "state/auth";
import { authFailedErrorHeading, AuthProps, IErrorContextType } from "utils";
import ErrorContext from "state/error/error.context";

export const GoogleLogin: FC<AuthProps> = ({ getAuth }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { setErrorState } = useContext<IErrorContextType>(ErrorContext);

  const continueWithGoogle = async (): Promise<void> => {
    setIsLoading(true);
    try {
      await Auth.federatedSignIn({
        provider: CognitoHostedUIIdentityProvider.Google,
      });
      getAuth();
    } catch (error) {
      setIsLoading(false);
      const { message } = error;
      updateErrorState(
        { title: authFailedErrorHeading, message },
        setErrorState
      );
    }
  };

  return (
    <S.GoogleButtonCanvas>
      <S.GoogleButton onClick={continueWithGoogle}>
        <S.GoogleLogo>
          <img src="/images/googleLogo.svg" alt="google logo" />
        </S.GoogleLogo>
        Sign-in with google {isLoading && <IconLoader />}
      </S.GoogleButton>
    </S.GoogleButtonCanvas>
  );
};

export default withAuth(GoogleLogin);
