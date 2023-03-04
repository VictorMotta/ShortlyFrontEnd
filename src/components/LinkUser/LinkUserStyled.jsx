import styled from 'styled-components';
import { MODEL_COLOR } from '../../constants/colors';

export const MainContainerLinkUserStyled = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 42px;
`;

export const ContainerInfoLinkUserStyled = styled.div`
  width: 85%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  background: ${MODEL_COLOR};
  padding: 21px;
  box-shadow: 0px 4px 24px rgba(145, 145, 145, 0.12);
  border-radius: 12px 0px 0px 12px;
  cursor: pointer;
`;

export const InfoLinkUserStyled = styled.h1`
  width: 30%;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;
  word-wrap: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
`;

export const IconLinkUserStyled = styled.div`
  width: 15%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(145, 145, 145, 0.12);
  border-radius: 0px 12px 12px 0px;
  font-size: 26px;
  color: ${MODEL_COLOR};
  cursor: pointer;
  transition: all 0.3s linear;
  :hover {
    color: #fff;
    background: ${MODEL_COLOR};
  }
`;
