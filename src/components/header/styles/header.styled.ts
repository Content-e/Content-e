import { Dropdown } from "react-bootstrap";
import styled from "styled-components";

export const DashboardHeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 30px;
  min-height: 85px;
  z-index: 3;
  @media only screen and (min-width: 576px) {
    padding: 21px 30px;
    min-height: 93px;
  }
`;

export const ConditionalTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: #292a36;
  letter-spacing: 0.175px;
  margin: 0px 0px 0px 45px;
  font-family: "Platform";
  @media only screen and (min-width: 460px) {
    font-size: 20px;
    line-height: 26px;
  }

  @media only screen and (min-width: 576px) {
    font-size: 26px;
    line-height: 34px;
    margin: 0px 0px 0px 55px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media only screen and (min-width: 992px) {
    display: none;
    margin: 0px;
  }
`;

export const ToggleIcon = styled.div`
  position: fixed;
  bottom: auto;
  top: 26px;
  left: 30px;
  right: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  font-size: 12px;
  color: #222638;
  background: #ffffff;
  box-shadow: 2px 2px 8px 0px rgb(0 0 0 / 25%);
  border: none;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  margin: 0px;
  & i {
    &::before {
      color: #222638;
    }
  }
  &:hover,
  &:focus {
    text-decoration: none;
    background: #fafafa;
  }
  @media only screen and (min-width: 576px) {
    width: 36px;
    height: 36px;
    font-size: 14px;
    top: 28px;
  }
  @media only screen and (min-width: 992px) {
    display: none;
  }
`;

export const DashboardHeaderTitle = styled.div`
  display: none;
  width: 100%;
  font-size: 20px;
  line-height: 26px;
  font-weight: 500;
  color: #292a36;
  letter-spacing: 0.175px;
  margin: 0px;
  font-family: "Platform";
  @media only screen and (min-width: 576px) {
    font-size: 26px;
    line-height: 34px;
  }
  @media only screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;

export const DashboardHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DashboardHeaderIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  box-shadow: transparent;
  border: none;
  width: 28px;
  height: 28px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  color: #222638;
  margin-left: 8px;
  & i {
    &::before {
      color: #222638;
    }
  }
  &:hover,
  &:focus {
    background: transparent;
    box-shadow: transparent;
    border: none;
    text-decoration: none;
    & i {
      &::before {
        color: #767676;
      }
    }
  }
  @media only screen and (min-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
  &.red-dot {
    & i {
      position: relative;
      &::after {
        position: absolute;
        content: "";
        left: auto;
        right: -2px;
        top: 0px;
        bottom: auto;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: none;
        background: #ff4d5e;
      }
    }
  }
`;

export const DashboardHeaderCreditIcon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background: transparent;
  box-shadow: transparent;
  border: none;
  width: 28px;
  height: 28px;
  text-decoration: none;
  cursor: pointer;
  color: #222638;
  font-size: 16px;
  margin-left: 8px;
  & i {
    &::before {
      color: #222638;
    }
  }
  &:hover,
  &:focus {
    background: transparent;
    box-shadow: transparent;
    border: none;
    text-decoration: none;
    & i {
      &::before {
        color: #767676;
      }
    }
  }
  @media only screen and (min-width: 576px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

export const HeaderAvatarDropDownWrapper = styled.div`
  margin-left: 12px;
  @media only screen and (min-width: 576px) {
    margin-left: 20px;
  }
`;

export const AvatarDropDownIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 14px;
  margin: 0px 7.4px 0px 0px;
  font-weight: 400;
  color: #667085;
  & i {
    &::before {
      color: #667085;
    }
  }
`;

export const AvatarDropDownText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 12px;
  line-height: 16px;
  color: #37474f;
  font-weight: 400;
  margin: 0px;
`;

export const AvatarDropdownTag = styled(Dropdown)`
  & .btn-success {
    background: transparent;
    border: none;
    border-radius: 0px;
    color: #93989a;
    box-shadow: none;
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    min-width: fit-content;
    padding: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.show {
    & .btn-success.dropdown-toggle,
    & .btn-success.dropdown-toggle:focus {
      background: transparent;
      border: none;
      border-radius: 0px;
      color: #93989a;
      box-shadow: none;
    }
  }
  & .dropdown-toggle:not(:disabled):not(.disabled):active:focus,
  & .dropdown-toggle:not(:disabled):not(.disabled):active,
  & .dropdown-toggle:hover,
  & .dropdown-toggle:focus {
    background: transparent;
    border: none;
    border-radius: 0px;
    color: #93989a;
    box-shadow: none;
  }

  & .dropdown-toggle:after {
    content: none;
  }

  & .dropdown-menu {
    width: 100%;
    background: #ffffff;
    box-shadow: 0px 14.5534px 29.1069px -2.64608px rgba(159, 159, 159, 0.15);
    border-radius: 1.85px;
    padding: 6px 0px;
    min-width: 151px;
    max-height: 423px;
    overflow-x: hidden;
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }
  }
  & .dropdown-item {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    line-height: 16px;
    color: #37474f;
    font-weight: 400;
    padding: 7.5px 18px;
    margin: 0px;
    cursor: pointer;
  }

  & .dropdown-item:hover,
  & .dropdown-item:focus,
  & .dropdown-item:active {
    color: #37474f;
    background-color: #e9ecef;
  }
`;

export const DashboardHeaderAvatar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  border: none;
  border-radius: 50%;
  margin: 0px;
  &:hover,
  &:focus {
    text-decoration: none;
  }

  @media only screen and (min-width: 576px) {
    width: 50px;
    height: 50px;
  }
  & img {
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
