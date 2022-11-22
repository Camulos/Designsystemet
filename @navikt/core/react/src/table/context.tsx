import { createContext } from "react";

export interface SortState {
  orderBy: string;
  direction: "ascending" | "descending";
}

export interface TableContextProps {
  size: "medium" | "small";
  onSortChange?: (sortKey: string) => void;
  sort?: SortState;
}

export const TableContext = createContext<TableContextProps | null>(null);
