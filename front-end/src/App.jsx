import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import GenerosList from './components/Generos/GenerosList';
import FilmesList from './components/Filmes/FilmesList';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Navigate to="/generos" />} />
          <Route path="/generos" element={<GenerosList />} />
          <Route path="/filmes" element={<FilmesList />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
