import { BrowserRouter, Route, Routes } from "react-router-dom";
import CadastrarPage from "./pages/CadastrarPage/CadastrarPage.js";
import TopMenu from "./components/TopMenu/TopMenu.js";
import { AuthProvider } from "./context/authContext.js";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TopMenu />
        <Routes>
          <Route path='/' element={<CadastrarPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
