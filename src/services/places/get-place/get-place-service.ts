import { api } from "@/services/api";
import { ENDPOINTS } from "@/services/endpoints";

import { GetPlaceServiceRequest } from "./types/get-place-service-request";
import { GetPlaceServiceResponse } from "./types/get-place-service-response";

export async function getPlaceService(requestModel: GetPlaceServiceRequest) {
  const { path } = requestModel;

  const { data } = await api.get<GetPlaceServiceResponse>(
    ENDPOINTS.GET_PLACE(path.placeId),
  );

  return data;
}
