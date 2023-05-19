import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  padding: 38px 40px;
  background: #f3f8f;
  gap: 40px;
  font-family: "Google Sans", Arial, sans-serif;
  font-weight: 400;
  color: #fff;
  background: #f3f8f8;
  @media screen and (max-width: 1280px) {
    padding-top: 96px;
    padding-bottom: 87px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const ParentWrapper = styled.div`
  width: 100%;
  overflow: auto;
  @media only screen and (max-width: 768px) {
    overflow: auto;
  }
`;
export const TitleMenu = styled.div`
  display: none;
  align-items: center;
  justify-content: flex-start;

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const Footer = styled.div`
  .mobile-footer {
    bottom: 0;
    margin-top: 63px;
    position: relative;
  }
`;

export const PageTitle = styled.div`
  margin: 0px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #1c1c1c;
`;

export const AppMain = styled.div`
  width: 100%;
  position: relative;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    padding: 0;
    min-height: calc(100vh - 187px);
  }
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: 24px;
  padding: 2px;
  margin-right: 10px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  display: flex;

  @media only screen and (min-width: 769px) {
    display: none;
  }
`;
