import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  height: 100vh;
  overflow: hidden;
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
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%);
  padding: 49px 20px 0;
  position: relative;
  overflow: auto;

  @media only screen and (max-width: 768px) {
    padding: 30px 33px 43px;
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
