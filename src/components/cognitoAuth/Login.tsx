import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import AwsConfig from '../../hooks/apollo/awsConfig';
import { Amplify, } from 'aws-amplify';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import VerificationInput from 'react-verification-input';
import { useHistory, useLocation } from 'react-router-dom';
import { Input } from 'components/input/Input';

Amplify.configure(AwsConfig);

export type SignInParameters = {
  email: string;
  password: string;
};

type LoginProps = {
  callback: ({ email, password }: SignInParameters) => Promise<void>,
  register: UseFormRegister<SignInParameters>
}

export const CognitoLogin = ({register}:LoginProps) => {

const validationReq = {
  required: 'Password is required',
  minLength: {
    value: 8,
    message: 'Length must be 8 or more',
  }
}

  return (
    <>
      <IputWrap>
        <Input {...{ type: 'email', placeholder: 'Email address', register, valitaionReq: {required: 'Email is required'} }} />
      </IputWrap>
      <IputWrap1>
        <Input {...{ type: 'password', placeholder: 'Password', register, validationReq }} />
      </IputWrap1>
    </>
  );
};

const IputWrap = styled.div`
  position: relative;
  margin-bottom: 26px;
`;

const IputWrap1 = styled.div`
  position: relative;
  margin-bottom: 16px;
`;


export default CognitoLogin;
