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
  padding: 6px 8px;
  border: none;
  border-bottom: 1px solid #e8e8e8;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #a1a1a1;
    padding-bottom: 12px;
  }
`;

export const ParagraphError = styled.p`
  margin-bottom: 0;
  color: red;
  text-align: right;
  font-size: 10px;
`;
