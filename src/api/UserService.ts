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
  id: any;
  name: string;
  email: string;
  role: string;
}

export const userLogin = async (
  credentials: AuthRequestDTO
): Promise<UsuarioResponseDTO> => {
  const response = await api.post<UsuarioResponseDTO>(
    "api/auth/login",
    credentials
  );
  return response.data;
};