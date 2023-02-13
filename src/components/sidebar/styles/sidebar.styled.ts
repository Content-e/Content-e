import styled from "styled-components";

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100vh;
  width: 0px;
  border-radius: 0px 8px 8px 0px;
  background: #ffffff;
  transition: all 0.2s ease-in-out 0s;
  opacity: 0;
  z-index: 4;
  position: relative;
  pointer-events: all;
  margin: 0;

  @media only screen and (min-width: 992px) {
    width: 260px;
    opacity: 1;
    background: transparent;
    margin: 0px 20px 0px 0px;
  }
  &.show {
    margin: 0;
    width: 260px;
    opacity: 1;
    position: absolute;
    background: transparent;
  }
`;

export const SidebarPanel = styled.div`
  background: #005f73;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-grow: 0.9;
`;
export const TopHeader = styled.div`
  margin-top: 40px;
  text-align: center;
`;
export const Heading = styled.div`
  color: white;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
`;
export const SubHeading = styled.div`
  font-family: "Inter";
  font-size: 12px;
  line-height: 16px;
  color: #e9d8a6;
`;
export const ProfilePanel = styled.div`
  margin-top: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const Username = styled.div`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #d2d2d2;
`;
export const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;

  & img {
    max-width: 100%;
  }
`;
export const SidebarMenu = styled.div`
  margin: 50px 20px auto;
`;
export const SidebarMenuItem = styled.div`
  display: flex;
  margin-top: 12px;
  align-items: center;
  justify-content: flex-start;
  color: #001219;
  font-family: "Lato" !important;
  font-size: 14px;
  padding: 12px 34px 11px;
  border-radius: 10px;
  width: 215px;
  cursor: pointer;

  & img {
    max-width: 100%;
  }

  &.white {
    border: 1px solid white;
    background: white;

    &:hover {
      background: #eee;
      border-color: #eee;
    }
  }

  &.green {
    border: 1px solid #94d2bd;
    background: #94d2bd;

    &:hover {
      background: #5acfa8;
      border-color: #5acfa8;
    }
  }
`;
export const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 30px;
  margin-top: -3px;
`;
export const LogoutBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #e9d8a6;
  margin-bottom: 45px;
  font-family: "Inter";
  margin-left: -20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
export const LogoutIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 20px;
`;
