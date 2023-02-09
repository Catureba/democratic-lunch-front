import api from "../api";

export interface UserInterface {
  name: string;
  email: string;
  password: string;
}

export const postUser = async (cardBody: UserInterface) => {
  try {
    return api.post("/users", cardBody);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
