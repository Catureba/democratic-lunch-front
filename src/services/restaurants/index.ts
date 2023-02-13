import api from "../api";

export interface RestaurantInterface {
  name: string;
  site: string;
  description: string;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export interface RestaurantResponseInterface {
  id: string;
  name: string;
  site: string;
  description: string;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  uf: string;
}

export const postRestaurants = async (cardBody: RestaurantInterface) => {
  try {
    return api.post("/restaurant/post", cardBody);
  } catch {
    throw new Error("Serviço não disponível");
  }
};

export const putRestaurants = async (cardBody: RestaurantResponseInterface) => {
  try {
    return api.put("/restaurant/put", cardBody);
  } catch {
    throw new Error("Serviço não disponível");
  }
};
