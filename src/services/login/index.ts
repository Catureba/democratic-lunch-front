import api from "../api";

export interface LoginInterface {
  email: string;
  password: string;
}

export const login = async (cardBody: LoginInterface) => {
  try {
    return api.post("/login", cardBody);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
