import styled from "styled-components";

export const TopCanvas = styled.div`
  background: rgba(242, 242, 242, 0.35);
  border-radius: 8px;
  padding: 13px 16px;
`;
export const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
  }
`;
