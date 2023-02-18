import styled from "styled-components";

export const BrandPageWrapper = styled.div`
  background: rgba(242, 242, 242, 0.35);
  border-radius: 8px;
  padding: 13px 30px;
  position: relative;
`;
export const CrossIcon = styled.div`
  position: absolute;
  right: 14px;
  top: 14px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    max-width: 100%;
  }
`;
