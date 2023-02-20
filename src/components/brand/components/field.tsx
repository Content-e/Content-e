import ShouldRender from "components/shouldRender";
import { FC, Fragment } from "react";
import * as S from "../styles";

interface Props {
  heading: string;
  body?: Array<string>;
}
export const Field: FC<Props> = ({ heading, body }) => {
  return (
    <Fragment key="field box">
      <S.Heading>{heading}</S.Heading>
      <ShouldRender if={body?.length}>
        <Fragment key="description body">
          {body?.map((text, index) => (
            <S.Body key={`${heading}-${index}`}>{text}</S.Body>
          ))}
        </Fragment>
      </ShouldRender>
    </Fragment>
  );
};

export default Field;
