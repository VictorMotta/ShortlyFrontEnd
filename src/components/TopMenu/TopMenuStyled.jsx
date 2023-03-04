import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MODEL_COLOR } from '../../constants/colors.js';

export const MainContainerTopMenu = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  align-items: center;
`;

export const ImageLogoStyled = styled.img`
  width: 200px;
  cursor: pointer;
`;

export const ContainerMenuUnauthenticated = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: ${(props) => props.pagDiferent};
`;

export const LinkMenu = styled(Link)`
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${MODEL_COLOR};
  margin-left: 22px;
  cursor: pointer;
`;

export const ContainerMenuAuthenticated = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: ${(props) => props.pagDiferent};
`;

export const ContainerMenuCenterAuthenticated = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ContainerMenuUserAuthenticated = styled.div`
  width: 38%;
  display: flex;
  justify-content: center;
  h1 {
    font-family: 'Lexend Deca', sans-serif;
    text-decoration: none;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: ${MODEL_COLOR};
  }
`;
