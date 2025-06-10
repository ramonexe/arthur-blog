import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export interface Link {
  id: number;
  codigo: string;
  urlOriginal: string;
  dataCriacao: string;
}

export const encurtarLink = async (url: string): Promise<string> => {
  const response = await api.post("/encurtar", url, {
    headers: { "Content-Type": "text/plain" },
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