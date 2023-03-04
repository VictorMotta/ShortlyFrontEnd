import { useContext, useState, useEffect } from 'react';
import LinkUser from '../LinkUser/LinkUser.js';
import {
  MainContainerHomeUserStyled,
  ContainerTitleHomeUserStyled,
  IconLinkStyled,
  TitleHomeUserStyled,
  FormSendLinkStyled,
  InputUrlStyled,
  ButtonSendUrlStyled,
  ContainerLinksUserStyled,
  InfoNewLinkStyled,
} from './HomeUserStyled.jsx';
import { TbLink } from 'react-icons/tb';
import apiUser from '../../services/apiUser.js';
import { AuthContext } from '../../context/authContext.js';

const HomeUser = () => {
  const { token, loading, setLoading } = useContext(AuthContext);
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    apiUser
      .getLinksUser(token)
      .then((res) => {
        setShortenedUrls(res.data.shortenedUrls);
      })
      .catch((err) => alert(err.response.data));
  }, [loading]);

  const sendNewUrl = (e) => {
    e.preventDefault();

    const body = { url };

    apiUser
      .postShorten(body, token)
      .then((res) => {
        setShortenedUrls([...shortenedUrls, res.data]);
        console.log(res.data);
        alert('Adicionado com sucesso!');
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <MainContainerHomeUserStyled>
      <ContainerTitleHomeUserStyled>
        <IconLinkStyled>
          <TbLink />
        </IconLinkStyled>
        <TitleHomeUserStyled>Meus Links</TitleHomeUserStyled>
      </ContainerTitleHomeUserStyled>
      <FormSendLinkStyled onSubmit={sendNewUrl}>
        <InputUrlStyled
          type='text'
          name='url'
          placeholder='Links que cabem no bolso'
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <ButtonSendUrlStyled type='submit'>Encurtar Link</ButtonSendUrlStyled>
      </FormSendLinkStyled>

      <ContainerLinksUserStyled>
        {shortenedUrls.length === 0 ? (
          <InfoNewLinkStyled>Cadastre um novo link para aparecer aqui!</InfoNewLinkStyled>
        ) : (
          shortenedUrls.map((item) => (
            <LinkUser
              shortenedUrls={shortenedUrls}
              setShortenedUrls={setShortenedUrls}
              item={item}
              key={item.id}
            />
          ))
        )}
      </ContainerLinksUserStyled>
    </MainContainerHomeUserStyled>
  );
};

export default HomeUser;
