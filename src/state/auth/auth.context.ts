import { createContext } from 'react';
import { initialAuthContext } from 'utils';
import {
  AuthContextType,
  IUnAuthUserName,
  TitleContextType,
} from '../types/authTypes';

export const AuthContext = createContext<AuthContextType>({
  authState: initialAuthContext,
  setAuthState: () => {},
});

export const TitleContext = createContext<TitleContextType>({
  title: '',
  setTitle: () => {},
});

export const UnAuthUserName = createContext<IUnAuthUserName>({
  fullName: '',
  setFullName: () => {},
});

export default AuthContext;
