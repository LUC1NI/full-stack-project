import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { MdDelete } from 'react-icons/md';

const GenerosList = () => {
  const [generos, setGeneros] = useState([]);

  useEffect(() => {
    carregarGeneros();
  }, []);

  const carregarGeneros = async () => {
    try {
      const resposta = await api.get('/generos');
      setGeneros(resposta.data);
    } catch (erro) {
      console.error('Erro ao carregar gêneros:', erro);
    }
  };

  const excluirGenero = async (id) => {
    const confirmar = window.confirm('Tem certeza que deseja excluir este gênero?');
    if (!confirmar) return;

    try {
      await api.delete(`/generos/${id}`);
      setGeneros(generos.filter((g) => g.id !== id));
    } catch (erro) {
      console.error('Erro ao excluir gênero:', erro);
      alert('Erro ao excluir gênero.');
    }
  };

  return (
    <div className="container">
      <h2>Gerenciar Gêneros</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {generos.map((genero) => (
          <li key={genero.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', padding: '10px', backgroundColor: '#f1f1f1', borderRadius: '8px' }}>
            <span>{genero.nome}</span>
            <button onClick={() => excluirGenero(genero.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'red' }} title="Excluir gênero">
              <MdDelete size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenerosList;