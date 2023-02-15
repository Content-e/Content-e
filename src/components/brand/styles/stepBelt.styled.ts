import styled from "styled-components";

export const StepBeltWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 430px;
  margin: 100px auto 30px;
`;
export const StepBelt = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
}`;
export const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background: #eff0f7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 16px;
  line-height: 28px;
  font-family: "Lato";
  color: #005f73;
  cursor: pointer;

  &.active {
    background: #005f73;
    color: white;
  }
`;
export const StepBar = styled.div`
  width: 115px;
  height: 7px;
  background: #eff0f7;
  border-radius: 20px;
  margin: 0 21px;
  position: relative;

  & span {
    border-radius: 20px;
    background: #005f73;
    position: absolute;
    width: 50%;
    height: 7px;
    &.active {
      width: 100%;
    }
  }
`;
export const StepBtnHandler = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin-top: 24px;
`;
