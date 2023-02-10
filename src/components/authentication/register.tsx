import React, { FC, useState } from "react";
import { Input } from "components";
import { useHistory } from "react-router-dom";
import * as S from "./styles";
import GoogleLogin from "./googleLogin";
import { UnAuthRoutes } from "utils";

export const Register: FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = (): void => {};
  const onLogin = (): void => history.push(UnAuthRoutes.Login);

  return (
    <S.LoginWrapper>
      <S.LoginCanvas>
        <S.TopHeading>Content-e</S.TopHeading>
        <S.SmHeading>Powered by Brain-e</S.SmHeading>
        <S.Title>
          Welcome to Content-e, use the form below <br /> to login or sign up.
        </S.Title>
        <S.InputCanvas>
          <Input value={email} onChange={setEmail} placeholder="Username" />
          <Input
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
          />
        </S.InputCanvas>

        <S.ButtonWrapper>
          <S.AuthButton onClick={onSignUp}>Sign up</S.AuthButton>
          <S.AuthButtonWhite onClick={onLogin}>Login</S.AuthButtonWhite>
        </S.ButtonWrapper>

        <GoogleLogin />
      </S.LoginCanvas>
    </S.LoginWrapper>
  );
};

export default Register;
