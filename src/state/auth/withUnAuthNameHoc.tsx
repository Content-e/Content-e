import React, { FC, useContext } from "react";
import { UnAuthUserName } from "state/auth";
import { UnAuthUserNameProps } from "utils";

export function withUnAuthName<T>(
  Component: React.FC<T & UnAuthUserNameProps>
): React.FC<T> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const AuthConsumer: React.FC = (props: T) => {
    const { fullName, setFullName } = useContext(UnAuthUserName);
    const nameProps = { fullName, setFullName };

    return <Component {...props} {...nameProps} />;
  };
  return AuthConsumer as FC<T>;
}
export default withUnAuthName;
