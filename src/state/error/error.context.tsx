import { createContext } from 'react';
import { IErrorContextType } from 'utils';

const ErrorContext = createContext<IErrorContextType>({
  setErrorState: () => {},
  errorState: [],
});

export default ErrorContext;
