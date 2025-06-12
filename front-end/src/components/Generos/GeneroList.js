import React, { useEffect, useState } from "react";
import { getGeneros, deleteGenero } from "../../services/generoService";

function GeneroList({ onEdit }) {
  const [generos, setGeneros] = useState([]);

  const loadGeneros = async () => {
    const data = await getGeneros();
    setGeneros(data);
  };

  const handleDelete = async (id) => {
    await deleteGenero(id);
    loadGeneros();
  };

  useEffect(() => {
    loadGeneros();
  }, []);

  return (
    <div>
      <h2>Gêneros</h2>
      <ul>
        {generos.map(g => (
          <li key={g.id}>
            {g.nome} 
            <button onClick={() => onEdit(g)}>Editar</button>
            <button onClick={() => handleDelete(g.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GeneroList;
