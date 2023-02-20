import styled from "styled-components";

export const BrandNameBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  margin-top: 15px;
  width: 100%;

  @media only screen and (min-width: 426px) {
    flex-direction: row;
    gap: none;
  }
`;

export const BrandInputCanvas = styled.div`
  width: 100%;

  @media only screen and (min-width: 526px) {
    width: 80%;
  }

  &.small {
    width: inherit;

    @media only screen and (min-width: 525px) {
      width: auto;
    }
  }
`;

export const BrandInput = styled.input`
  min-width: 200px;
  width: 100%;
  line-height: 26px;
  padding: 10px 15px;
  border: 1px solid #e2e1e5;
  border-radius: 5px;
  width: 100%;
  font-family: "Lato";
  font-size: 14px;

  &.small {
    width: inherit;

    @media only screen and (min-width: 525px) {
      width: 380px;
    }

    &::placeholder {
      opacity: 0.5;
    }
  }
`;

export const SuggestionButton = styled.button`
  padding: 8px 15px;
  background: #e9d8a6;
  border: 1px solid #ffffff;
  border-radius: 5px;
  margin: 0px 0 0px 10px;
  background: #ffffff;
  border: 1px solid #005f73;
  color: #005f73;
  border-radius: 5px;
  padding: 10px 25px;
  font-size: 12px;
  line-height: 18px;
  font-family: "Lato";

  &.separateBtn {
    margin-bottom: 20px;
  }

  &.hideButton {
    display: none;

    @media only screen and (min-width: 526px) {
      display: block;
      opacity: 0;
      pointer-events: none;
      user-select: none;
    }
  }

  &:hover {
    background: #005f73;
    color: #ffffff;
  }

  &.disabled,
  &.disabled:hover {
    background: #d2d2d2 !important;
    opacity: 0.7 !important;
    box-shadow: none !important;
    outline: none !important;
    text-decoration: none !important;
    color: #333 !important;
    border: 1px solid #333;
  }
`;
