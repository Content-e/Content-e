import styled from "styled-components";

export const BrandNameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const BrandInput = styled.input`
    min-width: 200px;
    max-width: 650px;
    width: 100%;
    line-height: 24px;
    padding: 10px 15px;
    border: 1px solid #E2E1E5;
    border-radius: 5px;
    margin-top: 15px;

    &.small {
      max-width: 380px;
    }
    &::placeholder {
      opacity: 0.5;
    }
}`;

export const SuggestionButton = styled.button`
  padding: 8px 15px;
  background: #e9d8a6;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin: 15px 0 0px 36px;
  font-size: 14px;
  line-height: 28px;
  text-align: center;
  color: #005f73;
  font-family: "Inter";

  &.separateBtn {
    margin-bottom: 20px;
  }

  &:hover {
    background: #ffe69b;
  }

  &.disabled,
  &.disabled:hover {
    background: #eee !important;
    color: rgba(0, 0, 0, 0.4) !important;
  }
`;
