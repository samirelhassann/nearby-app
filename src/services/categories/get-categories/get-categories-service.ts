import { api } from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

import { GetCategoriesServiceResponse } from "./types/get-categories-service-response";

export async function getCategoriesService() {
  const { data } = await api.get<GetCategoriesServiceResponse[]>(
    ENDPOINTS.GET_CATEGORIES(),
  );

  return data;
}
