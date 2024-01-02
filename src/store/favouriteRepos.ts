import { create } from "zustand";

import { FavouriteReposState } from "../interfaces/favouriteReposState";

export const useFavouriteReposStore = create<FavouriteReposState>((set) => ({
  favouriteReposIds: [],
  addFavouriteRepo: (id: number) => {
    set((state) => ({
      favouriteReposIds: [...state.favouriteReposIds, id],
    }));
  },
  removeFavouriteRepo: (id: number) => {
    set((state) => ({
      favouriteReposIds: state.favouriteReposIds.filter((repoId) => repoId !== id),
    }));
  },
}));
