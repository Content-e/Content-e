import styled from "styled-components";

export const CheckBoxWrapper = styled.div``;

export const CheckBoxTick = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 13px;
  width: 13px;
  background: transparent;
  border: 2px solid #a1a1a1;
  border-radius: 2px;
  &::after {
    display: none;
    content: "";
    position: absolute;
    left: 2.5px;
    top: -1px;
    width: 5px;
    height: 10px;
    border: 1px solid #d1d1d1;
    border-width: 0 1.5px 1.5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &.tickMark {
    background-color: transparent;
    &::after {
      display: block;
    }
  }
`;
export const CheckBoxlabel = styled.div`
  display: block;
  position: relative;
  padding-left: 9px;
  margin-bottom: 0px;
  margin-top: -5px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
  color: #2d3748;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CheckInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 12px;
  width: 12px;
  left: 0px;
  z-index: 2;
`;
