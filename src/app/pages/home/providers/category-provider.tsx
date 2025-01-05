import { createContext, useState, ReactNode, useMemo, useContext } from "react";

import { Category } from "@/domains/category";

interface CategoriesContextProps {
  selectedCategory: Category | undefined;
  setSelectedCategory: (category: Category | undefined) => void;
}

const CategoriesContext = createContext<CategoriesContextProps | undefined>(
  undefined,
);

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);

  const values = useMemo(
    () => ({
      selectedCategory,
      setSelectedCategory,
    }),
    [selectedCategory],
  );

  return (
    <CategoriesContext.Provider value={values}>
      {children}
    </CategoriesContext.Provider>
  );
}

export const useCategoriesContext = (): CategoriesContextProps => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("The provider usage is missing");
  }

  return context;
};
