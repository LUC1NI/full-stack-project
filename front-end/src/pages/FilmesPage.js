
import React, { useState } from "react";
import FilmeList from "../components/Filmes/FilmeList";
import FilmeForm from "../components/Filmes/FilmeForm";

function FilmesPage() {
  const [filmeEditado, setFilmeEditado] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setFilmeEditado(null);
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Gerenciar Filmes</h1>
      <FilmeForm filmeEditado={filmeEditado} onSave={handleSave} />
      <FilmeList key={refresh} onEdit={setFilmeEditado} />
    </div>
  );
}

export default FilmesPage;