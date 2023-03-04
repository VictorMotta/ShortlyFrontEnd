import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import {
  MainContainerCadastroStyled,
  FormCadastroStyled,
  InputCadastroStyled,
  ButtonCadastroStyled,
} from './CadastrarStyled';
import apiAuth from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

const CadastrarPage = () => {
  const navigate = useNavigate();
  const { setCurrentPage } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    setCurrentPage('cadastrar');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    apiAuth
      .signUp(form)
      .then((res) => {
        if (res.status === 201) {
          alert('Cadastro realizado com sucesso!');
          navigate('/login');
        } else {
          alert('Erro ao cadastrar!');
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
    <MainContainerCadastroStyled>
      <FormCadastroStyled onSubmit={handleSubmit}>
        <InputCadastroStyled
          type='text'
          name='name'
          required
          placeholder='Nome'
          value={form.name}
          onChange={editForm}
        />
        <InputCadastroStyled
          type='email'
          name='email'
          required
          placeholder='E-mail'
          value={form.email}
          onChange={editForm}
        />
        <InputCadastroStyled
          type='password'
          placeholder='Senha'
          name='password'
          required
          value={form.password}
          onChange={editForm}
        />
        <InputCadastroStyled
          type='password'
          name='confirmPassword'
          required
          placeholder='Confirme senha'
          value={form.confirmPassword}
          onChange={editForm}
        />
        <ButtonCadastroStyled type='submit'>Criar Conta</ButtonCadastroStyled>
      </FormCadastroStyled>
    </MainContainerCadastroStyled>
  );
};

export default CadastrarPage;
