import { create } from "zustand";
import { persist } from "zustand/middleware";

import { FavouriteReposState } from "../interfaces/favouriteReposState";

export const useFavouriteReposStore = create(
  persist<FavouriteReposState>(
    (set) => ({
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
    }),
    {
      name: "favourite-repos",
    }
  )
);
