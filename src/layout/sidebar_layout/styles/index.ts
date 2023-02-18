import styled from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-grow: 1;
  height: 100vh;
  overflow: hidden;
`;

export const TitleMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 50px 0 10px;
`;

export const PageTitle = styled.div`
  margin: 0px;
  font-family: "LatoLight";
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 22px;
  color: #1c1c1c;
`;

export const AppMain = styled.div`
  width: 100%;
  border: 1px solid #ffffff;
  box-shadow: 0px 0px 4px rgb(0 0 0 / 20%);
  padding: 0px 20px;
  position: relative;
  overflow: auto;
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
