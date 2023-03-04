import { HiTrash } from 'react-icons/hi';
import {
  MainContainerLinkUserStyled,
  ContainerInfoLinkUserStyled,
  InfoLinkUserStyled,
  IconLinkUserStyled,
} from './LinkUserStyled';
import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import apiUser from '../../services/apiUser';
import { useNavigate } from 'react-router-dom';

const LinkUser = ({ item, shortenedUrls, setShortenedUrls }) => {
  const { token } = useContext(AuthContext);

  const deleteLink = () => {
    const checkDelete = window.confirm('Deseja realmente deletar esse link?');

    if (!checkDelete) {
      return null;
    }

    apiUser.deleteLink(item.id, token).then((res) => {
      if (res.status === 204) {
        alert('Deletado com sucesso!');
      }

      if (shortenedUrls) {
        const newList = shortenedUrls.filter((short) => short.id !== item.id);
        setShortenedUrls(newList);
        console.log(newList);
      }
    });
  };
  console.log(item);

  const openLink = () => {
    window.location.href = item.url;
  };

  return (
    <MainContainerLinkUserStyled onClick={openLink}>
      <ContainerInfoLinkUserStyled>
        <InfoLinkUserStyled>{item.url}</InfoLinkUserStyled>
        <InfoLinkUserStyled>{item.shortUrl}</InfoLinkUserStyled>
        <InfoLinkUserStyled>Quantidade de visitantes: {item.visitCount}</InfoLinkUserStyled>
      </ContainerInfoLinkUserStyled>
      <IconLinkUserStyled onClick={deleteLink}>
        <HiTrash />
      </IconLinkUserStyled>
    </MainContainerLinkUserStyled>
  );
};

export default LinkUser;
