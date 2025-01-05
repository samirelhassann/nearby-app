import { Category } from "@/domains/category";

export interface FormattedCategory extends Category {
  selected: boolean;
}
