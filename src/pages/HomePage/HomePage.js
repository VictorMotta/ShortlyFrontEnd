import { AuthContext } from '../../context/authContext';
import { useContext, useEffect, useState } from 'react';
import { MainContainerHomeStyled } from './HomePageStyled';
import Ranking from '../../components/Ranking/Ranking';
import HomeUser from '../../components/HomeUser/HomeUser';

const HomePage = () => {
  const { setCurrentPage, authenticated } = useContext(AuthContext);

  useEffect(() => {
    setCurrentPage('home');
  }, []);

  return (
    <MainContainerHomeStyled>{!authenticated ? <Ranking /> : <HomeUser />}</MainContainerHomeStyled>
  );
};

export default HomePage;
