import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CadastrarPage from './pages/CadastrarPage/CadastrarPage.js';
import TopMenu from './components/TopMenu/TopMenu.js';
import { AuthProvider } from './context/authContext.js';
import LoginPage from './pages/LoginPage/LoginPage.js';
import HomePage from './pages/HomePage/HomePage.js';
import RankingPage from './pages/RankingPage/RankingPage.js';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TopMenu />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/cadastro' element={<CadastrarPage />} />
          <Route path='/ranking' element={<RankingPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
