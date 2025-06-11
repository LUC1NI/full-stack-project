import { useEffect, useState } from 'react';
import api from '../api/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    api.get('/filmes').then(res => setFilmes(res.data));
  }, []);
  return (
    <>
      <h2>Filmes</h2>
      <ul>
        {filmes.map(f => (
          <li key={f.id}>
            {f.titulo} ({f.ano}) - {f.generoNome}
            <Link to={`/editar/${f.id}`} className="btn-edit">Editar</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
