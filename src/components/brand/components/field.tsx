import ShouldRender from "components/shouldRender";
import { FC, Fragment } from "react";
import * as S from "../styles";

interface Props {
  heading: string;
  body?: string;
}
export const Field: FC<Props> = ({ heading, body }) => {
  return (
    <Fragment key="field box">
      <S.Heading>{heading}</S.Heading>
      <ShouldRender if={body}>
        <S.Body>{body}</S.Body>
      </ShouldRender>
    </Fragment>
  );
};

export default Field;
