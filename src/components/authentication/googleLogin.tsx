import React, { FC } from "react";
import * as S from "./styles";

export const GoogleLogin: FC = () => {
  return (
    <S.GoogleButtonCanvas>
      <S.GoogleButton>
        <S.GoogleLogo>
          <img src="/images/googleLogo.svg" alt="google logo" />
        </S.GoogleLogo>
        Sign-in with google
      </S.GoogleButton>
    </S.GoogleButtonCanvas>
  );
};

export default GoogleLogin;
