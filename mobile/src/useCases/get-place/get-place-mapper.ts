/* eslint-disable import/no-cycle */
import { Place } from "@/domains/place";
import { GetPlaceServiceRequest } from "@/services/places/get-place/types/get-place-service-request";
import { GetPlaceServiceResponse } from "@/services/places/get-place/types/get-place-service-response";

import { GetPlaceUseCaseProps } from ".";

export class GetPlaceMapper {
  static toRequestModel({
    placeId,
  }: GetPlaceUseCaseProps): GetPlaceServiceRequest {
    return <GetPlaceServiceRequest>{
      path: {
        placeId,
      },
    };
  }

  static toDomain(response: GetPlaceServiceResponse): Place {
    return <Place>{
      ...response,
    };
  }
}
