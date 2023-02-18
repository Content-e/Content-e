import styled from "styled-components";

export const TopWrapper = styled.div``;

export const TextAreaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const SubHeading = styled.div`
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #005f73;
`;
export const SuggestionBoxPanel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 45px;

  &.insertMargin {
    margin-top: 20px;
  }

  &.congusted {
    margin-left: 0px;
  }
`;

export const EmptySpace = styled.div`
  height: 40px;
`;
