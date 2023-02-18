import { Button, Modal } from "react-bootstrap";
import styled from "styled-components";

export const ModalWrapper = styled(Modal)`
  padding-left: 0px !important;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    height: 0px;
    width: 0px;
  }
  & .modal-dialog {
    max-width: 596px;
    padding: 20px;
    margin: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      height: 0px;
      width: 0px;
    }
  }
  &.vertically__top {
    & .modal-dialog {
      margin: 60px auto;
    }
  }
  &.xs__modal {
    & .modal-dialog {
      max-width: 400px;
    }
    & .modal-body {
      padding: 32px 24px;
    }
  }
  & .modal-content {
    background: #ffffff;
    border: none;
    box-shadow: none;
    border-radius: 10px;
  }
  & .modal-header {
    display: none;
  }
  & .modal-body {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 38px 20px 29px;
    border: none;
  }
  & .modal-footer {
    display: none;
  }
`;

export const ModalInputWrapper = styled.div`
  width: 100%;
  min-height: 210px;
`;

export const CrossIcon = styled.div`
  position: absolute;
  right: 25px;
  top: 25px;
  width: 23px;
  height: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & img {
    max-width: 100%;
  }
`;

export const ModalBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const PrimaryBtn = styled(Button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  text-decoration: none;
  margin: 10px 0 0;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;

  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #005f73;
  padding: 15px 70px;
  background: white;
  border-radius: 4px;
  outline: 1px solid #005f73;

  &.Poppins {
    font-family: "Poppins" !important;
  }

  &:disabled {
    background: #d2d2d2;
    opacity: 0.7;
    box-shadow: none;
    outline: none;
    text-decoration: none;
    color: #005f73;
  }

  &:not(:disabled):not(.disabled):active:focus,
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled):active,
  &:not(.btn-check).btn:hover,
  &.btn:focus-visible,
  &:hover,
  &:focus {
    background-color: #005f73;
    box-shadow: none;
    color: white;
  }
`;

export const OutlineBtn = styled(Button)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  text-decoration: none;
  margin: 10px 0 0;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;

  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;
  padding: 15px 70px;
  background: linear-gradient(180deg, #005f73 0%, #0a9396 100%);
  border-radius: 4px;

  &.Poppins {
    font-family: "Poppins" !important;
  }
  &:not(:disabled):not(.disabled):active:focus,
  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled):active,
  &:not(.btn-check).btn:hover,
  &.btn:focus-visible,
  &:hover,
  &:focus {
    background: linear-gradient(180deg, #227fa5 0%, #2cb5b8 100%);
    box-shadow: none;
    text-decoration: none;
  }
  &:disabled {
    background: #d2d2d2;
    opacity: 0.7;
    box-shadow: none;
    outline: none;
    text-decoration: none;
    color: #005f73;
  }
`;

export const ModalTitle = styled.div`
  font-size: 20px;
  line-height: 24px;
  color: #54595e;
  font-weight: 600;
  font-family: "Lato";
  text-align: center;
  margin: 0px 0px 27px 0px;
`;

export const LoaderCanvas = styled.div`
  position: relative;
  height: 210px;
`;

export const NoSuggestion = styled.div`
  text-align: center;
  color: rgba(0, 0, 0, 0.3);
  margin-top: 20px;
`;

export const SuggestionCanvas = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}`;
export const SuggestionBox = styled.div`
  background: #94d2bd;
  border-radius: 30px;
  font-family: "LatoLight";
  font-size: 18px;
  padding: 8px 16px;
  margin-right: 14px;
  cursor: pointer;

  &:hover,
  &.active {
    background: #04fba7;
  }
`;
