import { RequestModel } from "@/services/types/request-model";

interface PathParams {
  categoryId: string;
}

export type GetPlacesServiceRequest = RequestModel<{
  path: PathParams;
}>;
