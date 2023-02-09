import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #005f73;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const LoginCanvas = styled.div`
  width: 380px;
`;

export const TopHeading = styled.div`
  font-family: "Lato";
  /* font-style: normal; */
  font-weight: 600;
  font-size: 44px;
  line-height: 53px;
  text-align: center;
  color: #ffffff;
`;

export const SmHeading = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #e9d8a6;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #e9d8a6;
  margin: 45px 0 30px;
`;

export const InputCanvas = styled.div`
    display: flex;
    flex-direction: column;
    
}`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #e9d8a6;
  margin: 20px 0 45px;
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #e9d8a6;
`;

export const InfoTextLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Inter";
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #e9d8a6;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    color: #e9d8a6;
    text-decoration: underline;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const AuthButton = styled.button`
  padding: 10px 15px;
  width: 116px;
  height: 40px;
  background: #e9d8a6;
  border: 1px solid #ffffff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #005f73;

  &:hover {
    background: #ffe69b;
  }
`;

export const AuthButtonWhite = styled.button`
  padding: 10px 15px;
  /* position: absolute; */
  width: 116px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #005f73;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #005f73;

  &:hover {
    background: #eee;
  }
`;
