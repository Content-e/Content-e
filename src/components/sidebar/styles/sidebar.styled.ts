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
    width: 179px;
    display: flex;
    opacity: 1;
    background: transparent;
  }

  @media only screen and (min-width: 1200px) {
    width: 179x;
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
  margin-top: 49px;
  text-align: center;
`;
export const Heading = styled.div`
  color: #005f73;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
export const SubHeading = styled.div`
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
  margin-top: 62px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Username = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  color: #409094;
  font-family: "Comfortaa", cursive;
`;
export const Image = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-right: 5px;
  margin-top: -4px;

  & img {
    max-width: 100%;
  }
`;
export const SidebarMenu = styled.div`
  margin-top: 60px;
  width: 100%;
`;
export const SidebarMenuItem = styled.div`
  display: flex;
  height: 30px;
  margin: 0 10px;
  align-items: center;
  justify-content: flex-start;
  color: #001219;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
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
    background: #ee9b00;
  }
`;
export const ArrowIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  display: flex;

  @media only screen and (min-width: 1200px) {
    margin-left: 18px;
  }
`;
export const MenuIcon = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 4px;
  display: flex;

  @media only screen and (min-width: 1200px) {
    margin: 0 4px;
  }

  @media only screen and (min-width: 1440px) {
    margin: 0 6px;
  }
`;
export const LogoutBtn = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 16px;
  gap: 3.5px;
  color: #a1a1a1;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
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
