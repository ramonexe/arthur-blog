import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export interface Link {
  cliques: number;
  id: number;
  codigo: string;
  urlOriginal: string;
  titulo?: string;
  dataCriacao: string;
}

export const encurtarLink = async (url: string, codigo: string, titulo?: string): Promise<string> => {
  const payload = { urlOriginal: url, codigo, titulo };
  const response = await api.post("/encurtar", payload, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const excluirLink = async (codigo: string): Promise<void> => {
  await api.delete(`/links/${codigo}`);
};

export const listarLinks = async (): Promise<Link[]> => {
  const response = await api.get("/links");
  return response.data;
};