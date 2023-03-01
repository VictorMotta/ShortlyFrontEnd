import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainerTopMenu = styled.div`
  width: 100%;
  height: 30px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
`;

export const ContainerMenuUnauthenticated = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
`;

export const LinkMenu = styled(Link)`
  font-family: "Lexend Deca", sans-serif;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #9c9c9c;
  margin-left: 22px;
  cursor: pointer;
`;

export const ContainerMenuAuthenticated = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: "Lexend Deca", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #5d9040;
  }
`;
