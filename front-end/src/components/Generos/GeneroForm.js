import React, { useState, useEffect } from "react";
import { createGenero, updateGenero } from "../../services/generoService";

function GeneroForm({ generoEditado, onSave }) {
  const [nome, setNome] = useState("");

  useEffect(() => {
    if (generoEditado) {
      setNome(generoEditado.nome);
    }
  }, [generoEditado]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoGenero = { nome };

    if (generoEditado) {
      await updateGenero(generoEditado.id, novoGenero);
    } else {
      await createGenero(novoGenero);
    }

    setNome("");
    onSave(); // atualiza a lista
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do gênero"
        required
      />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default GeneroForm;
