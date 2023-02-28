import styled from "styled-components";

export const Heading = styled.div`
  text-align: left;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 20px;
  color: #1c1c1c;
  margin-top: 15px;
`;

export const Body = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 28px;
  color: #001219;
  margin-top: 8px;
  width: 100%;

  @media only screen and (min-width: 992px) {
    width: 90%;
  }

  @media only screen and (min-width: 1200px) {
    width: 72%;
  }
`;
