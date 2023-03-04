import {
  MainContainerTopMenu,
  ContainerMenuUnauthenticated,
  ContainerMenuAuthenticated,
  LinkMenu,
  ImageLogoStyled,
  ContainerMenuCenterAuthenticated,
  ContainerMenuUserAuthenticated,
} from './TopMenuStyled.jsx';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const TopMenu = () => {
  const { authenticated, user, currentPage, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const backToHome = () => {
    navigate('/');
  };

  return (
    <MainContainerTopMenu>
      {!authenticated ? (
        <ContainerMenuUnauthenticated
          pagDiferent={
            currentPage == 'home' || currentPage == 'ranking' ? null : '1px solid #d4d4d4'
          }
        >
          <ImageLogoStyled onClick={backToHome} src={logo} alt='logo empresa' />
          <div>
            <LinkMenu to='/login'>Entrar</LinkMenu>
            <LinkMenu to='/cadastro'>Cadastrar</LinkMenu>
          </div>
        </ContainerMenuUnauthenticated>
      ) : (
        <ContainerMenuAuthenticated
          pagDiferent={
            currentPage == 'home' || currentPage == 'ranking' ? null : '1px solid #d4d4d4'
          }
        >
          <ImageLogoStyled onClick={backToHome} src={logo} alt='logo empresa' />
          <ContainerMenuCenterAuthenticated>
            <LinkMenu to='/'>Home</LinkMenu>
            <LinkMenu to='/ranking'>Ranking</LinkMenu>
          </ContainerMenuCenterAuthenticated>
          <ContainerMenuUserAuthenticated>
            <h1>Olá, {user.name}!</h1>
            <LinkMenu to='/' onClick={logout}>
              Sair
            </LinkMenu>
          </ContainerMenuUserAuthenticated>
        </ContainerMenuAuthenticated>
      )}
    </MainContainerTopMenu>
  );
};

export default TopMenu;
