import { FC } from "react";
import * as Styled from "./styles";

export type PropType = {
  color?: string;
};
const IconLoader: FC<PropType> = ({ color }) => {
  return <Styled.LoadingSpinner color={color} />;
};

export default IconLoader;
