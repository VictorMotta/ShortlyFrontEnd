import styled from "styled-components";
import { MODEL_COLOR } from "../../constants/colors";

export const MainContainerLoginStyled = styled.div`
  width: 100%;
  min-height: 80vh;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormLoginStyled = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputLoginStyled = styled.input`
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(120, 177, 89, 0.25);
  box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
  border-radius: 12px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: ${MODEL_COLOR};
  padding: 21px;
  margin-bottom: 25px;
  ::placeholder {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9c9c9c;
  }
`;

export const ButtonLoginStyled = styled.button`
  background: ${MODEL_COLOR};
  border-radius: 12px;
  padding: 21px 55px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  margin-top: 35px;
  cursor: pointer;
  transition: all 0.3s linear;
  :hover {
    background: #fff;
    color: ${MODEL_COLOR};
    border: 3px solid ${MODEL_COLOR};
  }
`;
