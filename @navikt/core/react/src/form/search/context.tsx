import { createContext } from "react";

export interface SearchContextProps {
  disabled?: boolean;
  size: "medium" | "small";
  variant: "primary" | "secondary" | "simple";
}

export const SearchContext = createContext<SearchContextProps | null>(null);
