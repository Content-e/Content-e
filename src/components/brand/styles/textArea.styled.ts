import styled from "styled-components";

export const TextAreaCanvas = styled.div`
  width: 100%;
  &.small_box {
    width: 80%;
  }
`;

export const TextAreaBox = styled.div`
  position: relative;
`;

export const TextAreaLabel = styled.div`
  margin: 15px 0 -15px;
  font-family: "LatoLight";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #001219;
`;

export const EditIcon = styled.div`
  position: absolute;
  right: 1px;
  top: 16px;
  left: auto;
  bottom: auto;
  width: 36px;
  height: 36px;
  border-radius: 5px;
  cursor: pointer;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextArea = styled.textarea`
  background: #ffffff;
  border: 1px solid #e2e1e5;
  border-radius: 5px;
  width: 90%;
  margin: 15px 0 20px;
  resize: none;
  font-size: 14px;
  line-height: 28px;
  padding: 10px 15px;

  &.small_box {
    width: 100%;
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
