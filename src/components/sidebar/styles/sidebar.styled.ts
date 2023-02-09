import styled from "styled-components";

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: auto;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  width: 257px;
  border-radius: 0px 8px 8px 0px;
  background: #ffffff;
  padding: 0px 20px 20px 20px;
  border-right: 1px solid #e0e0e0;
  box-shadow: 2px 8px 30px 2px rgb(55 55 55 / 25%);
  transition: all 0.2s ease-in-out 0s;
  opacity: 0;
  pointer-events: none;
  z-index: 4;
  @media only screen and (min-width: 992px) {
    position: relative;
    border-radius: 0px;
    width: 240px;
    box-shadow: none;
    opacity: 1;
    pointer-events: all;
  }
  @media only screen and (min-width: 1200px) {
    width: 257px;
  }
  &.show {
    transition: all 0.2s ease-in-out 0s;
    opacity: 1;
    pointer-events: all;
  }
`;
