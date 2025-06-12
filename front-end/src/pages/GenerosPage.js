import React, { useState } from "react";
import GeneroList from "../components/Generos/GeneroList";
import GeneroForm from "../components/Generos/GeneroForm";

function GenerosPage() {
  const [generoEditado, setGeneroEditado] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const handleSave = () => {
    setGeneroEditado(null);
    setRefresh(!refresh); // força reload na lista
  };

  return (
    <div>
      <h1>Gerenciar Gêneros</h1>
      <GeneroForm generoEditado={generoEditado} onSave={handleSave} />
      <GeneroList key={refresh} onEdit={setGeneroEditado} />
    </div>
  );
}

export default GenerosPage;