import styled from "styled-components";

export const InputLabel = styled.div`
  margin: 12px 0 2px;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 9.87838px;
  line-height: 14px;
  color: #2d3748;
`;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  height: 35px;
  padding: 5px 15px;
  font-size: 14px;

  &:focus {
    outline: none;
    border: 1px solid #616161;
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
