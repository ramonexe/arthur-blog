import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export interface Post {
  id: number;
  titulo: string;
  conteudo: string;
  youtubeUrl?: string;
  dataCriacao: string;
}

export const criarPost = async (
  post: Omit<Post, "id" | "dataCriacao">
): Promise<Post> => {
  const response = await api.post("/posts", post, {
    headers: { "Content-Type": "application/json" },
  });
  return response.data;
};

export const listarPosts = async (): Promise<Post[]> => {
  const response = await api.get("/posts");
  console.log("Posts recebidos:", response.data);
  return response.data;
};

export const getPost = async (id: number): Promise<Post> => {
  const response = await api.get(`/posts/${id}`);
  return response.data;
};
