import { Category } from "@/domains/category";
import { GetCategoriesServiceResponse } from "@/services/categories/get-categories/types/get-categories-service-response";

export class GetCategoriesMapper {
  static toDomain(response: GetCategoriesServiceResponse[]): Category[] {
    return response.map(
      (category) =>
        <Category>{
          id: category.id,
          name: category.name,
        },
    );
  }
}
