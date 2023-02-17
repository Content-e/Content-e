import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: relative;
  background: white;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

export const LoginBanner = styled.div`
  height: 100vh;
  width: 45vw;

  & img {
    height: 100%;
    width: 100%;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const LoginCanvas = styled.div`
  position: relative;
  width: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 200px;
  align-items: flex-start;

  @media only screen and (max-width: 1024px) {
    margin-left: 100px;
  }

  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export const TopHeading = styled.div`
  text-align: center;
  color: #005f73;
  font-family: "Lato";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`;

export const SmHeading = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  color: #001219;
`;

export const Title = styled.div`
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #ee9b00;
  margin: 20px 0 2px;
  text-align: left;
  width: 100%;
`;

export const InputCanvas = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #2d3748;
  margin: 10px 0 0;
  width: 100%;
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: #2d3748;
`;

export const InfoTextLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Inter";
  text-decoration: none;
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  color: #007aff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const AuthButton = styled.button`
  width: 100%;
  margin-top: 20px;
  height: 35px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background: linear-gradient(180deg, #005f73 0%, #0a9396 100%);
  border-radius: 5px;
  width: 100%;
  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;

  &:hover,
  &:focus-visible {
    background: linear-gradient(180deg, #227fa5 0%, #2cb5b8 100%);
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export const AuthOtherOption = styled.div`
  margin-top: 40px;
  text-align: center;
  width: 100%;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 9.87838px;
  line-height: 14px;
  letter-spacing: -0.02em;
  color: #2d3748;
`;

export const AuthButtonWhite = styled.span`
  color: #007aff;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
