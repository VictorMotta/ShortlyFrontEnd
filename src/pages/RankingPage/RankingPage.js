import { AuthContext } from '../../context/authContext';
import { useContext, useEffect, useState } from 'react';
import { MainContainerRankingStyled } from './RankingPageStyled';
import Ranking from '../../components/Ranking/Ranking';

const RankingPage = () => {
  const { setCurrentPage } = useContext(AuthContext);

  useEffect(() => {
    setCurrentPage('ranking');
  }, []);

  return (
    <MainContainerRankingStyled>
      <Ranking />
    </MainContainerRankingStyled>
  );
};

export default RankingPage;
