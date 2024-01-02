export type FavouriteReposState = {
  favouriteReposIds: number[];
  addFavouriteRepo: (id: number) => void;
  removeFavouriteRepo: (id: number) => void;
};
