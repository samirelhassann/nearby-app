import { api } from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

import { GetPlacesServiceRequest } from "./types/get-places-service-request";
import { GetPlacesServiceResponse } from "./types/get-places-service-response";

export async function getPlacesService(requestModel: GetPlacesServiceRequest) {
  const { path } = requestModel;

  const { data } = await api.get<GetPlacesServiceResponse[]>(
    ENDPOINTS.GET_PLACES(path.categoryId),
  );

  return data;
}
