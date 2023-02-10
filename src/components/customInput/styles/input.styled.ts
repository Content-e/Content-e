import styled from "styled-components";

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #e2e1e5;
  border-radius: 5px;
  height: 48px;
  padding: 10px 15px;
  margin-top: 17px;

  &:focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

export const ParagraphError = styled.p`
  margin-bottom: 0;
  color: #e9d8a6;
  text-align: right;
  font-size: 0.75rem;
`;
