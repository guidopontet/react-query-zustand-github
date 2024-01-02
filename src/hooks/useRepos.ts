import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

import api from "../api/github";
import { Repository } from "../interfaces/repository";

async function fetchRepos(ctx: QueryFunctionContext) {
  const githubUser = ctx.queryKey[1];
  const { data } = await api.get<Repository[]>(`/users/${githubUser}/repos`);

  return data;
}

function useFetchRepositories(githubUser: string) {
  return useQuery({ queryKey: ['repos', githubUser], queryFn: fetchRepos });
}

export default useFetchRepositories;