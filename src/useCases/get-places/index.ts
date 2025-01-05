/* eslint-disable import/no-cycle */
import { Place } from "@/domains/place";
import { getPlacesService } from "@/services/places/get-places/get-places-service";

import { GetPlacesMapper } from "./get-places-mapper";

export interface GetPlacesUseCaseProps {
  categoryId: string;
}

export default async function getPlacesUseCase(
  props: GetPlacesUseCaseProps,
): Promise<Place[]> {
  const categories = await getPlacesService(
    GetPlacesMapper.toRequestModel(props),
  );

  return GetPlacesMapper.toDomain(categories);
}
