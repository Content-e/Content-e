import React, { FC } from "react";
import GoogleButton from "react-google-button";
import * as S from "./styles";

export const GoogleLogin: FC = () => {
  const ongGoogleLogin = (): void => {};

  return (
    <S.GoogleButtonCanvas>
      <GoogleButton className="googleButton" onClick={ongGoogleLogin} />
    </S.GoogleButtonCanvas>
  );
};

export default GoogleLogin;
