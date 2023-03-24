import { FC } from "react";
import * as Styled from "./styles";

export type PropType = {
  color?: string;
  sayHello?: string;
};
const IconLoader: FC<PropType> = ({ color, sayHello }) => {
  return <Styled.LoadingSpinner color={color} sayHello={sayHello} />;
};

export default IconLoader;
