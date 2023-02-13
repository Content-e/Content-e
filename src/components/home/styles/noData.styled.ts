import styled from "styled-components";

export const NoDataWrapper = styled.div`
  margin-left: 60px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const NoDataTitle = styled.div`
  font-family: "Lato";
  font-size: 14px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #001219;
`;
export const NoDataButton = styled.div`
  margin-top: 14px;
  background: #e9d8a6;
  border: 1px solid #ffffff;
  border-radius: 5px;
  font-family: "Inter";
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  color: #005f73;
  cursor: pointer;
  padding: 6px 25px;

  &:hover {
    background: #ffe69b;
  }
`;
