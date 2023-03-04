import styled from 'styled-components';
import { MODEL_COLOR } from '../../constants/colors';

export const MainContainerHomeUserStyled = styled.div`
  width: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerTitleHomeUserStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLinkStyled = styled.div`
  font-size: 56px;
  width: 56px;
  color: ${MODEL_COLOR};
`;

export const TitleHomeUserStyled = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  margin-left: 20px;
  color: ${MODEL_COLOR};
  font-family: 'Lexend Deca';
`;

export const FormSendLinkStyled = styled.form`
  width: 60%;
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
`;

export const InputUrlStyled = styled.input`
  width: 70%;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.25);
  box-shadow: 0px 4px 24px rgba(121, 121, 121, 0.12);
  border-radius: 12px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #9c9c9c;
  padding: 21px;
  ::placeholder {
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #9c9c9c;
  }
`;

export const ButtonSendUrlStyled = styled.button`
  background: ${MODEL_COLOR};
  border-radius: 12px;
  padding: 21px 44px;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;
  :hover {
    background: #ffffff;
    color: ${MODEL_COLOR};
    border: 1px solid ${MODEL_COLOR};
  }
`;

export const ContainerLinksUserStyled = styled.div`
  margin-top: 59px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoNewLinkStyled = styled.h1`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: ${MODEL_COLOR};
  margin-top: 70px;
`;
