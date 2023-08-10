import styled from "styled-components/macro";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Row = styled(Center)`
`
export const Column = styled(Center)`
  flex-direction: column;
`
export const ButtonBlack = styled(Center)`
  background-color: #101010;
  font-family: Inter, sans-serif;
  font-size: 16px;
  border-radius: 60px;
  color: #fff;
  padding: 12px 32px;
  font-weight: 500;
  cursor: pointer;
`