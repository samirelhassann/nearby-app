import { RequestModel } from "@/services/types/request-model";

interface PathParams {
  placeId: string;
}

export type GetPlaceServiceRequest = RequestModel<{
  path: PathParams;
}>;
