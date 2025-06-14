import React, { useState, useEffect } from 'react';
import api from '../services/api';

export default function FilmeForm() {
  const [titulo, setTitulo] = useState('');
  const [ano, setAno] = useState('');
  const [generoId, setGeneroId] = useState('');
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    api.get('/generos')
      .then(res => setGeneros(res.data))
      .catch(err => console.error('Erro ao buscar gêneros:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    api.post('/filmes', {
      titulo: titulo,
      ano: Number(ano),
      generoId: Number(generoId),
    })
    .then(() => {
      alert('Filme cadastrado com sucesso!');
      setTitulo('');
      setAno('');
      setGeneroId('');
    })
    .catch(error => {
      console.error('Erro ao cadastrar filme:', error.response ? error.response.data : error.message);
      alert('Erro ao cadastrar filme! Veja o console.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={titulo}
        onChange={e => setTitulo(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Ano"
        value={ano}
        onChange={e => setAno(e.target.value)}
        required
      />
      <select value={generoId} onChange={e => setGeneroId(e.target.value)} required>
        <option value="">Selecione um gênero</option>
        {generos.map(g => (
          <option key={g.id} value={g.id}>{g.nome}</option>
        ))}
      </select>
      <button type="submit">Cadastrar Filme</button>
    </form>
  );
}