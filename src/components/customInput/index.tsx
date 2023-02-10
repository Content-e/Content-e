import React, { FC, Fragment } from "react";
import { ShouldRender } from "components";
import * as S from "./styles";
import {
  defaultInfoState,
  defaultSignUpState,
  defaultLoginState,
  defaultInfoError,
  defaultSignUpError,
  defaultLoginError,
} from "utils";

interface Handlers {
  state?:
    | typeof defaultInfoState
    | typeof defaultSignUpState
    | typeof defaultLoginState;
  error?:
    | typeof defaultInfoError
    | typeof defaultSignUpError
    | typeof defaultLoginError;
  updateState: (key: string, value: string) => void;
}
interface Props {
  type?: string;
  value?: string;
  placeholder?: string;
  errorVal?: string | null;
  handlers: Handlers;
  keyProp: string;
}
export const Input: FC<Props> = ({
  type,
  value,
  placeholder,
  errorVal,
  keyProp,
  handlers: { state, error, updateState },
}) => {
  return (
    <Fragment key="custom input">
      <S.Input
        type={type || "string"}
        placeholder={placeholder}
        value={state?.[keyProp] || value || ""}
        onChange={(e): void => updateState(keyProp, e.target.value)}
      />
      <ShouldRender if={error?.[keyProp] || errorVal}>
        <S.ParagraphError>{error?.[keyProp] || errorVal}</S.ParagraphError>
      </ShouldRender>
    </Fragment>
  );
};
