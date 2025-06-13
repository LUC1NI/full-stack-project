import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import './FilmesList.css';

export default function FilmesList() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    carregarFilmes();
  }, []);

  const carregarFilmes = () => {
    api.get('/filmes')
      .then(response => setFilmes(response.data))
      .catch(error => console.error('Erro ao carregar filmes:', error));
  };

  const removerFilme = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este filme?')) {
      api.delete(`/filmes/${id}`)
        .then(() => carregarFilmes())
        .catch(error => console.error('Erro ao excluir filme:', error));
    }
  };

  return (
    <div className="container">
      <h1>🎬 Lista de Filmes</h1>
      <div className="actions">
        <Link to="/cadastrar-filme" className="btn">Cadastrar Filme</Link>
        <Link to="/cadastrar-genero" className="btn">Cadastrar Gênero</Link>
      </div>

      {filmes.length === 0 ? (
        <p>Nenhum filme cadastrado ainda.</p>
      ) : (
        <div className="filmes-list">
          {filmes.map(filme => (
            <div key={filme.id} className="filme-card">
              <h2>{filme.titulo}</h2>
              <p><strong>Ano:</strong> {filme.ano}</p>
              <p><strong>Gênero:</strong> {filme.generoNome}</p>
              <button className="btn btn-danger" onClick={() => removerFilme(filme.id)}>Remover</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}