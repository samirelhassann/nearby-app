/* eslint-disable import/no-cycle */
import { Place } from "@/domains/place";
import { getPlaceService } from "@/services/places/get-place/get-place-service";

import { GetPlaceMapper } from "./get-place-mapper";

export interface GetPlaceUseCaseProps {
  placeId: string;
}

export default async function getPlaceUseCase(
  props: GetPlaceUseCaseProps,
): Promise<Place> {
  const place = await getPlaceService(GetPlaceMapper.toRequestModel(props));

  return GetPlaceMapper.toDomain(place);
}
