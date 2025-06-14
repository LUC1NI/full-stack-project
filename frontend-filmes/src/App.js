import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FilmeList from './components/FilmeList';
import FilmeForm from './components/FilmeForm';
import GeneroForm from './components/GeneroForm';
import GenerosList from './components/GenerosList';

function App() {
  return (
    <Router>
      <div style={{ padding: '20px' }}>
        <nav style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
          <Link to="/" style={{ marginRight: '10px' }}>🎬 Filmes</Link>
          <Link to="/gerenciar-generos" style={{ marginRight: '10px' }}>🗂 Gerenciar Gêneros</Link>
          <Link to="/cadastrar-filme" style={{ marginRight: '10px' }}>➕ Cadastrar Filme</Link>
          <Link to="/cadastrar-genero">➕ Cadastrar Gênero</Link>
        </nav>
        <Routes>
          <Route path="/" element={<FilmeList />} />
          <Route path="/gerenciar-generos" element={<GenerosList />} />
          <Route path="/cadastrar-filme" element={<FilmeForm />} />
          <Route path="/cadastrar-genero" element={<GeneroForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
