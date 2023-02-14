import styled from "styled-components";

export const BrandNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BrandInput = styled.input`
    width: 380px;
    line-height: 24px;
    padding: 10px 15px;
    border: 1px solid #E2E1E5;
    border-radius: 5px;
    margin-top: 15px;

    &::placeholder {
      opacity: 0.5;
    }
}`;

export const SuggestionButton = styled.button`
  padding: 8px 15px;
  background: #e9d8a6;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin-left: 36px;
  margin-top: 15px;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  color: #005f73;
  font-family: "Inter";

  &:hover {
    background: #ffe69b;
  }
`;
