import {
  MainContainerTopMenu,
  ContainerMenuUnauthenticated,
  ContainerMenuAuthenticated,
  LinkMenu,
} from "./TopMenuStyled.jsx";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

const TopMenu = () => {
  const { authenticated, user } = useContext(AuthContext);

  return (
    <>
      <MainContainerTopMenu>
        {!authenticated ? (
          <ContainerMenuUnauthenticated>
            <div>
              <LinkMenu to='/login'>Entrar</LinkMenu>
              <LinkMenu to='/cadastro'>Cadastrar</LinkMenu>
            </div>
          </ContainerMenuUnauthenticated>
        ) : (
          <ContainerMenuAuthenticated>
            <div>
              <h1>Seja bem-vindo(a), {user.name} </h1>
            </div>
            <div>
              <LinkMenu to='/'>Home</LinkMenu>
              <LinkMenu to='/ranking'>Ranking</LinkMenu>
              <LinkMenu to='/sair'>Sair</LinkMenu>
            </div>
          </ContainerMenuAuthenticated>
        )}
      </MainContainerTopMenu>
    </>
  );
};

export default TopMenu;
