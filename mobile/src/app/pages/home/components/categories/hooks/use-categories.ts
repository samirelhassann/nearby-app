import { useEffect, useMemo } from "react";

import { Category } from "@/domains/category";
import getCategoriesUseCase from "@/useCases/get-categories";
import { useSuspenseQuery } from "@tanstack/react-query";

import { useCategoriesContext } from "../../../providers/category-provider";
import { FormattedCategory } from "../types/formatted-category";

interface UseCategoriesOutputProps {
  formattedCategories: FormattedCategory[];
  onClickCategory: (category: Category) => void;
}

export function useCategories(): UseCategoriesOutputProps {
  const { selectedCategory, setSelectedCategory } = useCategoriesContext();

  const { data } = useSuspenseQuery({
    queryKey: ["categories"],
    queryFn: getCategoriesUseCase,
  });

  const categories = useMemo(() => data ?? [], [data]);

  const formattedCategories: FormattedCategory[] = useMemo(() => {
    return categories.map((cat) => {
      return {
        ...cat,
        selected: selectedCategory?.name === cat.name,
      };
    });
  }, [categories, selectedCategory]);

  const onClickCategory = (category: Category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    if (categories.length > 0 && !selectedCategory) {
      setSelectedCategory(categories[0]);
    }
  }, [categories, selectedCategory, setSelectedCategory]);

  return {
    formattedCategories,
    onClickCategory,
  };
}
