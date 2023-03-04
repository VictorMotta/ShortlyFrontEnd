import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import {
  MainContainerLoginStyled,
  FormLoginStyled,
  InputLoginStyled,
  ButtonLoginStyled,
} from './LoginPageStyled';
import apiAuth from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { setCurrentPage, login } = useContext(AuthContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    setCurrentPage('login');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    apiAuth
      .signIn(form)
      .then((res) => {
        if (res.status === 200) {
          login(res.data);
          navigate('/');
        } else {
          alert('Erro ao tentar logar!');
        }
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };

  const editForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <MainContainerLoginStyled>
      <FormLoginStyled onSubmit={handleSubmit}>
        <InputLoginStyled
          type='email'
          name='email'
          required
          placeholder='E-mail'
          value={form.email}
          onChange={editForm}
        />
        <InputLoginStyled
          type='password'
          placeholder='Senha'
          name='password'
          required
          value={form.password}
          onChange={editForm}
        />
        <ButtonLoginStyled type='submit'>Criar Conta</ButtonLoginStyled>
      </FormLoginStyled>
    </MainContainerLoginStyled>
  );
};

export default LoginPage;
