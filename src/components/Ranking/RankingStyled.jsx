import styled from 'styled-components';
import { MODEL_COLOR } from '../../constants/colors';
import { Link } from 'react-router-dom';

export const MainContainerRankingStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContainerTitleStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleTrophyStyled = styled.div`
  font-size: 56px;
  width: 56px;
  color: ${MODEL_COLOR};
`;

export const TitleLetterStyled = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  margin-left: 20px;
  color: ${MODEL_COLOR};
  font-family: 'Lexend Deca';
`;

export const ContainerInfoRankingStyled = styled.div`
  width: 70%;
  padding: 19px 0px 10px 40px;
  background: #ffffff;
  border: 1px solid rgba(119, 119, 119, 0.25);
  box-shadow: 0px 4px 24px rgba(41, 41, 41, 0.12);
  border-radius: 24px;
  margin-top: 57px;
`;

export const H1InfoRankingStyled = styled.h1`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: ${MODEL_COLOR};
  margin-bottom: 13px;
`;

export const LinkCadastroStyled = styled(Link)`
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: ${MODEL_COLOR};
  margin-top: 82px;
  text-decoration: none;
  cursor: pointer;
`;

export const H1InfoNoRankingStyled = styled.h1`
  width: 100%;
  font-family: 'Lexend Deca';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: ${MODEL_COLOR};
  margin-bottom: 13px;
  text-align: center;
`;
