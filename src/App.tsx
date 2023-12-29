import useFetchRepositories from './hooks/useRepos';

function App() {
  const { data, isLoading } = useFetchRepositories();

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Repositories</h1>
      <ul>
        {data?.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App