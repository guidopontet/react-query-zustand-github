import { Repository } from '../interfaces/repository';
import { useFavouriteReposStore } from '../store/favouriteRepos';

type Props = {
  repository: Repository,
  isFavourite: boolean,
}

function Card({ repository, isFavourite }: Props) {
  const addFavouriteRepo = useFavouriteReposStore((state) => state.addFavouriteRepo);
  const removeFavouriteRepo = useFavouriteReposStore((state) => state.removeFavouriteRepo);

  const handleFavouriteClick = () => {
    return isFavourite
      ? removeFavouriteRepo(repository.id)
      : addFavouriteRepo(repository.id);
  }

  return (
    <div>
      <h2>{ repository.name }</h2>
      <p>{ repository.description }</p>
      <button onClick={handleFavouriteClick}>
        { isFavourite ? 'Remove from favourites' : 'Add to favourites' }
      </button>
    </div>
  )
}

export default Card