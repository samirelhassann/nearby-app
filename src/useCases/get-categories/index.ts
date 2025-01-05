import { Category } from "@/domains/category";
import { getCategoriesService } from "@/services/categories/get-categories/get-categories-service";

import { GetCategoriesMapper } from "./get-categories-mapper";

export default async function getCategoriesUseCase(): Promise<Category[]> {
  const categories = await getCategoriesService();

  return GetCategoriesMapper.toDomain(categories);
}
