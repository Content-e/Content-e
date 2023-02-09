import styled from "styled-components";

export const CheckBoxWrapper = styled.div``;

export const CheckBoxTick = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  background: transparent;
  border: 1px solid #e9d8a6;
  border-radius: 5px;
  &::after {
    display: none;
    content: "";
    position: absolute;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: 1px solid #e9d8ad;
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
  padding-left: 16px;
  margin-bottom: 0px;
  margin-top: -7.5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;
  color: #121f3e;
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
  height: 15px;
  width: 15px;
  left: 0px;
  z-index: 2;
`;
