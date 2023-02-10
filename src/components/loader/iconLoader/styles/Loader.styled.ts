import styled, { css, keyframes } from "styled-components";
import { StyledProps } from "utils";
import { PropType } from "..";

export const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingSpinner = styled.span<PropType>`
  border: 1.5px solid #005f73;
  border-radius: 50%;
  border-top-color: transparent;
  opacity: 1;
  transition-delay: 200ms;
  width: 14px;
  margin-left: 10px;
  height: 14px;
  transition: opacity 200ms;
  animation: ${rotate} 1s linear;
  animation-iteration-count: infinite;
  ${(props): StyledProps =>
    props.color === "#4c40f7"
      ? css`
          border-top-color: #4c40f7;
        `
      : css``}
`;
