import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      const recoveredUserJson = JSON.parse(recoveredUser);
      setToken(recoveredUserJson.token);
      delete recoveredUserJson.token;
      setUser(recoveredUserJson);
    }

    setLoading(false);
  }, []);

  const login = (data) => {
    const loggedUser = data;

    localStorage.setItem("user", JSON.stringify(loggedUser));

    delete loggedUser.token;
    setUser(loggedUser);
    setToken(data.token);

    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setToken(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, token, login, logout, loading }}>
      {children};
    </AuthContext.Provider>
  );
};
