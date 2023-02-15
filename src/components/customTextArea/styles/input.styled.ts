import styled from "styled-components";

export const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #e2e1e5;
  border-radius: 5px;
  width: 100%;
  margin: 15px 0 20px;
  resize: none;
  font-size: 14px;
  line-height: 28px;
  padding: 10px 15px;

  &.small_box {
    width: 90%;
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
