import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: none;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  width: 0px;
  background: #ffffff;
  opacity: 0;
  z-index: 4;
  position: relative;
  pointer-events: all;
  margin: 0;

  @media only screen and (min-width: 769px) {
    width: 200px;
    display: flex;
    opacity: 1;
    background: transparent;
  }

  @media only screen and (min-width: 1200px) {
    width: 220px;
    opacity: 1;
    background: transparent;
  }

  @media only screen and (min-width: 1440px) {
    width: 240px;
    opacity: 1;
    background: transparent;
  }

  &.show {
    display: flex;
    margin: 0;
    width: 200px;
    opacity: 1;
    position: absolute;

    background: white;
    border-right: 1px solid black;
  }
`;

export const SidebarPanel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const TopHeader = styled.div`
  margin-top: 40px;
  text-align: center;
`;
export const Heading = styled.div`
  color: #005f73;
  font-family: "LatoBold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
export const SubHeading = styled.div`
  font-family: "LatoLight";
  font-size: 10px;
  line-height: 12px;
  color: #33363f;
`;
export const UnderLineCanvas = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 1px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UnderLine = styled.div`
  border-bottom: 1px solid #e5e5e5;
  width: 70px;
  height: 1px;
`;
export const ProfilePanel = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Username = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #1c1c1c;
`;
export const Image = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 10px;

  & img {
    max-width: 100%;
  }
`;
export const SidebarMenu = styled.div`
  margin-top: 55px;
  width: 100%;
`;
export const SidebarMenuItem = styled.div`
  display: flex;
  height: 30px;
  margin: 0 10px;
  align-items: center;
  justify-content: flex-start;
  color: #001219;
  font-family: "LatoLight" !important;
  font-size: 14px;
  border-radius: 8px;
  background: white;
  cursor: pointer;
  &.isActive,
  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;
export const SelectedLine = styled.div`
  width: 4px;
  background: transparent;
  height: 16px;
  border-radius: 8px;
  &.isActive {
    background: black;
  }
`;
export const ArrowIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 15px;
  display: flex;

  @media only screen and (min-width: 1200px) {
    margin-left: 18px;
  }
`;
export const MenuIcon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 6px;
  display: flex;

  @media only screen and (min-width: 1200px) {
    margin: 0 12px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 0 18px;
  }
`;
export const LogoutBtn = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;

  color: #e5e5e5;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const LogoutIcon = styled.div`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

export const CrossIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
