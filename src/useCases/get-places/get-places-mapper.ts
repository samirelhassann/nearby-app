/* eslint-disable import/no-cycle */
import { Place } from "@/domains/place";
import { GetPlaceServiceResponse } from "@/services/places/get-place/types/get-place-service-response";
import { GetPlacesServiceRequest } from "@/services/places/get-places/types/get-places-service-request";

import { GetPlacesUseCaseProps } from ".";

export class GetPlacesMapper {
  static toRequestModel({
    categoryId,
  }: GetPlacesUseCaseProps): GetPlacesServiceRequest {
    return <GetPlacesServiceRequest>{
      path: {
        categoryId,
      },
    };
  }

  static toDomain(response: GetPlaceServiceResponse[]): Place[] {
    return response.map(
      (place) =>
        <Place>{
          ...place,
        },
    );
  }
}
