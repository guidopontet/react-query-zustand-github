import { useQuery } from "@tanstack/react-query";

import api from "../api/github";
import { Repository } from "../interfaces/repository";

async function fetchRepos() {
  const { data } = await api.get<Repository[]>('/users/guidopontet/repos');

  return data;
}

function useFetchRepositories() {
  return useQuery({ queryKey: ['repos'], queryFn: fetchRepos });
}

export default useFetchRepositories;