import { ImTrophy } from 'react-icons/im';
import {
  ContainerTitleStyled,
  MainContainerRankingStyled,
  TitleTrophyStyled,
  TitleLetterStyled,
  ContainerInfoRankingStyled,
  H1InfoRankingStyled,
  LinkCadastroStyled,
} from './RankingStyled';
import { useEffect, useState, useContext } from 'react';
import React from 'react';
import numeral from 'numeral';
import apiRanking from '../../services/apiRanking';
import { AuthContext } from '../../context/authContext';

const Ranking = () => {
  const [rankingInfo, setRankingInfo] = useState([]);
  const { authenticated } = useContext(AuthContext);

  useEffect(() => {
    apiRanking
      .getRanking()
      .then((res) => {
        setRankingInfo(res.data);
      })
      .catch((err) => {
        alert(err.data.response);
      });
  }, []);

  if (!rankingInfo) {
    return <>...Carregando!</>;
  }

  return (
    <MainContainerRankingStyled>
      <ContainerTitleStyled>
        <TitleTrophyStyled>
          <ImTrophy />
        </TitleTrophyStyled>
        <TitleLetterStyled>Ranking</TitleLetterStyled>
      </ContainerTitleStyled>
      <ContainerInfoRankingStyled>
        {rankingInfo.map((item, i) => (
          <H1InfoRankingStyled key={i}>
            {i + 1}. {item.name} - {numeral(item.linksCount).format('0,0').replace(/,/g, '.')} links
            - {numeral(item.visitCount).format('0,0').replace(/,/g, '.')} visualizações
          </H1InfoRankingStyled>
        ))}
      </ContainerInfoRankingStyled>
      <LinkCadastroStyled to='/cadastro'>
        {!authenticated && <>Crie sua conta para usar nosso serviço!</>}
      </LinkCadastroStyled>
    </MainContainerRankingStyled>
  );
};

export default Ranking;
