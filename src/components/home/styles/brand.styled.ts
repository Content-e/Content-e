import styled from "styled-components";

export const BrandTopWrapper = styled.div`
  margin: 0;
  width: 100%;

  @media only screen and (min-width: 600px) {
    margin-left: 60px;
    width: auto;
  }
`;

export const BrandWrapper = styled.div``;

export const BrandName = styled.div`
  font-family: "Lato";
  font-size: 14px;
  line-height: 28px;
  color: #001219;
  margin-top: 10px;

  &.firstChild {
    margin-top: 40px;
  }
`;

export const BrandBoldTitle = styled.span`
  font-family: "LatoBold";
  margin-right: 5px;
`;

export const BrandBoldHead = styled.div`
  font-family: "LatoBold";
`;

export const EditBtnCanvas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 10px;
`;
export const EditBrandButton = styled.div`
  padding: 11px 60px;
  background: linear-gradient(180deg, #005f73 0%, #0a9396 100%);
  border-radius: 4px;
  cursor: pointer;

  font-family: "Lato";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;

  &:hover {
    background: linear-gradient(180deg, #227fa5 0%, #2cb5b8 100%);
  }
`;
