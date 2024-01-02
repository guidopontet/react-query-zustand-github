import Card from './components/Card';
import useFetchRepositories from './hooks/useRepos';
import { useFavouriteReposStore } from './store/favouriteRepos';

function App() {
  const { data, isLoading } = useFetchRepositories();
  const { favouriteReposIds } = useFavouriteReposStore();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Repositories</h1>
      { data?.map(repository => (
        <Card
          key={repository.id}
          repository={repository}
          isFavourite={favouriteReposIds.includes(repository.id)}
        />
      )) }
    </div>
  )
}

export default App