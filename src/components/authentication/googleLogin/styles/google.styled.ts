import styled from "styled-components";

export const GoogleButtonCanvas = styled.div`
  margin-top: 90px;
  display: flex;
  align-items: center;
  justify-content: center;

  & .googleButton {
    color: #777 !important;
    font-weight: bold !important;
    background: white !important;
    width: 220px !important;
    display: flex !important;
    align-items: center !important;
    justify-content: flex-start !important;
    height: 46px !important;

    & span {
      margin-left: 7px !important;
    }

    & div {
      height: 45px !important;
    }
  }
`;
