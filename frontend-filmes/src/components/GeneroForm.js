import React, { useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom';

function GeneroForm() {
  const [nome, setNome] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/generos', { nome: nome })
      .then(() => {
        alert('Gênero cadastrado com sucesso!');
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao cadastrar gênero:', error);
        alert('Erro ao cadastrar gênero!');
      });
  };

  return (
    <div>
      <h2>➕ Cadastrar Gênero</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do Gênero"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default GeneroForm;