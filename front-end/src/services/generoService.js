import API_BASE from "./api";

export const getGeneros = async () => {
  const res = await fetch(${API_BASE}/generos);
  return await res.json();
};

export const getGenero = async (id) => {
  const res = await fetch(${API_BASE}/generos/${id});
  return await res.json();
};

export const createGenero = async (genero) => {
  await fetch(${API_BASE}/generos, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(genero)
  });
};

export const updateGenero = async (id, genero) => {
  await fetch(${API_BASE}/generos/${id}, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(genero)
  });
};

export const deleteGenero = async (id) => {
  await fetch(${API_BASE}/generos/${id}, { method: "DELETE" });
};