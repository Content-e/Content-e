import React, { FC, useState } from "react";
import { Input } from "components";
import * as S from "./styles";
import GoogleLogin from "../googleLogin";
import Checkbox from "../checkbox";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (): void => {};
  const onSignUp = (): void => {};
  const onForget = (): void => {};

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
        <S.InfoBox>
          <S.InfoTextWrapper>
            <Checkbox />
            <S.InfoText>Remember me</S.InfoText>
          </S.InfoTextWrapper>
          <S.InfoTextLink onClick={onForget}>Forgot Password</S.InfoTextLink>
        </S.InfoBox>

        <S.ButtonWrapper>
          <S.AuthButton onClick={onLogin}>Login</S.AuthButton>
          <S.AuthButtonWhite onClick={onSignUp}>Sign up</S.AuthButtonWhite>
        </S.ButtonWrapper>

        <GoogleLogin />
      </S.LoginCanvas>
    </S.LoginWrapper>
  );
};

export default Login;
