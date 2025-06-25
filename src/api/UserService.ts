import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export interface AuthRequestDTO {
  email: string;
  senha: string;
}

export interface UsuarioResponseDTO {
  id: number;
  name: string;
  role: string;
}

export const login = async (
  credentials: AuthRequestDTO
): Promise<UsuarioResponseDTO> => {
  const response = await api.post<UsuarioResponseDTO>(
    "api/auth/login",
    credentials
  );
  return response.data;
};