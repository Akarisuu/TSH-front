import { Dispatch, SetStateAction } from "react";

export interface searchQueryType {
  page: number;
  search: string;
  promo: boolean;
  active: boolean;
}

export interface productPopup {
  name: string;
  description: string;
  image: string;
}

export type setSearchQuery = Dispatch<SetStateAction<searchQueryType>>;
export type setProductPopup = Dispatch<SetStateAction<productPopup | null>>;
